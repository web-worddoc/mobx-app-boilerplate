import HTTP from '@services/HTTP';
import SSE from '@services/SSE';


export class IHTTPFacade {
    post = async () => 'post';

    get = async () => 'get';

    put = async () => 'put';

    patch = async () => 'patch';

    delete = async () => 'delete';

    subscribe = async () => 'subscribe';

    unsubscribe = async () => 'unsubscribe';
}

class HTTPFacade extends IHTTPFacade {
    constructor({ HTTPService, SSEService }) {
        super();
        this.HTTP = HTTPService;
        this.SSE = SSEService;
    }

    post = (...args) => this.HTTP.post(args);

    get = (...args) => this.HTTP.get(args);

    put = (...args) => this.HTTP.put(args);

    patch = (...args) => this.HTTP.patch(args);

    delete = (...args) => this.HTTP.delete(args);

    subscribe = (...args) => this.SSE.subscribe(args);

    unsubscribe = (...args) => this.SSE.unsubscribe(args);
}

export default new HTTPFacade({ HTTPService: HTTP, SSEService: SSE });
