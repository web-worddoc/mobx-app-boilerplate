import superagent from 'superagent';


export class IHTTP {
    post = async () => 'post';

    get = async () => 'get';

    put = async () => 'put';

    patch = async () => 'patch';

    delete = async () => 'delete';
}

export class HTTP extends IHTTP {
    constructor({ httpService }) {
        super();
        this.token = null;
        this.http = httpService;
    }

    post = ({ url, data }) => {
        return new Promise((resolve, reject) => {
            this.http
                .post(url, data)
                .use(this.tokenPlugin)
                .end(this.handleEnd({ resolve, reject }));
        });
    }

    get = ({ url, data }) => {
        return new Promise((resolve, reject) => {
            this.http
                .get(url, data)
                .use(this.tokenPlugin)
                .end(this.handleEnd({ resolve, reject }));
        });
    }

    put = ({ url, data }) => {
        return new Promise((resolve, reject) => {
            this.http
                .put(url, data)
                .use(this.tokenPlugin)
                .end(this.handleEnd({ resolve, reject }));
        });
    }

    patch = ({ url, data }) => {
        return new Promise((resolve, reject) => {
            this.http
                .patch(url, data)
                .use(this.tokenPlugin)
                .end(this.handleEnd({ resolve, reject }));
        });
    }

    delete = ({ url, data }) => {
        return new Promise((resolve, reject) => {
            this.http
                .del(url, data)
                .use(this.tokenPlugin)
                .end(this.handleEnd({ resolve, reject }));
        });
    }

    handleEnd = ({ resolve, reject }) => (err, res) => {
        if (err)
            reject(err);
        else
            resolve(res.body);
    }

    tokenPlugin = req => {
        if (this.token) {
            req.set('Authorization', `Bearer ${this.token}`);
        }
    }

    setToken = token => {
        this.token = token;
    }
}


export default new HTTP({ httpService: superagent });
