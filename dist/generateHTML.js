function createManagerCard(manager) {
  const { name, id, email, officeNumber } = manager;
  const role = manager.getRole();
  const managerCard = `<div class="card" style="width: 18rem;">
              <div class="card-header bg-warning">
              ${role}
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item-1">${name}</li>
                <li class="list-group-item-2">ID:${id}</li>
                <li class="list-group-item-3">Office Number:${officeNumber}</li>
                <li class="list-group-item-3"> <a href='mailto:${email}'target=_blank'>Email:${email}</a></li>
              </ul>
            </div>`;
  return managerCard;
}

function createEngineerCard(engineer) {
  const { name, id, email, github } = engineer;
  const role = engineer.getRole();
  const engineerCard = `<div class="card" style="width: 18rem;">
              <div class="card-header bg-warning">
               ${role}  
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item-1">${name}</li>
                <li class="list-group-item-2">${id}</li>
                <li class="list-group-item-3"> <a href='https://github.com/${github}'target=_blank'>Employee Github</a></li>
                <li class="list-group-item-3"> <a href='mailto:${email}'target=_blank'>${email}</a></li>
              </ul>
            </div>`;
  return engineerCard;
}

function createInternCard(intern) {
  const { name, id, email, school } = intern;
  const role = intern.getRole();
  const internCard = `<div class="card" style="width: 18rem;">
              <div class="card-header bg-warning">
               ${role} 
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item-1">${name}</li>
                <li class="list-group-item-2">${id}</li>
                <li class="list-group-item-3">${school}</li>
                <li class="list-group-item-3"> <a href='mailto:${email}'target=_blank'>${email}</a></li>
              </ul>
            </div>`;
  return internCard;
}

function appendCard(newHires) {
  let onboardList = "";
  newHires.forEach((hire) => {
    switch (hire.getRole()) {
      case "Manager":
        onboardList += createManagerCard(hire);
        break;
      case "Engineer":
        onboardList += createEngineerCard(hire);
        break;
      case "Intern":
        onboardList += createInternCard(hire);
        break;
    }
  });
  return onboardList;
}

generateHTML = (newHires) => {
  return `<!DOCTYPE html>
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
          
            ${appendCard(newHires)}  
          
        </div>
  </main>
  
  <script src="/JavaScript/index.js">
  </body>
  </html>`;
};
module.exports = generateHTML;
