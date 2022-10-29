//on load, namespace
window.addEventListener("load", function(){

  //listen for category filter link click
  var portfolioSortLinks = document.getElementsByClassName("filter-portfolio-link");
  for(x = 0; x < portfolioSortLinks.length; x++){
    portfolioSortLinks[x].addEventListener('click', getFilterBy);
  }

  function getFilterBy(){
    var filterByVal = this.getAttribute("data-filter");
    //class to be added
    filterByVal = "show-" + filterByVal;
    setFilterBy(filterByVal);
  }

  function setFilterBy(newFilter){
    var portfolioItemsContainer = document.querySelector("#portfolio-sections-container");

    portfolioItemsContainer.className = "portfolio-sections-container";
    portfolioItemsContainer.classList.add(newFilter);

    // Scroll to a certain element
    document.querySelector(".portfolio-sections-container").scrollIntoView({
      behavior: 'smooth'
    });
  }
}, false);
