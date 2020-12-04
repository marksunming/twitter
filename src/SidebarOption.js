import React from 'react'
import './SidebarOption.css'

function SidebarOption({ Icon, title, active }) {
    return (
        <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
            <Icon />
            <h2>{title}</h2>
        </div>
    )
}

export default SidebarOption
