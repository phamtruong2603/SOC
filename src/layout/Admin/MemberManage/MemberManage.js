import React, { useEffect, useState } from 'react';
import TableComponent from '../../../components/Table/Table';
import { Route, Routes } from 'react-router-dom';
import ProfileMain from '../../../components/Profile/ProfileMain';
import { memberData } from '../../../api/testData';
import axios from 'axios';

const MainMemberManage = () => {
    const [users, setUsers] = useState([])
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
                title: 'Phone',
                dataIndex: 'phone',
                key: 'phone',
            },
        ],
        data: users.map(value => ({
            id: value.id,
            avatar: value.avatar,
            name: value.userName,
            email: value.email,
            dateOfBirth: value.dateOfBirth,
            phone: value.phone
        }))
    }
    useEffect(() => {
        (async () => {
            try {
                const token = localStorage.getItem('token');
                axios.defaults.headers.common['Auth'] = `${token}`;
                const res = await axios.post("http://localhost:8080/api/user/list-user")
                setUsers(res.data)
            } catch (error) {

            }
        })()
    }, [])
    return (
        <div>
            <TableComponent
                dataTable={dataTable}
                click={true}
                text={"chi tiết"}
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