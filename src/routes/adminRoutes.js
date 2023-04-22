import Statistical from "../layout/Admin/Statistical/Statistical";
import ProjectManagement from "../layout/Admin/ProjectManagement/ProjectManagement";
import MemberManage from "../layout/Admin/MemberManage/MemberManage";
import CreateAccount from "../layout/Admin/CreateAccount/CreateAccount";
import Profile from "../layout/Admin/Profile/Profile";

export const Admin_option = [
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
        component: ProjectManagement,
        children: [
            {
                id: 10,
                name: 'Tạo project mới',
                path: 'createproject',
                component: () => <></>
            },
            [
                {
                    id: 11,
                    path: '',
                    component: () => <></>
                },
                {
                    id: 12,
                    path: '',
                    component: () => <></>
                },
                {
                    id: 13,
                    path: '',
                    component: () => <></>
                },
            ]
        ]
    },
    {
        id: 2,
        name: 'Quản lý thành viên',
        path: 'membermanage',
        component: MemberManage,
    },
    {
        id: 3,
        name: 'Tạo tài khoản',
        path: 'createaccount',
        component: CreateAccount,
    },
    {
        id: 4,
        name: 'Thông tin cá nhân',
        path: 'dashboard',
        component: Profile,
    },
]