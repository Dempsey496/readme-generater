const fs = require('fs');
const inquirer = require('inquirer');
inquirer
.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your Project Title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please describe your application in a few words:',
    },
    {
      type: 'input',
      name: 'install',
      message: 'Please describe any installation required for this app:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What are some creative or recommended uses for this app?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your public e-mail address?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your Github repository URL?',
    },
    {
      type: 'list',
      name: 'license',
      message: '',
      choices: ['MIT', 'ISC', 'Eclipse Public License']
    },
])
.then(function(response){
  console.log(response);
  const titleName = "# " + `${response.title}\r\n`;
  fs.appendFileSync("READme.md", titleName, (err) => err ? console.log(err) : console.log("success!"));
  fs.appendFileSync("READme.md", "## Description" + `\r\n`, (err) => err ? console.log(err) : console.log("Success"));
  const appDescription = "- " + `${response.description}\r\n`;
  fs.appendFileSync("READme.md", appDescription, (err) => err ? console.log(err) : console.log("success"));
  fs.appendFileSync("READme.md", "## Installation" + `\r\n`, (err) => err ? console.log(err) : console.log("Success"));
  const appInstallation = "- " + `${response.install}\r\n`;
  fs.appendFileSync("READme.md", appInstallation, (err) => err ? console.log(err) : console.log("Success"));
  fs.appendFileSync("READme.md", "## Usage" + `\r\n`, (err) => err ? console.log(err) : console.log("Success"));
  const appUsage = "- " + `${response.usage}\r\n`;
  fs.appendFileSync("READme.md", appUsage, (err) => err ? console.log(err) : console.log("Success"));
  fs.appendFileSync("READme.md", "## Contributing" + `\r\n` 
  + "- Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated." + `\r\n`
  + "  - Fork the Project" + `\r\n`
  + "  - Create your Feature Branch (git checkout -b feature/AmazingFeature)" + `\r\n`
  + "  - Commit your Changes (git commit -m 'Add some AmazingFeature')" + `\r\n`
  + "  - Push to the Branch (git push origin feature/AmazingFeature)" + `\r\n`
  + "  - Open a Pull Request" + `\r\n`, 
  (err) => err ? console.log(err) : console.log("Success"));
  fs.appendFileSync("READme.md", "## Questions" + `\r\n`, (err) => err ? console.log(err) : console.log("Success"));
  const appEmail = `${response.email}\r\n`;
  const appGithub = `${response.github}\r\n`;
  fs.appendFileSync("READme.md", appEmail, (err) => err ? console.log(err) : console.log("Success"));
  fs.appendFileSync("READme.md", appGithub, (err) => err ? console.log(err) : console.log("Success"));
  fs.appendFileSync("READme.md", "## License" + `\r\n`, (err) => err ? console.log(err) : console.log("Success"));
  const appLicense = "- " + `${response.license}\r\n`;
  fs.appendFileSync("READme.md", appLicense, (err) => err ? console.log(err) : console.log("Success"));
});

// ```md
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

