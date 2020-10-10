import React from 'react';
import Profile from './Profile/Profile';
import Search from './Search/Search';
import Tabs from './Tabs/Tabs';
import './SideBar.scss';
const SideBar = () => {
    return (
        <div className='sidebar'>
            <Profile />
            <Search />
            <Tabs />
            {/* Header Buttons */}
            {/* Tab Content */}
        </div>
    )
}

export default SideBar
