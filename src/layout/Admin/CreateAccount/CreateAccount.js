import React, { useContext, useState } from 'react';
import { Button, DatePicker, Form, Input } from 'antd';
import axios from 'axios';
import { MessageContexts } from '../../../components/Message/Message';

const CreateAccount = () => {
  const [data, setData] = useState()
  const { messagesuccess, messageerror } = useContext(MessageContexts)

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
      "dob": dateString,
    })
  };
  const submit = async (e) => {
    e.preventDefault()

    try {
      const token = localStorage.getItem('token');
      axios.defaults.headers.common['Auth'] = `${token}`;
      await axios.post("http://localhost:8080/api/auth/register/", data)
      messagesuccess()
    } catch (error) {
      messageerror()
    }
  }

  return (
    <Form
      labelCol={{ span: 4 }}
      wrAddProjecterCol={{ span: 14 }}
      style={{ maxWidth: 600 }}
      layout="horizontal"
    >
      <Form.Item label="username">
        <Input name='username' onChange={setPrams} />
      </Form.Item>

      <Form.Item label="full name">
        <Input name='fullname' onChange={setPrams} />
      </Form.Item>

      <Form.Item label="country">
        <Input name='country' onChange={setPrams} />
      </Form.Item>

      <Form.Item label="Deadline">
        <DatePicker onChange={onChange} />
      </Form.Item>
      <Form.Item label="Phone Number">
        <Input name='phone' onChange={setPrams} />
      </Form.Item>

      <Form.Item label="email">
        <Input name='email' onChange={setPrams} />
      </Form.Item>

      <Form.Item label="password">
        <Input name='password' onChange={setPrams} />
      </Form.Item>
      <Button onClick={submit} style={{ backgroundColor: "#25c8f1", color: "white", marginLeft: "2rem" }}>Tạo tài khoản</Button>
    </Form>
  );
}

export default CreateAccount