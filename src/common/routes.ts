import { HomePage,TerrestresPage,VoladoresPage,AcuaticosPage,Login } from "../pages";

type JSXComponent = () => JSX.Element;

interface Route {
    path: string;
    component: JSXComponent;
    name: string;
    children?: Route[]
}

export const routes: Route[] = [
    {
        path: '/',
        component: HomePage,
        name: 'Home'
    },
    {
        path: 'terrestres',
        component: TerrestresPage,
        name: 'Terrestres'
    },
    {
        path: 'acuaticos',
        component: AcuaticosPage,
        name: 'Acuaticos'
    },
    {
        path: 'voladores',
        component: VoladoresPage,
        name: 'Voladores'
    },
    {
        path: 'login',
        component: Login,
        name: 'Login'
    },

];

