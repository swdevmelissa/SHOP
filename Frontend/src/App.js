import React from "react";
import "./App.css";
import "./responsive.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import Register from "./screens/Register";
import ProfilePage from "./screens/ProfilePage";
import CartPage from "./screens/CartPage";
import ProductDetailPage from "./screens/ProductDetailPage";
import DeliveryInfo from "./screens/DeliveryInfo";
import PaymentMethodPage from "./screens/PaymentMethodPage";
import PlaceOrderPage from "./screens/PlaceOrderPage";
import OrderPage from "./screens/OrderPage";
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
        <Route path='/delivery' component={DeliveryInfo} />
        <Route path='/paymentMethod' component={PaymentMethodPage} />
        <Route path='/placeorder' component={PlaceOrderPage} />
        <Route path='/order' component={OrderPage} />
        <Route path="*" component={NotFoundPage} />
     </Switch>
   </Router>
  )
};

export default App;
