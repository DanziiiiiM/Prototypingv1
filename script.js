
const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".dropdown-toggle");
  const midMenu = document.querySelector(".mid-menu");

  toggleBtn.addEventListener("click", (e) => {
    e.preventDefault();
    midMenu.classList.toggle("active");
  });
});
const booknu = document.getElementById("book-nu");

booknu.addEventListener("click", function () {
  alert('BOOKET');
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function opSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function nuSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mineSlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
  