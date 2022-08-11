//variable
const containerTitles = document.querySelector(".container-title");
// const containerTitles2 = document.querySelector(".container-title2");
// const containerTitles3 = document.querySelector(".container-title3");
// const containerTitles4 = document.querySelector(".container-title4");
// const containerTitles5 = document.querySelector(".container-title5");

const btnPost = document.querySelector(".btn-post");
const containerPost = document.querySelector(".container-post");

//functions

// btnPost.addEventListener("click", getPost)
// function getPost(){
//   fetch("http://localhost:3000/posts")
//   .then(response => response.json())
//   .then(data => {

//   })

// }
// COPIA DE SEGURIDAD
// btnPost.addEventListener("click", getPost);
// function getPost() {
//   fetch("http://localhost:3000/posts")
//     .then((response) => response.json())
//     .then((data) => {
//       containerPost.innerHTML = `<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
//         ...
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Understood</button>
//       </div>
//     </div>
//   </div>
// </div>`;
//     });
// }

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

fetch("http://localhost:3000/posts", {
  method: "GET",
})
  .then(function (response) {
    return response.json();
  })
  .then((data) => {
    for (let i = 0; i < 10; i++) {
      
      containerTitles.insertAdjacentHTML(
        "afterbegin",
        `<button type="button" class="btn btn-primary btn-post list-group-item list-group-item-action" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="container-title">"${data[i].title}"</h5>
            </div>
          </button>`
      );

      data.forEach((element) => {
        containerPost.insertAdjacentHTML(
          "afterbegin",
          `<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">"${data[i].title}"</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        "${data[i].body}"
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>`
        );
      });
      console.log(data[0].title);
    }
  });

// INICIO PRUEBA

// fetch("http://localhost:3000/posts/2", {
//   method: "GET",
// })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (json) {
//     // containerCat.innerHTML = <img src="${datos.file}" />;
//     containerTitles2.innerHTML = `<h5 class="mb-1 h5-titles">"${json.title}"</h5>`;
//     containerPost.innerHTML = `<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="staticBackdropLabel">"${json.title}"</h5>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
//         "${json.body}"
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Understood</button>
//       </div>
//     </div>
//   </div>
// </div>`;
//   });

//   fetch("http://localhost:3000/posts/3", {
//   method: "GET",
// })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (json) {
//     // containerCat.innerHTML = <img src="${datos.file}" />;
//     containerTitles3.innerHTML = `<h5 class="mb-1 h5-titles">"${json.title}"</h5>`;
//     containerPost.innerHTML = `<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="staticBackdropLabel">"${json.title}"</h5>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
//         "${json.body}"
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Understood</button>
//       </div>
//     </div>
//   </div>
// </div>`;
//   });

//   fetch("http://localhost:3000/posts/4", {
//   method: "GET",
// })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (json) {
//     // containerCat.innerHTML = <img src="${datos.file}" />;
//     containerTitles4.innerHTML = `<h5 class="mb-1 h5-titles">"${json.title}"</h5>`;
//     containerPost.innerHTML = `<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="staticBackdropLabel">"${json.title}"</h5>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
//         "${json.body}"
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Understood</button>
//       </div>
//     </div>
//   </div>
// </div>`;
//   });

//   fetch("http://localhost:3000/posts/5", {
//   method: "GET",
// })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (json) {
//     // containerCat.innerHTML = <img src="${datos.file}" />;
//     containerTitles5.innerHTML = `<h5 class="mb-1 h5-titles">"${json.title}"</h5>`;
//     containerPost.innerHTML = `<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="staticBackdropLabel">"${json.title}"</h5>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
//         "${json.body}"
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Understood</button>
//       </div>
//     </div>
//   </div>
// </div>`;
//   });

//FIN PRUEBA
