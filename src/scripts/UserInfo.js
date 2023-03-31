
export class UserInfo {
    
    constructor({ profileNameSelector, profileInfoSelector }) {
      this._name = document.querySelector(profileNameSelector);
      this._info = document.querySelector(profileInfoSelector);
      
    }
  
    
    getUserInfo() {
      return {
        name: this._name.textContent,
        info: this._job.textContent,
      };
    }
  
    setUserInfo(inputValues) {
      this._name.textContent = inputValues.name;
      this._info.textContent = inputValues.info;
    }
  }

