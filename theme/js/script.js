/**
 * WEBSITE: https://chloehcwang.github.io
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

(function () {
  "use strict";

  document.addEventListener(
    "scroll",
    function (event) {
      let navbar_height;
      if (window.scrollY > 100) {
        document.getElementById("navbar-gastric").classList.add("fixed-top");
        // add padding top to show content behind navbar
        navbar_height = document.querySelector(".navbar").offsetHeight;
        document.body.style.paddingTop = navbar_height + "px";
      } else {
        document.getElementById("navbar-gastric").classList.remove("fixed-top");
        // remove padding top from body
        document.body.style.paddingTop = "0";
      }
    },
    true /*Capture event*/
  );
})();
