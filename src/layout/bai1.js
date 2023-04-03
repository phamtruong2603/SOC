import React, { useState } from 'react';
import {
    Button,
    DatePicker,
    Form,
    Input,
} from 'antd';
import axios from 'axios';
import { message, Space } from 'antd';

const Bai1 = () => {
    const [data, setData] = useState();
    const [messageApi, contextHolder] = message.useMessage();
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
            "cardExpDate": dateString,
        })
      };
    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'This is a success message',
        });
    };
    const error = () => {
        messageApi.open({
            type: 'error',
            content: 'This is an error message',
        });
    };
    const warning = () => {
        messageApi.open({
            type: 'warning',
            content: 'This is a warning message',
        });
    };
    const submit = async (e) => {
        console.log(data)
        success()

    }
    return (
        <>
            {contextHolder}
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"

                style={{
                    maxWidth: 600,
                }}
            >

                <Form.Item label="card Name">
                    <Input name='cardName' onChange={setPrams} />
                </Form.Item>
                <Form.Item label="card Type">
                    <Input name='cardType' onChange={setPrams} />
                </Form.Item>
                <Form.Item label="card Number">
                    <Input name='cardNumber' onChange={setPrams} />
                </Form.Item>
                <Form.Item label="card CVC">
                    <Input name='cardCVC' onChange={setPrams} />
                </Form.Item>
                <Form.Item label="card ExpDate">
                    <DatePicker onChange={onChange} picker="month" />
                </Form.Item>
                <Button onClick={submit}>Button</Button>
            </Form>

        </>
    )
}


export default Bai1