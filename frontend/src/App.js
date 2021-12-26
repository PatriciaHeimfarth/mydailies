import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Navigationbar from "./components/Navigationbar";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from "./components/Register";
import Login from "./components/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/privates/Dashboard";


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

    (e || window.event).returnValue = message; //Gecko + IE
    return message;
  }

  
  render() {

    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}
export default App;