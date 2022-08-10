
  fetch("http://localhost:3000/posts")
    .then((response) => response.json())
    .then((json) =>console.log(json));

//  fetch("http://localhost:3000/users")
//    .then((response) => response.json())
//    .then((json) => console.log(json));
