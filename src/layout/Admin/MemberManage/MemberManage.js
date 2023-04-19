import React from 'react';
import TableComponent from '../../../components/Table/Table';
import { Route, Routes } from 'react-router-dom';
import ProfileMain from '../../../components/Profile/ProfileMain';
import { memberData } from '../../../api/testData';

const dataTable = {
    columns: [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Avatar',
            dataIndex: 'avatar',
            key: 'avatar',
        },
        {
            title: 'Họ tên',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Ngày sinh',
            dataIndex: 'dateOfBirth',
            key: 'dateOfBirth',
        },
        {
            title: 'Team',
            dataIndex: 'team',
            key: 'team',
        },
    ],
    data: memberData.map(value => ({
        id: value.id,
        avatar: value.avatar,
        name: value.name,
        email: value.email,
        dateOfBirth: value.dateOfBirth,
        team: value.team
    }))
}
const MainMemberManage = () => {
    return (
        <div>
            <TableComponent
                dataTable={dataTable}
                click={true}
            />
        </div>
    )
}

const MemberManage = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<MainMemberManage />}
            />
            <Route
                path="/:id"
                element={<ProfileMain />}
            />
        </Routes>
    )
}

export default MemberManage