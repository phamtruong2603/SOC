import Statistical from "../layout/Admin/Statistical/Statistical";

export const Option_link = [
    {
        id: 0,
        name: 'Thống kê số liệu',
        path: 'statistical',
        component: Statistical,
    },
    {
        id: 1,
        name: 'Quản lý dự án',
        path: 'projectmanagement',
        component: ()=> <></>,
    },
    {
        id: 2,
        name: 'Quản lý thành viên',
        path: 'membermanage',
        component: ()=> <></>,
    },
    {
        id: 3,
        name: 'Phân quyền',
        path: 'decentralization',
        component: ()=> <></>,
    },
    {
        id: 4,
        name: 'Thông tin cá nhân',
        path: 'dashboard',
        component: ()=> <></>,
    },
]