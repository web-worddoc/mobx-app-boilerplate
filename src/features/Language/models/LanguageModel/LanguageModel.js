import * as moment from 'moment';
import { observable, action, autorun } from 'mobx';

import { HTTP } from '@core';


class LanguageModel {
    constructor({ HTTPService }) {
        this.HTTP = HTTPService;

        this.default = 'en';
        this.supported = [
            {
                code: 'en',
                name: 'English',
            },
        ];
        this.subscribeToLang();
    }

    @observable current = 'en';

    @action
    async setLanguage({ language }) {
        if (typeof language !== 'string') {
            throw new TypeError();
        } else if (this.supported.find(el => el.code === language)) {
            this.current = language;
            return true;
        } else {
            throw new Error(`${language} is not supported language!`);
        }
    }

    subscribeToLang() {
        autorun(() => {
            moment.locale(this.current);
        });
    }
}

export default new LanguageModel({ HTTPService: HTTP });
