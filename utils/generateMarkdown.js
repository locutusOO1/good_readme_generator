// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description:
  ${data.description}
  
  Link to repo: <https://github.com/${data.user}/${data.repo}>

  ## Table of Contents:
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)
  ## 1. Installation:
  ${data.installation}

  ## 2. Usage:
  ${data.usage}

  ## 3. License:
  ${data.license}

  ## 4. Contributing:
  ${data.contribution}

  ## 5. Tests:
  ${data.tests}

  ## 6. Questions:
  * Feel free to contact me with any questions at [${data.email}](mailto:${data.email}).
  * You can also check out my [GitHub Profile](https://github.com/${data.user}).
`;
}

module.exports = generateMarkdown;
