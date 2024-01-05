(function() {
    'use strict';
  
    var section = document.querySelectorAll(".section");
    var sections = {};
    var i = 0;
  
    Array.prototype.forEach.call(section, function(e) {
      sections[e.id] = e.offsetTop -150;
    });
  
    window.onscroll = function() {
      var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  
      for (i in sections) {
        if (sections[i] <= scrollPosition) {
          document.querySelector('.active').setAttribute('class', ' ');
          document.querySelector('.menu li a[href*=' + i + ']').setAttribute('class', 'active');
        }
      }
    };
  })();

$(function(){
    $(".toogle").on("click", function(){
        if($(".menu").hasClass("action")){
        $(".menu").removeClass("action");
        $(this).html("<ion-icon name='menu-outline'></ion-icon>");
        } else{
        $(".menu").addClass("action");
        $(this).html("<ion-icon name='close-outline'></ion-icon>");
        }
    })
})

let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}