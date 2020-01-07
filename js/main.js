// Default DevCorner JavaScript Setting
// Get the modal
var modal = document.getElementById('_myModal');

// Get the button that opens the modal
var btn = document.getElementById("_myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("_close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// SlideShow
var sliderSelector = '.swiper-container',
options = {
  init: false,
  loop: true,
  speed:800,
  slidesPerView: 2, // or 'auto'
  // spaceBetween: 10,
  centeredSlides : true,
  effect: 'coverflow', // 'cube', 'fade', 'coverflow',
  coverflowEffect: {
    rotate: 50, // Slide rotate in degrees
    stretch: 0, // Stretch space between slides (in px)
    depth: 100, // Depth offset in px (slides translate in Z axis)
    modifier: 1, // Effect multipler
    slideShadows : true, // Enables slides shadows
  },
  grabCursor: true,
  parallax: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1023: {
      slidesPerView: 1,
      spaceBetween: 0
    }
  },
  // Events
  on: {
    imagesReady: function(){
      this.el.classList.remove('loading');
    }
  }
};
var mySwiper = new Swiper(sliderSelector, options);

// Initialize slider
mySwiper.init();
