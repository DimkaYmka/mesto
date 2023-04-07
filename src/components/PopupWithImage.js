import {Popup} from './Popup.js'


export class PopupWithImage extends Popup{
    constructor(popupSelector) {
        super(popupSelector);
        this._popupBigImage = this._popup.querySelector('.popup__big-image');
        this._popupTitle = this._popup.querySelector('.popup__big-title');
    }


    open(name, link) {
        super.open();
        this._popupBigImage.src = link;
        this._popupBigImage.alt = name;
        this._popupTitle.textContent =  name;

      };
      
      
}