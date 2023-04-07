import initialCards from "./cards.js";
import Card from "./card.js";
import FormValidator from "./FormValidator.js";

const popupEdit = document.querySelector(".popup_edit")
const popupAdd = document.querySelector(".popup_add")
const profileTitle = document.querySelector(".profile__title")
const profileSubtitle = document.querySelector(".profile__subtitle")
const popupPreviewImage = document.querySelector(".popup_scale-image")
const popupBtnCloseAdd = document.querySelector(".popup__close-button_add")
const popupBtnCloseEdit = document.querySelector(".popup__close-button_edit")
const popupBtnClosePreview = document.querySelector(".popup__close-button_image")
const formEdit = document.forms.form__edit;
const formAdd = document.forms.form__add;
const nameInput = formEdit.elements.name
const jobInput = formEdit.elements.profession
const titleInput = formAdd.elements.title
const linkInput = formAdd.elements.link
const popupBtnAdd = document.querySelector(".profile__add-button")
const popupBtnEdit = document.querySelector(".profile__edit-button")
const element = document.querySelector(".elements")
const popupCaption = document.querySelector('.popup__caption')
const popupImage = document.querySelector('.popup__image')

const enableValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error'
};


function createCard (item) {
  const card = new Card(item, '#card-template');
  const cardElement = card.renderCard()
  return cardElement
}

function openPopup (item) {
  item.classList.add("popup_opened")
  item.addEventListener("mousedown", closeOverlayPopup)
  document.addEventListener("keydown", closeEscapePopup)
  validatorAdd.toggleButtonState()
}

function closePopup (item) {
  item.classList.remove("popup_opened")
  item.removeEventListener("mousedown", closeOverlayPopup)
  document.removeEventListener("keydown", closeEscapePopup)
 }

 function closeOverlayPopup(evt) {
  if (evt.target === evt.currentTarget) {
    const popupOpened = document.querySelector(".popup_opened")
    closePopup(popupOpened);
  };
}

 function closeEscapePopup (evt) {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened")
    closePopup(popupOpened)
  }
}

popupBtnAdd.addEventListener("click", (function () {
  titleInput.value = ""
  linkInput.value = ""
  openPopup(popupAdd)
}))

popupBtnEdit.addEventListener("click", function () {
  nameInput.value = profileTitle.textContent
  jobInput.value = profileSubtitle.textContent
  openPopup(popupEdit)
})

formEdit.addEventListener("submit", (evt) => {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popupEdit);
})

formAdd.addEventListener("submit", (evt) => {
  evt.preventDefault()
  const newCard = {
    name: titleInput.value,
    link: linkInput.value,
  };
  element.prepend(createCard(newCard));
  closePopup(popupAdd)
})


popupBtnCloseAdd.addEventListener("click", ()=> closePopup(popupAdd))
popupBtnCloseEdit.addEventListener("click", ()=> closePopup(popupEdit))
popupBtnClosePreview.addEventListener("click", ()=> closePopup(popupPreviewImage))


const validatorEdit = new FormValidator(enableValidationConfig, formEdit);
validatorEdit.enableValidation();

const validatorAdd = new FormValidator(enableValidationConfig, formAdd);
validatorAdd.enableValidation();



export {popupCaption, popupImage, popupPreviewImage, closeOverlayPopup, closeEscapePopup}
