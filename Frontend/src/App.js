import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
   <Router>
     <Switch>
        <Route path='/' component={HomeScreen} exact />
     </Switch>
   </Router>
  )
};

export default App;
