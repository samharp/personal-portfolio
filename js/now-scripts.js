window.addEventListener("load", function(){

  console.log("[samharp] now-scripts.js loaded");

// STICKY ASIDE
  // on startup
  var nowAside = document.getElementById("now-info-container");

  function stickAside(nowAside){

    var nowSection = document.getElementById("now-section");
    var nowSectionTop = nowSection.offsetTop;

    if(window.scrollY >= nowSectionTop){
      nowAside.classList.add("stick");
    }
    else{
      nowAside.classList.remove("stick");
    }

    // get the bottom of the screen
    var windowBottom = window.scrollY + window.innerHeight;

    var footerSection = document.getElementsByTagName("footer")[0];
    var footerSectionTop = footerSection.offsetTop;

    if(windowBottom >= footerSectionTop){
      newTop = -1 * (windowBottom - footerSectionTop);
      nowAside.style.marginTop = newTop + "px";
    }
    else{
      // reset
      nowAside.style.marginTop = "0px";
    }
    
  }

  this.addEventListener("scroll", function(){
    
    var nowAside = document.getElementById("now-info-container");

    if(nowAside !== null){
      stickAside(nowAside);
    }
  });


//BUILD NOW ITEMS
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

        var sysCurrentDate = new Date();

        // console.log(sysCurrentDate);
        
        for(let x = 0; x < data.nowItems.length; x++){

          // if(data.nowItems[x].itemDateExpire){
            console.log("existing data for itemDateExpire: " + data.nowItems[x].itemDateExpire);
            var itemExpireDate = new Date(data.nowItems[x].itemDateExpire);

            console.log("writing data for itemExpireDate: " + itemExpireDate);

            if(sysCurrentDate > itemExpireDate){
              console.log("item expired: " + data.nowItems[x].itemTitle);
            }else{
              console.log("item active: " + data.nowItems[x].itemTitle);

              createdItem = document.importNode(itemTemplateElem, true);

              // set innerHTML of title
              createdItem.querySelector("[data-item-title]").innerHTML = data.nowItems[x].itemTitle;

              // set caption
              createdItem.querySelector("[data-item-caption]").innerHTML = data.nowItems[x].itemCaption;

              // set category
              createdItem.classList.add(data.nowItems[x].itemCategory);

              // create additional link; if applicable
              if(data.nowItems[x].linkTitle !== ""){
                addlLink = createdItem.querySelector("[data-item-link]");
                addlLink.innerHTML = data.nowItems[x].linkTitle;

                // fill in href
                addlLink.href = data.nowItems[x].linkHref;

                // show link
                // addlLink.classList.add("standard-link");
                addlLink.classList.add("text-link");
              }

              // append to link container
              itemsContainer.appendChild(createdItem);
            }

          // }
          
        }
      })

  ///////////////
  
}, false);