import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import App from './componants/App';

import Firebase, { FirebaseContext } from './componants/Firebase/index';





ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <App />
    </FirebaseContext.Provider>,
    document.getElementById('root'),
);
//FirebaseContext.Provider

serviceWorker.unregister();