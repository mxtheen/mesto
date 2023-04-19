import initialCards from "../utils/cards.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import enableValidationConfig from "../utils/config.js"
import Popup  from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section  from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

import {
  popupEdit,
  popupAdd,
  profileTitle,
  profileSubtitle,
  popupPreviewImage,
  formEdit,
  formAdd,
  nameInput,
  jobInput,
  titleInput,
  linkInput,
  popupBtnAdd,
  popupBtnEdit,
  element,
 } from "../utils/constants.js"

const defaultCardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = createCard(item);
    defaultCardList.addItem(card);
  }
}, element);

defaultCardList.renderItems();

function createCard (item) {
  const card = new Card(item, '#card-template', handlePopupImage);
  const cardElement = card.renderCard()
  return cardElement
}

const userInfo = new UserInfo({ profileTitle, profileSubtitle})

function savePersonData () {
  userInfo.setUserInfo()
}

function handleFormAddSubmit () {
  savePersonData()
}

popupBtnEdit.addEventListener("click", () => {
  const editPopup = new PopupWithForm(".popup_edit", handleFormAddSubmit)
  editPopup.open()
  editPopup.setEventListeners()
})


function handlePopupImage () {
  const imagePopup = new PopupWithImage (".popup_scale-image")
  imagePopup.open(this._name, this._link)
  imagePopup.setEventListeners()
}





popupBtnAdd.addEventListener("click", () => {
  const addPopup = new PopupWithForm (".popup_add", handleSubmitEditForm)
  addPopup.open()
  addPopup.setEventListeners()
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




const validatorEdit = new FormValidator(enableValidationConfig, formEdit);
validatorEdit.enableValidation();

const validatorAdd = new FormValidator(enableValidationConfig, formAdd);
validatorAdd.enableValidation();



