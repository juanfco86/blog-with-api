//variable
const containerTitles = document.querySelector(".container-title");

const btnPost = document.querySelector(".btn-post");

//functions

// posts

fetch("http://localhost:3000/posts", {
  method: "GET",
})
  .then(function (response) {
    return response.json();
  })
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      containerTitles.insertAdjacentHTML(
        "afterbegin",
        `<button type="button" class="btn btn-primary btn-post list-group-item list-group-item-action" data-bs-toggle="modal" data-bs-target="#staticBackdrop${i}">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="container-title">"${data[i].title}"</h5>
            </div>
          </button>

          <i onclick="" type="button" class="fa-solid fa-pen-to-square"></i>
          <i onclick="" type="button" class="fa-solid fa-trash-can"></i>`
      );

      fetch("http://localhost:3000/users", {
        method: "GET",
      })
        .then(function (response) {
          return response.json();
        })
        .then((json) => {
          console.log(json);

          fetch("http://localhost:3000/comments", {
            method: "GET",
          })
            .then(function (response) {
              return response.json();
            })
            .then((comm) => {
              //     for (let y = 0; y < 10; y++) {
              //     for (let x = 0; x < 500; x++) {
              const modalPost = document.createElement("div");

              //for (let x = 1; x < comm.length; x++) {
              for (let y = 1; y < json.length; y++) {
                if (data[i].userId === json[y].id) {
                  const userNameC = document.querySelector(".user-c");
                  const userNameT = document.querySelector(".user-t");
                  userNameC.textContent = json[y].username;
                  userNameT.textContent = json[y].email;
                  // let postNameC = document.querySelector(".post-c");
                  // let postNameT = document.querySelector(".post-t");
                  // postNameC.textContent = comm[i].body;
                  // postNameT.textContent = comm[i].email;
                }

                // for (let x = 1; x < comm[x]; x++) {
                //   if (json[y].id === comm[x].postId) {
                //     let postNameC = document.querySelector(".post-c");
                //     let postNameT = document.querySelector(".post-t");
                //     postNameC.textContent = comm[x].body;
                //     postNameT.textContent = comm[x].email;
                //   }

                modalPost.innerHTML = `<div class="modal fade" id="staticBackdrop${i}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog">
                  <div class="modal-content">
                        <div class="modal-header">
                           <h5 class="modal-title" id="staticBackdropLabel">${data[i].title}</h5>
                           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                           ${data[i].body}
                        </div>
                        <div class="user-c"></div>
                        <div class="user-t"></div>

                        <div class="modal-footer">
                          <h6>Comments</h6>

                          <p><button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                          Load comments
                        </button>
                      </p>
                      <div class="collapse" id="collapseExample">
                        <div class="card card-body">
                          <div class="post-c">${comm[i].body}</div>
                          <div class="post-t">${comm[i].email}</div>
                        </div>
                      </div>

                        </div>
                  </div>
              </div>
          </div>`;

                document.getElementById("main").appendChild(modalPost);

                console.log(modalPost);
                //        }
                //}
                //  }
              }
            });
        });
    }
  });
