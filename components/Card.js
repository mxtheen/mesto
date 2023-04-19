export default class Card {
  constructor(data, cardTemplate, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick
  }
  _getTemplate() {
    const cardElement = document.querySelector(this._cardTemplate).content.querySelector(".element").cloneNode(true)
    return cardElement
  }

  _handleLikeClick (evt) {
    evt.target.classList.toggle("element__like-image_active")
  }

  _handleRemoveClick () {
    this._element.remove()
  }

  _setEventListeners() {
    this._element.querySelector(".element__like-button").addEventListener("click", this._handleLikeClick.bind(this))
    this._element.querySelector(".element__remove-button").addEventListener("click", this._handleRemoveClick.bind(this))
    this._element.querySelector(".element__image").addEventListener("click", () => {
      this._handleCardClick (this._name, this._link)})
  }

  renderCard() {
    this._element = this._getTemplate()
    this._image =  this._element.querySelector(".element__image")
    this._setEventListeners()
    this._element.querySelector(".element__title").textContent = this._name
    this._image.alt = this._name
    this._image.src = this._link
    return this._element
  }
}


