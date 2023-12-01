import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import MyProducts from "./components/MyProducts";
import Register from "./components/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Home",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/add-product",
    element: <AddProduct />,
  },
  {
    path: "/edit-product",
    element: <EditProduct />,
  },
  {
    path: "/my-products",
    element: <MyProducts />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
