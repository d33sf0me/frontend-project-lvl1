import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
export const name = readlineSync.question('What is your name? ');
console.log(`Hello, ${name}`);