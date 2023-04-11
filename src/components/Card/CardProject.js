import React from 'react'

const CardProject = () => {
    return (
        <div>
            <header className='title_Project'>
                <span className='title_Project-name'>Name Project</span>
                <span className='title_Project-process'>0 đang chạy 0 hoàn thành</span>
            </header>
            <div className='detail_Project'>
                <div className='detail_Project-deadline'>
                    <span>Deadline</span>
                    <span></span>
                </div>
                <div className='detail_Project-leader'>
                    <span>Project Leader</span>
                    <span></span>
                </div>
                <div className='detail_Project-member'>
                    <span>Thành Viên</span>
                    <span></span>
                </div>
            </div>
            <div className='process_Project'>

            </div>
        </div>
    )
}

export default CardProject
