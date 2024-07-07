import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Login from "./pages/Login.jsx";
// import StudentForm from "./pages/Form.jsx";
import Comment from "./pages/Comment.jsx";
import Dashboard from "./pages/Dashboard/Home.jsx";
import RegisterStudent from "./pages/Dashboard/RegisterStudent.jsx";
import StudentFeedback from "./pages/Dashboard/StudentFeedback.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  // {
  //   path: "/signup",
  //   element: <StudentForm />,
  // },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  {
    path: "/comment/:id",
    element: <Comment />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/dashboard/register-student",
    element: <RegisterStudent />,
  },
  {
    path: "/dashboard/student-feedback",
    element: <StudentFeedback />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
