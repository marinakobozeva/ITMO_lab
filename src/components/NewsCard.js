export class NewsCard {
  constructor({ date, title, content, handleCardClick }, newsCardTemplateSelector) {
    this._date = date;
    this._title = title;
    this._content = content;
    this._handleCardClick = handleCardClick;
    this._newsCardTemplateSelector = newsCardTemplateSelector;
  }

  _getTemplate() {
    const newsCardElement = document
    .querySelector(this._newsCardTemplateSelector)
    .content
    .querySelector('.about-us__card')
    .cloneNode(true);

    return newsCardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardDate = this._element.querySelector('.about-us__card-date');
    this._cardTitle = this._element.querySelector('.about-us__card-title');
    this._cardContent = this._element.querySelector('.about-us__card-paragraph');
    this._setEventListeners();

    this._element.querySelector('.about-us__card-date').textContent = this._date;
    this._element.querySelector('.about-us__card-title').textContent = this._title;
    this._element.querySelector('.about-us__card-paragraph').textContent = this._content;

    return this._element;
  }

  _setEventListeners() {
    this._cardImage.addEventListener('click', this._handleCardClick);
  }
}
