import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import './ProfileAvatar.scss';
const ProfileAvatar = ({ active, imageUrl }) => {
    const className = active ? 'profileAvatar__icon--active' : '';
    return (
        <div className="profileAvatar">
            <Avatar 
            src={imageUrl} 
            className='profileAvatar__avatar'>
            </Avatar>
            <FiberManualRecordIcon className={`profileAvatar__icon ${className}`}/>
        </div>
    )
}

export default ProfileAvatar
