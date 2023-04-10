import Home from "../layout/Home/Home";
import About from "../layout/About/About";

export const Option_link = [
    {
        id: 0,
        name: 'Thống kê số liệu',
        path: 'home',
        component: Home,
    },
    {
        id: 1,
        name: 'About',
        path: 'about',
        component: About,
    },
    {
        id: 2,
        name: 'Test',
        path: 'test',
        component: ()=> <></>,
    },
]