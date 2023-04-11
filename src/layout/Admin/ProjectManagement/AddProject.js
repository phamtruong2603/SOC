import React, { useState } from 'react';
import {
  Button,
  DatePicker,
  Form,
  Input,
  Select,
} from 'antd';
import { userData } from '../../../api/testData';

const AddProject = () => {
  console.log(userData)
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrAddProjecterCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item label="Name Project">
        <Input />
      </Form.Item>

      <Form.Item label="Leader">
        <Select>
          {userData.map((user) => <Select.Option value={user.id}>{user.name}</Select.Option>)}
        </Select>
      </Form.Item>

      <Form.Item label="Member">
        <Select>
          {userData.map((user) => <Select.Option value={user.id}>{user.name}</Select.Option>)}
        </Select>
      </Form.Item>

      <Form.Item label="Deadline">
        <DatePicker />
      </Form.Item>

      <Form.Item label="Progress">
        <Input />
      </Form.Item>
      <Form.Item label="Running">
        <Input />
      </Form.Item>
      <Form.Item label="Complete">
        <Input />
      </Form.Item>

      <Button>Button</Button>
    </Form>
  );
};
export default AddProject;