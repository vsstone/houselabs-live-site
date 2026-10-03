/* =========================================
   HOUSELABS.LIVE V2
========================================= */

const menuButton =
  document.querySelector(".mobile-menu-button");

const mobileNav =
  document.querySelector(".mobile-nav");


/* MOBILE NAVIGATION */

menuButton.addEventListener("click", () => {

  const isOpen =
    mobileNav.classList.toggle("open");

  menuButton.classList.toggle(
    "active",
    isOpen
  );

  menuButton.setAttribute(
    "aria-expanded",
    isOpen
  );

  document.body.style.overflow =
    isOpen ? "hidden" : "";

});


/* CLOSE MENU AFTER CLICK */

document
  .querySelectorAll(".mobile-nav a")
  .forEach(link => {

    link.addEventListener("click", () => {

      mobileNav.classList.remove("open");

      menuButton.classList.remove("active");

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

      document.body.style.overflow = "";

    });

  });
