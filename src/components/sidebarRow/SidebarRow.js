import React from 'react'
import { Avatar } from '@material-ui/core';
import './SidebarRow.sass'

function SidebarRow({ title, src, Icon, birthdays }) {
    return (
        <div className="sidebar__row">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}

            {title && <h4>{title}</h4>}
            {birthdays && (
                birthdays.length > 1
                ? <span><b>{birthdays[0]}</b> and <b>other {birthdays.length - 1}</b> friends have their birthdays today.</span>
                : <span>Today is <b>{birthdays[0]}</b>'s birthday.</span>
            )}
        </div>
    )
}

export default SidebarRow
