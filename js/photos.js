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

//1 - раздели на 2 функции, первая будет отрисовывать элементы, а вторая создает нам 1 элемент фотографии
//Первая будет использовать вторую, это так.
//Она создает фрагмент, ты через цикл его заполняешь и потом фрагмент отрисовываешь
//Вторая лишь создает элемент одного изображения

//2 - функция, которая будет отрисовывать галерею, должна получать данные, которые мы планируем отрисовывать
//( по сути это наш photoList ) принимается параметром, внутри ты создаешь photosGalleryFragment и заполняешь его,
//потом отдаешь на рендер

//3 - функция, которая создает элемент фотографии, должна его вернуть и построить на базе объекта 1 фото

//Для чего все это нам.

//1 - в будущем ты будешь перерисовывать галерею ( так как будут фильтры, данные будут относятся ), сейчас же
//это не возможно, так как скрипт отработает 1 раз и вызвать новую отрисовку у тебя не получится

//2 - в реальной практике при добавлении новой фото тебе не надо брать весь список из 100 / 1000 и тд и рендерить
//по новой, достаточно взять функции создания 1 элемента и добавить ее в общий список
//3 - в будущем ты познакомишься с принципами SOLID и тебе станет понятнее, для чего все это. мы создаем легко
//радируемый и переиспользуемый код ( насколько это возможно в рамкам домена )

