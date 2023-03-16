/**CARRUSEL**/

const wrapper = document.querySelector('.contenedor-card');
let cardWidth = document.querySelector('.contenedor-card-portfolio').offsetWidth;
let position = 0;

setInterval(() => {
  position -= cardWidth;
  wrapper.style.transform = `translateX(${position}px)`;
}, 3000);