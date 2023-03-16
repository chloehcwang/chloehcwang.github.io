(function () {
  "use strict";
  // gastric page
  document.addEventListener(
    "scroll",
    function (event) {
      let navbar_height;
      if (window.scrollY > 100) {
        // gastric page
        document.getElementById("navbar-gastric").classList.add("fixed-top");
        // add padding top to show content behind navbar
        navbar_height = document.querySelector(".navbar").offsetHeight;
        document.body.style.paddingTop = navbar_height + "px";
      } else {
        // gastric page
        document.getElementById("navbar-gastric").classList.remove("fixed-top");
        // remove padding top from body
        document.body.style.paddingTop = "0";
      }
    },
    true /*Capture event*/
  );
  // pbtech page
  document.addEventListener(
    "scroll",
    function (event) {
      let navbar_height;
      if (window.scrollY > 100) {
        // pbtech page
        document.getElementById("navbar-pbtech").classList.add("fixed-top");

        // add padding top to show content behind navbar
        navbar_height = document.querySelector(".navbar").offsetHeight;
        document.body.style.paddingTop = navbar_height + "px";

        // nav item list
        const navList = [
          { id: 1, value: "pb_heading_discover" },
          { id: 2, value: "pb_heading_define" },
          { id: 3, value: "pb_heading_ideation" },
        ];
      } else {
        // pbtech page
        document.getElementById("navbar-pbtech").classList.remove("fixed-top");
        // remove padding top from body
        document.body.style.paddingTop = "0";
      }
    },
    true /*Capture event*/
  );

  // Carousel
  // Variables
  let prev = document.querySelector(".prev");
  let next = document.querySelector(".next");
  let imgs = document.querySelectorAll(".carousel-img");
  let dots = document.querySelectorAll(".dot");
  let captions = document.querySelectorAll(".carousel-caption");
  let totalImgs = imgs.length;
  let imgPosition = 0;

  // Event Listeners
  next.addEventListener("click", nextImg);
  prev.addEventListener("click", prevImg);

  // Update Position
  function updatePosition() {
    //   Images
    for (let img of imgs) {
      img.classList.remove("visible");
      img.classList.add("hidden");
    }
    imgs[imgPosition].classList.remove("hidden");
    imgs[imgPosition].classList.add("visible");
    //   Dots
    for (let dot of dots) {
      dot.className = dot.className.replace(" active", "");
    }
    dots[imgPosition].classList.add("active");
    //   Captions
    for (let caption of captions) {
      caption.classList.remove("visible");
      caption.classList.add("hidden");
    }
    captions[imgPosition].classList.remove("hidden");
    captions[imgPosition].classList.add("visible");
  }

  // Next Img
  function nextImg() {
    if (imgPosition === totalImgs - 1) {
      imgPosition = 0;
    } else {
      imgPosition++;
    }
    updatePosition();
  }
  //Previous Image
  function prevImg() {
    if (imgPosition === 0) {
      imgPosition = totalImgs - 1;
    } else {
      imgPosition--;
    }
    updatePosition();
  }

  // Dot Position
  dots.forEach((dot, dotPosition) => {
    dot.addEventListener("click", () => {
      imgPosition = dotPosition;
      updatePosition(dotPosition);
    });
  });
})();
