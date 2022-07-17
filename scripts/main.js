// Initialise Flickity
const carousel = document.querySelector('.website-section__carousel');
const flkty = new Flickity(carousel, {
  wrapAround: true,
  pageDots: false,
  prevNextButtons: false,
});

// Flickity previous button
const previousButton = document.querySelector('.website-section__carousel-button--previous');
previousButton.addEventListener('click', () => {
  flkty.previous();
});

// Flickity next button
const nextButton = document.querySelector('.website-section__carousel-button--next');
nextButton.addEventListener('click', () => {
  flkty.next();
});
