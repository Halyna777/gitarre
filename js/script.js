window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".nav-menu"),
    menuItem = document.querySelectorAll(".nav-menu__list-item"),
    hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("nav-menu_active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.toggle("nav-menu_active");
    });
  });
});

/*////////////////smooth - scroll //////////////////*/
$('#about-me[href*="#"]').click(function () {
  //about-me ?? oder andere id?
  target = $(this).attr("href");
  $("html").animate(
    {
      scrollTop: $(target).offset().top,
    },
    1000,
    function () {
      location.hash = target;
    }
  );
});
