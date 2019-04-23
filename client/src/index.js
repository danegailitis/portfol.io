import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import App from './componants/App';

import {
    FirebaseProvider,
    AuthProvider,
    FirestoreProvider,
    StorageProvider
} from 'react-firebase-context';


var config = {
    apiKey: "AIzaSyDGubZDh62pQ3I0_7RDlvcCMick4I9zMwM",
    authDomain: "portfolio-280dd.firebaseapp.com",
    databaseURL: "https://portfolio-280dd.firebaseio.com",
    projectId: "portfolio-280dd",
    storageBucket: "portfolio-280dd.appspot.com",
    messagingSenderId: "402005994401"
};



ReactDOM.render(
    <FirebaseProvider {...config}>
    <AuthProvider>
        <FirestoreProvider>
                    <App />
        </FirestoreProvider>
    </AuthProvider>
    </FirebaseProvider>,
    document.getElementById('root'),
);
//FirebaseContext.Provider

serviceWorker.unregister();