import React from "react";
import { HashRouter, Route } from "react-router-dom"
import Navigation from "./component/Navigation";
import About from "./routes/About"
import "./App.css"
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;