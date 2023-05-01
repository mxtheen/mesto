import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { handleFormSubmit }) {
    super(popupSelector)
    this._popupForm = this._popup.querySelector(".popup__form")
    this._submitButton = this._popupForm.querySelector(".popup__save-button")
    this._handleFormSubmit = handleFormSubmit
    this._inputList = this._popup.querySelectorAll('.popup__input');
  }

  _getInputValues() {
    this._formValues = {}
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  close() {
    super.close()
    this._popupForm.reset()
  }
  renderLoading(isLoading){
    if (isLoading === true) {
      this._submitButton.textContent = "Сохранение..."
    } else {
      this._submitButton.textContent = "Сохранить"
    }
  }
  setEventListeners() {
    super.setEventListeners()
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault()
      this._handleFormSubmit(this._getInputValues())
    })
  }
}
