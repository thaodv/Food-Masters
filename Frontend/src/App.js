import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Customer Pages / Components

import CustomerNavbar from './pages/customer/CustomerNavbar';
import Home from './pages/customer/Home/Home';
import Register from './pages/customer/Register';
import CustomerLogin from './pages/customer/Login/CustomerLogin';
import Restuarents from './pages/customer/Restuarant/Restuarents';
import SingleRestuarent from './pages/customer/Restuarant/SingleRestuarent';
import Order from './pages/customer/Order/Orders';
import Cart from './pages/customer/Order/Cart';
import Buy from './pages/customer/Order/Buy';


// Seller Pages / Components

import SellerNavbar from './pages/seller/SellerNavbar';
import SellerNavbarLoggedIn from './pages/seller/SellerNavbarLoggedIn';
import AddRestuarent from './pages/seller/AddRestuarent';
import SellerLogin from './pages/seller/Login/SellerLogin';
import SellerDashBoard from './pages/seller/Seller DashBoard/SellerDashBoard';
import EditMenu from './pages/seller/Seller DashBoard/EditMenu';
import SellerNavbarOrder from './pages/seller/Seller Order/SellerNavbarOrder';
import SellerOrders from './pages/seller/Seller Order/SellerOrders';

// Common Page

import Footer from './pages/Footer';
import Error from './pages/Error';


import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';


function App() {
  return (

    // Route for visiting different pages / component

    <Router>
      <Switch>

        {/* Customer Route */}

        <Route exact path="/">
          <CustomerNavbar />
          <Home />
        </Route>
        <Route exact path="/register">
          <CustomerNavbar />
          <Register />
        </Route>
        <Route exact path="/login">
          <CustomerNavbar />
          <CustomerLogin />
        </Route>
        <Route exact path="/restaurants">
          <CustomerNavbar />
          <Restuarents />
        </Route>
        <Route exact path="/restaurants/:name">
          <CustomerNavbar />
          <SingleRestuarent />
        </Route>
        <Route exact path="/orders">
          <CustomerNavbar />
          <Order />
        </Route>
        <Route exact path="/cart">
          <CustomerNavbar />
          <Cart />
        </Route>
        <Route exact path="/cart/buy">
          <CustomerNavbar />
          <Buy />
        </Route>

        {/* Seller Route */}

        <Route exact path="/business/addRestaurant">
          <SellerNavbar />
          <AddRestuarent />
        </Route>
        <Route exact path="/business/login" >
          <SellerNavbar />
          <SellerLogin />
        </Route>
        <Route exact path="/business/seller/orders">
          <SellerNavbarOrder />
          <SellerOrders />
        </Route>
        <Route exact path="/business/seller/:name" >
          <SellerNavbarLoggedIn />
          <SellerDashBoard />
        </Route>
        <Route exact path="/business/foodMenu/:name/:foodName">
          <SellerNavbarLoggedIn />
          <EditMenu />
        </Route>
        <Route path="*">
          <CustomerNavbar />
          <Error />
        </Route>
      </Switch>
      <Footer />
      <NotificationContainer />
    </Router>

  );
}

export default App;
