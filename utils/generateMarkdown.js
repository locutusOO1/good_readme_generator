// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.description}
  Link to repo: <${data.repo}>
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
  Feel free to contact me with any questions at [${data.email}](mailto:${data.email})
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
