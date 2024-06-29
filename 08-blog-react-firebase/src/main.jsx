import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Post from "./pages/Post.jsx";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  // Router,
  // Routes,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="" index element={<App />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" index element={<Login />} />
      <Route path="post" index element={<Post />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
