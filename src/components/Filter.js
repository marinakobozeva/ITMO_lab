export class Filter{
  constructor( button){

    this._button = button;

  }

  isGroupCard(){
    this._group = document.querySelector('.projects__group-cards');
    this._itemsArray = this._group.querySelectorAll('.projects__card');
    this._itemsArray.forEach((item) => {
      this._item = item;
      this._itemId = item.querySelector('.projects__filter-group').textContent;

      console.log(this._itemId)
      console.log(this._button.id)
      console.log(this._item)


      if(this._button.id !== this._itemId){
        this._item.classList.add('projects__card_hide')
      }else{
        this._item.classList.remove('projects__card_hide')
      }

    })


  }

 _toggleHiddenCard(){}

}
