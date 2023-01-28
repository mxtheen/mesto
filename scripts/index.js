let popupContainer = document.querySelector(".popup");
// Объявляем переменную popupContainer //
let popupBtnOpen = document.querySelector(".profile__edit-button");
// Объявляем переменную popupBtnOpen //
let popBtnClose = document.querySelector(".popup__close-button");
// Объявляем переменную popBtnClose //
let formElement = document.querySelector(".popup__form");
// Объявляем переменную formElement //
let nameInput = document.querySelector(".popup__input_type_name");
// Объявляем переменную nameInput //
let jobInput = document.querySelector(".popup__input_type_job");
// Объявляем переменную jobInput //
let profileTitle = document.querySelector (".profile__title");
// Объявляем переменную profileTitle //
let profileSubtitle = document.querySelector (".profile__subtitle");
// Объявляем переменную profileSubtitle //


function openPopup () {
  popupContainer.classList.add("popup_opened");
  nameInput.value = profileTitle.textContent;
  jobInput.value= profileSubtitle.textContent;
}
// Объявляем функцию openPopup, которая отвечает за открытие всплывающего окна //
function closePopup() {
  popupContainer.classList.remove("popup_opened");
}
// Объявляем функцию closePopup, которая отвечает за закрытие всплывающего окна //
popupBtnOpen.addEventListener("click", openPopup);
// Вызываем функцию openPopup с методом addEventListener, которая отвечает за открытие всплывающего окна //
popBtnClose.addEventListener("click", closePopup);
// Вызываем функцию closePopup с методом addEventListener, которая отвечает за открытие всплывающего окна //

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileTitle.textContent= nameInput.value;
    profileSubtitle.textContent= jobInput.value;
    closePopup();
}
// Объявляем функцию handleFormSubmit, которая отвечает за получение значений поля jobInput и nameInput и вставляет новые значения с помощью textContent в блоки profile.Title и profile.Subtitle //

formElement.addEventListener('submit', handleFormSubmit);
//Добавляем formElement с методом addEventListener, которая при взаимодействии с кнопкой типа "submit" выполняет функцию handleFormSubmit //

