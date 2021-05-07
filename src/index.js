#! /usr/bin/env node

const figlet = require("figlet");
const chalk = require("chalk");
const inquirer = require("../lib/inquirer");

const run = async () => {
  figlet("Vaccine Tracker", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(chalk.red.bold(data));
    console.log(
      chalk.red.bold(
        "CLI tool to check the Cowin APIs every minute and alert the user when a vaccine is available."
      )
    );
    console.log(chalk.green.bold("Select your state, district and age-group!"));
  });

  await inquirer.askStateAndDistrict();
};

run();
