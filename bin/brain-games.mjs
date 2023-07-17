import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Welcome to the Brain Games!');
rl.question('May I have your name? ', (name) => {
  console.log(`Hello, ${name}!`);
  rl.close();
});
