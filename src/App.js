import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import logo from './logo.svg';
import './Stylesheets/App.css';
import Title from './Title.js';
import Opening from './Opening.js';
import Footer from './Footer.js';
import Gallery from './Gallery.js';
import Comission from './Comission.js'


function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Route exact path="/" component={Opening}/>
        <Route exact path="/gallery" component={Gallery}/>
        <Route exact path="/comission" component={Comission}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
