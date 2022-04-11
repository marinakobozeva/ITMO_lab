export class FilterProjects{
  constructor( button){
    this._button = button;
  }

//проверить условия фильтра, скрыть или показать карточку
  isGroupCard(){
    this._group = document.querySelector('.projects__group-cards');
    this._itemsArray = this._group.querySelectorAll('.projects__card');
    this._itemsArray.forEach((item) => {
      this._item = item;
      this._itemId = this._item.querySelector('.projects__filter-group').textContent;
      if(this._button.name === this._itemId || this._button.name === 'allProjects'){
        this._item.classList.remove('projects__card_hide')
      }else{
        this._item.classList.add('projects__card_hide')
      }
    });
  }

}
