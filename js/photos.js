import {createPhotoList} from './data.js';

// Секция для вставки отрисованных фотографий случайных пользователей
const usersPhotosGallery = document.querySelector('.pictures');

// Шаблон для заполнения данными фотографии случайного пользователя
const userPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');

const PhotoLists = createPhotoList();

const photosGalleryFragment = document.createDocumentFragment();

PhotoLists.forEach((userPost) => {
  const userPhoto = userPhotoTemplate.cloneNode(true);
  userPhoto.querySelector('.picture__img').src = userPost.url;
  userPhoto.querySelector('.picture__comments').textContent = userPost.comments.length;
  userPhoto.querySelector('.picture__likes').textContent = userPost.likes;
  photosGalleryFragment.appendChild(userPhoto);
});

usersPhotosGallery.appendChild(photosGalleryFragment);
