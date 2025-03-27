import React from "react";
import { Outlet } from "react-router-dom";
import ShoppingHeader from "./ShoppingHeader";
const ShoppingLayout = () => {
  return (
    <div>
      ShoppingLayout
      <ShoppingHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ShoppingLayout;
