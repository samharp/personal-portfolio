window.addEventListener("load", function(){

  //change copyright date
  // var currentDate = new Date();
  // var currentYear = currentDate.getFullYear();
  // var copyrightSpan = document.getElementById("copyright-year");
  // copyrightSpan.appendChild(document.createTextNode(currentYear));

  // RECOMMENDED & UPDATED solution:
  // Utilize the 11ty Starter "currentYear" shortcode by including two "{" and currentYear inside.

  // LEGACY solution:
  // Replace the innerHTML on "current-year-text" with the current year
  // change copyright date
  const currentYear = new Date().getFullYear();

  // Try modern element first, fallback to legacy
  const target =
    document.getElementById("current-year-text") ||
    document.querySelector(".copyright-date");

  if (target) {
    target.textContent = currentYear;
  }


  // on click, open/close mobile nav menu
  const navMenuTrigger = document.querySelector("[data-trigger-menu-nav]");
  const navItemsContainer = document.querySelector("[data-trigger-menu-nav-items]");
  // #main-nav-items-container

  navMenuTrigger.addEventListener("click", function(){
    navItemsContainer.classList.toggle("show");
  });

}, false);
  