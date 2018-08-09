import "../sass/main.scss";

document.addEventListener("DOMContentLoaded", function() {
  const hamburgerButton = document.getElementById("hamburger-button");
  const listSmall = document.getElementsByClassName("link-list-small")[0];
  const smallMenuTexts = document.getElementsByClassName("small-menu-text");

  hamburgerButton.addEventListener("click", function(e) {
    listSmall.classList.toggle("list-visible");
  });

  [...smallMenuTexts].forEach(el =>
    el.addEventListener("click", function(e) {
      console.log(e);
      e.stopPropagation();
    })
  );
});
