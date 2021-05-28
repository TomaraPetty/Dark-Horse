import React, { useState, useEffect } from 'react';
import Firebase from './components/Firebase/Firebase';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import BandProfile from './pages/BandProfile';
import Footer from "./components/Footer";
import LeafMap from './components/Map';

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

        <Route exact path={['/', '/home']} component={Home} />
        <Route exact path="/bandprofile/" component={BandProfile} />
        <Route path="/profile/:_id" component={BandProfile} />
        <Footer />
        {/* <LeafMap /> */}
      </div>
    </Router>
  ) : (
    <div id="loader"></div>
  );

}

export default App;
