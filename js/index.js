import "../sass/main.scss";
require('../index.html')

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

  const carousel = document.getElementById("carousel-list");
  let initialPos = 0;
  let initialOffset = 0;
  const handleMove = e => {
    let dx = initialPos - e.clientX;
    let newPosition = initialOffset - dx;
    carousel.style.left = newPosition < 0 ? initialOffset - dx + "px" : "0px"
  }

  carousel.addEventListener("mousedown", function(e) {
    initialPos = e.clientX;
    initialOffset = carousel.offsetLeft;
    carousel.addEventListener("mousemove", handleMove)
  })

  document.addEventListener("mouseup", function(e) {
    carousel.removeEventListener("mousemove", handleMove)
  })
});
