import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, Table, Upload } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TableComponent = ({ dataTable, click, text }) => {
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
        console.log(typeof(id))
        try {
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['Auth'] = `${token}`;  
            const response = await axios.post('http://localhost:8080/api/task/update-task/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
            console.log(response)
        } catch (error) {
            console.log(error)
        }
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
                            {text !== "nộp file" ?
                                <button onClick={() => handleNavigate(record.id)}>chi tiết</button> :
                                <>
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
                                        <Button onClick={() => upfile(record.id)} type="primary">Submit</Button>
                                    </Form>
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