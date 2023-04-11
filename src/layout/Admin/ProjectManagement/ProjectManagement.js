import React from 'react';
import './ProjectManagement.css';
import CardProject from '../../../components/Card/CardProject';
import { PlusOutlined } from '@ant-design/icons';
import { Input } from 'antd';
const { Search } = Input;

const ProjectManagement = () => {
    const addProject = () => { }
    const project = [1, 2, 3, 4, 5]
    const onSearch = (value) => console.log(value);
    return (
        <div>
            <header className='header_ProjectManagement'>
                <div>
                    <span className='header_ProjectManagement-name'>Dự án</span>
                    <span style={{ fontWeight: '500', color: '#767575' }}>Danh sách</span>
                </div>
                <div className='search_ProjectManagement'>
                    <Search
                        placeholder="Search Project..."
                        onSearch={onSearch}
                        style={{ width: 300 }}
                    />
                </div>
                <div className='Add_ProjectManagement'>
                    <button onClick={addProject}><PlusOutlined style={{ fontWeight: 700 }} /> Thêm</button>
                </div>
            </header>
            <div className='body_ProjectManagement'>
                {project.map((value) => {
                    return (
                        <CardProject />
                    )
                })}
            </div>

        </div>
    )
}

export default ProjectManagement
