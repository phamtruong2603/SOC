import Statistical from "../layout/Admin/Statistical/Statistical";
import ProjectManagement from "../layout/Admin/ProjectManagement/ProjectManagement";
import MemberManage from "../layout/Admin/MemberManage/MemberManage";
import CreateAccount from "../layout/Admin/CreateAccount/CreateAccount";
import Profile from "../layout/Admin/Profile/Profile";

// const a = [1, 1, 3]

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