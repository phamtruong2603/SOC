import React from "react";
import { Card } from 'antd';
import { Avatar, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './card.css';

export const CardOverview = ({number, text}) => {
    return (
        <Card style={{ width: '30%' }}>
            <div className="CardOverview">
                <div className="icon_CardOverview">
                    <Avatar size={64} icon={<UserOutlined />} />
                </div>
                <div className="content_CardOverview">
                    <span className="content_CardOverviewNumber">{number}</span>
                    <span>{text}</span>
                </div>
            </div>
        </Card>
    )
}

export const CardPrice = ({number, text}) => {
    return (
        <Card style={{ width: '48%' }}>
            <div className="CardPrice">
                    <span>{text}</span>
                    <span className="">{number}VND</span>
                </div>
        </Card>
    )
}