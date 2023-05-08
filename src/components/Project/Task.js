import React, { useEffect, useState } from 'react';
import TableComponent from '../Table/Table';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ViewTask = () => {
  const {id} = useParams()
  const [task, setTask] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem('token');
        axios.defaults.headers.common['Auth'] = `${token}`;
        const res = await axios.post("http://localhost:8080/api/task/get-details-task/", { "task_id": Number(id) })
        setTask(res.data)

      } catch (error) {
      }
    })()
  }, [])
  const dataTable = {
    columns: [
      {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'Tên công việc',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Ngày bắt đầu',
        dataIndex: 'startDate',
        key: 'startDate',
      },
      {
        title: 'Ngày hoàn thành',
        dataIndex: 'deadline',
        key: 'deadline',
      },
      {
        title: 'Hoàn thành',
        dataIndex: 'complete',
        key: 'complete',
      },
      {
        title: 'Thành viên',
        dataIndex: 'member',
        key: 'member',
      },
      {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'status',
      },
      {
        title: 'Người thực hiện',
        dataIndex: 'assignedUsers',
        key: 'assignedUsers',
      },
    ],
    data: task.map((value) =>(
      {
        id: value.id,
        name: value.name,
        startDate: value.startDate,
        deadline: value.deadline,
        complete: value.complete,
        member: value.member,
        status: value.status,
        assignedUsers: value.assignedUsers[0].userName,
        url: value.url
      }
    ))
  }
  return (
    <div>
      <TableComponent dataTable={dataTable} click={true} text={"xem file"} />
    </div>
  )
}

export default ViewTask