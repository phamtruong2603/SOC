import React, { useState } from 'react';
import { Button, DatePicker, Form, Input, Select } from 'antd';
import { memberData } from '../../../api/testData';

const AddProject = () => {
  const [data, setData] = useState()
  const options = memberData.map((user) => {
    let key = user.id
    return ({
      value: key,
      label: user.name,
    })
  })
  console.log(options)
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
          allowClear
          options={[
            {
              value: 'lucy',
              label: 'Lucy',
            },
          ]}
        />
      </Form.Item>

      <Form.Item label="Member">
        <Select>
          {memberData.map((user) => <Select.Option key={user.id} value={user.id}>{user.name}</Select.Option>)}
        </Select>
      </Form.Item>

      <Form.Item label="Deadline">
        <DatePicker onChange={onChange} />
      </Form.Item>

      <Form.Item label="Progress">
        <Input name='progress' onChange={setPrams} />
      </Form.Item>
      <Form.Item label="Running">
        <Input name='running' onChange={setPrams} />
      </Form.Item>
      <Form.Item label="Complete">
        <Input name='complete' onChange={setPrams} />
      </Form.Item>

      <Button>Button</Button>
    </Form>
  );
};
export default AddProject;