"use strict";
// HTML Refrences & Their Event Listener
const error200Btn = document.querySelector(".E200");
error200Btn.addEventListener("click", function () {
  ajaxFunction("GET", "https://jsonplaceholder.typicode.com/posts/");
});
const error201Btn = document.querySelector(".E201");
error201Btn.addEventListener("click", function () {
  ajaxFunction("POST", "https://jsonplaceholder.typicode.com/posts/");
});
const error300Btn = document.querySelector(".E300");
error300Btn.addEventListener("click", function () {
  ajaxFunction("GET", "https://httpstat.us/300");
});
const error404Btn = document.querySelector(".E404");
error404Btn.addEventListener("click", function () {
  ajaxFunction("GET", "https://httpstat.us/404");
});
const error500Btn = document.querySelector(".E500");
error500Btn.addEventListener("click", function () {
  ajaxFunction("GET", "https://httpstat.us/500");
});
// Mp3 Refrence
const mp3 = document.querySelector(".mahboob");
// List refrence
const ErrorResponse = document.querySelector(".ErrorResponse");

//200 ajax
function ajaxFunction(requestType, myUrl) {
  const xhr = new XMLHttpRequest(requestType, myUrl);
  xhr.open(requestType, myUrl, true);
  //200 ajax Event Listener
  xhr.onreadystatechange = function ajaxValidation() {
    if (this.readyState === XMLHttpRequest.DONE) {
      console.log(this.status, this.responseText);
      ErrorResponse.innerHTML += `<span class="text-light text-center rounded-3" style="font-size: 30px;">error code::${this.status}</span>`;
      // SweetAlert Validation
      const swalFireTypes = {
        200: { title: "OK!", icon: "success", draggable: true },
        201: { title: "Created!", icon: "success", draggable: true },
        300: {
          title: "The request has more than one possible response",
          text: "Error_300",
          icon: "question",
        },
        404: {
          title: "Oops...",
          text: "Error_404(not found)",
          imageUrl: "docs/myFriend2.jpg",
          imageWidth: 400,
          imageHeight: 480,
          imageAlt: "Custom image",
        },
        500: {
          title: "Internal Server Error",
          text: "❤از صبر و شکیبایی شما سپاسگرازیم",
          imageUrl: "docs/myFriend.jpg",
          imageWidth: 400,
          imageHeight: 400,
          imageAlt: "Custom image",
        },
      };
      const response = swalFireTypes[this.status];
      if (response) {
        Swal.fire(response);
        if (this.status === 404 || this.status === 500) {
          mp3.play();
        }
      }
    }
  };
  xhr.send();
}
