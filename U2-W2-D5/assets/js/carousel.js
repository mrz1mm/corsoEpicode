/* fix overflow del carosello */
/* mi dava altamente fastidio la perdita di un pezzo nell'hover 
della prima e dell'ultima immagine.*/
const carouselInners = Array.from(
  document.getElementsByClassName("carousel-inner")
);
const previews = Array.from(document.getElementsByClassName("preview"));
const carouselControlPrev = Array.from(
  document.getElementsByClassName("carousel-control-prev")
);
const carouselControlNext = Array.from(
  document.getElementsByClassName("carousel-control-next")
);

previews.forEach((preview) => {
  preview.addEventListener("mouseover", () => {
    carouselInners.forEach((carouselInner) => {
      carouselInner.style.overflow = "visible";
    });
  });
});

carouselControlPrev.forEach((controlPrev) => {
  controlPrev.addEventListener("click", () => {
    carouselInners.forEach((carouselInner) => {
      carouselInner.style.overflow = "hidden";
    });
  });
});

carouselControlNext.forEach((controlNext) => {
  controlNext.addEventListener("click", () => {
    carouselInners.forEach((carouselInner) => {
      carouselInner.style.overflow = "hidden";
    });
  });
});
