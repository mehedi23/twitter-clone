import React from 'react';
import './TweetBox.css'
import {Button , Avatar} from '@material-ui/core';

function TweetBox() {
    return (
        <div className="tweet-box">
            <form>
                <div className="avatar">
                    <Avatar src="https://scontent.fdac24-1.fna.fbcdn.net/v/t1.0-1/p200x200/90001499_2582231632047071_4494092996433674240_o.jpg?_nc_cat=107&_nc_sid=7206a8&_nc_ohc=re3UfHLguxIAX-CRJxl&_nc_ht=scontent.fdac24-1.fna&tp=6&oh=d3dab39b7a65431a5f8a22ef194880ba&oe=5F7364C5" />
                    <textarea placeholder="What's happening"></textarea>
                </div>
                <input className="upload-box" placeholder="Enter Image Url"/>
                <div className="tweet-box-btn">
                    <Button className="tweetBtn">Tweet</Button>
                </div>
            </form>
        </div>
    )
}

export default TweetBox
