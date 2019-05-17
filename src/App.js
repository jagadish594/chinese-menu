import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, NavLink, Route} from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="NavBar">
            <button><NavLink to="/" activeStyle={{color: "green"}} exact>Home</NavLink></button>
            <button><NavLink to="/categories" activeStyle={{color: "green"}} exact>Categories</NavLink></button>
          </div>
          <Route path="/" component={Home} exact />
          <Route path="/categories" component={Categories} exact />
        </div>
      </BrowserRouter>

    );
  }
}
export default App;
