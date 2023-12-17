let nav = document.querySelector("nav");
let mainbtn = document.querySelector(".main-btn");

mainbtn.addEventListener("click", function () {
  nav.classList.toggle("aaa");
});
nav.onclick = function () {
  nav.classList.remove("aaa");
};
