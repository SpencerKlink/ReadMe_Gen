// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer'); 
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
      validate: input => input.trim() === '' ? 'Field cannot be empty.' : true
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please enter a brief description of your project.',
      validate: input => input.trim() === '' ? 'Field cannot be empty.' : true
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?',
      validate: input => input.trim() === '' ? 'Field cannot be empty.' : true
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What are the instructions and examples for use.',
      validate: input => input.trim() === '' ? 'Field cannot be empty.' : true
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project.',
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How can other developers contribute to your project?',
      validate: input => input.trim() === '' ? 'Field cannot be empty.' : true
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide examples on how to run tests for your application.',
      validate: input => input.trim() === '' ? 'Field cannot be empty.' : true
    },
    {
      type: 'input',
      name: 'questions',
      message: 'Enter your GitHub username:',
      validate: input => input.trim() === '' ? 'Field cannot be empty.' : true
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
      validate: input => {
        const pass = input.match(
          /\S+@\S+\.\S+/
        );
        if (pass) {
          return true;
        }
        return 'Please enter a valid email address.';
      }
    }
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.error(err) : console.log('README.md has been generated!')
    );
  }
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
      const markdownContent = generateMarkdown(answers);
      writeToFile('README.md', markdownContent);
    });
  }
// Function call to initialize app
init();
