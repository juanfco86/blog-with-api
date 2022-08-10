//VARIABLES
const containerTitles = document.querySelector(".container-title");
const containerTitles2 = document.querySelector(".container-title2");
const containerTitles3 = document.querySelector(".container-title3");
const containerTitles4 = document.querySelector(".container-title4");
const containerTitles5 = document.querySelector(".container-title5");

//FUNCIONES


// POST
fetch("http://localhost:3000/posts/1", {
  method: "GET",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // containerCat.innerHTML = <img src="${datos.file}" />;
    containerTitles.innerHTML = `<h5 class="mb-1 h5-titles">"${data.title}"</h5>`;
    console.log(containerTitles);
    console.log(data);
  });

fetch("http://localhost:3000/posts/2", {
  method: "GET",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // containerCat.innerHTML = <img src="${datos.file}" />;
    containerTitles2.innerHTML = `<h5 class="mb-1 h5-titles">"${data.title}"</h5>`;
    console.log(containerTitles);
    console.log(data);
  });
  
  fetch("http://localhost:3000/posts/3", {
    method: "GET",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // containerCat.innerHTML = <img src="${datos.file}" />;
      containerTitles3.innerHTML = `<h5 class="mb-1 h5-titles">"${data.title}"</h5>`;
      console.log(containerTitles);
      console.log(data);
    });
  
    fetch("http://localhost:3000/posts/4", {
      method: "GET",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // containerCat.innerHTML = <img src="${datos.file}" />;
        containerTitles4.innerHTML = `<h5 class="mb-1 h5-titles">"${data.title}"</h5>`;
        console.log(containerTitles);
        console.log(data);
      });
  
fetch("http://localhost:3000/posts/5", {
  method: "GET",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // containerCat.innerHTML = <img src="${datos.file}" />;
    containerTitles5.innerHTML = `<h5 class="mb-1 h5-titles">"${data.title}"</h5>`;
    console.log(containerTitles);
    console.log(data);
  });
  

