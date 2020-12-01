import { Avatar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./Post.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import IconButton from "@material-ui/core/IconButton";
import { ExpandMoreOutlined } from "@material-ui/icons";
import Paper from "@material-ui/core/Paper";
import db from "./Firebase";
import firebase from "firebase";
import Likes from "./Likes";

function Post({ key, profilePic, image, username, timestamp, message }) {
  const [likes, setLikes] = useState(0);

  return (
    <div className="post">
      <div className="post_top">
        <Avatar src={profilePic} className="post_avatar" />

        <div className="post_topInfo">
          <h3>{username}</h3>
          <p>
            {timestamp
              ? new Date(timestamp.toDate()).toUTCString()
              : Date.now()}
          </p>
        </div>
      </div>

      <div className="post_botton">
        <p>{message}</p>
      </div>

      <div className="post_image">
        <img src={image} alt=""></img>
      </div>

      <div className="post_options">
        <div className="post_option">
          <Paper
            onClick={() => {
              setLikes(likes + 1);
            }}
          >
            {" "}
            <ThumbUpIcon />
            {likes}Likes
          </Paper>
        </div>

        <div className="post_option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>

        <div className="post_option">
          <NearMeIcon />
          <p>Share</p>
        </div>

        <div className="post_option">
          <AccountCircleIcon />
          <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  );
}

export default Post;
