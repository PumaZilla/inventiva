// Educational MD5 implementation (RFC 1321). Never used for real authentication.
function md5(text){
  const bytes=new TextEncoder().encode(text),length=Math.ceil((bytes.length+9)/64)*64;
  const data=new Uint8Array(length);data.set(bytes);data[bytes.length]=128;
  const view=new DataView(data.buffer),bitLength=bytes.length*8;
  view.setUint32(length-8,bitLength>>>0,true);view.setUint32(length-4,Math.floor(bitLength/4294967296),true);
  const shifts=[7,12,17,22,5,9,14,20,4,11,16,23,6,10,15,21];
  let state=[0x67452301,0xefcdab89,0x98badcfe,0x10325476];
  for(let block=0;block<length;block+=64){
    let [a,b,c,d]=state;
    for(let i=0;i<64;i++){
      let f,g;
      if(i<16){f=(b&c)|(~b&d);g=i;}
      else if(i<32){f=(d&b)|(~d&c);g=(5*i+1)%16;}
      else if(i<48){f=b^c^d;g=(3*i+5)%16;}
      else{f=c^(b|~d);g=(7*i)%16;}
      const shift=shifts[4*Math.floor(i/16)+i%4];
      const sum=(a+f+Math.floor(Math.abs(Math.sin(i+1))*4294967296)+view.getUint32(block+g*4,true))>>>0;
      const next=(b+((sum<<shift)|(sum>>>(32-shift))))>>>0;
      a=d;d=c;c=b;b=next;
    }
    state=state.map((value,i)=>(value+[a,b,c,d][i])>>>0);
  }
  return state.map(word=>[0,8,16,24].map(shift=>((word>>>shift)&255).toString(16).padStart(2,'0')).join('')).join('');
}
