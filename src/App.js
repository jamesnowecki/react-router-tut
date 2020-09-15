import React from 'react';
import './App.css';
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div >
        <Nav />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const Home = ( ) => {
  return <div>Home</div>
}

export default App;
