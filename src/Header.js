import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import StoreIcon from "@material-ui/icons/Store";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";

import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="Header">
      <div className="Header_left">
        <img
          src="https://dwglogo.com/wp-content/uploads/2016/06/facebook_emblem.png"
          alt=""
        />
        <div className="Header_input">
          <SearchIcon />
          <input placeholder="Search Facebook" type="text" />
        </div>
      </div>

      <div className="Header_middle">
        <div className="Header_option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="Header_option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="Header_option">
          <SubscriptionsIcon fontSize="large" />
        </div>
        <div className="Header_option">
          <StoreIcon fontSize="large" />
        </div>
        <div className="Header_option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>

      <div className="Header_right">
        <div className="Header_info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>

        <IconButton>
          <AddIcon />
        </IconButton>

        <IconButton>
          <ForumIcon />
        </IconButton>

        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>

        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
