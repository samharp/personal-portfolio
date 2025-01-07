window.addEventListener("load", function(){

  console.log("[samharp] projects-scripts.js loaded");

  // variables

  // where the sections will go
  var itemsContainer = document.querySelector("[data-sections-container]");

// ************************************* 
// LOAD JSON DATA
  const jsonFileLocation = "/js/projects.json";

  function getProjects() {
    // returns promise
    return fetch(jsonFileLocation).then(function(response){
      return response.json();
    });
  }

  initialBuild();

  // on first build, build all projects
  function initialBuild(){
    getProjects().then(function(response){
      // Access the value inside the `then`
      let projects = response.projectItems;
    
      clearProjects();
      buildProjects(projects);
      showPhotoSection();
    })
  }

  // get filter triggers
  var portfolioFilterButtons = document.querySelectorAll("[data-filter-button]");

  if(portfolioFilterButtons.length > 0){
    for(x = 0; x < portfolioFilterButtons.length; x++){
      portfolioFilterButtons[x].addEventListener('click', getFilterBy);
    }
  }

  function getFilterBy(){
    var filterByVal = this.getAttribute("data-filter");

    setFilter(filterByVal);
  }

  function setFilter(newFilter){

    if(newFilter == "all"){
      getProjects().then(function(response){
        // Access the value inside the `then`
        let projects = response.projectItems;
      
        clearProjects();
        buildProjects(projects);
        showPhotoSection();
      })
    }else if(newFilter == "photography"){
      console.log("[samharp] photography time!");

      getProjects().then(function(response){
        clearProjects();
        showPhotoSection();
      })
    }else{
      getProjects().then(function(response){
        // Access the value inside the `then`
        let projects = response.projectItems;
        let filteredProjects = [];
  
        // for each project
        for(let x = 0; x < projects.length; x++){
  
          // counter for if tag exists on this element
          let tagExist = 0;
  
          // get this project's tags
          var tagsArray = projects[x].projectTags;
          // check all of their tags
          for(let y = 0; y < tagsArray.length; y++){
            // check projects for this in their tags
            if(tagsArray[y] == newFilter){
              // add to tagExist counter
              tagExist++;
            }
          }
  
          // add the array item to the filteredProjects Array
          if(tagExist > 0){
            console.log("[samharp] tag exists!");
            filteredProjects.push(projects[x]);
          }
        }
  
        clearProjects();
        buildProjects(filteredProjects);
      })
    }
    
    // Scroll to a certain element
    document.querySelector("#portfolio-sections-container").scrollIntoView({
      behavior: 'smooth'
    });
  }


  function clearProjects(){
    console.log("[samharp] clearing projects...")
    itemsContainer.innerHTML = "";
    itemsContainer.classList.remove("show-photo");
  }


  function buildProjects(projectsArray){
    console.log("[samharp] building projects...");

    // created project section
    var createdSection;

    // item template
    var itemTemplate = document.getElementById("section-template");
    var itemTemplateElem = itemTemplate.content.querySelector("[data-project-section]");


    for(let x = 0; x < projectsArray.length; x++){

      createdSection = document.importNode(itemTemplateElem, true);

      // set ID
      createdSection.id = projectsArray[x].projectID + "-section";

      // set innerHTML of title
      createdSection.querySelector("[data-project-title]").innerHTML = projectsArray[x].projectTitle;
      createdSection.querySelector("[data-project-title]").dataHighlightText = projectsArray[x].projectTitle;

      // set caption
      createdSection.querySelector("[data-project-caption]").innerHTML = projectsArray[x].projectCaption;

      //set img
      createdSection.querySelector("[data-project-thumbnail]").src = projectsArray[x].projectThumbnail;
      
      // set links (if one exists)
      if(projectsArray[x].projectLinkTitle !== ""){
        // set img link
        createdSection.querySelector("[data-project-thumbnail-link]").href = projectsArray[x].projectLinkHref;
      
        // set text link
        var addlLink = createdSection.querySelector("[data-project-link]");
        addlLink.innerHTML = projectsArray[x].projectLinkTitle;

        // fill in href
        addlLink.href = projectsArray[x].projectLinkHref;
      }

      // project tags
      var arr = projectsArray[x].projectTags;

      // set text
      var tagText = arr.join(", ");
      tagText = tagText.replaceAll("-", " ");
      createdSection.querySelector("[data-project-tags-container]").innerHTML = tagText;
      
      // set filter values
      createdSection.setAttribute('data-filter', arr.join(" "));

      // append to container
      itemsContainer.appendChild(createdSection);
    }
  }

  function showPhotoSection(){
    itemsContainer.classList.add("show-photo");
  }

  ///////////////
  
}, false);