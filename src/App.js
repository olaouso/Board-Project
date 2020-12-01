
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Completed from "./components/Completed";
import NavBar1 from "./components/Nav";

function App() {
  return (
    <Router>
      <Route path="/" component={NavBar1} />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/completed" component={Completed} />
    </Router>
  );
}

export default App;
