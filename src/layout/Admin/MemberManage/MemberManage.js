import React from 'react';
import TableComponent from '../../../components/Table/Table';
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
            title: 'Nhiệm vụ',
            dataIndex: 'task',
            key: 'task',
        },
        {
            title: 'Hoàn thành',
            dataIndex: 'complete',
            key: 'complete',
        },
        {
            title: 'Hoàn thành',
            dataIndex: 'complete',
            key: 'complete',
        },
    ],
    data: [
        {
            key: '1',
            id: '1',
            avatar: 'Công ty bất động sản Đà nẵng',
            name: 'Thu',
            task: '15/03/2023',
            complete: '500.000VND'
        },
        {
            key: '2',
            id: '2',
            avatar: 42,
            name: 'Chi',
            task: '15/03/2023',
            complete: '500.000VND'
        },
        {
            key: '3',
            id: '3',
            avatar: 32,
            name: 'Thu',
            task: '15/03/2023',
            complete: '500.000VND'
        },
    ]
}
const MemberManage = () => {
    return (
        <div>
            <TableComponent dataTable={dataTable} />
        </div>
    )
}

export default MemberManage