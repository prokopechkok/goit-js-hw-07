import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
const galleryContainer = document.querySelector(".gallery");
const cardsMarkup = createImgCardMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);
galleryContainer.addEventListener("click", onContainerClick);

function createImgCardMarkup(images) {
  const markup = images
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" /></a></li>`;
    })
    .join("");
  return markup;
}

function onContainerClick(e) {
  e.preventDefault();

  const isImgElement = e.target.classList.contains("gallery__image");

  if (!isImgElement) return;

  const currentLinkElem = e.target.closest("A");

  currentLinkElem.classList.add("current");

  const lightbox = new SimpleLightbox(`.current`, {
    sourceAttr: "href",
    captions: true,
    captionSelector: "img",
    captionType: "attr",
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });

  lightbox.open();

  lightbox.on("close.simplelightbox", function () {
    currentLinkElem.classList.remove("current");
  });
}
