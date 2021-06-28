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
    // wrote in rage post ice cream
    return `# Project: ${data.name}\n` +
        `## Project Description:` + `\n${data.description}\n` +
        `## Table of Contents: \n` +
        `1. [Installation](#installation)\n` +
        `2. [Usage](#usage)\n` +
        `3. [License](#license)\n` +
        `4. [Contributions](#contributions)\n` +
        `5. [Tests](#tests)\n` +
        `6. [Questions](#questions)\n` +
        `## Installation:` + `\n${data.installation}\n` +
        `## Usage:` + `\n ${data.usage}\n` +
        `## License:` + `\n ${renderLicenseBadge(data.license[0])}\n` +
        `## Contributions:` + `\n ${data.contribution}\n` +
        `## Tests: ` + `\n${data.tests}\n` +
        `## Questions: ` + `\n${data.questions}\n` +
        `#### You can find me on github @ http://www.github.com/${data.username}\n` +
        `#### You can email me @ ${data.email}\n`;
};