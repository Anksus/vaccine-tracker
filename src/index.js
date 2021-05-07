#! /usr/bin/env node

const figlet = require("figlet");
const chalk = require("chalk");
const inquirer = require("../lib/inquirer");
const Axios = require("axios");


const run = async () => {
  const credentials = await inquirer.askStateAndDistrict();
};

run();
