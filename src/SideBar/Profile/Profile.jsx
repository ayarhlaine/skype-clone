import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { IconButton } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import './Profile.scss';
const Profile = () => {
    return (
        <div className='profile'>
            <Avatar className='profile__avatar'/>
            <div className="profile__detail">
                <h2 className="profile__name">Ayar Hlaine</h2>
                <p className="profile__occupation">Web Developer</p>
            </div>
            <IconButton>
                <MoreHorizIcon/>
            </IconButton>
        </div>
    )
}

export default Profile;
