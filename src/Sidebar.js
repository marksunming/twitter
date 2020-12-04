import React from 'react'
import './Sidebar.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import SearchIcon from '@material-ui/icons/Search';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';

function Sidebar() {
    return (
        <div className='sidebar'>
            <TwitterIcon className='sidebar__twitterIcon' />
            <SidebarOption active Icon={HomeIcon} title='Home' />
            <SidebarOption Icon={SearchIcon} title='Explore' />
            <SidebarOption Icon={NotificationsNoneOutlinedIcon} title='Notifications' />
            <SidebarOption Icon={MailOutlineOutlinedIcon} title='Messages' />
            <SidebarOption Icon={BookmarkIcon} title='Bookmarks' />
            <SidebarOption Icon={ListAltIcon} title='List' />
            <SidebarOption Icon={PermIdentityIcon} title='Profile' />
            <SidebarOption Icon={MoreHorizIcon} title='More' />
            <Button variant='outlined' className='sidebar__tweet' fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar
