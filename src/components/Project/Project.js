import React, { useContext, useEffect, useState } from 'react';
import './Project.css';
import { useParams } from 'react-router-dom';
import { Button, DatePicker, Form, Input, Select, Tabs } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios';
import TableComponent from '../Table/Table';
import { UserContexts } from '../../api/UserContext';
import { MessageContexts } from '../Message/Message';

const Task = ({ id }) => {
    const { user } = useContext(UserContexts)
    const { messagesuccess, messageerror } = useContext(MessageContexts)
    const [hidden, setHidden] = useState(false)
    const [listTask, setListTask] = useState([])
    const [data, setData] = useState({
        projectId: Number(id)
    })
    const text = user.admin ? "chi tiết" : "nộp file"
    const [options, setOptions] = useState([])
    const projectId = { "projectId": Number(id) }
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
        try {
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['Auth'] = `${token}`;
            await axios.post("http://localhost:8080/api/task/create/", data)
            messagesuccess()
            const resProject = await axios.post("http://localhost:8080/api/task/view-all-tasks/", projectId)
            setListTask(resProject.data)
            setData({
                projectId: Number(id)
            })
        } catch (error) {
            messageerror()
        }
    }
    const dataTable = {
        columns: [
            {
                title: 'id',
                dataIndex: 'id',
                key: 'id',
            },
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
            id:value.id,
            name: value.name,
            startDate: value.startDate,
            deadline: value.deadline,
            complete: value.complete,
            member: value.member,
            status: value.status
        }))
    }
    useEffect(() => {
        (async () => {
            try {
                const token = localStorage.getItem('token');
                axios.defaults.headers.common['Auth'] = `${token}`;
                const res = await axios.post("http://localhost:8080/api/user/list-user-by-projectId", projectId)
                console.log(res)
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
            {user.admin ?
                <div className='Add_ProjectManagement'>
                    <button onClick={addTask}><PlusOutlined style={{ fontWeight: 700 }} /> Thêm</button>
                </div> :
                <></>
            }
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
            <div className='viewTask'>
                <h2>Danh sách công việc</h2>
                <TableComponent
                    dataTable={dataTable}
                    click={true}
                    text={text}
                />
            </div>
        </div>
    )
}

const Children = ({ value, id }) => {
    if (value === 'Công việc') {
        return <Task id={id} />
    }
}

const Project = () => {
    let { id } = useParams()

    const items = ['Công việc', 'Thời gian', 'Thành viên'].map((value, index) => {
        return {
            label: `${value}`,
            key: index,
            children:
                <Children
                    id={id}
                    value={value}
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