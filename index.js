let popupBtnOpen = document.querySelector(".profile__edit-button");

let popBtnClose = document.querySelector(".popup__close-button");

let popupContainer = document.querySelector(".popup");

popupBtnOpen.addEventListener("click", openPopup);
popBtnClose.addEventListener("click", closePopup);

function openPopup () {
  popupContainer.classList.add("popup__opened")
}

function closePopup() {
  popupContainer.classList.remove("popup__opened")
}


// Находим форму в DOM //
let formElement = document.querySelector(".popup__form") // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = document.querySelector(".popup__input_name") // Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector(".popup__input_profession") // Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);

