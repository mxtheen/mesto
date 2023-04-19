export default class UserInfo {
  constructor({ nameSelector, titleSelector }){
    this._nameSelector = document.querySelector(nameSelector)
    this._titleSelector = document.querySelector(titleSelector)
  }
  getUserInfo() {
    return {
      name: this._nameSelector.textContent,
      profession: this._titleSelector.textContent
    };
  }
  setUserInfo({ name, profession }) {
    this._nameSelector.textContent = name;
    this._titleSelector.textContent = profession;
  }
}
