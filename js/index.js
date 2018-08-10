import "../sass/main.scss";
import { initCarousel } from "./carousel";
import { initMenu } from "./menu";
require("../index.html");

document.addEventListener("DOMContentLoaded", function() {
  initMenu();
  initCarousel();
});
