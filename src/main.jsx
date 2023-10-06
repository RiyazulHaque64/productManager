import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./layout/Dashboard.jsx";
import AddProduct from "./pages/AddProduct.jsx";
import DashboardHome from "./pages/DashboardHome.jsx";
import AllProducts from "./pages/AllProducts.jsx";
import ProductDetails from "./pages/productDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <Dashboard />,
    children: [
      {
        path: "/admin/home",
        element: <DashboardHome />,
      },
      {
        path: "/admin/add-product",
        element: <AddProduct />,
      },
      {
        path: "/admin/all-products",
        element: <AllProducts />,
      },
      {
        path: "/admin/product-details",
        element: <ProductDetails />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
