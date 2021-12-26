import React, { Component } from "react";
import "./App.css";
import Navigationbar from "./components/Navigationbar";
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My Dailies</h1>
        <Navigationbar></Navigationbar>
      </div>
    );
  }
}
export default App;