import React from "react";
import './App.css';
import Navbar from "./components/navbar";
import { ToastContainer, toast } from 'react-toastify';
import { Switch,Route } from "react-router-dom";
import Home from "./components/home"

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/add">
          <h1>Add Component</h1>
        </Route>

        <Route exact path="/edit/:id">
          <h1>Edit Component</h1>
        </Route>

        <Route exact path="/delete">
          <h1>Delete Component</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
