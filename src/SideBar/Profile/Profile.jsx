import React from 'react';
import { IconButton } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ProfileAvatar from './ProfileAvatar/ProfileAvatar';
import './Profile.scss';
const Profile = () => {
    return (
        <div className='profile'>
            <ProfileAvatar
            active
            imageUrl={'https://scontent.frgn7-1.fna.fbcdn.net/v/t1.0-9/69783494_956063828076672_2353582305148141568_o.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_eui2=AeHgz6pbjMRfzlre8bjaQApZKNRbH6sWZYwo1FsfqxZljOFphkv_PL-9ipuZZTJAPpfsXfzkoz5BNlGJY0_l_8CZ&_nc_ohc=ouydwfGRtIcAX80wOTd&_nc_ht=scontent.frgn7-1.fna&oh=36a63e29517015ab0d704c7f5ce60bf9&oe=5FA61E0B'} 
            />
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
