import inquirer from 'inquirer';
export const guessAgain = async () => {
    const userChoice = await inquirer.prompt({
        type: "confirm",
        name: "user_choice",
        message: "Will you guess again? "
    });
    return userChoice.user_choice;
};
