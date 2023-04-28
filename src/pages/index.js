import '../pages/index.css'
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import enableValidationConfig from "../utils/config.js"
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Api from '../components/Api.js';

import {
  formEdit,
  formAdd,
  nameInput,
  jobInput,
  formUpdAvatar,
  titleInput,
  linkInput,
  avatarInput,
  popupBtnAdd,
  popupBtnEdit,
  element,
  profileAvatarBtn,
  profileAvatar
} from "../utils/constants.js"


const apiConfig = ({
  url: 'https://mesto.nomoreparties.co/v1/cohort-64/',
  headers: {
    authorization: 'b92a68e1-9c05-465c-acf6-54138cb2e2f3',
    'Content-Type': 'application/json'
  }
});
const apiInit = new Api(apiConfig)

apiInit.getInitialCards().then(data => {
  const defaultCardList = new Section({
    items: data,
    renderer: (item) => {
      console.log(item)
      const card = createCard(item);
      defaultCardList.addDefaultItem(card);
    }
  }, element);
  defaultCardList.renderItems();
})


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

const imagePopup = new PopupWithImage (".popup_scale-image")
imagePopup.setEventListeners()

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
      const item = {name: titleInput.value, link: linkInput.value}
      const card = createCard(item)
      return apiInit.createNewCard(card)
      .then(data => {
        console.log(data)
      })
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

const updAvatarPopup = new PopupWithForm(".popup_update-avatar",
{
  handleFormSubmit: (()=>{
    profileAvatar.src = avatarInput.value
    updAvatarPopup.close()
  })
}
)
updAvatarPopup.setEventListeners()
profileAvatarBtn.addEventListener("click", () => {
  updAvatarPopup.open()
  validatorUpdAvatar.toggleButtonState()
})

const confirmPopup = new PopupWithForm(".popup_confirmation",
{
  handleFormSubmit:(() => {})
})
confirmPopup.setEventListeners()
const validatorEdit = new FormValidator(enableValidationConfig, formEdit);
validatorEdit.enableValidation();

const validatorAdd = new FormValidator(enableValidationConfig, formAdd);
validatorAdd.enableValidation();

const validatorUpdAvatar = new FormValidator(enableValidationConfig, formUpdAvatar);

validatorUpdAvatar.enableValidation()

document.querySelector(".header__logo").addEventListener("click", () =>{
  confirmPopup.open()
})
