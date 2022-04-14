//import '../pages/index.css';
import { Card } from '../components/Card.js';
import { initialCardsProjects } from '../scripts/initialCardsProjects.js';
import { Section } from '../components/Section.js';
import { FilterProjects } from '../components/FilterProjects.js';
import { FilterMenuProjects } from '../components/FilterMenuProjects.js';
import { buttonAllProjects, buttonStateProjects, buttonSpecialProjects, buttonDevelopmentProjects, buttonSubAllProjects, SubStateProjects, buttonSubSpecialProjects, buttonSubDevelopmentProjects, menuListProject } from '../utils/constants.js';

//класс Filter
const filterAllProjects = new FilterProjects( buttonAllProjects);
const filterStateProjects = new FilterProjects( buttonStateProjects);
const filterSpecialProjects = new FilterProjects( buttonSpecialProjects);
const filterDevelopmentProjects = new FilterProjects( buttonDevelopmentProjects);
//класс FilterMenu
const filterMenuSubAllProjects = new FilterMenuProjects( menuListProject, buttonSubAllProjects, buttonAllProjects);
const filterMenuSubStateProjects = new FilterMenuProjects( menuListProject, SubStateProjects);
const filterMenuSubSpecialProjects = new FilterMenuProjects( menuListProject, buttonSubSpecialProjects);
const filterMenuSubDevelopmentProjects = new FilterMenuProjects( menuListProject, buttonSubDevelopmentProjects);
//класс Section
const section = new Section({data: initialCardsProjects, renderer}, '.projects__group-cards');

//создание элементов карточки
function renderer(item){
  const card = new Card(
    item,
    '.projects-template_type_default'
    );
  const cardElement = card.generateCard();//создает карточку на основе переданных данных
  section.addItem(cardElement);//вставляет каорточку в ДОМ
};

//принять массив данных и отрисовка каждой отдельной карточки
section.renderItems();

//слушатели для фильтра карточек
buttonAllProjects.addEventListener('click', () =>{
  if(document.documentElement.clientWidth <= 768){
    filterMenuSubAllProjects.open();
  }else{
    filterAllProjects.isGroupCard();
  }
});
buttonStateProjects.addEventListener('click', () =>{
  filterStateProjects.isGroupCard();
});
buttonSpecialProjects.addEventListener('click', () =>{
  filterSpecialProjects.isGroupCard();
});
buttonDevelopmentProjects.addEventListener('click', () =>{
  filterDevelopmentProjects.isGroupCard();
});
//слушатели для выпадающего меню фильтра карточек
buttonSubAllProjects.addEventListener('click', () =>{
  filterMenuSubAllProjects.isGroupCard();
});
SubStateProjects.addEventListener('click', () =>{
  filterMenuSubStateProjects.isGroupCard();
});
buttonSubSpecialProjects.addEventListener('click', () =>{
  filterMenuSubSpecialProjects.isGroupCard();
});
buttonSubDevelopmentProjects.addEventListener('click', () =>{
  filterMenuSubDevelopmentProjects.isGroupCard();
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',//расположение карточек в контейнере
  loop: false ,//дублирование слайдов
  slidesPerView: 2,//количество слайдов для показа, или количество столбцов
  grid: {//количество строк
    rows: 2,
  },
  spaceBetween: 8,//расстояние между слайдами
  slidesPerGroup: 4,//количество слайдов будет пролистывать

  preventClicks: true,//отключить случайный click во время прокрутки
  rewind: true,//включена возможность перемотки назад
  setWrapperSize: true,//установит ширину/высоту на оболочке swiper, равную общему размеру всех слайдов
  watchOverflow: false,//включает кнопки навигации при 1 странице слайдов

  navigation: {//стрелки
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {//указатель страниц
    el: '.swiper-pagination',
    type: 'fraction',
  },

  breakpoints: {//адаптивная верства
    // when window width is >= 768px
    768: {
      slidesPerView: 3,//количество слайдов для показа, или количество столбцов
      grid: {//количество строк
        rows: 2,
      },
      spaceBetween: 30,//расстояние между слайдами
      slidesPerGroup: 6,//количество слайдов будет пролистывать
    },
    // when window width is >= 1440px
    1440: {
      slidesPerView: 4,//количество слайдов для показа, или количество столбцов
      grid: {//количество строк
        rows: 2,
      },
      spaceBetween: 30,//расстояние между слайдами
      slidesPerGroup: 8,//количество слайдов будет пролистывать
    },

  }

});

