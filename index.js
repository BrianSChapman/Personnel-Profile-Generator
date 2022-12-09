const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./dist/generateHTML");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
let personnelList = [];

/// Start of the onboarding questions based upon each employee role.

console.log("Welcome! Let's starting building your team!");

function managerQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your company ID number?",
      },
      {
        type: "input",
        name: "email",
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
        choices: ["Engineer", "Intern", "None"],
      },
    ])
    .then((answers) => {
      const { name, id, email, officeNumber } = answers;
      switch (answers.role) {
        case "Engineer":
          personnelList.push(new Manager(name, id, email, officeNumber));
          engineerQuestions();
          break;
        case "Intern":
          personnelList.push(new Manager(name, id, email, officeNumber));
          internQuestions();
          break;
        default:
          personnelList.push(new Manager(name, id, email, officeNumber));
          writeToFile(personnelList);
      }
    });
}

function engineerQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your company ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },

      {
        type: "input",
        name: "gitHub",
        message: "Please provide Engineer's GitHub Username",
      },
      {
        type: "list",
        name: "role",
        message: "Which employee profile would you like to create?",
        choices: ["Engineer", "Intern", "None"],
      },
    ])
    .then((answers) => {
      const { name, id, email, github } = answers;
      switch (answers.role) {
        case "Engineer":
          personnelList.push(new Engineer(name, id, email, github));
          engineerQuestions();
        break;
        case "Intern":
          personnelList.push(new Engineer(name, id, email, github));
          internQuestions();
        break;
        default:
          personnelList.push(new Engineer(name, id, email, github));
          writeToFile(personnelList);
      }
    });
}

function internQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your company ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
      {
        type: "input",
        name: "school",
        message: "Please provide Intern's school name",
      },
      {
        type: "list",
        name: "role",
        message: "Which employee profile would you like to create?",
        choices: ["Engineer", "Intern", "None"],
      },
      // After questions are answered, the results are put on "personnelList"
    ])
    .then((answers) => {
      const { name, id, email, school } = answers;
      switch (answers.role) {
        case "Engineer":
          personnelList.push(new Intern(name, id, email, school));
          engineerQuestions();
        break;
        case "Intern":
          personnelList.push(new Intern(name, id, email, school));
          internQuestions();
        break;
        default:
          personnelList.push(new Intern(name, id, email, school));
          writeToFile(personnelList);
      }
    });
}
// Upon completion of gathering info, this is to create the HTML file.
function writeToFile(newHires) {
  const htmlPageContent = generateHTML(newHires);
  fs.writeFile("index.html", htmlPageContent, (err) =>
  err ? console.log(err) : console.log("Successfully created index.html!")

);
}

// // function to run through question prompt to establish Manager Role.
function init() {
  managerQuestions();
}

init();
