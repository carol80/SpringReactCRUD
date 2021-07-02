import React from "react";
import './App.css';
import { ToastContainer } from 'react-toastify';
import { Switch,Route } from "react-router-dom";


import Navbar from "./components/navbar";
import Home from "./components/home"
import AddContact from "./components/addContact";
import EditContact from "./components/editContact";


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
          <AddContact />
        </Route>

        <Route exact path="/edit/:id">
          <EditContact />
        </Route>

        <Route exact path="/delete">
          <h1>Delete Component</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
