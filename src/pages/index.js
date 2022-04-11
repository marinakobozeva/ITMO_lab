
// import {
//   aboutUsNewsCards,
//   aboutUsNewsCardsContainerSelector,
// } from '../utils/constants.js';

import CardsSection from '../components/CardsSection.js';

// About Us News Cards
const aboutUsNewsCards = [
  {
    date: 'Понедельник, 5 июля 2021г',
    title: 'Знакомство с машинным обучением: студенты евразийского националь…',
    content: 'Университет ИТМО провел научно-исследовательскую стажировку для группы магистрантов из Евразийского национального университета имени Л.Н. Гумилева. Ведущие преподаватели  в течение десяти дней рассказывали им об основах машинного обучения.',
  },
  {
    date: 'Понедельник, 5 июля 2021г',
    title: 'Авторы робота-музыканта роберта роботецкого признаны лучшими нович…',
    content: 'Команда ИТМО стала лучшей на международном финале RoboCup-2021. Успех ребятам принес Роберт Роботецкий — робот-виртуоз, исполнивший знаменитый французский романс «Под небом Парижа». В подготовке команды участвовали сотрудники лаборатории.',
  },
  {
    date: 'Суббота, 3 июля 2021г',
    title: 'Возвращение на петропавловку: как прошел выпускной itmo. live — 2021',
    content: 'Команда ИТМО сделала многое, чтобы вернуть формат выпускного этого и прошлого года. Из-за эпидемиологической ситуации отменена развлекательная часть, но сохранилась торжественная. Выпускники смогли получить дипломы из рук деканов и услышать поздравления ректора.',
  },
  {
    date: 'Понедельник, 5 июля 2021г',
    title: 'Знакомство с машинным обучением: студенты евразийского националь…',
    content: 'Университет ИТМО провел научно-исследовательскую стажировку для группы магистрантов из Евразийского национального университета имени Л.Н. Гумилева. Ведущие преподаватели  в течение десяти дней рассказывали им об основах машинного обучения.',
  },
  {
    date: 'Понедельник, 5 июля 2021г',
    title: 'Авторы робота-музыканта роберта роботецкого признаны лучшими нович…',
    content: 'Команда ИТМО стала лучшей на международном финале RoboCup-2021. Успех ребятам принес Роберт Роботецкий — робот-виртуоз, исполнивший знаменитый французский романс «Под небом Парижа». В подготовке команды участвовали сотрудники лаборатории.',
  },
  {
    date: 'Суббота, 3 июля 2021г',
    title: 'Возвращение на петропавловку: как прошел выпускной itmo. live — 2021',
    content: 'Команда ИТМО сделала многое, чтобы вернуть формат выпускного этого и прошлого года. Из-за эпидемиологической ситуации отменена развлекательная часть, но сохранилась торжественная. Выпускники смогли получить дипломы из рук деканов и услышать поздравления ректора.',
  },
  {
    date: 'Понедельник, 5 июля 2021г',
    title: 'Знакомство с машинным обучением: студенты евразийского националь…',
    content: 'Университет ИТМО провел научно-исследовательскую стажировку для группы магистрантов из Евразийского национального университета имени Л.Н. Гумилева. Ведущие преподаватели  в течение десяти дней рассказывали им об основах машинного обучения.',
  },
  {
    date: 'Понедельник, 5 июля 2021г',
    title: 'Авторы робота-музыканта роберта роботецкого признаны лучшими нович…',
    content: 'Команда ИТМО стала лучшей на международном финале RoboCup-2021. Успех ребятам принес Роберт Роботецкий — робот-виртуоз, исполнивший знаменитый французский романс «Под небом Парижа». В подготовке команды участвовали сотрудники лаборатории.',
  },
  {
    date: 'Суббота, 3 июля 2021г',
    title: 'Возвращение на петропавловку: как прошел выпускной itmo. live — 2021',
    content: 'Команда ИТМО сделала многое, чтобы вернуть формат выпускного этого и прошлого года. Из-за эпидемиологической ситуации отменена развлекательная часть, но сохранилась торжественная. Выпускники смогли получить дипломы из рук деканов и услышать поздравления ректора.',
  },
  {
    date: 'Понедельник, 5 июля 2021г',
    title: 'Знакомство с машинным обучением: студенты евразийского националь…',
    content: 'Университет ИТМО провел научно-исследовательскую стажировку для группы магистрантов из Евразийского национального университета имени Л.Н. Гумилева. Ведущие преподаватели  в течение десяти дней рассказывали им об основах машинного обучения.',
  },
  {
    date: 'Понедельник, 5 июля 2021г',
    title: 'Авторы робота-музыканта роберта роботецкого признаны лучшими нович…',
    content: 'Команда ИТМО стала лучшей на международном финале RoboCup-2021. Успех ребятам принес Роберт Роботецкий — робот-виртуоз, исполнивший знаменитый французский романс «Под небом Парижа». В подготовке команды участвовали сотрудники лаборатории.',
  },
  {
    date: 'Суббота, 3 июля 2021г',
    title: 'Возвращение на петропавловку: как прошел выпускной itmo. live — 2021',
    content: 'Команда ИТМО сделала многое, чтобы вернуть формат выпускного этого и прошлого года. Из-за эпидемиологической ситуации отменена развлекательная часть, но сохранилась торжественная. Выпускники смогли получить дипломы из рук деканов и услышать поздравления ректора.',
  },
];

const aboutUsMainSection = document.querySelector('.about-us__main');

const newsCardsSection = new CardsSection('.cards-section-template', aboutUsNewsCards);

aboutUsMainSection.append(newsCardsSection.getView());


