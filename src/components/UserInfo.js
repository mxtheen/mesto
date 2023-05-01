export default class UserInfo {
  constructor({ nameSelector, infoSelector, avatarSelector} ) {
    this._nameSelector = document.querySelector(nameSelector);
    this._infoSelector = document.querySelector(infoSelector);
    this._avatarSelector = document.querySelector(avatarSelector);
  };

  getUserInfo() {
    const name = this._nameSelector.textContent
    const about = this._infoSelector.textContent;
    return { name, about };
  };

  setUserInfo(name, about) {
    this._nameSelector.textContent = name;
    this._infoSelector.textContent = about;
  };
  changeUserAvatar(avatarSelector) {
    this._avatarSelector.src = avatarSelector
  }
};
