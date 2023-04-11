import React, { useContext, useState } from 'react';
import './ProjectManagement.css';
import CardProject from '../../../components/Card/CardProject';
import { ProjectContexts } from '../../../api/ProjectContext';
import { PlusOutlined } from '@ant-design/icons';
import { Input } from 'antd';
const { Search } = Input;

const ProjectManagement = () => {
    const { project, setProject } = useContext(ProjectContexts);
    const [search, setSearch] = useState([]);
    const addProject = () => {
        setProject([
            {
                id: 2,
                name: "Project name 1",
                deadline: "22/07/2001",
                leader: {
                    id: 20,
                    name: "Nguyen Van B",
                    avatar: ""
                },
                member: [
                    {
                        id: 21,
                        name: "Nguyen Van B",
                        avatar: ""
                    },
                    {
                        id: 22,
                        name: "Nguyen Van B",
                        avatar: ""
                    }
                ],
                progress: "50%",
                running: 0,
                complete: 0
            },
            ...project
        ])
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
                    const a =search.filter(val => val === value)
                    if(a.length) isSearch = true
                    console.log(isSearch)
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

export default ProjectManagement
