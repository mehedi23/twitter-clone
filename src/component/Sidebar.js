import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarksOutlinedIcon from '@material-ui/icons/BookmarksOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import {Button} from '@material-ui/core';

function sidebar() {
    return (
        <div className="sideBar">
            <TwitterIcon className="twitter-icon"/>
            <SidebarOption active text="Home" Icon= {HomeIcon} />
            <SidebarOption text="Explore" Icon= {SearchOutlinedIcon}/>
            <SidebarOption text="Notification" Icon= {NotificationsNoneOutlinedIcon}/>
            <SidebarOption text="Messages" Icon= {MailOutlineIcon}/>
            <SidebarOption text="Bookmarks" Icon= {BookmarksOutlinedIcon}/>
            <SidebarOption text="Lists" Icon= {ListAltOutlinedIcon}/>
            <SidebarOption text="Profile" Icon= {PersonOutlineOutlinedIcon}/>
            <SidebarOption text="More" Icon= {MoreHorizOutlinedIcon}/>

            <Button className="sidebarTweet" fullWidth >  Tweet </Button>
        </div>
    )
}

export default sidebar
