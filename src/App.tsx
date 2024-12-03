import "./App.css";

import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes"; // Đảm bảo bạn import đúng router

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
