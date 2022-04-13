export class Card{
  constructor(item, cardSelctor){
    this._name = item.name;
    this._logoWhite = item.logo;
    this._logoDark = item.logo_dark;
    this._textShort = item.textShort;
    this._textLong = item.textLong;
    this._cardSelector = cardSelctor;
    this._filter = item.filter;
  }

//ищет шаблон карточки, клонирует и отдает для наполнения данными
  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector)
    .content
    .querySelector('.projects__card')
    .cloneNode(true);
    return cardElement;
  }

//подставляет данные в шаблон карточки и отдает готовую карточку для дальнейшего использования
  generateCard() {
    this._element = this._getTemplate();
    this._logo = this._element.querySelector('.projects__card-logo');
    this._logo.src = this._logoWhite;
    this._element.querySelector('.projects__card-logo').alt = this._name;
    this._text = this._element.querySelector('.projects__text');
    this._text.textContent = this._textShort;
    this._element.querySelector('.projects__filter-group').textContent = this._filter;
    this._button = this._element.querySelector('.button_card-open');
    this._link = this._element.querySelector('.projects__link');
    this._setEventListeners();
    return this._element;
  }

//слушатели
  _setEventListeners() {
  //кнопка подробнее
    this._button.addEventListener('click', () => {
      this._element.classList.toggle('projects__card_active');
      this._text.classList.toggle('projects__text_active');
      this._button.classList.toggle('button_card-close');
      this._logo.classList.toggle('projects__card-logo_active');
      this._link.classList.toggle('projects__link_active')
      this._isLogo();
      this._isText();
    });
  }

//изменение стиля текста
  _isText(){
    if(this._text.textContent === this._textShort){
      this._text.textContent = this._textLong;
    }else{
      this._text.textContent = this._textShort;
    }
  }

//изменение стиля логотипа
  _isLogo(){
    if(this._logo.src.endsWith(this._logoWhite.slice(1))){
      this._logo.src = this._logoDark;
    }else {
      this._logo.src = this._logoWhite;
    }
  }

}
