import { createBrowserRouter } from "react-router-dom";

import LayoutRoot from "../layout/LayoutRoot";
import LayoutPrivate from "../layout/LayoutPrivate";

import Main from "../pages/Main";
import Eventos from "../pages/Eventos";
import Comunidad from "../pages/Comunidad";
import Fortalecimientos from "../pages/Fortalecimientos";
import Login from "../pages/Login";
import Perfil from "../pages/Perfil";
import Nosotros from "../pages/Nosotros";
import Galeria from "../pages/Galeria";
import RegistroCorreo from "../pages/RegistroCorreo";
import VerificacionUsuario from "../pages/VerificacionUsuario";
import RegistroUsuario from "../pages/RegistroUsuario";
import RegistroExisto from "../pages/RegistroExito";
import VerificacionCorreo from "../pages/VerificacionCorreo";
import VerificacionSesion from "../pages/VerificacionSesion";
import Bienvenida from "../pages/Bienvenida";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutRoot />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "/comunidad",
        element: <Comunidad />,
      },
      {
        path: "/fortalecimientos",
        element: <Fortalecimientos />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/nosotros",
        element: <Nosotros />,
      },
      {
        path: "/galeria",
        element: <Galeria />,
      },
      {
        path: "/eventos",
        element: <Eventos />,
      },
      {
        path: "/registro",
        element: <RegistroCorreo />,
      },
      {
        path: "/registroUsuario",
        element: <RegistroUsuario />,
      },
      {
        path: "/perfil",
        element: <LayoutPrivate />,
        children: [
          {
            index: true,
            element: <Perfil />,
          },
        ],
      },
      {
        path: "/verificacionUsuario",
        element: <LayoutPrivate />,
        children: [
          {
            index: true,
            element: <VerificacionUsuario />,
          },
        ],
      },
      {
        path: "/verificacionCorreo",
        element: <LayoutPrivate />,
        children: [
          {
            index: true,
            element: <VerificacionCorreo />,
          },
        ],
      },
      {
        path: "/verificacionSesion",
        element: <LayoutPrivate />,
        children: [
          {
            index: true,
            element: <VerificacionSesion />,
          },
        ],
      },
      {
        path: "/bienvenida",
        element: <LayoutPrivate />,
        children: [
          {
            index: true,
            element: <Bienvenida />,
          },
        ],
      },
    ],
  },
]);
