import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class HeadersStore extends EventEmitter {
    constructor() {
        super();
        this.preHeaders = [
            {
                type: "request",
                side: "client side connection",
                timestamp: Date.now(),
                content: {
                    "accept-language": "en-US,en;q\u003d0.5",
                    "host": "localhost:9090",
                    "upgrade-insecure-requests": "1",
                    "connection": "keep-alive",
                    "accept-encoding": "gzip, deflate",
                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:60.0) Gecko/20100101 Firefox/60.0",
                    "accept": "text/html,application/xhtml+xml,application/xml;q\u003d0.9,*/*;q\u003d0.8"
                }
            }
        ];
    }
    componentDidMount() {
        document.title = "ELB Authentication";
    }

    getAll() {
        return this.preHeaders;
    }

    handleActions(action) {
        switch(action.type) {
        case "RECEIVE_HEADERS": {
            this.headers = action.Headers;
            this.emit("change");
            break;
        }
        }
    }
}

const headersStore = new HeadersStore;
dispatcher.register(headersStore.handleActions.bind(headersStore));

export default headersStore;
