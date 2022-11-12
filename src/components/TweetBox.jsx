import React from 'react'
import "../App.css";
import { Button, Avatar } from "@mui/material";


function TweetBox() {
  return (
    <div className='tweet__box'>
        <form action="">
            <div className="tweet__box--input">
                <Avatar src=""></Avatar>
                <input placeholder="What's happening?" type="text" />

            </div>
            <Button className='tweet__box--btn'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox