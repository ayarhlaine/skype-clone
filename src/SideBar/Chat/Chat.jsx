import React from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ChatUser from './ChatUser/ChatUser';
import { chatMessages } from './messages/messages';
import './Chat.scss';
const Chat = () => {
    return (
        <div className='chat'>
            <h2 className="chat__title">
                RECENT CHATS
                <KeyboardArrowDownIcon />
            </h2>
            <div className="chat__list">
                {
                    chatMessages.map((user, index) => (
                        <ChatUser
                        key={index}
                        user={user}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Chat;
