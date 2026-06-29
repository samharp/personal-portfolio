// filter chip functionality for projects
window.addEventListener("load", function(){

  console.log("[samharp] projects-scripts.js loaded");

  // =========
  // variables
  // =========

  // get filter buttons/chips
  const filterChips = document.querySelectorAll("[data-filter-toggle]");
  // create filters array. only values in this array will be shown
  let filterAs = [];
  // get project sections/cards
  const projectCards = document.querySelectorAll("[data-project-section]");

  filterChips.forEach(chip => {
    // chip specific variables
    const filterChipValue = chip.dataset.filter;

    chip.addEventListener("change", () => {

      // change style/accessibility state
      chip.parentNode.setAttribute("aria-checked", chip.checked.toString());

      // if checked, add filter to array
      if(chip.checked){
        filterAs.push(filterChipValue);
      }else{
        // else, remove filter from array
        const index = filterAs.indexOf(filterChipValue);

        if (index > -1) {
          filterAs.splice(index, 1);
        }
      }

      // only show cards that match the filters in array
      filterProjects();

    });
  });

  function filterProjects(){
    projectCards.forEach(project => {
      const projectFilterValues = project.dataset.filter.split(" ");
      // check if any of the item's tags are in the filter array
      let showCard = false;
      
      showCard = filterAs.every(tag => projectFilterValues.includes(tag));

      if(showCard){
        project.removeAttribute("hidden");
      }else{
        project.setAttribute("hidden", "");
      }
    });
  }

  // function showPhotoSection(){
  //   itemsContainer.classList.add("show-photo");
  // }
  ///////////////
  
}, false);