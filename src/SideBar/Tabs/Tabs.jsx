import React, { useState } from 'react';
import InsertCommentOutlinedIcon from '@material-ui/icons/InsertCommentOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import ContactsOutlinedIcon from '@material-ui/icons/ContactsOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
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
                    <InsertCommentOutlinedIcon />
                    <span>Chats</span>
                </div>
                <div 
                className={`tabs__tab ${activeTab === call ? 'tabs__tab--active' : ''}`}
                onClick={() => setActiveTab(call)}>
                    <PhoneOutlinedIcon />
                    <span>Calls</span>
                </div>
                <div 
                className={`tabs__tab ${activeTab === contact ? 'tabs__tab--active' : ''}`}
                onClick={() => setActiveTab(contact)}>
                    <ContactsOutlinedIcon />
                    <span>Contacts</span>
                </div>
                <div 
                className={`tabs__tab ${activeTab === notification ? 'tabs__tab--active' : ''}`}
                onClick={() => setActiveTab(notification)}>
                    <NotificationsOutlinedIcon />
                    <span>Notifications</span>
                </div>
            </div>
        </div>
    )
}

export default Tabs
