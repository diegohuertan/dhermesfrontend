import React, { lazy } from "react";
import Loadable from "../layouts/loadable";
import { Navigate } from "react-router-dom";

/* ***Layouts**** */
const FullLayout = Loadable(
  lazy(() => import("../layouts/full-layout/MainLayout"))
);

/* ***End Layouts**** */

const Error = Loadable(lazy(() => import("../pages/error/404")));
const HomePage = Loadable(lazy(() => import("../pages/home/home")));
const PerrosView = Loadable(lazy(() => import("../pages/perros/perrosContainer")));
const LoginInt = Loadable(lazy(() => import("../pages/login/Loginint")));
const PerrosViewPerfil = Loadable(lazy(() => import("../pages/perros/PerfilPerroPublico/Perfilperrocontainer")));


/* ****Routes***** */

const Router = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", exact: true, element: <HomePage /> },
      { path: "*", element: <Navigate to="/404" /> },
      { path: "404", element: <Error /> },
      { path: "Perros", element: <PerrosView /> },
      { path: "perros/prueba", element: <PerrosViewPerfil />},
      { path: "Login", element: <LoginInt />}
  
      
    ],
  },
];

export default Router;