import {createPhotoList} from './data.js';

const gallery = document.querySelector('.pictures');
const photoElement = document.querySelector('#picture').content.querySelector('.picture');

const photoLists = createPhotoList();

const createPhotoElement = (photoData) => {
  const userPhoto = photoElement.cloneNode(true);
  userPhoto.querySelector('.picture__img').src = photoData.url;
  userPhoto.querySelector('.picture__comments').textContent = photoData.comments.length;
  userPhoto.querySelector('.picture__likes').textContent = photoData.likes;

  return userPhoto;
};

const renderGallery = (photos) => {
  const photosGalleryFragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    photosGalleryFragment.appendChild(createPhotoElement(photo));
  });

  gallery.appendChild(photosGalleryFragment);
};

renderGallery(photoLists);

