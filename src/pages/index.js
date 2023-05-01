import '../pages/index.css'
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import enableValidationConfig from "../utils/config.js"
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
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
  popupBtnAdd,
  popupBtnEdit,
  element,
  profileAvatarBtn,
  profileAvatar
} from "../utils/constants.js"
let currentUserId;

const apiConfig = ({
  url: 'https://mesto.nomoreparties.co/v1/cohort-64/',
  headers: {
    authorization: 'b92a68e1-9c05-465c-acf6-54138cb2e2f3',
    'Content-Type': 'application/json'
  }
});
const apiInit = new Api(apiConfig)


Promise.all([
  apiInit.getUserInfo(),
]).then(([user]) => {
  currentUserId = user._id
  userInfo.setUserInfo(user.name, user.about)
  userInfo.changeUserAvatar(user.avatar)
})


apiInit.getInitialCards()
  .then(data => {
    const defaultCardList = new Section({
      items: data,
      renderer: (item) => {
        const card = createCard(item);
        defaultCardList.addDefaultItem(card);
      }
    }, element);
    defaultCardList.renderItems();
  })
  .catch(err => {
    console.log("При инициализации карточек возникла ошибка:", err)
  })


function createCard(item) {
  const card = new Card({
    data: item,
    handleCardClick: () => {
      imagePopup.open(item.name, item.link)
    },
    handleCardDelete: () => {
      confirmPopup.open(card, item._id)
    },
    handleLikeClick: () => {
      apiInit.putLikeCard(item._id)
      .then((res) => {
        card.likeCounter = res.likes
        card.renderLikeIcon()
        card.renderLikeCounter(res.likes.length)
      })
      .catch(err => {
        console.log("При лайке карточки возникла ошибка:", err)
      })
    },
    handleDeleteLike:() => {
      apiInit.deleteLikeCard(item._id)
      .then((res) => {
        card.likeCounter = res.likes
        card.renderLikeCounter(res.likes.length)
        card.renderLikeIcon()
      })
      .catch(err => {
        console.log("При снятии лайка карточки возникла ошибка:", err)
      })
    }
  }, "#card-template",
    currentUserId
  )
  const cardElement = card.renderCard()
  return cardElement
}




const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  infoSelector: ".profile__subtitle",
  avatarSelector: ".profile__avatar",
});



const imagePopup = new PopupWithImage(".popup_scale-image")
imagePopup.setEventListeners()

const editPopup = new PopupWithForm(".popup_edit", {
  handleFormSubmit: ((userData) => {
    editPopup.renderLoading(true)
    return apiInit.sendUserInfo(userData)
      .then(data => {
        userInfo.setUserInfo(data.name, data.about)
        editPopup.close()
      })
      .catch(err => {
        console.log("При обновлении информации о пользователе возникла ошибка:", err)
      })
      .finally(() => {
        editPopup.renderLoading(false)
      })
  })
});

const updAvatarPopup = new PopupWithForm(".popup_update-avatar",
  {
    handleFormSubmit: ((userData) => {
      updAvatarPopup.renderLoading(true)
      return apiInit.changeUserAvatarImage(userData)
        .then(data => {
          updAvatarPopup.renderLoading(true)
          updAvatarPopup.close()
          profileAvatar.src = data.avatar
        })
        .catch(err => {
          console.log("При обновлении аватара возникла ошибка:", err)
        })
        .finally(() => {
          updAvatarPopup.renderLoading(false)
        })
    }
    )
  })

editPopup.setEventListeners()
popupBtnEdit.addEventListener("click", () => {
  editPopup.open()
  const userInfoValues = userInfo.getUserInfo()
  nameInput.value = userInfoValues.name
  jobInput.value = userInfoValues.about
})


const addPopup = new PopupWithForm(".popup_add",
  {
    handleFormSubmit: (() => {
      addPopup.renderLoading(true)
      const item = { name: titleInput.value, link: linkInput.value }
      return apiInit.createNewCard(item)
        .then(data => {
          const card = createCard(data)
          element.prepend(card)
          addPopup.close()
        })
        .catch(err => {
          console.log("При добавлении нового места возникла ошибка:", err)
        })
        .finally(() => {
          addPopup.renderLoading(false)
        })
    })
  }
)
addPopup.setEventListeners()
popupBtnAdd.addEventListener("click", () => {
  addPopup.open()
  validatorAdd.toggleButtonState()
}
)

updAvatarPopup.setEventListeners()

profileAvatarBtn.addEventListener("click", () => {
  updAvatarPopup.open()
  validatorUpdAvatar.toggleButtonState()
})

const confirmPopup = new PopupWithConfirmation(".popup_confirmation",
  {
    handleFormSubmit: ((card, item) => {
      apiInit.deleteCard(item)
        .then(() => {
          card.handleCardDelete()
          confirmPopup.close()
        })
    })
  })


confirmPopup.setEventListeners()

const validatorEdit = new FormValidator(enableValidationConfig, formEdit);

validatorEdit.enableValidation();

const validatorAdd = new FormValidator(enableValidationConfig, formAdd);

validatorAdd.enableValidation();

const validatorUpdAvatar = new FormValidator(enableValidationConfig, formUpdAvatar);

validatorUpdAvatar.enableValidation()
