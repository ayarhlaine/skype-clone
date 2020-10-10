import React from 'react';
import ProfileAvatar from '../../Profile/ProfileAvatar/ProfileAvatar';
import './ChatUser.scss';
const ChatUser = ({
    imageUrl, name, lastMessage, lastActiveTime, active
}) => {
    const className = active ? 'chatUser--active' : '';
    return (
        <div className={`chatUser ${className}`}>
            <ProfileAvatar
            active={active}
            imageUrl={imageUrl}
            />
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
