import React from 'react';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import './MeetingButton.scss';
const MeetingButton = () => {
    return (
        <div className="meetingButton">
            <div className="meetingButton__button">
                <VideocamOutlinedIcon />
                <span>Meet Now</span>
                <KeyboardArrowDownIcon />
            </div>
            <div className="meetingButton__button">
                <BorderColorOutlinedIcon />
                <span>New Chat</span>
                <KeyboardArrowDownIcon />
            </div>
        </div>
    )
}

export default MeetingButton
