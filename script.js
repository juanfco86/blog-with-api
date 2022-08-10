//variable
const containerTitles = document.querySelector(".container-title");
const containerTitles2 = document.querySelector(".container-title2");
const containerTitles3 = document.querySelector(".container-title3");
const containerTitles4 = document.querySelector(".container-title4");
const containerTitles5 = document.querySelector(".container-title5");
//functions
const btnPost = document.querySelector(".btn-post") 
const containerPost = document.querySelector(".container-post")
btnPost.addEventListener("click", getPost)
function getPost(){
  fetch("http://localhost:3000/posts/1")
  .then(response => response.json())
  .then(data => {
    containerPost.innerHTML= `<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    ...
  </div>`

  })

  
}
/*const btnCat = document. getElementById("btn-cat")
const containerCat = document.getElementById("container-cat")
btnCat.addEventListener("click", getcat)
function getcat(){
  fetch("https://aws.random.cat/meow")
  .then(respuesta => respuesta.json())
  .then(datos => {
    containerCat.innerHTML=`<img src="${datos.file}"/>`
  })
        
}*/
//post

fetch("http://localhost:3000/posts/1", {
  method: "GET",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    // containerCat.innerHTML = <img src="${datos.file}" />;
    containerTitles.innerHTML = `<h5 class="mb-1 h5-titles">"${json.title}"</h5>`;
    console.log(containerTitles);
    console.log(json);
  });

fetch("http://localhost:3000/posts/2", {
  method: "GET",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    // containerCat.innerHTML = <img src="${datos.file}" />;
    containerTitles2.innerHTML = `<h5 class="mb-1 h5-titles">"${json.title}"</h5>`;
    console.log(containerTitles);
    console.log(json);
  });

  fetch("http://localhost:3000/posts/3", {
  method: "GET",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    // containerCat.innerHTML = <img src="${datos.file}" />;
    containerTitles3.innerHTML = `<h5 class="mb-1 h5-titles">"${json.title}"</h5>`;
    console.log(containerTitles);
    console.log(json);
  });

  fetch("http://localhost:3000/posts/4", {
  method: "GET",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    // containerCat.innerHTML = <img src="${datos.file}" />;
    containerTitles4.innerHTML = `<h5 class="mb-1 h5-titles">"${json.title}"</h5>`;
    console.log(containerTitles);
    console.log(json);
  });

  fetch("http://localhost:3000/posts/5", {
  method: "GET",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    // containerCat.innerHTML = <img src="${datos.file}" />;
    containerTitles5.innerHTML = `<h5 class="mb-1 h5-titles">"${json.title}"</h5>`;
    console.log(containerTitles);
    console.log(json);
  });


//  fetch("http://localhost:3000/users")
//    .then((response) => response.json())
//    .then((json) => console.log(json));
