import React, { lazy } from "react";
import { Navigate } from "react-router";
const Login = lazy(
  () => import(/* webpackChunkName: 'Login' */ "@/pages/login")
);
const Home = lazy(() => import(/* webpackChunkName: 'Home' */ "@/pages/home"));
const routers = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
];
export default routers;
