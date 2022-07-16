// Initialise Flickity
const carousel = document.querySelector(".website-section__carousel");
const flkty = new Flickity(carousel, {
    wrapAround: true,
    pageDots: false,
    prevNextButtons: false
});
// Flickity previous button
const previousButton = document.querySelector(".website-section__carousel-buttons--previous");
previousButton.addEventListener("click", ()=>{
    flkty.previous();
});
// Flickity next button
const nextButton = document.querySelector(".website-section__carousel-buttons--next");
nextButton.addEventListener("click", ()=>{
    flkty.next();
});

//# sourceMappingURL=index.e72c3fb5.js.map
