//Using inquirer take inputs from a user to create a professional readme.md file

const inquirer = require("inquirer");
const fs = require("fs");

//readme templet
//Description, Table of Contents, Installation, usage, license, Contributing, tests, and questions.
// const genReadme = () =>

//prompt with questions
//Title, 
inquirer.createPromptModule([
    {
        type: "input",
        message: 'Please enter your project Title.',
        name: 'title'
    },
    {
        type: "input",
        message: 'Please enter your project Description.',
        name: 'description'
    }, 
    {
        type: "input",
        message: 'Please enter your projects installation instructions.',
        name: 'installation'
    }, 
    {
        type: "input",
        message: 'Please enter your projects usage information.',
        name: 'usage'
    }, 
    {
        type: "input",
        message: 'Please enter your project Title.',
        name: 'contribution'
    },
    {
        type: "input",
        message: 'Please enter your projects test instructions.',
        name: 'instructions'
    },
    {
        type: "list",
        message: 'Please choose which License you used.',
        name: 'license',
        choices: []
    },
    {
        type: "input",
        message: 'Please enter your GitHub username.',
        name: 'github'
    },
    {
        type: "input",
        message: 'Please enter your email address.',
        name: 'email'
    },
])
.then((answers)=>{
    const readmeWrite = genReadme(answers);
    fs.writeFile(`./readmes/${answers.title}.md`, readmeWrite, (err)=>{
        err ? console.log(err) : console.log("Your README has been created! check the directory!")
    })
}





// GIVEN a command-line application that accepts user input
// TODO: WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// TODO:WHEN I enter my project title
// THEN this is displayed as the title of the README
// TODO:WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// TODO:WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// TODO:WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// TODO:WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// TODO:WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README