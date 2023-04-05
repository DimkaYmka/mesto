
export class UserInfo {
    
    constructor({ profileNameSelector, profileInfoSelector,  avatarSelector }) {
      this._name = document.querySelector(profileNameSelector);
      this._info = document.querySelector(profileInfoSelector);
      this._userAvatar = document.querySelector(avatarSelector)
    }
  
    
    getUserInfo() {
      return {
        name: this._name.textContent,
        info: this._info.textContent,
      };
    }
  
    setUserInfo(inputValues) {
      this._name.textContent = inputValues.name;
      this._info.textContent = inputValues.about;
    }

    setUserAvatar({link}) {
      this._userAvatar.src = link;
    }
  }

