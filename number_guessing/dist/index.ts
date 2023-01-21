#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { createSpinner } from 'nanospinner';
import { generateRandomNumber_lessThan } from "./modules/generateRandom.js";
import { guessAgain } from "./modules/guessAgain.js";
import { takeInput } from "./modules/takeInput.js";
import sleep from "./modules/sleep.js";


const welcome = async () => {
    const animation = chalkAnimation.rainbow("Welcome to our Guessing Game");
    await sleep();
    animation.stop();
}

const guessingGame = async () => {
    do {
        let lifes = 3;
        let guessed = false;
        const randomNumber: number = generateRandomNumber_lessThan(10);
    
        do {
            console.log(chalk.bgCyanBright.black("Lifes left: ", lifes--));
            const userInput: number = Number(await takeInput());
            const spinner = createSpinner(chalk.underline("Evaluating Result...")).start();
            await sleep(500);
            spinner.stop();

            if(userInput === randomNumber){
                console.log(chalk.bgGreenBright.black("Congradulation! You won the game"));
                guessed = true;
                break;
            } 
            else if (randomNumber > userInput) {
                console.log(chalk.yellow("Incorrect Guess"));
                if(lifes !== 0){
                    console.log(chalk.yellowBright("Your number is smaller than computer generated number."));
                }
            } 
            else {
                console.log(chalk.yellow("Incorrect Guess"));
                if(lifes !== 0){
                    console.log(chalk.yellowBright("Your number is greater than computer generated number."));
                }
            }
    
        } while(lifes > 0);
    
        if(guessed === false){
            console.log(chalk.bgRed("Game Over!"));
        }
        var again: boolean = await guessAgain();
    } while (again);
}


await welcome();
await guessingGame();