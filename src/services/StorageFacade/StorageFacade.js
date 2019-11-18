import Cookies from '@services/Cookies';
import LocalStorage from '@services/LocalStorage';


class IStorageFacade {
    getCookie = async () => 'get';

    setCookie = async () => 'set';

    deleteCookie = async () => 'delete';

    getLocal = async () => 'get';

    setLocal = async () => 'set';

    deleteLocal = async () => 'delete';

    localByKey = async () => 'key';

    allLocal = async () => 'all';

    clearLocal = async () => 'clear';

    localLength = async () => 'length';
}

class StorageFacade extends IStorageFacade {
    constructor({ CookiesService, LocalStorageSerivce }) {
        super();
        this.cookies = CookiesService;
        this.storage = LocalStorageSerivce;
    }

    getCookie = (...args) => this.cookies.get(args);

    setCookie = (...args) => this.cookies.set(args);

    deleteCookie = (...args) => this.cookies.delete(args);

    getLocal = (...args) => this.storage.get(args);

    setLocal = (...args) => this.storage.set(args);

    deleteLocal = (...args) => this.storage.delete(args);

    localKey = (...args) => this.storage.key(args);

    allLocal = () => this.storage.all();

    clearLocal = () => this.storage.clear();

    localLength = () => this.storage.length();
}

export default new StorageFacade({ CookiesService: Cookies, LocalStorageSerivce: LocalStorage });
