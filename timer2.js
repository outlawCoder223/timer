const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const timer = () => {
  const alarms = process.argv.slice(2).filter((el) => (el >= 0 && +el));
  console.log(alarms);
  for (const alarm of alarms) {
    setTimeout(() => {
      process.stdout.write('BEEEEEEEEP!\n');
    }, alarm * 1000);
  }
};

rl.question('Set alarm for how long? ', (time) => {
  console.log(time);
  rl.close();
});