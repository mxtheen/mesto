# Проект: Место


Mesto - это проектная работы от платформы "Яндекс.Практикум", в которой впервые за время обучения применяются основы JavaScript для реализации "попапов"

Работа подразумевает собой **одностраничный сайт** с использованием различных **CSS3** и **HTML5** технологий, а также базовых технологий **JavaScript**.
### Обзор
Организация файловой структуры выполнена по технологии Nested, а сама работа использует методологию БЭМ для разделения интерфейса на независимые блоки.
```
mesto
    blocks
      element
      elements
      footer
      header
      page
      popup
      profile
```

Все стили для данной работы подключены в отдельном файле **index.css**, который в свою очередь находится в папке **pages**

В данной работе используется нестандартный шрифт [Inter](https://rsms.me/inter/), который был подключен локально и находится в папке **fonts**. В этой папке присутствуют только те начертания, которые используются непосредственно в самой работе. Это позволяет не нагружать загрузку страницы лишней подкачкой шрифтов, которые не используются в работе.

Используются оптимизированные изображения, которые находится в папке **images**. Оптимизация изображений также важна, чтобы не нагружать сайт лишней загрузкой больших изображений.

В работе, как было сказано выше, впервые применяется язык JavaScript. Работа этого языка подключена в файле **index.js**, который находится в корне папки **mesto**.

```
let popupContainer = document.querySelector(".popup");
let popupBtnOpen = document.querySelector(".profile__edit-button");
let popBtnClose = document.querySelector(".popup__close-button");

function openPopup () {
  popupContainer.classList.add("popup__opened");
  nameInput.value = profileTitle.textContent;
  jobInput.value= profileSubtitle.textContent;
}

function closePopup() {
  popupContainer.classList.remove("popup__opened");
}

popupBtnOpen.addEventListener("click", openPopup);
popBtnClose.addEventListener("click", closePopup);
```
Выше приведен пример реализации открытия попапов с помощью переменных и простейших функций.

[Ссылка на GitHub Pages тут.](https://mxtheen.github.io/mesto/)

>Максим Шуляев

