import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");
const cardsMarkup = createImgCardMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);
galleryContainer.addEventListener("click", onContainerClick);

function createImgCardMarkup(images) {
  const markup = images
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></li>`;
    })
    .join("");
  return markup;
}

function onContainerClick(e) {
  e.preventDefault();

  const isImgElement = e.target.classList.contains("gallery__image");

  if (!isImgElement) return;

  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" alt="${e.target.alt}">`
  );
  instance.show();

  escapeBtnHandler(instance);
}

function escapeBtnHandler(instance) {
  if (instance.show()) {
    document.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        instance.close();
      }
    });
  } else if (instance.close()) {
    document.removeEventListener();
  }
}
