const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = 
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
  <title>Document</title>
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
              <li class="list-group-item-1"></li>
              <li class="list-group-item-2"></li>
              <li class="list-group-item-3"></li>
            </ul>
          </div>
          <div class="card" style="width: 18rem;">
            <div class="card-header bg-warning">
              
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item-1"></li>
              <li class="list-group-item-2"></li>
              <li class="list-group-item-3"></li>
            </ul>
          </div>
          <div class="card" style="width: 18rem;">
            <div class="card-header bg-warning">
              
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item-1"></li>
              <li class="list-group-item-2"></li>
              <li class="list-group-item-3"></li>
            </ul>
          </div>
        </div>
      </div>
</main>

<<script src="/JavaScript/index.js"
</body>
</html>`

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your ID number?',
    },
    {
      type: 'input',
      name: 'hobby',
      message: 'What is your favorite hobby?',
    },
    {
      type: 'input',
      name: 'food',
      message: 'What is your favorite food?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
