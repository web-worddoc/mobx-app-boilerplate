import JSCookies from 'js-cookie';

import { tryCatchAsync } from '@utils';


export class ICookies {
    get = async () => 'get';

    set = async () => 'set';

    delete = async () => 'delete';
}

class Cookies extends ICookies {
    constructor({ cookiesService }) {
        super();
        this.cookies = cookiesService;
    }

    get = ({ key }) => {
        return tryCatchAsync(() => this.cookies.get(key));
    }

    set = ({ key, value }) => {
        return tryCatchAsync(() => {
            this.cookies.set(key, value);
            return true;
        });
    }

    delete = ({ key }) => {
        return tryCatchAsync(() => {
            this.cookies.remove(key);
            return true;
        });
    }
}

export default new Cookies({ cookiesService: JSCookies });
