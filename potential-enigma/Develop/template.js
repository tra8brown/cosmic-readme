// README template
module.exports = templateData => {
    return `
    Project: ${templateData.name}
    Project Description: ${templateData.description}
    Table of Contents: ${templateData.toc}
    Installation: ${templateData.installation}
    Usage: ${templateData.usage}
    License: ${templateData.license}
    Contribution: ${templateData.contribution}
    Test Projects: ${templateData.tests}
    Questions: ${templateData.questions}
    `;
};