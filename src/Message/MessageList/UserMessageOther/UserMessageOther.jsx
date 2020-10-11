import React from 'react';
import { Avatar } from '@material-ui/core';
import './UserMessageOther.scss';
const UserMessage = ({ imageURL, user, time, message }) => {
    return (
        <div className='userMessageOther'>
            <Avatar src={imageURL}/>
            <div className="userMessageOther__detail">
                <span className="userMessageOther__detail__time">{user}, {time}</span>
                <div className="userMessageOther__detail__info">
                    <p>{message}</p>
                </div>
            </div>
        </div>
    )
}
export default UserMessage;
