const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("../generateHTML");

class Employee {
  constructor(name, employeeId, employeeEmail, role) {
    this.name = name;
    this.employeeId = employeeId;
    this.employeeEmail = employeeEmail;
    this.role = role;
  }
}

// Start od the onboarding questions.

console.log("Welcome! Let's starting building your team!");
const questions = [
  {
    type: "input",
    name: "employeeName",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "employeeId",
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
];

class Engineer extends Employee {
  constructor(github) {
    super(employeeName, employeeEmail, employeeId, role);
    this.github = this.github;
  }
}

// function to run through question prompt and use answers to generate HTML page.
function init() {
  return inquirer.prompt(questions).then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile("index.html", htmlPageContent, (err) =>
      err ? console.log(err) : console.log("Successfully created index.html!")
    );
  });
}

init();
