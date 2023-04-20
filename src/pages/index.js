import '../pages/index.css'
import initialCards from "../utils/cards.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import enableValidationConfig from "../utils/config.js"
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

import {
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
    defaultCardList.addDefaultItem(card);
  }
}, element);

defaultCardList.renderItems();

const imagePopup = new PopupWithImage (".popup_scale-image")
imagePopup.setEventListeners()

function createCard(item) {
  const card = new Card({
    data: item,
    handleCardClick: () => {
    imagePopup.open(item.name, item.link)
  }}, "#card-template")
  const cardElement = card.renderCard()
  return cardElement
}


const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  infoSelector: ".profile__subtitle"
});


const editPopup = new PopupWithForm(".popup_edit",
  {
    handleFormSubmit: (data) => {
      userInfo.setUserInfo(data.name, data.profession);
      editPopup.close()
    }
  },
)
editPopup.setEventListeners()
popupBtnEdit.addEventListener("click", () => {
  editPopup.open()
  const userInfoValues = userInfo.getUserInfo()
  nameInput.value = userInfoValues.name
  jobInput.value = userInfoValues.profession
})


const addPopup = new PopupWithForm(".popup_add",
  {
    handleFormSubmit: (() => {
      const card = createCard({ name: titleInput.value, link: linkInput.value })
      defaultCardList.addNewItem(card)
      addPopup.close()
    })
  }
)
addPopup.setEventListeners()
popupBtnAdd.addEventListener("click", () => {
  addPopup.open()
  validatorAdd.toggleButtonState()
}
)

const validatorEdit = new FormValidator(enableValidationConfig, formEdit);
validatorEdit.enableValidation();

const validatorAdd = new FormValidator(enableValidationConfig, formAdd);
validatorAdd.enableValidation();



