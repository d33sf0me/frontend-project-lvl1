/* eslint-disable linebreak-style */
/* eslint-disable no-eval */
import readlineSync from 'readline-sync';
import { name } from './cli.js';
// eslint-disable-next-line linebreak-style

export default function whatSign() {
  const signs = ['+', '-', '*'];
  const i = Math.floor(Math.random() * signs.length);
  return signs[i];
}

console.log('What is the result of the expression?');
let counter = 0;
while (counter < 3) {
  const number1 = Math.floor(Math.random() * 101); // returns a random integer from 0 to 100
  const number2 = Math.floor(Math.random() * 101); // returns a random integer from 0 to 100
  const sign = whatSign();
  const expression = number1 + sign + number2;
  console.log(`Question: ${expression} `);
  const answer = readlineSync.question('Your answer: ');
  // eslint-disable-next-line eqeqeq
  if (answer == eval(expression)) {
    console.log('Correct!');
    counter += 1;
  } else { console.log(`'${answer}' is wrong answer ;(. Correct answer was '${eval(expression)}'.\nLet's try again, ${name}!`); break; }
} if (counter === 3) { console.log(`Congratulations, ${name}!`); }
