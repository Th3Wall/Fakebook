import React from 'react'
import './RightSidebar.sass'
import Birthdays from '../birthdays/Birthdays'
import ChatContacs from '../chatContacts/ChatContacs'

function RightSidebar() {
    return (
        <div className="sidebar sidebar__right">
            <Birthdays />
            <ChatContacs />
        </div>
    )
}

export default RightSidebar
