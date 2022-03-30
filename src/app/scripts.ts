import { Player } from './players.model';
/*const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function () {
  // Begin accessing JSON data here
  //var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    const completeMessage = document.createElement('pre');
    completeMessage.textContent = `It all works!`;
    app.appendChild(completeMessage);
    /*data.forEach(movie => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.textContent = movie.title

      const p = document.createElement('p')
      movie.description = movie.description.substring(0, 300)
      p.textContent = `${movie.description}...`

      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(p)
    })
  } else {
    const errorMessage = document.createElement('pre');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
};

request.send();*/

function addToTable(PlayerName, PlayerTeam, minutesPlayed, plusMinus) {
  var table = document.getElementById('players-Table');
  var row = table.appendChild(row);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  cell1.innerHTML = PlayerName;
  cell2.innerHTML = PlayerTeam;
  cell3.innerHTML = minutesPlayed;
  cell4.innerHTML = plusMinus;
}

var request = new XMLHttpRequest();
request.open('GET', 'https://6243d34339aae3e3b7475f7a.mockapi.io/');
request.onload = function nah() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  console.log(data);
  data.forEach((player) => {
    var PlayerName = player.playerName;
    var PlayerTeam = player.playerTeam;
    var minutesPlayed = player.playerMinutes;
    var plusMinus = player.playerPlusMinus;
    addToTable(PlayerName, PlayerTeam, minutesPlayed, plusMinus);
  });
};

request.send();
