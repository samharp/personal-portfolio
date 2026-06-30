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

  if (navMenuTrigger && navItemsContainer) {
    navMenuTrigger.addEventListener("click", function(){
      navItemsContainer.classList.toggle("show");
    });
  }

  // change which pixel portrait is shown
  let pixelPortraitElems = document.querySelectorAll("[data-pixel-portrait]");
  const date = new Date();
  const currentMonth = date.getMonth();

  // go through defined seasons
  const getSeason = function(target) {

    // custom defined seasons as experienced in Omaha, NE
    const customSeasons = {
      "winter": [0, 1, 11],
      "spring": [2, 3, 4],
      "summer": [5, 6, 7, 8],
      "fall": [9, 10]
    }
    
    // go through seasons
    for(const season in customSeasons){

      const months = customSeasons[season];

      for(let x = 0; x < months.length; x++){
        if(months[x] == target){
          return season;
        }
      }
    }
  };

  const season = getSeason(currentMonth);

  pixelPortraitElems.forEach(function(elem) {
    elem.src = `img/self-pixel-portrait_${season}.png`;
  });

}, false);
  