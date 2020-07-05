// require code from other sources
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const inquirer = require("inquirer");

// file name
const fn = "README.md";

// array of questions for user
const questions = [
    {
        type: "input",
        message: "Enter project title:",
        name: "title"
    },
    {
        type: "input",
        message: "Enter project description:",
        name: "description"
    },
    {
        type: "input",
        message: "Enter installation instructions:",
        name: "installation"
    },
    {
        type: "input",
        message: "Enter usage information:",
        name: "usage"
    },
    {
        type: "input",
        message: "Enter contribution guidelines:",
        name: "contribution"
    },
    {
        type: "input",
        message: "Enter test instructions:",
        name: "test"
    },
    {
        type: "input",
        message: "Enter email address:",
        name: "email"
    },
    {
        type: "input",
        message: "Enter GitHub username:",
        name: "user"
    },
    {
        type: "input",
        message: "Enter project repository:",
        name: "repo"
    },
    {
        type: "list",
        message: "Select type of license:",
        name: "license",
        choices: ["license A","license B","license C"]
    }
];

// function to write README file
function writeToFile(fileName, data) {
    console.log(generateMarkdown(data));
    fs.writeFile(fileName, generateMarkdown(data), err => {
        if (err) {
            console.log(err);
        } else {
            console.log("Successfully generated README.md");
        }
    });
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(function(response){
            console.log(response);
            writeToFile(fn,response);
        });
}

// function call to initialize program
init();
