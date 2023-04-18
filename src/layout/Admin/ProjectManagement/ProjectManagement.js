import React, { useContext, useState } from 'react';
import './ProjectManagement.css';
import CardProject from '../../../components/Card/CardProject';
import Project from '../../../components/Project/Project';
import AddProject from './AddProject';
import { ProjectContexts } from '../../../api/ProjectContext';
import { PlusOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Route, Routes, useNavigate } from 'react-router-dom';
const { Search } = Input;

const ProjectManagementMain = () => {
    const { project } = useContext(ProjectContexts);
    const navigate = useNavigate()
    const [search, setSearch] = useState([]);
    const addProject = () => {
        navigate('addproject')
    }
    const onSearch = (search) => {
        const data = project.filter(value => {
            const str = value.name
            return str.includes(search)
        })
        setSearch(data)
    }
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
                {project.map((value, index) => {
                    let isSearch = false
                    const a = search.filter(val => val === value)
                    if (a.length) isSearch = true
                    return (
                        <CardProject
                            isSearch={isSearch}
                            key={value.id}
                            value={value}
                        />
                    )
                })}
            </div>
        </div>
    )
}

const ProjectManagement = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<ProjectManagementMain />}
            />
            <Route
                path="/addproject"
                element={<AddProject />}
            />
            <Route
                path="/:id"
                element={<Project />}
            />
        </Routes>
    )
}

export default ProjectManagement
