import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
let lightbox = new SimpleLightbox('.gallery a');

export const createGallery = (images) => {
  const markup = images.map(({ webformatURL, largeImageURL, tags }) => `
    <a href="${largeImageURL}">
      <img src="${webformatURL}" alt="${tags}" />
    </a>
  `).join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
};

export const clearGallery = () => {
  galleryContainer.innerHTML = '';
};

export const showLoader = () => {
  document.body.classList.add('loading');
};

export const hideLoader = () => {
  document.body.classList.remove('loading');
};