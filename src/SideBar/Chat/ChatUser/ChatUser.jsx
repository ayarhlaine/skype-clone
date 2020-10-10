import React from 'react';
import { Avatar } from '@material-ui/core';
import './ChatUser.scss';
const ChatUser = ({
    imageUrl, name, lastMessage, lastActiveTime, active
}) => {
    const className = active ? 'chatUser--active' : '';
    return (
        <div className={`chatUser ${className}`}>
            <Avatar src={imageUrl}/>
            <div className="chatUser__info">
                <h3 className="chatUser__info__name">
                    {name}
                </h3>
                <span className="chatUser__info__lastMessage">
                    {lastMessage}
                </span>
            </div>
            <div className="chatUser__lastActiveTime">
                <span className="chatUser__activeTime">{lastActiveTime}</span>
            </div>
        </div>
    )
}

export default ChatUser
