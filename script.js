const containerTitles = document.querySelector(".container-title");
const containerTitles2 = document.querySelector(".container-title2");

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

for (let i=0; i<5; i++){
  
}
//  fetch("http://localhost:3000/users")
//    .then((response) => response.json())
//    .then((json) => console.log(json));
