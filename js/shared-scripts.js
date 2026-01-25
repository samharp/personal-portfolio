window.addEventListener("load", function(){

  //change copyright date

  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();

  var copyrightSpan = document.getElementById("copyright-year");

  copyrightSpan.appendChild(document.createTextNode(currentYear));


  // on click, open/close mobile nav menu
  const navMenuTrigger = document.querySelector("[data-trigger-menu-nav]");
  const navItemsContainer = document.querySelector("[data-trigger-menu-nav-items]");
  // #main-nav-items-container

  navMenuTrigger.addEventListener("click", function(){
    navItemsContainer.classList.toggle("show");
  });

}, false);
  