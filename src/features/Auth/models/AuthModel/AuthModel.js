import { action } from 'mobx';

import { SessionModel } from '@features/Session/models';
import { api } from '@features/Auth/api';
import { HTTP } from '@core';


class AuthModel {
    constructor({ HTTPService }) {
        this.HTTP = HTTPService;
    }

    @action setAuth = () => {
        SessionModel.enableSession();
    }

    @action unsetAuth() {
        SessionModel.disableSession();
    }

    login = async ({ email, password }) => {
        try {
            const res = await this.HTTP.post({
                url: api.login.url(),
                data: {
                    email,
                    password,
                },
            });

            this.setAuth();
            return res;
        } catch(err) {
            throw err;
        }
    }

    logout = async () => {
        try {
            const res = await this.HTTP.post({
                url: api.logout.url(),
            });

            this.unsetAuth();
            return res;
        } catch(err) {
            throw err;
        }
    }
}

export default new AuthModel({ HTTPService: HTTP });
