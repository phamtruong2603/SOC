import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, Table, Upload } from 'antd';
import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageContexts } from '../Message/Message';

const TableComponent = ({ dataTable, click, text }) => {
    const { messagesuccess, messageerror } = useContext(MessageContexts)
    const navigate = useNavigate()
    const [file, setFile] = useState(null)
    const dataSource = [...dataTable.data]
    const handleNavigate = (id) => {
        navigate(`${id}`)
    };
    const normFile = (e) => {
        setFile(e.file);
    };
    const upfile = async (id) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('task_id', id)
        try {
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['Auth'] = `${token}`;
            await axios.post('http://localhost:8080/api/task/update-task/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
            messagesuccess()
        } catch (error) {
            messageerror()
        }
    }
    const redirect = (value) => {
        window.open(value.url, '_blank');
    }
    let defaultColumns
    if (click) {
        defaultColumns = [
            ...dataTable.columns,
            {
                title: '',
                dataIndex: '',
                render: (_, record) =>
                    dataSource.length > 0 ? (
                        <>
                            {text === "xem file" ?
                                <>
                                    {record.status === "DOING" ? <></> :
                                        <Button onClick={() => redirect(record)} style={{ backgroundColor: "#25c8f1", color: "white", padding: "0px 8px" }}>{text}</Button>
                                    }
                                </>
                                :
                                text !== "nộp file" ?
                                    <Button onClick={() => handleNavigate(record.id)} style={{ backgroundColor: "#25c8f1", color: "white", padding: "0px 8px" }}>{text}</Button> :
                                    <>
                                        {record.status === "DOING" ?
                                            <Form>
                                                <Form.Item
                                                    name="File"
                                                    valuePropName="files"
                                                    getValueFromEvent={normFile}
                                                    extra=""
                                                >
                                                    <Upload beforeUpload={() => false}>
                                                        <Button icon={<UploadOutlined />}>upfile</Button>
                                                    </Upload>
                                                </Form.Item>
                                                <Button onClick={() => upfile(record.id)}>
                                                    Nộp file
                                                </Button>
                                            </Form>
                                            :
                                            <></>}
                                    </>
                            }
                        </>
                    ) : null,
            }
        ]
    } else {
        defaultColumns = [...dataTable.columns]
    }

    return (
        <div>
            <Table
                dataSource={dataSource}
                columns={defaultColumns}
            />
        </div>
    );
}
export default TableComponent;