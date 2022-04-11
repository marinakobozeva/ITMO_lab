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



