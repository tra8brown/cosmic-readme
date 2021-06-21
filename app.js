const fs = require('fs');
const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'What is your project name? (Required)',
        validate: nameInput => { //validate receives an arguement: nameInput
            if (nameInput) { //conditional
                return true;
            } else {
                console.log('Please enter your name!'); //if question is skipped it will trigger this response
                return false;
            }
        }
    }]);
};

promptUser();