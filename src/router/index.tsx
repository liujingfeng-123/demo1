import React, { lazy } from "react";
const Login = lazy(
  () => import(/* webpackChunkName: 'Login' */ "../pages/login")
);
const routers = [
  // {
  //   path: "/",
  //   redirect: "/login",
  // },
  {
    path: "/login",
    element: <Login />,
  },
];
export default routers;
