import React, { useState } from 'react';
import {
    Button,
    Form,
    Input,
} from 'antd';

const Bai3 = () => {
    const [data, setData] = useState()
    const setPrams = (e) => {
        let name = e.target.name
        let value = e.target.value
        setData({
            ...data,
            [name]: value,
        })
    }
    console.log(data)
    const submit = () => {

    }
    return (
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
            <Form.Item label="product Id">
                <Input name='productId' onChange={setPrams} />
            </Form.Item>
            <Form.Item label="number">
                <Input name='number' onChange={setPrams} />
            </Form.Item>

            <Button>Button</Button>

        </Form>
    )
}

export default Bai3