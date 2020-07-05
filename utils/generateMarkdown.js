// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.description}
  ## Table of Contents:
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)
  ## Installation:
  *
  *
  * 
  * 
  * 
  * 
  ## Usage
  *
  *
  * 
  * 
  * 
  * 
  * 
  ## License
  *
  *
  * 
  * 
  * 
  * 
  * 
  * 
  ## Contributing
  *
  *
  * 
  * 
  * 
  * 
  * 
  * 
  ## Tests
  *
  *
  * 
  * 
  * 
  * 
  * 
  * 
  * 
  ## Questions
  *
  *
  * 
  * 
  * 
  * 
  * 
  * 
  * 
  * 
`;
}

module.exports = generateMarkdown;
