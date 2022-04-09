//import '../pages/index.css';
import { Card } from '../components/Card.js';
import { initialCardsProjects } from '../scripts/initialCardsProjects.js';
import { Section } from '../components/Section.js';
import { Filter } from '../components/Filter.js';
import { groupAllProjectsFilter, groupStateProjectsFilter, groupSpecialProjectsFilter, groupDevelopmentProjectsFilter } from '../utils/constants.js';


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

//класс Filter
const filterAllProjects = new Filter( groupAllProjectsFilter);
const filterStateProjects = new Filter( groupStateProjectsFilter);
const filterSpecialProjects = new Filter( groupSpecialProjectsFilter);
const filterDevelopmentProjects = new Filter( groupDevelopmentProjectsFilter);

//слушатели для фильтра карточек
groupAllProjectsFilter.addEventListener('click', () =>{
  filterAllProjects.isGroupCard();
});
groupStateProjectsFilter.addEventListener('click', () =>{
  filterStateProjects.isGroupCard();
});
groupSpecialProjectsFilter.addEventListener('click', () =>{
  filterSpecialProjects.isGroupCard();
});
groupDevelopmentProjectsFilter.addEventListener('click', () =>{
  filterDevelopmentProjects.isGroupCard();
});

//принять массив данных и отрисовка каждой отдельной карточки
section.renderItems();

