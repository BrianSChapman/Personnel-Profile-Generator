const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("../generateHTML"); 
  

console.log("Welcome! Let's starting building your team!");
inquirer
  .prompt([
    {
      type: "input",
      name: "employeeName",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "employeeIdNumber",
      message: "What is your company ID number?",
    },
    {
      type: "input",
      name: "employeeEmail",
      message: "What is your email address?",
    },
    {
      type: "list",
      name: "role",
      message: "What position are we onboarding?",
      choices: ["Manager", "Engineer", "Intern"],
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is your office number so employees may reach you?",
      When: (input) => {
        if (input.role == "Manager") {
          return true;
        }
      },
    },
    {
      type: "input",
      name: "gitHub",
      message: "Please provide Engineer's GitHub Username",
      When: (input) => {
        if (input.role == "Engineer") {
          return true;
        }
      },
    },

    {
      type: "input",
      name: "school",
      message: "Please provide Intern's school name.",
    },
    {
      type: "confirm",
      name: "onboarding",
      message: "Would you like to onboard an additional new employee?",
    },
  ])

  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile("index.html", htmlPageContent, (err) =>
      err ? console.log(err) : console.log("Successfully created index.html!")
    );
  });
