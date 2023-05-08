import React, { useContext, useEffect, useState } from 'react';
import { Button, DatePicker, Form, Input, Select } from 'antd';
import axios from 'axios';
import { MessageContexts } from '../../../components/Message/Message';
import { useNavigate } from 'react-router-dom';

const AddProject = () => {
  const [data, setData] = useState()
  const { messagesuccess, messageerror } = useContext(MessageContexts)
  const [options, setOptions] = useState([])
  const navigate = useNavigate()
  const handleChange = (value) => {
    setData({
      ...data,
      "members": value
    })
  };
  const handleChangeLead = (value) => {
    setData({
      ...data,
      "leader": value
    })
  };
  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem('token');
        axios.defaults.headers.common['Auth'] = `${token}`;
        const res = await axios.post("http://localhost:8080/api/user/list-user")
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

  const setPrams = (e) => {
    let name = e.target.name
    let value = e.target.value
    setData({
      ...data,
      [name]: value,
    })
  }
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
      await axios.post("http://localhost:8080/api/project/create/", data)
      messagesuccess()
      navigate('/admin/projectmanagement')
    } catch (error) {
      messageerror()
    }
  }
  return (
    <Form
      labelCol={{ span: 4 }}
      wrAddProjecterCol={{ span: 14 }}
      style={{ maxWidth: 600 }}
    >
      <Form.Item label="Name Project">
        <Input name='name' onChange={setPrams} />
      </Form.Item>

      <Form.Item label="Leader">
        <Select
          onChange={handleChangeLead}
          allowClear
          options={options}
        />
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
      <Button onClick={submit} style={{ backgroundColor: "#25c8f1", color: "white", marginLeft: "2rem" }}>Thêm dự án</Button>
    </Form>
  );
};
export default AddProject;