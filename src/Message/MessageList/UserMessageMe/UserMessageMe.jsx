import React from 'react';
import './UserMessageMe.scss';
const UserMessageMe = ({ time, message }) => {
    return (
        <div className="userMessageMe">
            <div className="userMessageMe__detail">
                <span className="userMessageMe__detail__time">{time}</span>
                <div className="userMessageMe__detail__info">
                    <p>{message}</p>
                </div>
            </div>
        </div>
    )
}

export default UserMessageMe;
