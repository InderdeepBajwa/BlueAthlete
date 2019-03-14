// This file initializes Firebase. Once, and only once.
// This helps in preventing multiple instances of Firebase

import React from 'react';

// FirebaseContext Firebase context init (will return FirebaseContext.Provider to init Firebase)
const FirebaseContext = React.createContext(null);

// Higher order component
export const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
        {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
);


export default FirebaseContext;