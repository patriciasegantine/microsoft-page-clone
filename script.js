const menuBtn = document.querySelector('.menu-btn');
const menuShow = document.querySelector('.main-menu');

function addClassShow(event) {
  menuShow.classList.toggle('show');
}

menuBtn.addEventListener('click', addClassShow);
