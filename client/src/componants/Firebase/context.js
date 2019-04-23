import React from 'react';
//import { withFirebase } from '.';

const FirebaseContext = React.createContext(null);


/*class fb extends React.Component {
    constructor(props, Component){
        super(props);
    }
    render(){
        return(
            <FirebaseContext.Consumer>
                {firebase => <Component {...this.props} firebase={firebase} />}
            </FirebaseContext.Consumer>
        );
    }
    
}
export const withFirebase = { fb }*/
export const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
        {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
);

export default FirebaseContext;