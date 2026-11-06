const assert=require('node:assert/strict');
const crypto=require('node:crypto');
const fs=require('node:fs');
const vm=require('node:vm');
const context={TextEncoder};
vm.createContext(context);
vm.runInContext(fs.readFileSync('dist/md5.js','utf8'),context);
const vectors={
  '':'d41d8cd98f00b204e9800998ecf8427e',
  'a':'0cc175b9c0f1b6a831c399e269772661',
  'abc':'900150983cd24fb0d6963f7d28e17f72',
  'message digest':'f96b697d7cb7938d525a2f31aaf161d0',
  'ABRIR':'79a81a55520ad1640f63430608c5198d'
};
for(const [input,expected] of Object.entries(vectors))assert.equal(context.md5(input),expected);
for(const input of ['abrir','ABRIR ','César · Vigo 🔐',...[55,56,63,64,65,119,120,128].map(n=>'x'.repeat(n))]){
  assert.equal(context.md5(input),crypto.createHash('md5').update(input,'utf8').digest('hex'));
}
assert.notEqual(context.md5('abrir'),context.md5('ABRIR'));
console.log('MD5: RFC vectors, uppercase clue, UTF-8 and padding boundaries passed.');
