import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

const ref = {
  galleryList: document.querySelector('.gallery'),
};

function galleryMarkup(array) {
  return array.map((item) =>
    `<a class="gallery__link" href="${item.original}"><img class="gallery__image"src="${item.preview}" alt="${item.description}" width="340"/></a>`).join('');
}
ref.galleryList.insertAdjacentHTML("afterbegin", galleryMarkup(galleryItems));

ref.galleryList.addEventListener("click", handleClick);
function handleClick(e) {
  e.preventDefault();
  const clickTarget = e.target;
  if (clickTarget.nodeName !== "IMG") {
    return;
  };
  let showLightbox = new SimpleLightbox('.gallery a', {captionsData:"alt", captionDelay: 250, captionPosition: "bottom"});
  showLightbox.on('show.simplelightbox', function () { });
};

