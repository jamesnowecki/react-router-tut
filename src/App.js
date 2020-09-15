import React from 'react';
import './App.css';
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FilmDetail from "./filmDetail"

const App = () => {
  return (
    <BrowserRouter>
      <div >
        <Nav />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/shop" component={Shop} />
        <Route path="/shop/:id" component={FilmDetail} />

        </Switch>
      </div>
    </BrowserRouter>
  );
}

const Home = ( ) => {
  return <div>Home</div>
}

export default App;
