import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, {handleFormSubmit}){
    super(popupSelector)
    this._popupForm = this._popup.querySelector(".popup__form")
    this._handleFormSubmit = handleFormSubmit;
  }

  open(card, cardId) {
    this._cardItem = card;
    this._cardId = cardId;
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault()
      this._handleFormSubmit(this._cardItem, this._cardId)
    })
  }
}
