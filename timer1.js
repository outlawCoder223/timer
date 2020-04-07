const timer = () => {
  const alarms = process.argv.slice(2).filter((el) => (el >= 0 && +el));
  console.log(alarms);
  for (const alarm of alarms) {
    setTimeout(() => {
      process.stdout.write('BEEEEEEEEP!\n');
    }, alarm * 1000);
  }
};

timer();