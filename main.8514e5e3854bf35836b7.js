(()=>{"use strict";class e{constructor(e,t){let{data:s,handleCardClick:o}=e;this._name=s.name,this._link=s.link,this._cardTemplate=t,this._handleCardClick=o}_getTemplate(){return document.querySelector(this._cardTemplate).content.querySelector(".element").cloneNode(!0)}_handleLikeClick(e){e.target.classList.toggle("element__like-image_active")}_handleRemoveClick(){this._element.remove()}_setEventListeners(){this._element.querySelector(".element__like-button").addEventListener("click",this._handleLikeClick.bind(this)),this._element.querySelector(".element__remove-button").addEventListener("click",this._handleRemoveClick.bind(this)),this._element.querySelector(".element__image").addEventListener("click",(()=>{this._handleCardClick(this._name,this._link)}))}renderCard(){return this._element=this._getTemplate(),this._image=this._element.querySelector(".element__image"),this._setEventListeners(),this._element.querySelector(".element__title").textContent=this._name,this._image.alt=this._name,this._image.src=this._link,this._element}}class t{constructor(e,t){this._formElement=t,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}_showInputError(e,t){const s=this._formElement.querySelector(`#${e.id}-error`);e.classList.add(this._inputErrorClass),s.textContent=t,s.classList.add(this._errorClass)}_hideInputError(e){const t=this._formElement.querySelector(`#${e.id}-error`);e.classList.remove(this._inputErrorClass),t.textContent=""}_checkInputValidity(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}_setEventListeners(){Array.from(this._formElement.querySelectorAll(this._inputSelector)).forEach((e=>{e.addEventListener("input",(()=>{this._checkInputValidity(e),this.toggleButtonState()}))})),this._formElement.addEventListener("submit",(e=>{e.preventDefault()}))}toggleButtonState(){const e=this._formElement.checkValidity();this._buttonElement.disabled=!e,this._buttonElement.classList.toggle(this._inactiveButtonClass,!e)}enableValidation(){this._setEventListeners()}}const s={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error"};class o{constructor(e){this._popup=document.querySelector(e),this._closeButton=this._popup.querySelector(".popup__close-button"),this._handleEscClose=this._handleEscClose.bind(this)}_handleEscClose(e){"Escape"===e.key&&this._popup.classList.contains("popup_opened")&&this.close()}_handleOverlayClose(e){e.target===e.currentTarget&&this.close()}open(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}close(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}setEventListeners(){this._closeButton.addEventListener("click",(()=>{this.close()})),this._popup.addEventListener("mousedown",this._handleOverlayClose.bind(this))}}class n extends o{constructor(e,t){let{handleFormSubmit:s}=t;super(e),this._popupForm=this._popup.querySelector(".popup__form"),this._handleFormSubmit=s,this._inputList=this._popup.querySelectorAll(".popup__input")}_getInputValues(){return this._formValues={},this._inputList.forEach((e=>{this._formValues[e.name]=e.value})),this._formValues}close(){super.close(),this._popupForm.reset()}setEventListeners(){super.setEventListeners(),this._popupForm.addEventListener("submit",(e=>{e.preventDefault(),this._handleFormSubmit(this._getInputValues())}))}}document.querySelector(".popup_edit"),document.querySelector(".popup_add"),document.querySelector(".profile__title"),document.querySelector(".profile__subtitle"),document.querySelector(".popup_scale-image"),document.querySelector(".popup__close-button_add"),document.querySelector(".popup__close-button_edit"),document.querySelector(".popup__close-button_image");const i=document.forms.form__edit,r=document.forms.form__add,l=i.elements.name,a=i.elements.profession,c=r.elements.title,u=r.elements.link,p=document.querySelector(".profile__add-button"),_=document.querySelector(".profile__edit-button"),m=document.querySelector(".elements"),d=(document.querySelector(".popup__caption"),document.querySelector(".popup__image"),new class{constructor(e,t){let{items:s,renderer:o}=e;this._items=s,this._renderer=o,this._containerSelector=t}renderItems(){this._items.forEach((e=>{this._renderer(e)}))}addDefaultItem(e){this._containerSelector.append(e)}addNewItem(e){this._containerSelector.prepend(e)}}({items:[{name:"Япония",link:"https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"},{name:"Бразилия",link:"https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"},{name:"Франция",link:"https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"},{name:"Россия",link:"https://images.unsplash.com/photo-1616849813254-6df6a8295798?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80"},{name:"Англия",link:"https://images.unsplash.com/photo-1543799382-9a0208331ef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"},{name:"Австралия",link:"https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}],renderer:e=>{const t=f(e);d.addDefaultItem(t)}},m));d.renderItems();const h=new class extends o{constructor(e){super(e),this._image=this._popup.querySelector(".popup__image"),this._caption=this._popup.querySelector(".popup__caption")}open(e,t){super.open(),this._image.src=t,this._image.alt=e,this._caption.textContent=e}}(".popup_scale-image");function f(t){return new e({data:t,handleCardClick:()=>{h.open(t.name,t.link)}},"#card-template").renderCard()}h.setEventListeners();const S=new class{constructor(e){let{nameSelector:t,infoSelector:s}=e;this._nameSelector=document.querySelector(t),this._infoSelector=document.querySelector(s)}getUserInfo(){return{name:this._nameSelector.textContent,profession:this._infoSelector.textContent}}setUserInfo(e,t){this._nameSelector.textContent=e,this._infoSelector.textContent=t}}({nameSelector:".profile__title",infoSelector:".profile__subtitle"}),b=new n(".popup_edit",{handleFormSubmit:e=>{S.setUserInfo(e.name,e.profession),b.close()}});b.setEventListeners(),_.addEventListener("click",(()=>{b.open();const e=S.getUserInfo();l.value=e.name,a.value=e.profession}));const E=new n(".popup_add",{handleFormSubmit:()=>{const e=f({name:c.value,link:u.value});d.addNewItem(e),E.close()}});E.setEventListeners(),p.addEventListener("click",(()=>{E.open(),y.toggleButtonState()})),new t(s,i).enableValidation();const y=new t(s,r);y.enableValidation()})();