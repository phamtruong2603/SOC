import React from 'react';
import './card.css';
import Avatar from '../Avatar/Avatar';
import { useNavigate } from 'react-router-dom';

const CardProject = ({ value, isSearch }) => {
    const navigate = useNavigate()
    const onclick = (value) => {
        navigate(`${value.id}`)
    }
    return (
        <div
            className={`CardProject ${isSearch ? 'isSearch' : ''}`}
            onClick={() => onclick(value)}
        >
            <header className='title_Project'>
                <span className='title_Project-name'>{value.name}</span>
                {/* <span className='title_Project-process'><span>{value.running}</span> đang chạy <span>{value.complete}</span> hoàn thành</span> */}
            </header>
            <div className='detail_Project'>
                <div className='detail_Project-header'>Chi tiết: </div>
                <div className='detail_Project-deadline'>
                    <span>Deadline</span>
                    <span>{value.deadline}</span>
                </div>
                <div className='detail_Project-leader'>
                    <span>Project Leader</span>
                    <Avatar circle="50px" />
                </div>
                <div className='detail_Project-member'>
                    <span>Thành Viên</span>
                    <div>
                        {value.member.map((value, index) => {
                            return (
                                <div key={index}><Avatar circle="40px" /></div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='progress_Project'>
                <div className='progress_Project-header'>
                    <span>Progress</span>
                    <span>{value.progress}</span>
                </div>
                <div className='progress_load'>
                    <div className='progress_loading' style={{ width: `${value.progress}` }}></div>
                </div>
            </div>
        </div>
    )
}

export default CardProject
