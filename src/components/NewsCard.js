export default class NewsCard {
  constructor(selector, { date, title, content }) {
    this._selector = selector;
    this._date = date;
    this._title = title;
    this._content = content;
  }

  _getTemplate() {
    return document.querySelector(this._selector)
      .content
      .querySelector('.about-us__card')
      .cloneNode(true)
  }

  getView() {
    this._element = this._getTemplate();
    this._cardDate = this._element.querySelector('.about-us__card-date');
    this._cardTitle = this._element.querySelector('.about-us__card-title');
    this._cardContent = this._element.querySelector('.about-us__card-paragraph');

    this._cardDate.textContent = this._date;
    this._cardTitle.textContent = this._title;
    this._cardContent.textContent = this._content;

    return this._element;
  }
}
