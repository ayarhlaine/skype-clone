import React from 'react';
import { IconButton } from '@material-ui/core';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import ContactPhoneOutlinedIcon from '@material-ui/icons/ContactPhoneOutlined';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import './MessageInput.scss';
const MessageInput = () => {
    return (
        <div className="messageInput">
            <div className="messageInput__input">
                <div className="messageInput__input__container">
                    <SentimentSatisfiedOutlinedIcon />
                    <input type="text" name="messageInput" placeholder="Type a message"/>
                </div>
            </div>
            <div className="messageInput__buttons">
                <IconButton className="messageInput__buttons__button">
                    <FileCopyOutlinedIcon />
                </IconButton>
                <IconButton className="messageInput__buttons__button">
                    <ContactPhoneOutlinedIcon />
                </IconButton>
                <IconButton className="messageInput__buttons__button">
                    <MicNoneOutlinedIcon />
                </IconButton>
                <IconButton className="messageInput__buttons__button">
                    <MoreHorizOutlinedIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default MessageInput
