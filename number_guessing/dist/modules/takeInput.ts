import inquirer from "inquirer";

let lifes = 3;


export const takeInput = async (): Promise<number> => {
    
    const userInput = await inquirer.prompt({
        type: "input",
        name: "user_input",
        message: "Plz enter a number less than 10: ",
        validate(input){
            if(isNaN(input)){
                return "Plz Enter a valid number";
            } 
            else if(input > 10 || input < 1){
                return "Plz enter number between (1-10)";
            }
            return true;
        }
    });

    return userInput.user_input;
}