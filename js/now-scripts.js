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

  ///////////////
  
}, false);