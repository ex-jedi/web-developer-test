import * as Flickity from 'flickity';

// ********** Flickity **********
const carousel = document.querySelector('.website-section__carousel');
const flkty = new Flickity(carousel, {
  imagesLoaded: true,
  autoPlay: 10000,
  prevNextButtons: true,
  wrapAround: true,
  pageDots: false
});
