<<<<<<< HEAD
import React from "react";
import logo from "./logos/logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello Peter!</h1>
    </div>
  );
}
=======
import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import Navbar from './components/nav-bar/nav-bar.component';
import Homepage from './pages/homepage/homepage.component';

const App = () => (
  <div>
    <Header />
    <Navbar />
    <Route path='/' component={Homepage} />
  </div>
);
>>>>>>> c26f94b695d1d76f4567d1d1074d9268d0d01483

export default App;
