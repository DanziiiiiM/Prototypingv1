
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