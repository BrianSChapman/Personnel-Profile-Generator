const inquirer = require("inquirer");
const fs = require("fs");

const generateHTML = ({
  managerName,
  officeNumber,
  managerId,
  managerEmail,
  newEmployeeName1,
  github,
  newEmployeeId1,
  newEmployeeEmail1,
  newEmployeeName2,
  newEmployeeEmail2,
  school,
  newEmployeeId2,
  newEmployee1,
  newEmployee2,
}) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
  <link rel="stylesheet" href="/styles.css">
  <title>Personnel Profiles</title>
</head>
<body>
  <header class="jumbotron jumbotron-fluid bg-info">
    <span class="border-bottom"></span>
  <div class="container">
    <h3 class="display-4 text-center">My Team</h3>
</div>
  </header>
<main>
    <div class="card-deck mt-5">
        <div class="card" style="width: 18rem;">
            <div class="card-header bg-warning">
            
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item-1">${managerName}</li>
              <li class="list-group-item-2">ID:${managerId}</li>
              <li class="list-group-item-3">Office Number:${officeNumber}</li>
              <li class="list-group-item-3"> <a href='mailto:${managerEmail}'>Email:${managerEmail}</a></li>
            </ul>
          </div>
          <div class="card" style="width: 18rem;">
            <div class="card-header bg-warning">
             ${newEmployee1}  
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item-1">${newEmployeeName1}</li>
              <li class="list-group-item-2">${newEmployeeId1}</li>
              <li class="list-group-item-3"> <a href='https://github.com/${github}'target=_blank'>Github</li>
              <li class="list-group-item-3"> <a href='mailto:${newEmployeeEmail1}'>${newEmployeeEmail1}</a></li>
            </ul>
          </div>
          <div class="card" style="width: 18rem;">
            <div class="card-header bg-warning">
             ${newEmployee2} 
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item-1">${newEmployeeName2}</li>
              <li class="list-group-item-2">${newEmployeeId2}</li>
              <li class="list-group-item-3">${school}</li>
              <li class="list-group-item-3"> <a href='mailto:${newEmployeeEmail2}'>${newEmployeeEmail2}</a></li>
            </ul>
          </div>
        </div>
      </div>
</main>

<script src="/JavaScript/index.js">
</body>
</html>`;

console.log("Welcome! Let's starting building your team!");
inquirer
  .prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is the Manager's name?",
    },
    {
      type: "input",
      name: "managerId",
      message: "What is the Manager's ID number?",
    },
    {
      type: "input",
      name: "managerEmail",
      message: "What is the Manager's email address?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the Manager's office number?",
    },
    {
      type: "list",
      name: "additionalEmployee1",
      message: "Who else would you like to onboard?",
      choices: ["Engineer", "Intern", "none"],
    },
    {
      type: "input",
      name: "engineerName",
      message: "Please provide the Engineer's name.",
    },
    {
      type: "input",
      name: "engineerID",
      message: "Please provide the Engineer's ID number",
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "Please provide Engineer's email",
    },
    {
      type: "input",
      name: "gitHub",
      message: "Please provide Engineer's GitHub Username",
    },
    {
      type: "list",
      name: "additionalEmployee2",
      message: "Who else would you like to onboard?",
      choices: ["Engineer", "Intern", "none"],
    },
    {
      type: "input",
      name: "internName",
      message: "Please provide the Intern's name.",
    },
    {
      type: "input",
      name: "internID",
      message: "Please provide the Intern's ID number",
    },
    {
      type: "input",
      name: "internEmail",
      message: "Please provide Intern's email",
    },
    {
      type: "input",
      name: "school",
      message: "Please provide Intern's school name.",
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile("index.html", htmlPageContent, (err) =>
      err ? console.log(err) : console.log("Successfully created index.html!")
    );
  });
