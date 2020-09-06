import React from 'react'
import { Avatar } from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlinedIcon from '@material-ui/icons/ChatBubbleOutlined';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Post.sass'

function Post({ authorPic, authorName, timestamp, message, optionalImg }) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={authorPic} className="post__avatar"/>
                <div className="post__info">
                    <h3>{authorName}</h3>
                    <p>Current Time</p>
                </div>
            </div>
            <div className="post__bottom">
                <p>{message}</p>
            </div>
            <div className="post__media">
                <img src={optionalImg} className="post__media--img" alt="" />
            </div>
            <div className="post__options">
                <div className="post__options--option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post__options--option">
                    <ChatBubbleOutlinedIcon />
                    <p>Comment</p>
                </div>
                <div className="post__options--option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="post__options--option nomob">
                    <AccountCircleIcon />
                    <ExpandMoreIcon />
                </div>
            </div>
        </div>
    )
}

export default Post
