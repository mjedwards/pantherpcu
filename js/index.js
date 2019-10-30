let navbar = document.querySelector(".nav");
let headerItems = document.querySelector(".header-items");

function navAnimation() {
  window.addEventListener("scroll", function() {
    if (window.scrollY != 0) {
      navbar.setAttribute(
        "style",
        "position:fixed; background: #197ba8; z-index: 6; width: 100%;"
      );
      headerItems.setAttribute("style", "margin-top: 166px;");
    } else {
      navbar.setAttribute(
        "style",
        "position:initial; background: none; z-index: 4"
      );
      headerItems.setAttribute("style", "margin-top: none;");
    }
  });
}

navAnimation();
