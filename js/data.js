import { getRandomInteger, getRandomArrayElement } from './utils.js';

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
  'Олег',
  'Никита',
  'Елена',
  'Борис',
];
const DESCRIPTIONS = [
  'Не стоит искать свое счастье там, где ты его однажды уже потерял.',
  'Не жди идеальный момент — создавай его сам.',
  'Мечтай! Твори! Дерзай! Только в этом случае тебе не придется жалеть о бесцельно прожитом времени.',
  'Лучший способ предсказать будущее — активно работать над его созданием.',
  'Никогда не проверяй глубину воды сразу обеими ногами.',
  'После дождя всегда выглядывает солнце, а там и до радуги недалеко.',
  'Стараясь о счастье других, мы находим свое собственное.',
  'Откладывая что-то на завтра, нужно быть уверенным, что это самое завтра наступит.',
  'Единственный способ стать умнее — играть с сильным противником.',
  'Если не идти к цели даже маленькими шагами, ты к ней не придешь.',
];
const PHOTOS_COUNT = 25;
const COMMENTS_COUNT = 10;
const LIKES_MIN_COUNT = 15;
const LIKES_MAX_COUNT = 200;
const AVATAR_MIN_COUNTS = 1;
const AVATAR_MAX_COUNTS = 6;

const createComment = (id) => ({
  id,
  avatar: `img/avatar-${getRandomInteger(AVATAR_MIN_COUNTS, AVATAR_MAX_COUNTS)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const createComments = (length) =>
  Array.from({ length }, (_, index) => createComment(index + 1));

const createPhotoUsers = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKES_MIN_COUNT, LIKES_MAX_COUNT),
  comments: createComments(COMMENTS_COUNT),
});

const createPhotoList = () =>
  Array.from({ length: PHOTOS_COUNT }, (_, index) => createPhotoUsers(index + 1));

export { createPhotoList };
