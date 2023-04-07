import initialCards from "./cards.js";
import {popupCaption, popupImage, popupPreviewImage, closeOverlayPopup, closeEscapePopup} from "./index.js";


class Card {
  constructor(data, cardTemplate) {
    this._name = data.name;
    this._link = data.link;
    this._cardTemplate = cardTemplate;
  }
  _getTemplate () {
    const cardElement = document.querySelector(this._cardTemplate).content.querySelector(".element").cloneNode(true)
    return cardElement
  }

  _handleLikeClick (evt) {
    evt.target.classList.toggle("element__like-image_active")
  }

  _handleRemoveClick () {
    this._element.remove()
  }

  _handlePreviewImage () {
    popupCaption.textContent = this._element.querySelector(".element__title").textContent
    popupImage.src = this._element.querySelector(".element__image").src
    popupImage.alt = this._element.querySelector(".element__title").textContent
    popupPreviewImage.classList.add("popup_opened")
    popupPreviewImage.addEventListener("mousedown", closeOverlayPopup)
    document.addEventListener("keydown", closeEscapePopup)
  }
  _closePreviewImage () {
    popupPreviewImage.classList.remove("popup_opened")
  }

  _setEventListeners() {
    this._element.querySelector(".element__like-button").addEventListener("click", this._handleLikeClick.bind(this))
    this._element.querySelector(".element__remove-button").addEventListener("click", this._handleRemoveClick.bind(this))
    this._element.querySelector(".element__image").addEventListener("click", this._handlePreviewImage.bind(this))
  }

  renderCard() {
    this._element = this._getTemplate()
    this._setEventListeners()
    this._element.querySelector(".element__title").textContent = this._name
    this._element.querySelector(".element__image").alt = this._name
    this._element.querySelector(".element__image").src = this._link
    return this._element
  }
}

initialCards.forEach ((item) =>{
  const card = new Card(item, '#card-template');
  const cardElement = card.renderCard()
  document.querySelector(".elements").append(cardElement)
})

export default Card
