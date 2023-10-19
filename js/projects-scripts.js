window.addEventListener("load", function(){

  console.log("projects-scripts.js loaded");

  // created project section
  var createdSection;

  // where the sections will go
  var itemsContainer = document.querySelector("[data-sections-container]");

  // item template
  var itemTemplate = document.getElementById("section-template");
  var itemTemplateElem = itemTemplate.content.querySelector("[data-project-section]");

  // get JSON data, build items
  fetch("/js/projects.json")
    .then(response => response.json())
      .then(data => {

        for(let x = 0; x < data.projectItems.length; x++){

          createdSection = document.importNode(itemTemplateElem, true);

          // set ID
          createdSection.id = data.projectItems[x].projectID + "-section";

          // set innerHTML of title
          createdSection.querySelector("[data-project-title]").innerHTML = data.projectItems[x].projectTitle;
          createdSection.querySelector("[data-project-title]").dataHighlightText = data.projectItems[x].projectTitle;

          // set caption
          createdSection.querySelector("[data-project-caption]").innerHTML = data.projectItems[x].projectCaption;

          //set img
          createdSection.querySelector("[data-project-thumbnail]").src = data.projectItems[x].projectThumbnail;
          

          // set links (if one exists)
          if(data.projectItems[x].projectLinkTitle !== ""){
            // set img link
            createdSection.querySelector("[data-project-thumbnail-link]").href = data.projectItems[x].projectLinkHref;
          
            // set text link
            addlLink = createdSection.querySelector("[data-project-link]");
            addlLink.innerHTML = data.projectItems[x].projectLinkTitle;

            // fill in href
            addlLink.href = data.projectItems[x].projectLinkHref;
          }

          // project tags
          var arr = data.projectItems[x].projectTags;

          createdSection.querySelector("[data-project-tags-container]").innerHTML = arr.join(", ");
          

          // append to container
          itemsContainer.appendChild(createdSection);
        }
      })

  ///////////////
  
}, false);