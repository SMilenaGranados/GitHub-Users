import data from "./data/data.js";
const dataUsers = Object.values(data);

//Utilizar token para acceder a la API de GitHub | Promesa con peticion fetch que resuelve la data de la API
const dataUrl = (dataElement) => {
  return new Promise((resolve) => {
    let myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Basic U01pbGVuYUdyYW5hZG9zOmdocF9QUUxMclVlVFdkR3lIaG9FWDVGN2o0dTRnUE55Z1AwNElNVkc="
    );

    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch(dataElement.url, requestOptions)
      .then((response) => response.json())
      .then((dato) => {
        resolve(dato);
      })
      .catch((e) => console.error("errorr " + e));
  });
};

//Función mostrar usuarios y data
const showUsers = (data) => {
  const mainContainer = document.getElementById("applicationUsers");
  const completeData = data.map((item) => dataUrl(item));
  Promise.all(completeData).then((res) => {
    if (mainContainer.hasChildNodes()) {
      while (mainContainer.childNodes.length >= 1) {
        mainContainer.removeChild(mainContainer.firstChild);
      }
    }
    for (let i = 0; i < res.length; i++) {
      let div = document.createElement("div");
      div.innerHTML = `
        
        <div id="card-body">
            <div class="card-image">
              <p id="title">User : ${res[i].login}</p>
              <p id="textLink">${res[i].html_url}</p>
              <img src="${res[i].avatar_url}" id="img">
              <p id="text-name">Name : ${res[i].name}</p>
              
              <div id="text-card">
              <p>Company : ${res[i].company}</p>
              <p>Blog : ${res[i].blog}</p>
              <p>Location : ${res[i].location}</p>
              <p>e-mail : ${res[i].email}</p>
              <p>About-me : ${res[i].bio}</p>
              <p>Twitter : ${res[i].twitter_username}</p>
              </div>

              <div id="text-numbers">
              <p>Repositories : ${res[i].public_repos}</p>
              <p>Gists : ${res[i].public_gists}</p>
              <p>Followers : ${res[i].followers}</p>
              <p>Following : ${res[i].following}</p>
              </div>
              
            </div>
        </div>`;

      mainContainer.appendChild(div);
    }
  });
};
showUsers(dataUsers);
