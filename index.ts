#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

const game=await inquirer.prompt([{
    type:"number",
    name:"input",
    message:"please select a number between 1 till 10: "
}])
const randomNumber=Math.floor(Math.random() * 10) + 1;;
if(game.input === randomNumber) {
    console.log(chalk.green("correct"))
}else{
    console.log(chalk.redBright(`wrong the random number is ${randomNumber}`))
}