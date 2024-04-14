#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from 'chalk';

let gameLevel = 6;

console.log(chalk.blue('/=======================================/'));
console.log(chalk.blue('/ 🎲 Guess a number and roll the Dice 🎲 /'));
console.log(chalk.blue('/=======================================/\n'));
const userGuessedNumber = await inquirer.prompt([
    {
        type: 'list',
        name: 'gameLevel',
        message: 'Select Difficulty Level:',
        choices: ['Easy', 'Medium', 'Hard'],
        filter(val) {
            return val.toLowerCase();
        },
    },
    {
        type: 'number',
        name: 'userInput',
        message: 'Enter your Guessed number: ',
        validate(value: number) {
            if (!value || isNaN(value)) {
                return 'Please enter a valid number.';
            }
            return true;
        },
    }
]);

gameLevel = (userGuessedNumber.gameLevel == 'medium')? 100 :  (userGuessedNumber.gameLevel == 'hard')? 1000 : 6;
// Generate a random number bewteen 1 and 6
const randomNumber = Math.floor(Math.random() * gameLevel) + 1;

if (userGuessedNumber.userInput == randomNumber) {
    console.log(chalk.green('Congratulation!!Your guess is correct... 🎉👏🎊'));
} else {
    console.log(chalk.red('\nYour guess is incorrect 🙁, the random number is: ' + randomNumber));
}