export default class userInfo {
    constructor(nameProfile, jobProfile) {
        this._userName = nameProfile;
        this._userJob = jobProfile;
    }

    getUserInfo() {
        return {
            name: this._userName.textContent,
            job: this._userJob.textContent,
        }
    }

    setUserInfo(info) {
        this._userName.textContent = info.name;
        this._userJob.textContent = info.job;
    }
}