const profileDataArgs = process.argv.slice(2, process.argv.length);
const username = profileDataArgs[0];
const github = profileDataArgs[1];
const fs = require('fs'); 
const inquirer = require('inquirer'); 
const promptUser = () => {
    console.log(`
=================
Add a New Project
=================
`);
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?'
    },
    {
     type: 'input',
     name: 'uname',
     message: 'Enter your Github username' 
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'List all installation setps to your project',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions for use.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for this project',
      choices: ['none', 'apache 2.0', 'GNU General Public License v3.0', 'MIT License']
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Name all contributors to this project seperated by a space.',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address'
      }
  ]);
};
promptUser().then(answers =>
fs.writeFile('README.md', generatePage(answers), err => {
  if (err) throw err;

  console.log('README complete! Check out README.md to see the output!');
})
);
 
const generatePage = (answers) => {
    // return `
    // <!DOCTYPE html> 
    // <html lang="en"> 
    // <head>
    //   <meta charset="UTF-8">
    //   <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //   <meta http-equiv="X-UA-Compatible" content="ie=edge">
    //   <title>README.md</title>
    // </head>
  
    // <body>
    //   <h1>${answers.name}</h1>
    //   <h2><a href="https://github.com/${answers.username}">Github</a></h2>
    // </body>
    // </html>
    // `;
return `# ${answers.name}
## Table of Contents
* [Github](README.md/#Github)
* [Description](README.md/#Description)
* [Installation](README.md/#Installation)
* [Usage](README.md/#Usage)
* [License](README.md/#License)
* [Credits](README.md/#Credits)
* [Questions](README.md/#Questions)
## Github
https://github.com/${answers.uname}/${answers.name}
## Description
${answers.description}
## Installation
 ${answers.installation}
## Usage
${answers.usage}
## License
${answers.license}
## Credits
${answers.credits}
## Questions
Contact me at: ${answers.email}
`
  };