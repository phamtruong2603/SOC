import React from "react";
import { Card } from 'antd';
import { Avatar, Space } from 'antd';
import { UserOutlined, ProjectOutlined } from '@ant-design/icons';
import { FaTasks } from "react-icons/fa";

const CardPrice = ({ number, text, backgroundColor, colorText }) => {
    return (
        <Card style={{ width: '48%', backgroundColor: backgroundColor }}>
            <div style={{ textAlign: "center" }}>
                <span style={{ display: "block", fontSize: '1.1rem', fontWeight: '600' }}>{text}</span>
                <span style={{ display: "block", color: colorText }}>{number}</span>
            </div>
        </Card>
    )
}

export default CardPrice
