// function to generate markdown for README
const generateMarkdown = data => 
  `# ${data.title}

  ## Description:
  ${data.description}
  
  Link to repo: <https://github.com/${data.user}/${data.repo}>

  ${data.licenseBadge}

  ## Table of Contents:
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)
  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## License:
  ${data.licenseDesc}

  ## Contributing:
  ${data.contribution}

  ## Tests:
  ${data.tests}

  ## Questions:
  * Feel free to contact me with any questions at [${data.email}](mailto:${data.email}).
  * You can also check out my [GitHub Profile](https://github.com/${data.user}).
`;

module.exports = generateMarkdown;
