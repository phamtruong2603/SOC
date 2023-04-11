import React from 'react';
import './card.css';
import Avatar from '../Avatar/Avatar';

const CardProject = () => {
    const user = [1, 2, 3, 4, 5]
    const success = '25%'
    return (
        <div className='CardProject'>
            <header className='title_Project'>
                <span className='title_Project-name'>Name Project</span>
                <span className='title_Project-process'><span>0</span> đang chạy <span>0</span> hoàn thành</span>
            </header>
            <div className='detail_Project'>
                <div className='detail_Project-header'>Chi tiết: </div>
                <div className='detail_Project-deadline'>
                    <span>Deadline</span>
                    <span>15/03/2001</span>
                </div>
                <div className='detail_Project-leader'>
                    <span>Project Leader</span>
                    <Avatar circle="50px" />
                </div>
                <div className='detail_Project-member'>
                    <span>Thành Viên</span>
                    <div>
                        {user.map((value) => {
                            return (
                                <div><Avatar circle="40px" /></div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='progress_Project'>
                <div className='progress_Project-header'>
                    <span>Progress</span>
                    <span>{success}</span>
                </div>
                <div className='progress_load'>
                    <div className='progress_loading' style={{ width: `${success}` }}></div>
                </div>
            </div>
        </div>
    )
}

export default CardProject
