

  fetch("http://localhost:3000/posts", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

//  fetch("http://localhost:3000/users")
//    .then((response) => response.json())
//    .then((json) => console.log(json));
