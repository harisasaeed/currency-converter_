#!/usr/bin/env node

import inquirer from "inquirer";

console.log(chalk.red.bold(`
                        ******************************************************
                                   Welcome To Currency Converter
                        ******************************************************
`))



import chalk from "chalk";;

const Currency: any = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
    KWD: 3.30,
    BHD: 2.65,
    OMR: 2.60,
    CAD: 0.80,

}


let userAns = await inquirer.prompt(
 [
     {
          name: 'from',
          message:chalk.bold.bgBlue( "\nEnter  from Currency\n"),
          type: "list",
         choices: ["USD", "EUR", "INR","GBP", "PKR","KWD","BHD","OMR","CAD"]

     },
     {
         name: 'to',
         message:chalk.bgBlue( "\nEnter to Currency\n"),
         type: "list",
    
         choices: ["USD", "EUR", "INR","GBP", "PKR","KWD","BHD","OMR","CAD"]

    
     },
     {
        name: 'amount',
        message:chalk.bgBlue( "\n\nEnter your amount\n\n"),
        type: 'number'
     }

  ]
)

console.log(chalk.bgMagenta.bold("\nYour Converted Amount Is\n"))

let fromAmount = Currency[userAns.from]  //exchange rate
let toAmount = Currency[userAns.to]      //exchange rate
let amount = userAns.amount
let baseAmount = amount / fromAmount   //USD base currency dollar
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);

console.log(chalk.green.bold(`
                        ******************************************************
                                   Thank You For Using Currency Converter
                        ******************************************************
`))

// console.log(Math.round(convertedAmount*100/100));







