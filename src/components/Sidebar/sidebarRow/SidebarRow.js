import React from 'react'
import "./SidebarRow.css"
import { Avatar } from '@material-ui/core';

function SidebarRow({title, src, Icon}) {
    return (
        <div className="sidebarRow">
            {/* if there is src we gonna render our Avatar */}
            {src && <Avatar src={ src } /> }
            {/* component as props  */}
            {Icon && <Icon /> }
            
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
