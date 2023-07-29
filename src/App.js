// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signin from '.components/Signin';
import NextScreen from '.components/NextScreen';

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = (signedIn) => {
    setIsSignedIn(signedIn);
  };

  return (
    <Router>
      <div>
        <Route
          path="/"
          exact
          render={() => (isSignedIn ? <NextScreen /> : <Signin onSignIn={handleSignIn} />)}
        />
      </div>
    </Router>
  );
};

export default App;
