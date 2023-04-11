import Statistical from "../layout/Admin/Statistical/Statistical";
import ProjectManagement from "../layout/Admin/ProjectManagement/ProjectManagement";
import MemberManage from "../layout/Admin/MemberManage/MemberManage";
import AddProject from "../layout/Admin/ProjectManagement/AddProject";

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
        chidren: {
            id: 11,
            name: 'Thêm dự án',
            path: 'addprject',
            component: AddProject,
        }
    },
    {
        id: 2,
        name: 'Quản lý thành viên',
        path: 'membermanage',
        component: MemberManage,
    },
    {
        id: 3,
        name: 'Phân quyền',
        path: 'decentralization',
        component: () => <></>,
    },
    {
        id: 4,
        name: 'Thông tin cá nhân',
        path: 'dashboard',
        component: () => <></>,
    },
]