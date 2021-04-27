import React, { useState, useEffect } from 'react';
import Firebase from './components/Firebase/Firebase';
import LeafMap from './components/Map';
import Login from './components/Login/Login';

function App() {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);
  useEffect(() => {
    Firebase.isInitialized().then((val) => {
      setFirebaseInitialized(val);
    });
  });
  return firebaseInitialized !== false ? (
    <div>
      <Login />
      <LeafMap />
    </div>
  ) : (
    <div id="loader"></div>
  );
}

export default App;
