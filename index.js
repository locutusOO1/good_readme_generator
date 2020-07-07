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
        default: "Title"
    },
    {
        type: "input",
        message: "Enter project description:",
        name: "description",
        default: "Description"
    },
    {
        type: "input",
        message: "Enter installation instructions:",
        name: "installation",
        default: "Installation"
    },
    {
        type: "input",
        message: "Enter usage information:",
        name: "usage",
        default: "Usage"
    },
    {
        type: "input",
        message: "Enter contribution guidelines:",
        name: "contribution",
        default: "Contribution"
    },
    {
        type: "input",
        message: "Enter test instructions:",
        name: "tests",
        default: "Tests"
    },
    {
        type: "input",
        message: "Enter email address:",
        name: "email",
        default: "email@email.com"
    },
    {
        type: "input",
        message: "Enter GitHub username:",
        name: "user",
        default: "User"
    },
    {
        type: "input",
        message: "Enter project repository name:",
        name: "repo",
        default: "Repository"
    },
    {
        type: "list",
        message: "Select type of license:",
        name: "license",
        choices: ["license A","license B","license C"]
    }
];

// function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, generateMarkdown(data), err => err ? console.log(err) : console.log("Successfully generated README.md"));
}

// function to initialize program
const init = () => inquirer.prompt(questions).then(response => writeToFile(fn,response));

// function call to initialize program
init();
