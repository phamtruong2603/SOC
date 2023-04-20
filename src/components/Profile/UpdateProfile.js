import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';

const UpdateProfile = () => {
    const [data, setData] = useState()

    const setPrams = (e) => {
      let name = e.target.name
      let value = e.target.value
      setData({
        ...data,
        [name]: value,
      })
    }
    const submit = () => {
      console.log(data)
    }
  
    return (
      <Form
        labelCol={{ span: 4 }}
        wrAddProjecterCol={{ span: 14 }}
        style={{ maxWidth: 600 }}
        layout="horizontal"
      >
        <Form.Item label="Name">
          <Input name='name' onChange={setPrams} />
        </Form.Item>
  
        <Form.Item label="Full Name">
          <Input name='fullName' onChange={setPrams} />
        </Form.Item>
  
        <Form.Item label="Country">
          <Input name='contry' onChange={setPrams} />
        </Form.Item>
  
        <Form.Item label="Date Of Birth">
          <Input name='dateOfBirth' onChange={setPrams} />
        </Form.Item>
        <Form.Item label="Phone Number">
          <Input name='phone' onChange={setPrams} />
        </Form.Item>
  
        <Form.Item label="Email">
          <Input name='email' onChange={setPrams} />
        </Form.Item>
  
        <Form.Item label="Team">
          <Input name='team' onChange={setPrams} />
        </Form.Item>
  
        <Button onClick={submit}>Button</Button>
      </Form>
    );
}

export default UpdateProfile