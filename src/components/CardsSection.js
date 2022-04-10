export default class CardsSection {
  constructor(selector) {
    // this._renderer = renderer;
    this._selector = selector;
  }

  _getTemplate() {
    return document.querySelector(this._selector)
      .content
      .querySelector('.about-us__cards-container')
      .cloneNode(true)
  }

  getView() {
    return this._getTemplate();
  }

  // Render cards with pictures
  // addItem(element) {
  //   this._container.prepend(element);
  // }

  // render(items) {
  //   items.forEach((item) => {
  //     const cardElement = this._renderer(item)

  //     this.addItem(cardElement);
  //   })
  // }
}
