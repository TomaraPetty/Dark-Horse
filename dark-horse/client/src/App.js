
import React, { useState, useEffect } from 'react';
import Firebase from './components/Firebase/Firebase';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
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
  
    <Router>
      <div>

  <Nav />

  <Route exact path={["/", "/home"]} component={Home} />

  {/* <LeafMap /> */}


  </div>
</Router>
  ): (<div id="loader"></div>);
  
}

export default App;
