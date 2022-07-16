const carousel = document.querySelector('.website-section__carousel');
const flkty = new Flickity(carousel, {
  wrapAround: false,
  pageDots: false,
  prevNextButtons: false,
});

const previousButton = document.querySelector('.website-section__carousel-buttons--previous');
previousButton.addEventListener('click', () => {
  flkty.previous();
});
// next
const nextButton = document.querySelector('.website-section__carousel-buttons--next');
nextButton.addEventListener('click', () => {
  flkty.next();
});
