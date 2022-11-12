import React, { useState } from 'react'
import "../App.css";
import { Button, Avatar } from "@mui/material";
import db from "../firebase.js"
import Verified from '@mui/icons-material/Verified';


function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  
  const sendTweet = e => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Seeti Oinonen",
      username: "Seeeesti",
      Verified: true,
      text: tweetMessage,
      avatar: "https://i.kym-cdn.com/photos/images/newsfeed/002/430/494/e05"
    })

    setTweetMessage("")
  }


  return (
    <div className='tweet__box'>
        <form action="">
            <div className="tweet__box--input">
                <Avatar src=""></Avatar>
                <input onChange={e => setTweetMessage(e.target.value)} value={tweetMessage} placeholder="What's happening?" type="text" />

            </div>
            <Button onClick={sendTweet} type="submit" className='tweet__box--btn'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox