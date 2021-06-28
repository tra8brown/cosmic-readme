// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    console.log("license: " + license);
    if (!license) {
        return '';
    }
    if (license == 'ISC') {
        return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
    } else if (license == 'WTFPL') {
        return `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`;
    } else if (license == 'MIT') {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    }
    return ``;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license) {
        return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {

// }

module.exports = generateMarkdown = (data) => {
    return `# Project Name: ${data.name}\n` +
        `## Project Description: ${data.description}\n` +
        `### Table Of Contents:\n` +
        `1. [Installation](#installation)\n` +
        `2. [License](#license)\n` +
        `3. [Usage](#usage)\n` +
        `4. [Contribution](#contribution)\n` +
        `5. [Questions](#questions)\n` +
        `## Installation: ${data.installation}\n` +
        `## License: ${renderLicenseBadge(data.license[0])}\n` +
        `#### Usage: ${data.usage}\n` +
        `#### Contribution: ${data.contribution}\n` +
        `#### Questions: ${data.questions}\n` +
        `## You can email me @ ${data.email}\n` +
        `## My github is www.github.com/${data.username}\n`;
};