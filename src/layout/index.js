import React, { useState } from 'react';
import { Option_link } from '../routes';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Sider } = Layout;

const items2 = Option_link.map((value, index) => {
    const key = value.id
    return {
        key: `${key}`,
        label: ` ${value.name}`,
    };
});

const Render_Option = ({ id }) => {
    // if (!id)
    //     return
    const Render = Option_link[0].component
    return (
        <Render />
    )
}

const Main = () => {
    const [option, setOption] = useState();
    const onclick = (value) => {
        setOption({
            id: value.key,
            name: Option_link[value.key].name,
            path: Option_link[value.key].path,
        })
    };
    console.log(option)
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout>
            <Header className="header">
                abc
            </Header>
            <Layout>
                <Sider
                    width={200}
                    style={{
                        background: colorBgContainer,
                    }}
                >
                    <Menu
                        mode="inline"
                        onClick={onclick}
                        style={{
                            height: '100%',
                            borderRight: 0,
                        }}
                        items={items2}
                    />
                </Sider>
                <Layout
                    style={{
                        padding: '0 24px 24px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>Admin</Breadcrumb.Item>
                        <Breadcrumb.Item>{option && option.path}</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}>
                        <Render_Option
                            colorBgContainer
                            id={option && option.id || null}
                        />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};
export default Main;