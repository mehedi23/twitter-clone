import React from 'react';
import './trends.css'
import SettingsIcon from '@material-ui/icons/Settings';
import { 
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
 } from 'react-twitter-embed';

function Trebds() {
    return (
        <div className="tends" >
            <div className="tends-header">
                <h1>Trends For You</h1>
                <SettingsIcon className="point"/>
            </div>

            <div className="twitter-embed">
                <TwitterTweetEmbed  tweetId={"1269551972958433281"} />
                <TwitterTimelineEmbed 
                    sourceType="profile"
                    screenName="MehediSatu"
                    options={{ height: 600}}
                />
                <TwitterShareButton 
                url={"https://www.facebook.com/mehedihassan.satu.3/"}
                options={{ text: "hi there, it's me Setu" }} />
            </div>
        </div>
    )
}

export default Trebds
