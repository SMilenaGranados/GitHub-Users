const containerUsers = document.querySelector("#ApplicationUsers");
const dataUsers = fetch("./data/users.json")
  .then((response) => response.json())
  .then((data) => {
    console.log("dat", data)
    data.map(
      (data) => fetch(data.url)
      .then((response) => response.json())
      .then((dato) => {
          console.log("url", dato)
          const showUsers = `
            <div id="card-body">
              <div class="card-image" style="width: 16em;">
              <h2 class="card-title">${dato.login}</h2>
              <img class="imagen" src=${dato.avatar_url}>
              <h2 class="card-title">${dato.name}</h2>
            </div>`
          
        containerUsers.innerHTML = `<div>${showUsers}</div>`;
        })
        )})
      
    //   `
    //   <div id="card-body">
    //     <div class="card-image" style="width: 16em;">
    //     <img class="imagen" src=${data.avatar_url}>
    //     <h2 class="card-title">${data.login}</h2>
    //     <h3 class="link">${data.html_url}</h3>
    //     <p class=p>${data.url}</p>
    //     </div>
    // </div>`
    //));
  
  

    
  
