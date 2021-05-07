#! /usr/bin/env node

const figlet = require("figlet");
const chalk = require("chalk");
const inquirer = require("../lib/inquirer");
const Axios = require("axios");

// figlet("Covid Vaccine", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(chalk.red(data));
//   console.log(
//     chalk.red(
//       "Command line tool for checking Cowin API's and alerts when vaccine is avialble."
//     )
//   );
// });

const run = async () => {
  const credentials = await inquirer.askStateAndDistrict();

  //   console.log(getStates());
  //   console.log(credentials);
};

run();
