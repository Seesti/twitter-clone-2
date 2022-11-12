import React from "react";
import "../App.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__search-icon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__content-container">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1557766422125740032"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="twitter"
          options={{ height: 400 }}
        />
        <TwitterShareButton />
      </div>
    </div>
  );
}

export default Widgets;
