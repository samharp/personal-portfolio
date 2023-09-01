window.addEventListener("load", function(){

  //change copyright date
  // getElementById("copyright-year").innerHTML();

  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();

  var copyrightSpan = document.getElementById("copyright-year");

  copyrightSpan.appendChild(document.createTextNode(currentYear));
  
  
  }, false);
  