

const popupEdit = document.querySelector(".popup_edit")
const popupAdd = document.querySelector(".popup_add")
const popupScaleImage = document.querySelector(".popup_scale-image")
const popupBtnAdd = document.querySelector(".profile__add-button")
const popupBtnEdit = document.querySelector(".profile__edit-button")
const popupBtnCloseAdd = document.querySelector(".popup__close-button_add")
const popupBtnCloseEdit = document.querySelector(".popup__close-button_edit")
const popupBtnCloseScale = document.querySelector(".popup__close-button_image")
const cardTemplate = document.querySelector("#card-template").content.querySelector(".element")
const element = document.querySelector(".elements")
const formEdit = document.forms.form__edit;
const formAdd = document.forms.form__add;
const nameInput = formEdit.elements.name
const jobInput = formEdit.elements.profession
const titleInput = formAdd.elements.title
const linkInput = formAdd.elements.link
const profileTitle = document.querySelector(".profile__title")
const profileSubtitle = document.querySelector(".profile__subtitle")
const popupCaption = document.querySelector('.popup__caption')
const popupImage = document.querySelector('.popup__image')

function openPopup (item) {
  item.classList.add("popup_opened")
  item.addEventListener("mousedown", closeOverlayPopup)
  item.addEventListener("keydown", closeEscapePopup)
}


function closePopup (item) {
 item.classList.remove("popup_opened")
 item.removeEventListener("click", closeOverlayPopup)
 item.removeEventListener("keydown", closeEscapePopup)
}

function closeEscapePopup (evt) {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened")
    closePopup(popupOpened)
    document.removeEventListener("keydown", closeEscapePopup)
  }
}

function closeOverlayPopup(evt) {
  if (evt.target === evt.currentTarget) {
    const popupOpened = document.querySelector(".popup_opened")
    closePopup(popupOpened);
  };
}


function renderCards (items) {
  const cards = items.map ((item) => {
    return createCard(item)
})
element.append(...cards)
}

renderCards(initialCards)


function createCard (item) {
  const cardElement = cardTemplate.cloneNode(true)
  cardElement.querySelector(".element__title").textContent = item.name
  cardElement.querySelector(".element__image").alt = item.name
  cardElement.querySelector(".element__image").src = item.link
  cardElement.querySelector(".element__like-button").addEventListener("click", function (evt) {
    evt.target.classList.toggle("element__like-image_active")
  })
  cardElement.querySelector(".element__remove-button").addEventListener("click", () => {
    cardElement.remove()
  })
  cardElement.querySelector(".element__image").addEventListener ("click", () => {
    popupCaption.textContent = cardElement.querySelector(".element__title").textContent
    popupImage.src = cardElement.querySelector(".element__image").src
    popupImage.alt = item.name
    openPopup(popupScaleImage)
    document.addEventListener("keydown", closeEscapePopup)
  })
  return cardElement
}


formAdd.addEventListener("submit", (evt) => {
  evt.preventDefault()
  const popupOpened = document.querySelector(".popup_opened")
  const button = popupOpened.querySelector(".popup__save-button")
  button.setAttribute("disabled", "disabled")
  button.classList.add("popup__save-button_disabled")
  const cardElement = createCard ({name: titleInput.value, link: linkInput.value});
  element.prepend(cardElement)
  closePopup(popupAdd)
})

formEdit.addEventListener("submit", (evt) => {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popupEdit);
})



popupBtnAdd.addEventListener("click", (function () {
  titleInput.value = ""
  linkInput.value = ""
  openPopup(popupAdd)
  document.addEventListener("keydown", closeEscapePopup)
}))

popupBtnEdit.addEventListener("click", function () {
  nameInput.value = profileTitle.textContent
  jobInput.value = profileSubtitle.textContent
  openPopup(popupEdit)
  document.addEventListener("keydown", closeEscapePopup)
})


popupBtnCloseAdd.addEventListener("click", ()=> closePopup(popupAdd))
popupBtnCloseEdit.addEventListener("click", ()=> closePopup(popupEdit))
popupBtnCloseScale.addEventListener("click", ()=> closePopup(popupScaleImage))


