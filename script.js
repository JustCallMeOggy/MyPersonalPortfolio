const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
  header.classList.toggle ("sticky", window.scrollY > 120);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('active');
};

window.onscroll = () =>{
  menu.classList.remove('bx-x');
  navlist.classList.remove('active');
};


// Обробка для першого діалогового вікна
document.getElementById('clickable-row-fpv').addEventListener('click', function() {
  document.getElementById('my-dialog-fpv').showModal();
});

document.getElementById('close-dialog-fpv').addEventListener('click', function(event) {
  document.getElementById('my-dialog-fpv').close();
  event.stopPropagation();
});

// Обробка для другого діалогового вікна
document.getElementById('clickable-row-agrosfera').addEventListener('click', function() {
  document.getElementById('my-dialog-agrosfera').showModal();
});

document.getElementById('close-dialog-agrosfera').addEventListener('click', function(event) {
  document.getElementById('my-dialog-agrosfera').close();
  event.stopPropagation();
});
//
document.getElementById('clickable-row-QA').addEventListener('click', function() {
  document.getElementById('my-dialog-QA').showModal();
});

document.getElementById('close-dialog-QA').addEventListener('click', function(event) {
  document.getElementById('my-dialog-QA').close();
  event.stopPropagation();
});