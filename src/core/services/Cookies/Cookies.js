import JSCookies from 'js-cookie';


class Cookies {
    constructor({ cookiesService }) {
        this.cookies = cookiesService;
    }

    get = async key => {
        try {
            this.cookies.get(key);
            return true;
        } catch(err) {
            throw err;
        }
    }

    set = async (key, value) => {
        try {
            this.cookies.set(key, value);
            return true;
        } catch(err) {
            throw err;
        }
    }

    delete = async key => {
        try {
            this.cookies.remove(key);
            return true;
        } catch(err) {
            throw err;
        }
    }
}

export default new Cookies({ cookiesService: JSCookies });
