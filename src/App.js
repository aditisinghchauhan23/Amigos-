import "./App.css";
import Header from "./components/Header";
import {  Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from "./components/Hero";
import Home from "./components/Home"
// import { Switch, Route } from 'react-router-dom';
// import { Routes ,Route } from 'react-router-dom';
function App() {
  return ( 
  <Router>
    <Switch>
      <Route exact path="/">
        <Header />
        <Hero />
      </Route>
       <Route exact path="/channels">
        <Home />
      </Route>
      <Route exact path="/channels/:id">
        <Home />
      </Route> 
    </Switch>
  </Router>
  );
}

export default App;
