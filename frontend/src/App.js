import React, { Component } from "react";
import "./App.css";
import Navigationbar from "./components/Navigationbar";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from "./components/Register";
import Login from "./components/Login";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My Dailies</h1>
        <Navigationbar></Navigationbar>
        <Home></Home>
        <Login></Login>
        <Register></Register>
      </div>
    );
  }
}
export default App;