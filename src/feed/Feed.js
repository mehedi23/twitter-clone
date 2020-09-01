import React from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';


function Feed({name, userName, verified, text, image, avatar, time}) {
    return (
        <div className="feed">
            <div className="feed-header">
                <h1 className="head">Head</h1>
            </div>
            <TweetBox/>
            <Post
                name= {name}
                userName= {userName}
                verified= {verified}
                time= {time}
                text= {text}
                image= {image}
                avatar={avatar}
            />
            <Post
                name= {name}
                userName= {userName}
                verified= {verified}
                time= {time}
                text= {text}
                image= {image}
                avatar={avatar}
            />
        </div>
    )
}

export default Feed
