import React from 'react';
import ProfileAvatar from '../../Profile/ProfileAvatar/ProfileAvatar';
import { connect, useSelector } from 'react-redux';
import { setSelectedMessageAction } from '../../../features/selectedMessageSlice';
import { selectedMessageSelector } from '../../../selectors/selectedMessageSelector';
import './ChatUser.scss';
const mapDispatch = { setSelectedMessageAction };
const ChatUser = ({
    user,
    setSelectedMessageAction,
}) => {
    const { userID, imageUrl, name, messages, lastActiveTime, active } = user;
    const { selectedMessage } = useSelector(state => selectedMessageSelector(state));
    const selectedUserID = selectedMessage ? selectedMessage.userID : 0;
    const className = userID === selectedUserID ? 'chatUser--active' : '';
    const onClick = () => {
        setSelectedMessageAction({
            ...user
        });
    }
    return (
        <div className={`chatUser ${className}`} onClick={onClick}>
            <ProfileAvatar
            active={active}
            imageUrl={imageUrl}
            />
            <div className="chatUser__info">
                <h3 className="chatUser__info__name">
                    {name}
                </h3>
                <span className="chatUser__info__lastMessage">
                    {messages[messages.length -1].message}
                </span>
            </div>
            <div className="chatUser__lastActiveTime">
                <span className="chatUser__activeTime">{lastActiveTime}</span>
            </div>
        </div>
    )
}
export default connect(null, mapDispatch)(ChatUser);
