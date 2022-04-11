
import {
  aboutUsNewsCards,
  aboutUsMainSection,
} from '../utils/constants.js';

import CardsSection from '../components/CardsSection.js';

// About Us News Cards Section

const newsCardsSection = new CardsSection('.cards-section-template', aboutUsNewsCards);

aboutUsMainSection.append(newsCardsSection.getView());


