import React, { lazy } from "react";
import Loadable from "../layouts/loadable";
import { Navigate } from "react-router-dom";
import ProtectedRoute from "../Protect";

/* ***Layouts**** */
const FullLayout = Loadable(
  lazy(() => import("../layouts/full-layout/MainLayout"))
);

/* ***End Layouts**** */

const Error = Loadable(lazy(() => import("../pages/error/404")));
const HomePage = Loadable(lazy(() => import("../pages/home/home")));
const PerrosView = Loadable(lazy(() => import("../pages/perros/perrosContainer")));
const LoginInt = Loadable(lazy(() => import("../pages/login/Loginint")));
const Inventario = Loadable(lazy(() => import("../pages/Inventario/Inventario")));
const Tratamientos = Loadable(lazy(() => import("../pages/tratamientos/tratamientos")));
const PerrosViewPerfil = Loadable(lazy(() => import("../pages/perros/PerfilPerroPublico/Perfilperrocontainer")));


/* ****Routes***** */

const Router = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", exact: true, element: <Navigate to="/inicio" /> }, // Redirección desde raíz a /inicio
      { path: "/inicio", exact: true, element: <HomePage /> },
      { path: "*", element: <Navigate to="/404" /> },
      { path: "404", element: <Error /> },
      { path: "Rescatados", element: <PerrosView /> },
      { path: "Rescatados/perfil/:id", element: <PerrosViewPerfil />},
      { path: "Login", element: <LoginInt />},
      { path: "Inventario", element: <ProtectedRoute element={ <Inventario /> }/>},
      { path: "Tratamientos", element: <ProtectedRoute element={ <Tratamientos /> }/>}
    ],
  },
];

export default Router;
