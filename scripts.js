// JQUERY PRE BANNER

$(function(){
   
   $(".banner").hide().fadeIn(2000);
   
   $(".aboutImg0").hide().fadeIn(4000);
   $(".aboutImg1").hide().fadeIn(5000);
   $(".aboutImg2").hide().fadeIn(3000);
   $(".aboutImg3").hide().fadeIn(6000);
   $(".prveMenu").hide().fadeIn(500);
   $(".druheMenu").hide().fadeIn(1000);
   $(".tretieMenu").hide().fadeIn(1500);
   $(".stvrteMenu").hide().fadeIn(2000);
   $(".piateMenu").hide().fadeIn(2500);
   $(".siesteMenu").hide().fadeIn(3000);


   $(".utulokLogo").hide().fadeIn(3000);
   $(".headerLogo").hide().fadeIn(500);
   $("#nekupuj").hide().fadeIn(5000);

   $(".slideshow-container").delay(1000).fadeIn(500);     //  OPOZDENIE ANIMACIE BANNERA O JEDNU SEKUNDU PRI STARTE STRANKY  
                          



   $(".prveMenu").click(function() {
    $('html, body').animate({
        scrollTop: $("#oUtulku").offset().top
    }, 2000);
});




$(".druheMenu").click(function() {
  $('html, body').animate({
      scrollTop: $("#oAdopcii").offset().top
  }, 2000);
});


   

$(".tretieMenu").click(function() {
  $('html, body').animate({
      scrollTop: $("#vencenie").offset().top
  }, 2000);
});



$(".stvrteMenu").click(function() {
  $('html, body').animate({
      scrollTop: $("#pravidla").offset().top
  }, 2000);
});




$(".piateMenu").click(function() {
  $('html, body').animate({
      scrollTop: $("#naAdopciu").offset().top
  }, 2000);
});




$(".siesteMenu").click(function() {
  $('html, body').animate({
      scrollTop: $("#kontakt").offset().top
  }, 2000);
});



$("#arrowUp").click(function() {
  $('html, body').animate({
      scrollTop: $("body").offset().top
  }, 2000);
});




});

// SLIDESHOW

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 8000); 
}
