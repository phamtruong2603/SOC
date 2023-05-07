import React, { useContext, useEffect, useState } from 'react';
import './Project.css';
import { ProjectContexts } from '../../api/ProjectContext.js';
import { useParams } from 'react-router-dom';
import { Button, DatePicker, Form, Input, Select, Tabs } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios';
import TableComponent from '../Table/Table';

const Task = ({ id }) => {
    const [hidden, setHidden] = useState(false)
    const [listTask, setListTask] = useState([])
    const [data, setData] = useState({
        projectId: Number(id)
    })
    const [options, setOptions] = useState([])

    const addTask = () => setHidden(!hidden)
    const setPrams = (e) => {
        let name = e.target.name
        let value = e.target.value
        setData({
            ...data,
            [name]: value,
        })
    }
    const handleChange = (value) => {
        setData({
            ...data,
            "userIds": value
        })
    };
    const onChange = (date, dateString) => {
        setData({
            ...data,
            "deadline": dateString,
        })
    };
    const submit = async (e) => {
        e.preventDefault()
        console.log(data)
        try {
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['Auth'] = `${token}`;
            const res = await axios.post("http://localhost:8080/api/task/create/", data)
            console.log(res)
        } catch (error) {

        }
    }
    const dataTable = {
        columns: [
            {
                title: 'Tên task',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'start date',
                dataIndex: 'startDate',
                key: 'startDate',
            },
            {
                title: 'deaadline',
                dataIndex: 'deadline',
                key: 'deadline',
            },
            {
                title: 'hoàn thành',
                dataIndex: 'complete',
                key: 'complete',
            },
            {
                title: 'thành viên',
                dataIndex: 'member',
                key: 'member',
            },
            {
                title: 'trạng thái',
                dataIndex: 'status',
                key: 'status',
            },
        ],
        data: listTask.map((value) => ({
            name: value.name,
            startDate: value.setData,
            deadline: value.deadline,
            complete: value.complete,
            member: value.member,
            status: value.status
        }))
    }
    console.log(listTask)
    useEffect(() => {
        (async () => {
            try {
                const projectId = { "projectId": Number(id) }
                const token = localStorage.getItem('token');
                axios.defaults.headers.common['Auth'] = `${token}`;
                const res = await axios.post("http://localhost:8080/api/user/list-user")
                const resProject = await axios.post("http://localhost:8080/api/task/view-all-tasks/", projectId)
                setListTask(resProject.data)
                const newData = res.data.map((user) => {
                    let key = user.id
                    return ({
                        value: key,
                        label: user.userName,
                    })
                })
                setOptions(newData)

            } catch (error) {

            }
        })()
    }, [])
    return (
        <div>
            <div className='Add_ProjectManagement'>
                <button onClick={addTask}><PlusOutlined style={{ fontWeight: 700 }} /> Thêm</button>
            </div>
            <div className={`${hidden ? 'addTask' : 'hidden'}`}>
                <Form
                    labelCol={{ span: 4 }}
                    wrAddProjecterCol={{ span: 14 }}
                    style={{ maxWidth: 600 }}
                >
                    <Form.Item label="Name Task">
                        <Input name='name' onChange={setPrams} />
                    </Form.Item>

                    <Form.Item label="Member">
                        <Select
                            mode="multiple"
                            allowClear
                            style={{
                                width: '100%',
                            }}
                            placeholder="Please select"
                            onChange={handleChange}
                            options={options}
                        />
                    </Form.Item>

                    <Form.Item label="Deadline">
                        <DatePicker onChange={onChange} />
                    </Form.Item>

                    <Button onClick={submit}>Lưu Task</Button>
                </Form>
            </div>
            <div>
                <TableComponent
                    dataTable={dataTable}
                    click={true}
                />
            </div>
        </div>
    )
}

const Children = ({ value, data, id }) => {
    if (value === 'Công việc') {
        return <Task id={id} />
    }
}

const Project = () => {
    let { id } = useParams()
    const { project } = useContext(ProjectContexts);
    const [data, setData] = useState()
    useEffect(() => {
        const proj = project.filter((value) => Number(id) === value.id)
        setData(...proj)
    }, [id, project])

    const items = ['Công việc', 'Thời gian', 'Thành viên'].map((value, index) => {
        return {
            label: `${value}`,
            key: index,
            children:
                <Children
                    id={id}
                    value={value}
                    data={data}
                />,
        }
    })

    return (
        <div>
            <Tabs
                style={{ marginBottom: 32 }}
                items={items}
            />
        </div>
    );
}

export default Project