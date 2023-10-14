import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");
const cardsMarkup = createImgCardMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);

function createImgCardMarkup(images) {
  const markup = images
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" /></a></li>`;
    })
    .join("");
  return markup;
}

const lightbox = new SimpleLightbox(`.gallery__link`, {
  captionsData: "alt",
  captionDelay: 250,
});
