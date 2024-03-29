export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector)
    this._closeButton = this._popup.querySelector(".popup__close-button")
    this._handleEscClose = this._handleEscClose.bind(this)
  }
  _handleEscClose(evt) {
    if (evt.key === "Escape" && this._popup.classList.contains("popup_opened")) {
      this.close()
    }
  }
  _handleOverlayClose(evt) {
    if (evt.target === evt.currentTarget) {
      this.close()
    }
  }
  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }
  setEventListeners() {
    this._closeButton.addEventListener("click", () => {
      this.close()
    })
    this._popup.addEventListener("mousedown", this._handleOverlayClose.bind(this))
  }
}
