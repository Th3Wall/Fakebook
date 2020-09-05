import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, IconButton } from '@material-ui/core';
import './Header.sass';

function Header() {
    return (
        <nav className="header">

            <div className="header__left">
                <img className="logo" src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt=""/>
                <div className="header__left--input">
                    <SearchIcon />
                    <input type="text" placeholder="Search Fakebook" className="searchinput"/>
                </div>
                <IconButton className="searchinput__mob">
                    <SearchIcon />
                </IconButton>
            </div>

            <div className="header__middle">
                <div className="header__middle--option header__middle--option-active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header__middle--option">
                    <SubscriptionsOutlinedIcon fontSize="large" />
                </div>
                <div className="header__middle--option">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header__middle--option">
                    <StorefrontOutlinedIcon fontSize="large" />
                </div>
                <div className="header__middle--option">
                    <SupervisedUserCircleRoundedIcon fontSize="large" />
                </div>
            </div>

            <div className="header__right">
                <div className="header__right--info">
                    <Avatar />
                    <h4 className="displayname">Davide</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </nav>
    )
}

export default Header
