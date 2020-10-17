import React from 'react';
import { IconButton } from '@material-ui/core';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import PhotoLibraryOutlinedIcon from '@material-ui/icons/PhotoLibraryOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import './MessageHeader.scss';
const MessageHeader = () => {
    return (
        <div className="messageHeader">
            <div className="messageHeader__left">
                <h3 className="messageHeader__left__title">
                    Akai
                </h3>
                <div className="messageHeader__left__content">
                    <div className="messageHeader__left__content__container">
                        <FiberManualRecordIcon className="messageHeader__left__content__active__status"/>
                        <span>Tank Role</span>
                    </div>
                    <div class="vl"/>
                    <div className="messageHeader__left__content__container">
                        <PhotoLibraryOutlinedIcon />
                        <span>Gallery</span>
                    </div>
                    <div class="vl"/>
                    <div className="messageHeader__left__content__container">
                        <SearchOutlinedIcon />
                        <span>Find</span>
                    </div>
                        
                </div>
            </div>
            <div className="messageHeader__right">
                <IconButton className='messageHeader__right__button'>
                    <VideocamOutlinedIcon />
                </IconButton>
                <IconButton className='messageHeader__right__button'>
                    <CallOutlinedIcon />
                </IconButton>
                <IconButton className='messageHeader__right__button'>
                    <PersonAddOutlinedIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default MessageHeader
