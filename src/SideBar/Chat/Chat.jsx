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
                    chatMessages.map(({active, imageUrl, name, lastMessage, lastActiveTime}) => (
                        <ChatUser
                        active={active}
                        imageUrl={imageUrl}
                        name={name}
                        lastMessage={lastMessage}
                        lastActiveTime={lastActiveTime}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Chat;
