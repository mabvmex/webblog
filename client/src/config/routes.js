// Layout
import LayoutAdmin from '../layouts/LayoutAdmin';
import LayoutBasic from '../layouts/LayoutBasic';

// Admin Pages
import AdminHome from '../pages/admin/Index' // (from index.js)
import AdminSignIn from '../pages/admin/SignIn';
import AdminUsers from '../pages/admin/Users';
import AdminMenuWeb from '../pages/admin/MenuWeb';

// Basic Pages
import Home from '../pages/Home';
import Contact from '../pages/Contacto';
import Projects from '../pages/Projects';

// Others
import Error404 from '../pages/Error404';
// import { Layout } from 'antd';

const routes = [
    {
        path: "/admin",
        component: LayoutAdmin,
        exact: false, // Siempre que la ruta /admin no cargará el componente Layout porque se usa 'exact: false'
        routes: [
            {
                path: '/admin',
                component: AdminHome,
                exact: true
            },
            {
                path: '/admin/login',
                component: AdminSignIn,
                exact: true
            },
            {
                path: '/admin/users',
                component: AdminUsers,
                exact: true
            },
            {
                path: '/admin/menu',
                component: AdminMenuWeb,
                exact: true
            },
            {
                component: Error404
            },
            
        ]      
    },
    {
        path: '/',
        component: LayoutBasic,
        exact: false,
        routes: [
            {
                path: '/',
                component: Home,
                exact: true
            },
            {
                path: '/contacto',
                component: Contact,
                exact: true
            },
            {
                path: '/proyectos',
                component: Projects,
                exact: true
            },
            {
                component: Error404
            }
        ]
    }
];

export default routes;
