import React,{useEffect , useState} from "react";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
import "./SidebarChat.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { Avatar, IconButton } from "@material-ui/core";

// function Sidebar({ addNewChat }) {
//   const [seed , setSeed] = useState("");

//   useEffect(() => {
//     setSeed(Math.floor(Math.random() * 5000));
//   }, []);
//   const createChat = () => {
//     const roomName = prompt("Please enter name for chat");

//     if(roomName){
//       //db connect;
//     }
//   };
  function Sidebar() {
    // const [seed , setSeed] = useState("");
  
    // useEffect(() => {
    //   setSeed(Math.floor(Math.random() * 5000));
    // }, []);
    // const createChat = () => {
    //   const roomName = prompt("Please enter name for chat");
  
    //   if(roomName){
    //     //db connect;
    //   }
  
    
  return (
    <div className="sidebar">
      <div className="sidebar__header">
       <Avatar src= "https://avatars.dicebar.com/api/human/121.svg" />
       {/* <Avatar
          avatarStyle='Circle'
          topType='LongHairStraight'
          accessoriesType='Blank'
          hairColor='BrownDark'
          facialHairType='Blank'
          clotheType='BlazerShirt'
          eyeType='Default'
          eyebrowType='Default'
          mouthType='Default'
          skinColor='Light'
       />*/}
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlinedIcon />
          <input placeholder="Search or start a new chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat addNewChat/>
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
      }

export default Sidebar;
