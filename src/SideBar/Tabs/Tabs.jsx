import React, { useState } from 'react';
import ChatIcon from '@material-ui/icons/Chat';
import CallIcon from '@material-ui/icons/Call';
import ContactsIcon from '@material-ui/icons/Contacts';
import NotificationsIcon from '@material-ui/icons/Notifications';
import './Tabs.scss';
const tabs = {
    chat: 1,
    call: 2,
    contact: 3,
    notification: 4,
}
const Tabs = () => {
    const [activeTab, setActiveTab] = useState(null);
    const { chat, call, contact, notification } = tabs;
    return (
        <div className='tabs'>
            <div className="tabs__container">
                <div 
                className={`tabs__tab ${activeTab === chat ? 'tabs__tab--active' : ''}`}
                onClick={() => setActiveTab(chat)}>
                    <ChatIcon />
                    <span>Chats</span>
                </div>
                <div 
                className={`tabs__tab ${activeTab === call ? 'tabs__tab--active' : ''}`}
                onClick={() => setActiveTab(call)}>
                    <CallIcon />
                    <span>Calls</span>
                </div>
                <div 
                className={`tabs__tab ${activeTab === contact ? 'tabs__tab--active' : ''}`}
                onClick={() => setActiveTab(contact)}>
                    <ContactsIcon />
                    <span>Contacts</span>
                </div>
                <div 
                className={`tabs__tab ${activeTab === notification ? 'tabs__tab--active' : ''}`}
                onClick={() => setActiveTab(notification)}>
                    <NotificationsIcon />
                    <span>Notifications</span>
                </div>
            </div>
        </div>
    )
}

export default Tabs
