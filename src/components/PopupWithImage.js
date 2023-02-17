import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor({popupImages, img, imgInfo}) {
        super(popupImages);
        this.popupImg = this._popup.querySelector(img);
        this.popuoImgInfo = this._popup.querySelector(imgInfo);
    }

    openPopup(name, link) {
        this.popuoImgInfo.textContent = name;
        this.popupImg.src = link;
        this.popupImg.alt = name;
        super.openPopup();    
};
}
