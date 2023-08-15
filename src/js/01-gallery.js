
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';


const gallery = document.querySelector('.gallery');

const createGallery = items => {
    return items
        .map(item => `
            <li class="gallery__item">
                <a class="gallery__link" href="${item.src}">
                    <img 
                        class="gallery__image"
                        src="${item.preview}"
                        alt="${item.description}"
                    />
                </a>
            </li>
        `)
        .join('');
};

gallery.innerHTML=createGallery(galleryItems);

document.addEventListener('DOMContentLoaded', function () {
    const lightbox = new SimpleLightbox('.gallery a', {
        captions: true,
        captionsData: 'alt',
        captionDelay: 250,
        captionsPosition: 'bottom',
    });
});

