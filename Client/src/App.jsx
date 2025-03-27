import AdminLayout from "./components/admin/AdminLayout";
import AuthLayout from "./components/auth/AuthLayout";
import AdminDashboard from "./Pages/admin/AdminDashboard";
import AdminOrders from "./Pages/admin/AdminOrders";
import AdminProducts from "./Pages/admin/AdminProducts";
import Login from "./Pages/auth/login";
import Register from "./Pages/auth/Register";
import React from "react";
import { Routes, Route } from "react-router-dom";
import ShopAccount from "./Pages/shopping/ShopAccount";
import ShopCheckout from "./Pages/shopping/ShopCheckout";
import ShopListing from "./Pages/shopping/ShopListing";
import ShoppingLayout from "./components/shopping/ShoppingLayout";
import CheckAuth from "./components/Common/CheckAuth";
import NotAuth from "./components/auth/NotAuth";
import NotFound from "./components/Common/NotFound";
const App = () => {
  const isAuthenticated = false;
  const user = {role:'user'};
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
        </Route>
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="products" element={<AdminProducts />}></Route>
          <Route path="dashboard" element={<AdminDashboard />}></Route>
          <Route path="orders" element={<AdminOrders />}></Route>
        </Route>
        <Route
          path="/shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingLayout />
            </CheckAuth>
          }
        >
          <Route path="account" element={<ShopAccount />}></Route>
          <Route path="checkout" element={<ShopCheckout />}></Route>
          <Route path="listing" element={<ShopListing />}></Route>
        </Route>
        <Route path="/notAuth" element={<NotAuth />}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
