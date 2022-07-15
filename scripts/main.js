import * as Flickity from 'flickity';
import 'flickity-imagesloaded';
// ********** Flickity **********
const carousel = document.querySelector('.website-section__carousel');
const flkty = new Flickity(carousel, {
  imagesLoaded: true,
  autoPlay: 1000,
  prevNextButtons: true,
  wrapAround: true,
  pageDots: false,
  contain: true
});
