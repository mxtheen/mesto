export default class Api {
  constructor(config) {
    this.url = config.url
    this.headers = config.headers
  }

  getInitialCards() {
    return fetch(`${this.url}cards`, {
      headers: this.headers
    }).then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка создания карточек: ${res.status}`);
    })
  }
  createNewCard(item) {
    return fetch(`${this.url}cards`, {
      headers: this.headers,
      method: "POST",
      body: JSON.stringify(item)
    }).then(res => {
      if (res.ok) {
        return res.json()
      }
      Promise.reject(`Ошибка добавления карточки: ${res.status}`)
    })
  }
}

