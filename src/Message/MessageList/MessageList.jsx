import React from 'react';
import { useSelector } from 'react-redux';
import './MessageList.scss';
import UserMessageOther from './UserMessageOther/UserMessageOther';
import UserMessageMe from './UserMessageMe/UserMessageMe';
import { selectedMessageSelector } from '../../selectors/selectedMessageSelector';
const MessageList = () => {
    const { selectedMessage } = useSelector(state => selectedMessageSelector(state));
    const messages  = selectedMessage ? selectedMessage.messages : [];
    const imageUrl  = selectedMessage ? selectedMessage.imageUrl : '';
    return (
        <div className='messageList'>
            {
                messages.map(({ user, message, time }, index) => (
                    <UserMessageOther
                    imageURL={imageUrl}
                    user={user}
                    time={time}
                    message={message}
                    key={index}
                    />
                ))
            }
            <UserMessageMe
            time="10:06 AM"
            message="Hey, I am fine."
            />
        </div>
    )
}

export default MessageList
