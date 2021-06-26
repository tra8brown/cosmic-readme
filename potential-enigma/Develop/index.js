// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateReadme = require('./template.js');

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
        name: 'toc',
        message: 'Enter your table of contents'
    },
    { //installation
        type: 'input',
        name: 'installation',
        message: 'Please enter your installation section.'
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
        message: 'Please enter your contribution section',
    },
    { //tests
        type: 'input',
        name: 'tests',
        message: 'Please enter your tests section'
    },
    { //questions
        type: 'input',
        message: 'Please enter your question section',
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

// Where the app starts running
// Where we start calling function
inquirer.prompt(questions).then(function(data) {
    const filename =
        data.name
        .toLowerCase()
        .split(' ')
        .join('') + '.MD';

    console.log(data);

    var readme = generateReadme(data);
    console.log(readme);

    fs.writeFile(filename, readme, function(err) {
        if (err) {
            return console.log(err);
        }

        console.log('Success!');
    });
});

//look at 09 activity 1.

// TODO: Create a function to initialize app
//function init() {}
// 09 activity 2 

// Function call to initialize app
//init();