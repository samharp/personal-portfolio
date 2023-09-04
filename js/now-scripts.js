window.addEventListener("load", function(){

  console.log("now-scripts.js loaded");

  // created link row
  var createdItem;

  // where the links will go
  var itemsContainer = document.querySelector("[data-items-container]");

  // item template
  var itemTemplate = document.getElementById("item-template");
  var itemTemplateElem = itemTemplate.content.querySelector("[data-item-row]");

  // get JSON data
  fetch("/js/now.json")
    .then(response => response.json())
      .then(data => {

        for(let x = 0; x < data.nowItems.length; x++){

          createdItem = document.importNode(itemTemplateElem, true);

          // set innerHTML of title
          createdItem.querySelector("[data-item-title]").innerHTML = data.nowItems[x].itemTitle;

          // set caption
          createdItem.querySelector("[data-item-caption]").innerHTML = data.nowItems[x].itemCaption;

          // set category
          createdItem.classList.add(data.nowItems[x].itemCategory);

          // append to link container
          itemsContainer.appendChild(createdItem);
        }
      })

  ///////////////
  
}, false);