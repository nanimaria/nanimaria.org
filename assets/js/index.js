window.addEventListener("scroll", function () {
    var topheader = document.querySelector(".top_header");
    topheader.classList.toggle("active-bg", window.scrollY > 120);
  });

// carousel
$(document).ready(function(){
  $(".owl-carousel.owl-1").owlCarousel({
    center: true,
    items:1,
    loop:true,
    nav:false,
    dots:true,
    eachDots:true,
    autoplay:true,
    smartSpeed:1200,
    margin:10,
    responsive:{
        600:{
            items:1
        }
    },navText:["<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right' ></i>"]
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var yearSpan = document.getElementById('copyright-year');
  var currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
});
 