/* eslint-disable linebreak-style */
import readlineSync from 'readline-sync';
import { name } from '../src/cli.js';
// eslint-disable-next-line linebreak-style

function IsEven(number) {
  if (number % 2 === 0) {
    return true;
  } return undefined;
}

console.log('Answer "yes" if the number is even, otherwise answer "no".');
let counter = 0;
while (counter < 3) {
  const number = Math.floor(Math.random() * 101); // returns a random integer from 0 to 100
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  if (IsEven(number) === true && answer === 'yes') {
    console.log('Correct!');
    counter += 1;
  } else if (IsEven(number) === undefined && answer === 'no') {
    console.log('Correct!');
    counter += 1;
  } else if (IsEven(number) === undefined && answer === 'yes') {
    console.log(`"yes" is wrong answer ;(. Correct answer was "no". \nLet's try again, ${name}!`);
    break;
  } else if (IsEven(number) === true && answer === 'no') {
    console.log(`"no" is wrong answer ;(. Correct answer was "yes". \nLet's try again, ${name}!`);
    break;
  }
} if (counter === 3) { console.log(`Congratulations, ${name}!`); }
