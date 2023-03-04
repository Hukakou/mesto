export default class userInfo {
    constructor(nameProfile, jobProfile, userAvatar) {
        this._userName = nameProfile;
        this._userJob = jobProfile;
        this._userAvatar = userAvatar;
    }

    getUserInfo() {
        return {
            name: this._userName.textContent,
            job: this._userJob.textContent,
        }
    }

    setUserInfo(info) {
        this._userName.textContent = info.name;
        this._userJob.textContent = info.about;
        this._userAvatar.src = info.avatar;
        this._userId = info._id;
    }

    getUserId = () => {
        return this._userId
    }
}