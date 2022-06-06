let navbarIcon = document.querySelector(".navbar-icon");
let navbarIconContainer = document.querySelector(".navbar-toggler");
let navbarCollabse = document.querySelector(".navbar-collapse");
navbarIconContainer.onclick = (e) => {
  if (!navbarIconContainer.classList.contains("collapsed")) {
    navbarIcon.firstElementChild.style.setProperty(
      "transform",
      "rotate(45deg) translate(0 ,1px)"
    );
    navbarIcon.firstElementChild.style.setProperty("margin-bottom", "0");
    navbarIcon.firstElementChild.nextElementSibling.style.display = "none";
    navbarIcon.lastElementChild.style.setProperty(
      "transform",
      "rotate(-45deg) translate(0,-1px)"
    );
    e.currentTarget.style.paddingTop = "17px";
    e.currentTarget.style.paddingBottom = "17px";
  } else {
    navbarIcon.firstElementChild.style.setProperty(
      "transform",
      "rotate(0deg) translate(0 ,0px)"
    );
    navbarIcon.firstElementChild.style.setProperty("margin-bottom", "6px");
    navbarIcon.firstElementChild.nextElementSibling.style.display = "block";
    navbarIcon.lastElementChild.style.setProperty(
      "transform",
      "rotate(0deg) translate(0,0px)"
    );
    e.currentTarget.style.removeProperty("padding-top");
    e.currentTarget.style.removeProperty("padding-bottom");
  }
};
