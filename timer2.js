const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Set alarm for how long? ', (time) => {
  console.log(`Setting a timer for ${time} seconds...`);
  
  const alarm = setTimeout(() => {
    console.log('\nBEEEEEEEEP!\n');
    rl.close();
  }, time * 1000);
  

  rl.on('close', () => {
    console.log('Thanks for using me, ciao!');
    clearTimeout(alarm);
    rl.close();
  });

});
