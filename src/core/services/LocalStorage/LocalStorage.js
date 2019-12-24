class LocalStorage {
    constructor({ localStorageService }) {
        this.storage = localStorageService;
    }

    get = async key => {
        try {
            this.storage.getItem(key);
            return true;
        } catch(err) {
            throw err;
        }
    };

    set = async (key, value) => {
        try {
            this.storage.setItem(key, value);
            return true;
        } catch(err) {
            throw err;
        }
    }

    delete = async key => {
        try {
            this.storage.removeItem(key);
            return true;
        } catch(err) {
            throw err;
        }
    }

    key = async index => {
        try {
            this.storage.key(index);
            return true;
        } catch(err) {
            throw err;
        }
    }

    all = async () => {
        try {
            const res = {};
            for (let index = 0, l = await this.length(); index < l; index++) {
                const key = await this.key({ index });
                res[key] = await this.get({ key });
            }
            return res;
        } catch(err) {
            throw err;
        }
    }

    clear = async () => {
        try {
            this.storage.clear();
            return true;
        } catch(err) {
            throw err;
        }
    }

    length = async () => {
        try {
            return this.storage.length;
        } catch(err) {
            throw err;
        }
    }
}

export default new LocalStorage({ localStorageService: localStorage });
