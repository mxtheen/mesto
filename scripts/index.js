const initialCards = [
  {
    name: 'Япония',
    link: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Бразилия',
    link: 'https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
  },
  {
    name: 'Франция',
    link: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Россия',
    link: 'https://images.unsplash.com/photo-1616849813254-6df6a8295798?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80'
  },
  {
    name: 'Англия',
    link: 'https://images.unsplash.com/photo-1543799382-9a0208331ef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Австралия',
    link: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  }
];

const popupEdit = document.querySelector(".popup_edit")
const popupAdd = document.querySelector(".popup_add")
const popupScaleImage = document.querySelector(".popup_scale-image")
const popupBtnAdd = document.querySelector(".profile__add-button")
const popupBtnEdit = document.querySelector(".profile__edit-button")
const popupBtnCloseAdd = document.querySelector(".popup__close-button_add")
const popupBtnCloseEdit = document.querySelector(".popup__close-button_edit")
const popupBtnCloseScale = document.querySelector(".popup__close-button_image")
const cardTemplate = document.querySelector("#card-template").content.querySelector(".element")
const elements = document.querySelector(".elements")
const formElementEdit = document.querySelector(".popup__form-edit");
const formElementAdd = document.querySelector(".popup__form-add");
const submitEdit = document.querySelector(".popup__save-button_edit")
const submitAdd = document.querySelector(".popup__save-button_add")
const profileTitle = document.querySelector(".profile__title")
const profileSubtitle = document.querySelector(".profile__subtitle")
const nameInput = document.querySelector(".popup__input_type_name")
const jobInput = document.querySelector(".popup__input_type_job")
const titleInput = document.querySelector(".popup__input_type_title")
const linkInput = document.querySelector(".popup__input_type_link")
const popupCaption = document.querySelector('.popup__caption')
const popupImage = document.querySelector('.popup__image')


function openPopup (item) {
  item.classList.add("popup_opened")
}



function closePopup (item) {
 item.classList.remove("popup_opened")
}

function renderCards (items) {
  const cards = items.map ((item) => {
    return createCard(item)
})
elements.append(...cards)
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
  })
  return cardElement
}


formElementAdd.addEventListener("submit", (evt) => {
  evt.preventDefault()
  const cardElement = createCard ({name: titleInput.value, link: linkInput.value});
  elements.prepend(cardElement)
  closePopup(popupAdd)
})

formElementEdit.addEventListener("submit", (evt) => {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popupEdit);
})



popupBtnAdd.addEventListener("click", (function () {
  titleInput.value = titleInput.textContent
  linkInput.value = linkInput.textContent
  openPopup(popupAdd)
}))

popupBtnEdit.addEventListener("click", function () {
  nameInput.value = profileTitle.textContent
  jobInput.value = profileSubtitle.textContent
  openPopup(popupEdit)}
 )


popupBtnCloseAdd.addEventListener("click", ()=> closePopup(popupAdd))
popupBtnCloseEdit.addEventListener("click", ()=> closePopup(popupEdit))
popupBtnCloseScale.addEventListener("click", ()=> closePopup(popupScaleImage))


