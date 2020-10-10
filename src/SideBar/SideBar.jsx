import React from 'react';
import Profile from './Profile/Profile';
import Search from './Search/Search';
import Tabs from './Tabs/Tabs';
import MeetingButton from './MeetingButton/MeetingButton';
import './SideBar.scss';
const SideBar = () => {
    return (
        <div className='sidebar'>
            <Profile />
            <Search />
            <Tabs />
            <hr className='sidebar__divider'/>
            <MeetingButton />
            {/* Tab Content */}
        </div>
    )
}

export default SideBar
