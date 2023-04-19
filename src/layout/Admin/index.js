/* eslint-disable no-mixed-operators */
import React, { useState, useEffect } from 'react';
import { Admin_option } from '../../routes/adminRoutes.js';
import { Layout, Menu, theme } from 'antd';
import { Route, Routes, useNavigate } from 'react-router-dom';
const { Header, Content, Sider } = Layout;

const Option = Admin_option.map((value, index) => {
    const key = value.id
    return {
        key: `${key}`,
        label: ` ${value.name}`,
    };
});

const RenderOption = ({ id }) => {
    if (!id) return
    return (
        <Routes>
            {Admin_option.map((value, index) => {
                const Render = value.component
                let path = `/${value.path}/*`
                return (
                    <Route key={value.id}
                        path={path}
                        element={<Render />}
                    />
                )
            })}
        </Routes>
    )
}

const Admin = () => {
    const navigate = useNavigate()
    const [option, setOption] = useState();
    const onclick = (value) => {
        setOption({
            id: value.key,
            name: Admin_option[value.key].name,
            path: Admin_option[value.key].path,
        })
        navigate(`${Admin_option[value.key].path}`)
    };
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    useEffect(() => {
        if (!option) navigate('/admin')
    }, [option, navigate]);

    return (
        <Layout>
            <Header className="header">
                abc
            </Header>
            <Layout>
                <Sider
                    width={200}
                    style={{ background: colorBgContainer }}
                >
                    <Menu
                        mode="inline"
                        onClick={onclick}
                        style={{ height: '100%', borderRight: 0 }}
                        items={Option}
                    />
                </Sider>
                <Layout style={{ padding: '0 24px 24px', }}>
                    <Content
                        style={{ padding: 10, fontSize: 20, fontWeight: "bold", color: '#5b5a5a' }}>
                        {option && option.name || 'Tiêu đề'}
                    </Content>
                    <Content
                        style={{
                            padding: 24, margin: 0,
                            minHeight: 280, background: colorBgContainer,
                        }}>
                        <RenderOption
                            id={option && option.id || null}
                        />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};
export default Admin;