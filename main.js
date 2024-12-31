"use strict";
// HTML Refrences
const E200 = document.querySelector(".E200");
E200.addEventListener("click", meow200);

const E201 = document.querySelector(".E201");
E201.addEventListener("click", meow201);

const E300 = document.querySelector(".E300");
E300.addEventListener("click", meow300);

const E404 = document.querySelector(".E404");
E404.addEventListener("click", meow404);

const E500 = document.querySelector(".E500");
E500.addEventListener("click", meow500);

const mahboob = document.querySelector(".mahboob");

const ErrorResponse = document.querySelector(".ErrorResponse");

function meow200() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/", true);

  xhr.onreadystatechange = function meow200huh() {
    if (this.readyState === XMLHttpRequest.DONE) {
      if (this.status === 200) {
        console.log("done", this.status, this.responseText);
        ErrorResponse.innerHTML += `<span class="text-light text-center rounded-3" style="font-size: 30px;">error code::${this.status}<br>"200" stands for "OK" The request was successful and server  sent back the data correctly</span>`;
        Swal.fire({
          title: "OK!",
          icon: "success",
          draggable: true,
        });
      } else {
        console.log("notdone", this.status, this.responseText);
        ErrorResponse.innerHTML += `<span class="text-light text-center rounded-3" style="font-size: 30px;">error code::${this.status}</span>`;
      }
    }
  };
  xhr.send();
}

function meow201() {
  const xhr = new XMLHttpRequest();

  xhr.open("post", "https://jsonplaceholder.typicode.com/posts/", true);

  xhr.onreadystatechange = function meow201huh() {
    console.log(this);
    console.log(XMLHttpRequest.DONE);

    if (this.readyState === XMLHttpRequest.DONE) {
      if (this.status === 201) {
        console.log("done", this.status, this.responseText);
        ErrorResponse.innerHTML += `<span class="text-light text-center rounded-3" style="font-size: 30px;">error code::${this.status}</span>`;
        Swal.fire({
          title: "Created!",
          icon: "success",
          draggable: true,
        });
      } else {
        console.log("notdone", this.status, this.responseText);
        ErrorResponse.innerHTML += `<span class="text-light text-center rounded-3" style="font-size: 30px;">error code::${this.status} ${this.responseText}</span>`;
      }
    }
  };
  xhr.send();
}

function meow300() {
  console.log("popopopopopopo");
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://httpstat.us/300", true);

  xhr.onreadystatechange = function meow300huh() {
    console.log(this);
    console.log(XMLHttpRequest.DONE);

    if (this.readyState === XMLHttpRequest.DONE) {
      if (this.status === 300) {
        console.log("done", this.status, this.responseText);
        ErrorResponse.innerHTML += `<span class="text-light text-center rounded-3" style="font-size: 30px;">error code::${this.status} <br> ${this.responseText}</span>`;
        Swal.fire({
          title: "The request has more than one possible response",
          text: "Error_300",
          icon: "question",
        });
      } else {
        console.log("notdone", this.status, this.responseText);
        ErrorResponse.innerHTML += `<span class="text-light text-center rounded-3" style="font-size: 30px;">error code::${this.status} <br> ${this.responseText}</span>`;
      }
    }
  };
  xhr.send();
}

function meow404() {
  console.log("popopopopopopo");
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://httpstat.us/404", true);

  xhr.onreadystatechange = function meow404huh() {
    console.log(this);
    console.log(XMLHttpRequest.DONE);

    if (this.readyState === XMLHttpRequest.DONE) {
      if (this.status === 404) {
        console.log("done", this.status, this.responseText);
        ErrorResponse.innerHTML += `<span class="text-light text-center rounded-3" style="font-size: 30px;">error code::${this.status} <br> ${this.responseText}</span>`;
        Swal.fire({
            title: "Oops...",
            text: "Error_404(not found)",
            imageUrl: "docs/myFriend2.jpg",
            imageWidth: 400,
            imageHeight: 480,
            imageAlt: "Custom image",
          });
        mahboob.play();
      } else {
        console.log("notdone", this.status, this.responseText);
        ErrorResponse.innerHTML += `<span class="text-light text-center rounded-3" style="font-size: 30px;">error code::${this.status} <br> ${this.responseText}</span>`;
      }
    }
  };
  xhr.send();
}

function meow500() {
  console.log("popopopopopopo");
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://httpstat.us/500", true);

  xhr.onreadystatechange = function meow500huh() {
    console.log(this);
    console.log(XMLHttpRequest.DONE);

    if (this.readyState === XMLHttpRequest.DONE) {
      if (this.status === 500) {
        console.log("done", this.status, this.responseText);
        ErrorResponse.innerHTML += `<span class="text-light text-center rounded-3" style="font-size: 30px;">error code::${this.status} <br> ${this.responseText}</span>`;
        Swal.fire({
          title: "Internal Server Error",
          text: "❤از صبر و شکیبایی شما سپاسگرازیم",
          imageUrl: "docs/myFriend.jpg",
          imageWidth: 400,
          imageHeight: 400,
          imageAlt: "Custom image",
        });
        mahboob.play();
      } else {
        console.log("notdone", this.status, this.responseText);
        ErrorResponse.innerHTML += `<span class="text-light text-center rounded-3" style="font-size: 30px;">error code::${this.status} <br> ${this.responseText}</span>`;
      }
    }
  };
  xhr.send();
}
