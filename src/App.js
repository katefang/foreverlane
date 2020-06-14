import React from "react";
import { Route } from "react-router-dom";

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
