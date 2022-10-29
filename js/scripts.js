window.addEventListener("load", function(){

//contact section anchor
  var contactLink = document.getElementById("contact-me-link");

  contactLink.addEventListener('click', function(){
    // Scroll to a certain element
    document.querySelector("#contact-section").scrollIntoView({
      behavior: 'smooth'
    });
  });


//back to top anchor
  var backToTop = document.getElementById("back-to-top-link");

  backToTop.addEventListener('click', function(){
    // Scroll to a certain element
    document.querySelector("#hero-section").scrollIntoView({
      behavior: 'smooth'
    });
  });

//back to top anchor
  var toPortfolioFilter = document.getElementById("portfolio-filter-link");

  toPortfolioFilter.addEventListener('click', function(){
    // Scroll to a certain element
    document.querySelector("#portfolio-filter-section").scrollIntoView({
      behavior: 'smooth'
    });
  });


//change copyright date
// getElementById("copyright-year").innerHTML();

var currentDate = new Date();
var currentYear = currentDate.getFullYear();

var copyrightSpan = document.getElementById("copyright-year");

copyrightSpan.appendChild(document.createTextNode(currentYear));


}, false);
