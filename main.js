var swiper = new Swiper(".swiper", {
    effect: "cube",
    allowTouchMove: false,
    grabCursor: false,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20, // Correction : "shadowsOffset" à "shadowOffset"
      shadowScale: 0.94,
    },
    mousewheel: true
  });
  
  swiper.sliderMove = function(s, e) {
    console.log(s);
  }
  
  function Navigate(indx) {
    // Correction des sélecteurs CSS et utilisation de querySelectorAll et forEach
    document.querySelectorAll(".links li").forEach((li, index) => {
      if (index === indx) {
        li.classList.add("activeLink");
      } else {
        li.classList.remove("activeLink");
      }
    });
    swiper.slideTo(indx, 1000, true);
  }