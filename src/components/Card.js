import { data } from "autoprefixer";
import { element } from "../utils/constants";

export default class Card {
  constructor({ data, handleCardClick, handleCardDelete, handleLikeClick, handleDeleteLike }, cardTemplate, currentUserId) {
    this._name = data.name;
    this._link = data.link;
    this._idCard = data._id
    this.likeCounter = data.likes
    this._cardTemplate = cardTemplate;
    this._isOwner = data.owner._id === currentUserId
    this._handleCardClick = handleCardClick
    this.handleRemoveClick = handleCardDelete
    this._putLike = handleLikeClick
    this._removeLike = handleDeleteLike
    this._currentIdUser = currentUserId
  }
  _getTemplate() {
    const cardElement = document.querySelector(this._cardTemplate).content.querySelector(".element").cloneNode(true)
    return cardElement
  }

  _interactLike() {
    if (this._isLikedByUser()) {
      this._removeLike()
    } else {
      this._putLike()
    }
  }

  _checkIsOwner() {
    if (!this._isOwner) {
      this._element.querySelector(".element__remove-button").remove()
    }
  }
  _setEventListeners() {
    this.likeButton.addEventListener("click", () => {
      this._interactLike()
    })
    this._element.querySelector(".element__remove-button").addEventListener("click", this.handleRemoveClick.bind(this))
    this._element.querySelector(".element__image").addEventListener("click", () => {
      this._handleCardClick(this._name, this._link)
    })
  }
  handleCardDelete() {
    this._element.remove()
  }
  _isLikedByUser() {
    return this.likeCounter.some((userLike) => {
      return userLike._id === this._currentIdUser;
    });
  }
  renderLikeIcon() {
    if (this._isLikedByUser()) {
      this.likeButton.classList.add("element__like-image_active")
    } else {
      this.likeButton.classList.remove("element__like-image_active")
    }
  }

  renderLikeCounter() {
    this.like.textContent = this.likeCounter.length
  }
  renderCard() {
    this._element = this._getTemplate()
    this._image = this._element.querySelector(".element__image")
    this.like = this._element.querySelector(".element__like-counter")
    this.likeButton = this._element.querySelector(".element__like-button")
    this._element.querySelector(".element__title").textContent = this._name
    this._image.alt = this._name
    this._image.src = this._link
    this._isLikedByUser()
    this._setEventListeners()
    this._checkIsOwner()
    this.renderLikeIcon()
    this.renderLikeCounter()
    return this._element
  }
}
