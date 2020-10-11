import React from 'react';
import './MessageList.scss';
import UserMessageOther from './UserMessageOther/UserMessageOther';
import UserMessageMe from './UserMessageMe/UserMessageMe';
const MessageList = () => {
    return (
        <div className='messageList'>
            <UserMessageOther
            imageURL={'https://scontent.frgn7-2.fna.fbcdn.net/v/t1.0-9/93880125_1087094841655328_3172679190365339648_n.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_eui2=AeEFffZF4f6TlQYnOJzBWDmg7ewotmYZ3nXt7Ci2Zhneda5JNAUfyg6KwZXSFGjefdLbC6HRDjRgNBwHRjal0XCY&_nc_ohc=UafJ_4rmhWgAX98pVB8&_nc_ht=scontent.frgn7-2.fna&oh=81fb0e4c41af9847ed2a45cce2bf5d5a&oe=5FA8D74C'}
            user="Ei"
            time="9:06 AM"
            message="Hey, How are you?"
            />
            <UserMessageMe
            time="9:06 AM"
            message="Hey, I am fine."
            />
        </div>
    )
}

export default MessageList
