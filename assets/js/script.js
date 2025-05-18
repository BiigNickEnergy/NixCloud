let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Toggle menu icon and navbar
menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');
};

// Highlight the active nav link
const navLinks = document.querySelectorAll(".navbar a");
const currentPath = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
  const href = link.getAttribute("href");

  if (href === currentPath || (href === "index.html" && currentPath === "")) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});
