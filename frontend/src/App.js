import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import store from "./store";
import Navigationbar from "./components/Navigationbar";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from "./components/Register";
import Login from "./components/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/privates/Dashboard";
import { storeDailies } from "./actions/dailiesActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {  withRouter } from "react-router-dom";


if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "./login";
  }
}

class App extends Component {

  constructor(props) {
    super(props)
    this.handleUnload = this.handleUnload.bind(this);
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.handleUnload);
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.handleUnload);
  }

  handleUnload(e) {
    var message = "\o/";
    const { dailies } = this.props.dailies;
    (e || window.event).returnValue = message; //
   /* let dailies = {
      "userId": "redux",
      "date": "2222-02-01T00:00:00.000Z",
      "dailies": [{
        "type": "fruit",

        "amount": 3

      }]

    }*/
 
    this.props.storeDailies(dailies);
   
  }
  render() {
    
    return (
        <Router>
          <div className="App">
            <Navigationbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </Router>
     
    );
  }
}
App.propTypes = {
  storeDailies: PropTypes.func.isRequired,
  dailies:  PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  dailies: state.dailies
});
export default connect(
  mapStateToProps,
  { storeDailies }
)(App);
 