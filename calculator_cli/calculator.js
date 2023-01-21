import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import inquirer from 'inquirer';
import { createSpinner } from 'nanospinner';
const sleep = (ms = 2000) => new Promise((res) => setTimeout(res, ms));
// const showMessageInFiglet = (message: string): Promise<void> => {
//     figlet(message, (error, data) => {
//         console.log(gradient.pastel.multiline(data));
//     })
// }
const welcome = async () => {
    let animatedMessage = chalkAnimation.rainbow("Welcome to my Calculator");
    await sleep(2000);
    animatedMessage.stop();
};
// take input for calculator from user
const takeInput = async () => {
    const userInput = await inquirer.prompt([
        {
            name: "firstOperand",
            message: "Plz Enter first number: ",
            type: "input",
            validate: function (input) {
                if (isNaN(input) || input === '') {
                    return "Plz Enter a valid number";
                }
                else {
                    return true;
                }
            },
        },
        {
            type: "list",
            name: "operator",
            message: "Select an operator: ",
            choices: ["+", "-", "*", "/", "%", "**"]
        },
        {
            type: "input",
            name: "secondOperand",
            message: "Plz Enter second operand",
            validate: function (input) {
                if (isNaN(input) || input === '') {
                    return "Plz Enter a valid number";
                }
                return true;
            }
        }
    ]);
    return userInput;
};
// show result by checking the operator
const showResult = async (userInput) => {
    const _firstOperand = Number(userInput.firstOperand);
    const _operator = userInput.operator;
    const _secondOperand = Number(userInput.secondOperand);
    const spinner = createSpinner("Evaluating Resutl...").start();
    await sleep(1000);
    spinner.stop();
    switch (_operator) {
        case "+":
            console.log(`${chalk.bgBlue.black("Result")}: ${_firstOperand + _secondOperand}`);
            break;
        case "-":
            console.log(`${chalk.bgBlue.black("Result")}: ${_firstOperand - _secondOperand}`);
            break;
        case "*":
            console.log(`${chalk.bgBlue.black("Result")}: ${_firstOperand * _secondOperand}`);
            break;
        case "/":
            console.log(`${chalk.bgBlue.black("Result")}: ${_firstOperand / _secondOperand}`);
            break;
        case "%":
            console.log(`${chalk.bgBlue.black("Result")}: ${_firstOperand % _secondOperand}`);
            break;
        case "**":
            console.log(`${chalk.bgBlue.black("Result")}: ${_firstOperand ** _secondOperand}`);
            break;
        default:
            break;
    }
};
// await showMessageInFiglet("Calculator");
await welcome();
const input = await takeInput();
showResult(input);
