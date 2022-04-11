import { FilterProjects } from "./FilterProjects.js";

export class FilterMenuProjects extends FilterProjects{
  constructor(menuList, button, buttonAllProjects){
    super(button);
    this._menuList = menuList;
    this._buttonStyle = buttonAllProjects;

  }

  open(){
    this._setStyleButton();
    this._menuList.classList.add('projects__sub-menu_opened');
  }

  _setStyleButton(){
    this._buttonStyle.classList.add('button_type-filter_active');
  }

  isGroupCard(){
    super.isGroupCard();
    this._close();
  }

  _close(){
    this._menuList.classList.remove('projects__sub-menu_opened');
    this._menuList.previousElementSibling.classList.remove('button_type-filter_active');
  }

}
