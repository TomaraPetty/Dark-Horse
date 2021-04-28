import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
// import LeafMap from './components/Map';

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Route exact path={["/", "/home"]} component={Home} />
      {/* <LeafMap /> */}
    </div>
    </Router>
  );
}

export default App;
