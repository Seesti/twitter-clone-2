import React from "react";
import "../App.css";
import { Avatar } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

// https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__header--text">
            <h3>
              Seeti Oinonen{" "}
              <span className="post__header--special">
                <VerifiedIcon className="post__badge" />{"@Seesti"}
              </span>
            </h3>
          </div>
          <div className="post__header--description">
            <p>Babies are just well marinated and badly seasoned steaks</p>
          </div>
          <div>
            <img
              src="https://pbs.twimg.com/media/FhTUo1GWABMD1t1?format=jpg&name=small"
              alt=""
            />
            <div className="post__footer">
                <ChatBubbleOutlineIcon fontSize="small" />
                <RepeatIcon fontSize="small" />
                <FavoriteBorderIcon fontSize="small" />
                <PublishIcon fontSize="small" />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
