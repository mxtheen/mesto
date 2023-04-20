export default class UserInfo {
  constructor({ nameSelector, infoSelector }) {
    this._nameSelector = document.querySelector(nameSelector);
    this._infoSelector = document.querySelector(infoSelector);
  };

  getUserInfo() {
    const name = this._nameSelector.textContent
    const profession = this._infoSelector.textContent;
    return { name, profession };
  };

  setUserInfo(name, profession) {
    this._nameSelector.textContent = name;
    this._infoSelector.textContent = profession;
  };
};
