window.addEventListener("load", function() {

////////////////////
// JS OBFUSCATION

  const email = "hi" + "@" + "sammyharper.com";
  const phone = "(308)" + " " + "530" + "-" + "7649";
  const phoneTel = "3085307649";

  // Email links
  const emailElems = document.querySelectorAll("[data-obfu-email]");
  emailElems.forEach(function(elem) {
    elem.href = "mailto:" + email;
    const textElem = elem.querySelector("[data-obfu-email-text]");
    if (textElem) {
      textElem.textContent = email;
    }
  });

  // Phone links
  const phoneElems = document.querySelectorAll("[data-obfu-phone]");
  phoneElems.forEach(function(elem) {
    elem.href = "tel:" + phoneTel;
    const textElem = elem.querySelector("[data-obfu-phone-text]");
    if (textElem) {
      textElem.textContent = phone;
    }
  });

}, false);
