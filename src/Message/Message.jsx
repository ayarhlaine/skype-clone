import React from 'react';
import MessageHeader from './MessageHeader/MessageHeader';
import MessageInput from './MessageInput/MessageInput';
import './Message.scss';
const Message = () => {
    return (
        <div className='message'>
            <MessageHeader />
            <hr className='message__divider'/>
            {/* MessageList */}
            <MessageInput />
        </div>
    )
}

export default Message
