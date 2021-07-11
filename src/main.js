import data from "./data/data.js";
const dataUsers = Object.values(data);
//console.log('datausers', dataUsers)

const dataUrl = dataUsers.map((dataUsers) =>
  fetch(dataUsers.url)
    .then((response) => response.json())
    .then((dato) => {
      //console.log('datooo', dato)
      return dato;
    })
);

const showUsers = (data, dato) => {
  const mainContainer = document.getElementById("applicationUsers");
  if (mainContainer.hasChildNodes()) {
    while (mainContainer.childNodes.length >= 1) {
      mainContainer.removeChild(mainContainer.firstChild);
    }
  }
  for (let i = 0; i < data.length; i++) {
    let div = document.createElement("div");
    div.innerHTML = `
      
      <div id="card-body">
          <div class="card-image">
          <img src="${data[i].avatar_url}" id="img">
          <h2 class="card-title">User: ${data[i].login}</h2>
          <h3 class="card-title">${data[i].html_url}</h3>
          </div>
      </div>`;

    mainContainer.appendChild(div);
  }
};
showUsers(dataUsers, dataUrl);

