import {
  ChatBubble,
  EmojiFlagsOutlined,
  ExpandMoreOutlined,
  LocalHospital,
  PeopleOutline,
  StorefrontOutlined,
  VideoLibrary,
} from "@material-ui/icons";
import userEvent from "@testing-library/user-event";
import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName} />

      <SidebarRow Icon={LocalHospital} title="Covid-19 Information Center" />

      <SidebarRow Icon={EmojiFlagsOutlined} title="Pages" />

      <SidebarRow Icon={PeopleOutline} title="Friends" />

      <SidebarRow Icon={ChatBubble} title="Messenger" />

      <SidebarRow Icon={StorefrontOutlined} title="MarketPlace" />

      <SidebarRow Icon={VideoLibrary} title="Videos" />

      <SidebarRow Icon={ExpandMoreOutlined} title="MarketPlace" />
    </div>
  );
}

export default Sidebar;
