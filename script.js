

  fetch("http://localhost:3000/posts", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

for (let i=0; i<5; i++){
  
}
//  fetch("http://localhost:3000/users")
//    .then((response) => response.json())
//    .then((json) => console.log(json));
