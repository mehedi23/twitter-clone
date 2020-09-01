import React from 'react';
import './Post.css';
import {Avatar} from '@material-ui/core';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import CachedIcon from '@material-ui/icons/Cached';

function Post( {name, userName, verified, text, image, avatar, time} ) {
    return (
        <div className="post">
            <Avatar src={ avatar }/>

            <div className="the-post">
                <div className="post-address">
                    <span className="text-bold point"> {name} </span>
                    <span className="soft-dark point"> @{userName} </span>
                    .
                    <span className="soft-dark"> {time} </span>
                </div>

                <div className="the-main-post">
                    <p>
                        {text}
                    </p>
                    <img  src={image} alt="moon" />
                </div>

                <div className="comment-like">
                    <div className="point f-a">
                        <ChatBubbleOutlineIcon className="icons-size"/>
                        <span className="comments-text" >67.8 k</span>
                    </div>

                    <div className="point f-a">
                        <CachedIcon className="icons-size"/>
                        <span className="comments-text">3.8 k</span>
                    </div>

                    <div className="point f-a">
                        <FavoriteBorderIcon className="icons-size"/>
                        <span className="comments-text">24.3 k</span>
                    </div>

                    <div className="point">
                        <PublishIcon className="icons-size"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
