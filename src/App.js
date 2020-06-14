<<<<<<< HEAD
import React from 'react';
import { Route } from 'react-router-dom';
=======
import React from "react";
import { Route } from "react-router-dom";
>>>>>>> a11212adcd6b72edc46e54bbd8952a8ad5ccc92f

import "./App.css";

import Header from "./components/header/header.component";
import Navbar from "./components/nav-bar/nav-bar.component";
import Homepage from "./pages/homepage/homepage.component";

const App = () => (
  <div>
    <Header />
    <Navbar />
    <Route path="/" component={Homepage} />
  </div>
);

export default App;
