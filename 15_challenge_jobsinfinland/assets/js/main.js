const backToButton = document.getElementById("back-to-top");
const width = window.matchMedia("(max-width: 576px)");
const search = document.getElementById("search-form");
const navbar = document.getElementById("main-nav");
const main = document.getElementById("main-content");
const sticky = navbar.offsetTop;

// BACK TO TOP BUTTON
// based on tutorial: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

window.onscroll = () => scrollCheck();
window.onscroll = () => stickyMenu();

const scrollCheck = () =>
  (document.body.scrollTop > 200 ||
  (document.documentElement.scrollTop > 200 && !width.matches))
    ? (backToButton.style.display = "flex")
    : (backToButton.style.display = "none");

const backToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

// SHOW / HIDE SEARCH FORM

const showHide = () => {
  search.classList.toggle("hide");
};

// FIXED MENU
// based on tutorial: https://www.w3schools.com/howto/howto_js_navbar_sticky.asp

const stickyMenu = () => {
  if (window.pageYOffset >= sticky && !width.matches) {
    navbar.classList.add("sticky");
    main.classList.add("space");
  } else {
    navbar.classList.remove("sticky");
    main.classList.remove("space");
  }
};