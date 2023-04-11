import React from "react";
import { Card } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined, ProjectOutlined } from '@ant-design/icons';
import { FaTasks } from "react-icons/fa";

const CardOverview = ({ number, text, icon }) => {
    let Icon
    icon === "project" ? Icon = ProjectOutlined : icon === "task" ? Icon = FaTasks : Icon = UserOutlined
    return (
        <Card style={{ width: '30%', backgroundColor: '#f5f5f5' }}>
            <div
                style={{ display: 'flex', justifyContent: 'space-between' }}
            >
                <div className="icon_CardOverview">
                    <Avatar size={64} icon={<Icon style={{ color: "#25c8f1" }} />} />
                </div>
                <div className="content_CardOverview">
                    <span style={{ display: "block", fontSize: "2rem", textAlign: "center", fontWeight: "bold" }} className="content_CardOverviewNumber">{number}</span>
                    <span style={{ display: "block" }}>{text}</span>
                </div>
            </div>
        </Card>
    )
}

export default CardOverview
