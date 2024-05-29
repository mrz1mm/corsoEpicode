const navbar = document.querySelector("nav");
const buttonNavbar = document.querySelector("nav .blackButton");

navbar.style.transition = "background-color 0.5s";
buttonNavbar.style.transition = "background-color 0.5s, color 0.5s";

document.addEventListener("scroll", (e) => {
  if (window.scrollY > 280) {
    navbar.style.backgroundColor = "white";
    buttonNavbar.style.backgroundColor = "#1a8917";
    buttonNavbar.style.color = "white";
  } else {
    navbar.style.backgroundColor = "";
    buttonNavbar.style.backgroundColor = "";
    buttonNavbar.style.color = "";
  }
});
