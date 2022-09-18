import React from "react";
import "./App.css";
import "./responsive.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Register from "./screens/Register";
import NotFoundPage from './screens/NotFoundPage';
import Login from './screens/Login';

const App = () => {
  return (
   <Router>
     <Switch>
        <Route path='/' component={HomeScreen} exact />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="*" component={NotFoundPage} />
     </Switch>
   </Router>
  )
};

export default App;
