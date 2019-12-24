import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router } from 'react-router-dom';

import { AuthModel as Auth } from '@features/Auth';
import { SessionModel as Session } from '@features/Session';
import { LanguageModel as Language } from '@features/Language';
import { App } from 'App';
import * as serviceWorker from './serviceWorker';


const models = {
    Auth,
    Session,
    Language,
};

ReactDOM.render((
    <Provider {...models}>
        <Router>
            <App/>
        </Router>
    </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
