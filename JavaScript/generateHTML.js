generateHTML = ({
    role,
    managerName,
    employeeName,
    employeeEmail,
    employeeId,
    officeNumber,
    github,
    school,
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
              Manager
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
               ${role}  
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item-1">${employeeName}</li>
                <li class="list-group-item-2">${employeeId}</li>
                <li class="list-group-item-3"> <a href='https://github.com/${github}'target=_blank'>Github</li>
                <li class="list-group-item-3"> <a href='mailto:${employeeEmail}'>${employeeEmail}</a></li>
              </ul>
            </div>
            <div class="card" style="width: 18rem;">
              <div class="card-header bg-warning">
               ${role} 
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item-1">${employeeName}</li>
                <li class="list-group-item-2">${employeeId}</li>
                <li class="list-group-item-3">${school}</li>
                <li class="list-group-item-3"> <a href='mailto:${employeeEmail}'>${employeeEmail}</a></li>
              </ul>
            </div>
          </div>
        </div>
  </main>
  
  <script src="/JavaScript/index.js">
  </body>
  </html>`;

  module.exports = generateHTML;