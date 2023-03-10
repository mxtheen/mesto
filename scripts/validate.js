 const enableValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error'
};

function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach ((form) => {
    form.addEventListener("input", () =>{
      toggleButton(form, config)
    })
    addInputListeners(form, config)
    toggleButton(form, config)
  })

}
enableValidation(enableValidationConfig)


function handleFormInput (evt, config) {
  const input = evt.target;
  const inputId = input.id
  const errorSpan = document.querySelector(`#${inputId}-error`)

  if(!input.validity.valid) {
    input.classList.add(config.inputErrorClass)
    errorSpan.textContent = input.validationMessage

  } else {
    input.classList.remove(config.inputErrorClass)
    errorSpan.textContent = " "
  }
}

function toggleButton (form, config) {
  const buttonSubmit = form.querySelector(config.submitButtonSelector)
  const isFormValid = form.checkValidity()
  buttonSubmit.disabled = !isFormValid
  buttonSubmit.classList.toggle(config.inactiveButtonClass, !isFormValid)
}

function  addInputListeners (form, config) {
  const inputList = Array.from(form.querySelectorAll(config.inputSelector))
  inputList.forEach((item)=>{
    item.addEventListener ("input", (evt) => {
      handleFormInput(evt, config)
    })
  })

}

