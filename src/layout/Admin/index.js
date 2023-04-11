/* eslint-disable no-mixed-operators */
import React, { useState, useEffect, useContext } from 'react';
import { Admin_option } from '../../routes/adminRoutes.js';
import { ProjectContexts } from '../../api/ProjectContext.js';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Route, Routes, useNavigate, Link } from 'react-router-dom';
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
                return (
                    <Route key={value.id}
                        path={`/${value.path}`}
                        element={<Render />}
                    />
                )
            })}
        </Routes>
    )
}

const Admin = () => {
    const { project } = useContext(ProjectContexts)
    console.log(project)
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
    const item = [
        { title: 'Admin' },
        { title: <Link to={`${option && option.path}`}>{option && option.name}</Link> },
    ]

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
                <Layout
                    style={{ padding: '0 24px 24px', }}
                >
                    <Breadcrumb
                        style={{ margin: '16px 0' }}
                        items={item}
                    />

                    <Content
                        style={{
                            padding: 24, margin: 0,
                            minHeight: 280, background: colorBgContainer,
                        }}>
                        <RenderOption id={option && option.id || null} />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};
export default Admin;