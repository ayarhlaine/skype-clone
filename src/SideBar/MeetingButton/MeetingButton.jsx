import React from 'react';
import VideocamIcon from '@material-ui/icons/Videocam';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import './MeetingButton.scss';
const MeetingButton = () => {
    return (
        <div className="meetingButton">
            <div className="meetingButton__button">
                <VideocamIcon />
                <span>Meet Now</span>
                <KeyboardArrowDownIcon />
            </div>
            <div className="meetingButton__button">
                <BorderColorIcon />
                <span>New Chat</span>
                <KeyboardArrowDownIcon />
            </div>
        </div>
    )
}

export default MeetingButton
