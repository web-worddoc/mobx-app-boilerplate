import { observable, action } from 'mobx';


class SessionModel {
    @observable isActive = null;

    @action
    enableSession = () => {
        this.isActive = true;
    }

    @action
    disableSession = () => {
        this.isActive = false;
    }
}

export default new SessionModel();
