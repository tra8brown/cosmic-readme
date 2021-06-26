// README template
module.exports = templateData => {
    return `
    Project: ${templateData.name}
    Project Description: ${templateData.description}
    Table of Contents: 
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributions](#contributions)
    * [Tests](#tests)
    * [Questions](#questions)
    Installation: ${templateData.installation}
    Usage: ${templateData.usage}
    License: ${templateData.license}
    Contributions: ${templateData.contribution}
    Tests: ${templateData.tests}
    Questions: 
    ${templateData.questions}
    You can find me on github @ http://www.github.com/${templateData.username}
    You can email me @ ${templateData.email}
    `;
};