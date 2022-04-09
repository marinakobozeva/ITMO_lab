export class Card{
  constructor(item, cardSelctor){
    this._name = item.name;
    this._logo = item.logo;
    this._textShort = item.textShort;
    this._cardSelector = cardSelctor;
    this._image = item.image;
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
    this._element.querySelector('.projects__card-logo').src = this._logo;
    this._element.querySelector('.projects__card-logo').alt = this._name;
    this._element.querySelector('.projects__text').textContent = this._textShort;
    this._element.querySelector('.projects__filter-group').textContent = this._filter;
    this._setImageBackground();
    this._setEventListeners();
    return this._element;
  }

//слушатели
  _setEventListeners() {
  }

  _setImageBackground(){
    if(document.documentElement.clientWidth <= 768){
      this._element.style.backgroundImage = ``;
    }else(
      this._element.style.backgroundImage = `url(${this._image})`
    )
  }

}

