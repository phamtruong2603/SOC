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
            avatar: '0',
            name: 'abc abc  abc',
            task: '15',
            complete: '0'
        },
        {
            key: '2',
            id: '2',
            avatar: 42,
            name: 'bcd bcd bcd',
            task: '10',
            complete: '0'
        },
        {
            key: '3',
            id: '3',
            avatar: 32,
            name: 'def def def',
            task: '20',
            complete: '0'
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