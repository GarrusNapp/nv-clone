export function initCarousel() {
  const carousel = document.getElementById("carousel-list");
  const leftArrows = document.getElementsByClassName("arrow-left");
  const rightArrows = document.getElementsByClassName("arrow-right");

  let initialPos = 0;
  let initialOffset = 0;
  const transitionTo = (position, width) => {
    return Math.round(position / width) * width;
  };
  const handleMove = e => {
    const dx = initialPos - e.clientX;
    const newPosition = initialOffset - dx;
    const leftBound = 0;
    const rightBound = -(carousel.children.length - 1) * carousel.clientWidth;
    if (newPosition > 0) {
      carousel.style.left = leftBound + "px";
    } else if (newPosition < rightBound) {
      carousel.style.left = rightBound + "px";
    } else {
      carousel.style.left = initialOffset - dx + "px";
    }
  };

  carousel.addEventListener("mousedown", function(e) {
    e.preventDefault();
    if ([...leftArrows, ...rightArrows].includes(e.target)) {
      return;
    }
    carousel.classList.remove("carousel-transition");
    initialPos = e.clientX;
    initialOffset = carousel.offsetLeft;
    carousel.addEventListener("mousemove", handleMove);
  });

  document.addEventListener("mouseup", function(e) {
    carousel.classList.add("carousel-transition");
    carousel.style.left =
      transitionTo(carousel.offsetLeft, carousel.clientWidth) + "px";
    carousel.removeEventListener("mousemove", handleMove);
  });

  window.addEventListener("resize", function() {
    carousel.style.left =
      transitionTo(carousel.offsetLeft, carousel.clientWidth) + "px";
  });
  [...rightArrows].forEach(el =>
    el.addEventListener("click", function(e) {
      carousel.style.left = parseInt(carousel.style.left, 10) - carousel.clientWidth + "px";
    })
  );

  [...leftArrows].forEach(el =>
    el.addEventListener("click", function(e) {
      carousel.style.left = parseInt(carousel.style.left, 10) + carousel.clientWidth + "px";
    })
  );

}
