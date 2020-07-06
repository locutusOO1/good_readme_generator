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
        name: "title",
        default: "Title: "
    },
    {
        type: "input",
        message: "Enter project description:",
        name: "description",
        default: "Description: "
    },
    {
        type: "input",
        message: "Enter installation instructions:",
        name: "installation",
        default: "Installation Instructions: "
    },
    {
        type: "input",
        message: "Enter usage information:",
        name: "usage",
        default: "Usage Instructions: "
    },
    {
        type: "input",
        message: "Enter contribution guidelines:",
        name: "contribution",
        default: "Contribution Guidelines: "
    },
    {
        type: "input",
        message: "Enter test instructions:",
        name: "test",
        default: "Tests: "
    },
    {
        type: "input",
        message: "Enter email address:",
        name: "email",
        default: ""
    },
    {
        type: "input",
        message: "Enter GitHub username:",
        name: "user",
        default: ""
    },
    {
        type: "input",
        message: "Enter project repository:",
        name: "repo",
        default: ""
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
