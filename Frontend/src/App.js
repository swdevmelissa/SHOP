import React from "react";
import "./App.css";
import "./responsive.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import Register from "./screens/Register";
import ProfilePage from "./screens/ProfilePage";
import CartPage from "./screens/CartPage";
import ProductDetailPage from "./screens/ProductDetailPage";
import NotFoundPage from './screens/NotFoundPage';
import Login from './screens/Login';

const App = () => {
  return (
   <Router>
     <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/products/:id' component={ProductDetailPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path='/profile' component={ProfilePage} />
        <Route path='/cart/:id?' component={CartPage} />
        <Route path="*" component={NotFoundPage} />
     </Switch>
   </Router>
  )
};

export default App;
