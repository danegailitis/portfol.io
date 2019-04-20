import React from 'react';
import ReactDOM from 'react-dom';
import LineChart from './LineChart';

//import serviceWorker from './serviceWorker';

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register()
        .then(function (reg) {
            // registration worked
            console.log('Registration succeeded. Scope is ' + reg.scope);
        }).catch(function (error) {
            // registration failed
      
            console.log('Registration failed with ' + error);
        });
}

ReactDOM.render(<LineChart />, document.getElementById('root'));

