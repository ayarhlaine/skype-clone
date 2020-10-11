import React from 'react';
import MessageHeader from './MessageHeader/MessageHeader';
import './Message.scss';
const Message = () => {
    return (
        <div className='message'>
            <MessageHeader />
            <hr className='message__divider'/>
        </div>
    )
}

export default Message
