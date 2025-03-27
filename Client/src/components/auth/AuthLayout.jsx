import React from "react";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="flex max-h-screen w-full">
      <div className="h-screen bg-black w-1/2 lg:flex hidden items-center justify-center px-9">
        <div className="font-extrabold tracking-tight text-primary-foreground text-4xl">
          Welcome to CricketCart
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
