var posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" }
];

function getPosts() {
  let body = "";
  setTimeout(() => {
    posts.forEach((post, index) => {
      body += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = body;
  }, 500);
}

function failurePost() {
  alert("wrong format of post");
}

function addPost(post, successCallback, failureCallback) {
  setTimeout(() => {
    if (post.title && post.body) {
      posts.push(post);
      successCallback();
    } else {
      failureCallback();
    }
  }, 1500);
}

addPost(
  { title: "Post Three", newBody: "This is post three" },
  getPosts,
  failurePost
);
