export class Section{
  constructor({data: items, renderer}, containerSelector){
    this._itemsArray = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

//перебирает массив данных и вызывает отрисовку каждого отдельного элемента
  renderItems(){
    this._itemsArray.forEach((item) => {
      this._renderer(item);
    })
  }

//принимает DOM-элемент и добавляет его в контейнер
  addItem(item){
    this._container.append(item);

  }

}
