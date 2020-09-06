import React from 'react'
import { Avatar } from '@material-ui/core';
import './SidebarRow.sass'

function SidebarRow({ title, src, Icon }) {
    return (
        <div className="sidebar__row">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}

            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
