import React from "react";
import { HashRouter, Route } from "react-router-dom"
import Navigation from "./component/Navigation";
import About from "./routes/About"
import "./App.css"
import Home from "./routes/Home";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;