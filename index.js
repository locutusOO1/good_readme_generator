// require code from other sources
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const inquirer = require("inquirer");

// file name
const fn = "generated_README.md";

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
        choices: ["Creative Commons: No Copyright","Creative Commons: Attribution","Creative Commons: Attribution-NonCommercial"]
    }
];

// function to write README file
const writeToFile = (fileName, data) => {
    if (data.license === "Creative Commons: No Copyright") {
        data.licenseBadge = "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
        data.licenseDesc = "CC0 1.0 - Use this however you want as long as it's legal.";
    } else if (data.license === "Creative Commons: Attribution") {
        data.licenseBadge = "[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)";
        data.licenseDesc = "CC BY 4.0 - Use this however you want as long as it's legal, but give credit by providing a link to the license and indicating changes you made.";
    } else  if (data.license === "Creative Commons: Attribution-NonCommercial") {
        data.licenseBadge = "[![License: CC BY-NC 4.0](https://licensebuttons.net/l/by-nc/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc/4.0/)";
        data.licenseDesc = "CC BY-NC 4.0 - Use this however you want as long as it's legal and noncommercial, but give credit by providing a link to the license and indicating changes you made.";
    }
    fs.writeFile(fileName, generateMarkdown(data), err => err ? console.log(err) : console.log(`Successfully created ${fn}`));
}

// function to initialize program
const init = () => inquirer.prompt(questions).then(response => writeToFile(fn,response));

// function call to initialize program
init();
