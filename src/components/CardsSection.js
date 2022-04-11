import NewsCard from '../components/NewsCard.js';

export default class CardsSection {
  constructor(selector, cards) {
    this._selector = selector;
    this._cards = cards;
  }

  _getTemplate() {
    return document.querySelector(this._selector)
      .content
      .querySelector('.about-us__cards-container')
      .cloneNode(true)
  }

  getView() {
    this._element = this._getTemplate();

    this._cards.forEach(item => {
      const card = new NewsCard('.news-card-template', item);
      this._element.append(card.getView());
    });

    return this._element;
  }
}
