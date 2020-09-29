// BACK TO TOP BUTTON
// based on tutorial: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

const backToButton = document.getElementById("back-to-top");
const width = window.matchMedia("(max-width: 576px)");

window.onscroll = () => scrollFunction();


const scrollCheck = () =>
  (document.body.scrollTop > 200 ||
  (document.documentElement.scrollTop > 200 && !width.matches))
    ? (backToButton.style.display = "flex")
    : (backToButton.style.display = "none");

const backToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
