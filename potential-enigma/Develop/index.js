// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [{ //name of project 
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("you must enter that name of your project.");
            }
            return true;
        }
    },
    { //Description of title for the section
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project.',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("You must enter a description.");
            }
            return true;
        },
    },
    { //table of contents
        type: 'input',
        name: 'table of contents',
        message: '?'
    },
    { //installation
        type: 'input',
        name: 'installation',
        message: ''
    },
    { //usage
        type: 'input',
        name: 'usage',
        message: 'Enter project instructions'
    },
    { //license
        type: 'input',
        name: 'license',
        message: 'Choose licensing used for the project used.'
    },
    { //contribution
        type: 'input',
        name: 'contribution',
        message: '',
    },
    { //tests
        type: 'input',
        name: 'tests',
        message: ''
    },
    { //questions
        type: 'input',
        message: '',
        name: 'questions',
    },
    { //github username
        type: 'input',
        message: 'What is your Github username?',
        name: 'username',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("You must enter a Github username.")
            }
            return true;
        }
    },
    { //email address
        type: 'input',
        message: 'What is your email address?',
        name: 'email address'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Your README markdown file has been created!")
    });
}

//look at 09 activity 1.

// TODO: Create a function to initialize app
function init() {}
// 09 activity 2 

// Function call to initialize app
init();