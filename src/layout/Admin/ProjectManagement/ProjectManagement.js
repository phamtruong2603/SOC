import React from 'react';
import './ProjectManagement.css';
import CardProject from '../../../components/Card/CardProject';
import { PlusOutlined } from '@ant-design/icons';

const ProjectManagement = () => {
    return (
        <div>
            <header className='header_ProjectManagement'>
                <div>
                    <span className='header_ProjectManagement-name'>Dự án</span>
                    <span style={{ fontWeight: '500', color: '#767575' }}>Danh sách</span>
                </div>
                <div className='Add_ProjectManagement'>
                    <button><PlusOutlined style={{ fontWeight: 700 }} /> Thêm</button>
                </div>
            </header>
            <div className='search_ProjectManagement'>
                
            </div>
            {/* <CardProject /> */}
        </div>
    )
}

export default ProjectManagement
