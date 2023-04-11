import React from 'react';
import './Avatar.css';

const Avatar = ({ circle }) => {
    const url_avatar = "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
    return (
        <div
            className='avatar_circle'
            style={{ width: circle, height: circle }}
        >
            <img src={url_avatar} alt=""></img>
        </div>
    )
}

export default Avatar