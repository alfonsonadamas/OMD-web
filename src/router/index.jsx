import { createBrowserRouter } from "react-router-dom";

import LayoutRoot from "../layout/LayoutRoot";
import LayoutPrivate from "../layout/LayoutPrivate";

import Main from '../pages/Main';
import Eventos from '../pages/Eventos';
import Comunidad from "../pages/Comunidad";
import Fortalecimientos from "../pages/Fortalecimientos";
import Login from "../pages/Login";
import Perfil from "../pages/Perfil";
import Nosotros from '../pages/Nosotros'
import Galeria from '../pages/Galeria'
import RegistroCorreo from "../pages/RegistroCorreo";

export const router  = createBrowserRouter([
    {
        path: '/',
        element: <LayoutRoot />,
        children:[
            {
                index: true,
                element: <Main />
            },
            {
                path: '/comunidad',
                element: <Comunidad />
            },
            {
                path:'/fortalecimientos',
                element: <Fortalecimientos />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/nosotros',
                element: <Nosotros/>
            },
            {
                path: '/galeria',
                element: <Galeria/>
            },
            {
                path: '/eventos',
                element: <Eventos />
            },
            {
                path: '/registro',
                element: <RegistroCorreo />
            },
            {
                path: '/registroUsuario',
                element: <RegistroCorreo />
            },
            {
                path: '/perfil',
                element: <LayoutPrivate />,
                children: [
                    {
                        index: true,
                        element: <Perfil />
                    }
                ]
            }

        ]
    }
])