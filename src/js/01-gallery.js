// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

const markup = galleryItems.map((itemImg) => {
    return `<a class="gallery__item" href="${itemImg.original}">
                <img class="gallery__image" src="${itemImg.preview}" alt="${itemImg.description}" />
            </a>`
}).join("");

gallery.innerHTML = markup;
const lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250, });