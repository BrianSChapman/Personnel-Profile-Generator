const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./generateHTML");
const Employee = require("./employee");
const Engineer = require("./engineer");
const Manager = require("./manager");
const Intern = require("./intern");

/// Start of the onboarding questions.

console.log("Welcome! Let's starting building your team!");

const questions = [
  {
    type: "input",
    name: "managerName",
    message: "What is the Team Manager's name?",
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
    type: "input",
    name: "officeNumber",
    message: "What is your office number so employees may reach you?",
  },
  {
    type: "list",
    name: "role",
    message: "Which employee profile would you like to create?",
    choices: ["Engineer", "Intern", "none"],
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

// function to run through question prompt and use answers to generate HTML page.
function init() {
  return inquirer.prompt(questions).then((answers) => {
    const htmlPageContent = generateHTML(answers);
    if (answers.onboarding) {

      return init();
    } else {
      fs.writeFile("index.html", htmlPageContent, (err) =>
        err ? console.log(err) : console.log("Successfully created index.html!")
      );
    }
  });
}

//     fs.writeFile("index.html", htmlPageContent, (err) =>
//       err ? console.log(err) : console.log("Successfully created index.html!")
//     );
//   });
// }

init();
