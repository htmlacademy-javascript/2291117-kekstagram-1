
import { showBigPicture } from './big-photo.js';

const gallery = document.querySelector('.pictures');
const photoElement = document.querySelector('#picture').content.querySelector('.picture');

const createPhotoElement = (photoData) => {
  const userPhoto = photoElement.cloneNode(true);
  userPhoto.querySelector('.picture__img').src = photoData.url;
  userPhoto.querySelector('.picture__comments').textContent = photoData.comments.length;
  userPhoto.querySelector('.picture__likes').textContent = photoData.likes;

  const noMiniatureElementClick = (evt) => {
    evt.preventDefault();
    showBigPicture(photoData);
  };

  userPhoto.addEventListener('click', noMiniatureElementClick);

  return userPhoto;
};

const renderGallery = (photos) => {
  const photosGalleryFragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    photosGalleryFragment.append(createPhotoElement(photo));
  });

  gallery.appendChild(photosGalleryFragment);

};

export { renderGallery };


