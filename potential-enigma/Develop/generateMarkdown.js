function renderLicenseBadge(license) {
    if (!license) {
        return '';
    }

    if (license == "MIT") {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    } else if (license == "WTFPL") {
        return `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`;
    } else if (license == "ISC") {
        return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
    }
    return ``;
}

// wrote pre ice cream. yay
// README template
module.exports = data => {
    return `# Project: ${data.name}\n` +
        `## Project Description: ${data.description}\n` +
        `# Table of Contents: \n` +
        `1. [Installation](#installation)\n` +
        `2. [Usage](#usage)\n` +
        `3. [License](#license)\n` +
        `4. [Contributions](#contributions)\n` +
        `5. [Tests](#tests)\n` +
        `6. [Questions](#questions)\n` +
        `## Installation: ${data.installation}\n` +
        `## Usage: ${data.usage}\n` +
        `## License: ${renderLicenseBadge(data.license[0])}\n` +
        `## Contributions: ${data.contribution}\n` +
        `## Tests: ${data.tests}\n` +
        `## Questions: ` + `${data.questions}\n` +
        ` #### You can find me on github @ http://www.github.com/${data.username}\n` +
        `#### You can email me @ ${data.email}\n`;
};