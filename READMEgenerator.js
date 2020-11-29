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
      name: 'description',
      message: 'Provide a description of the project (Required)'
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What did you build this project with? (Check all that apply)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
      type: 'input',
      name: 'username',
      message: 'Enter your Github username. (Required)',
    },
    {
      type: 'confirm',
      name: 'feature',
      message: 'Would you like to feature this project?',
      default: false
      },
    {
      type: 'confirm',
      name: 'confirmAddProject',
      message: 'Would you like to enter another project?',
      default: false
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
    return `
    # ${answers.name}
    ## Description
    ${answers.description}
    `
  };