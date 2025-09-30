// Denne henter hamburger-menu elementet 
const hamMenu = document.querySelector('.ham-menu');

// denne henter off-screen menuen
const offScreenMenu = document.querySelector('.off-screen-menu');

//Når man vælger og klikke på hamburger menuen så aktiveres denne. 
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})
//Dette er til når hele dokumentet er koadet. 
document.addEventListener("DOMContentLoaded", () => {
  //Dette går ind og toggler selve dropdown menuen 
  const toggleBtn = document.querySelector(".dropdown-toggle");
  // Denne henter mid menuen som den skal vise frem samt skjule.
  const midMenu = document.querySelector(".mid-menu");
  // dette er til når der klikkes på dropdown knappen
  toggleBtn.addEventListener("click", (e) => {
    e.preventDefault();
    midMenu.classList.toggle("active");
  });
});
//Denne går ind og henter den knap som har id "book-nun"
const booknu = document.getElementById("book-nu");
// hvis knappen så findes så bliver der tilføjet et event som gør den sender en alert ud. 
if (booknu)
booknu.addEventListener("click", function () {
  alert('BOOKET');
});

let slideIndex = 1;
showSlides(slideIndex);

// sidste og næste kontrol
function opSlides(n) {
  showSlides(slideIndex += n);
}

// De forskellige billeder. 
function nuSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  //Denne henter alle de forskellige og slides og dots fra dokumentet. 
  let slides = document.getElementsByClassName("mineSlides");
  let dots = document.getElementsByClassName("dot");
  //Hvis n er større end det antal slides så starter den forfra. 
  if (n > slides.length) {slideIndex = 1}
  //hvis det viser sig at n er mindre end 1 så går den tilbage til det sidste slides.
  if (n < 1) {slideIndex = slides.length}
  //skjuler alle slides 
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  //Vis det aktuelle slide 
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  //Tilføj en aktiv prik som kan ses.
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
  