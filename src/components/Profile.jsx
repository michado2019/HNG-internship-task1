import React from "react";
import "./Profile.css";
import profileImg from "../images/profile-pix.jpg";
import { MoreHorizOutlined } from "@mui/icons-material";

export default function Profile() {
  return (
    <div className="profileWrapper">
      <MoreHorizOutlined className='profileMenu-icon'/>
      <div className="profileFlex">
        <img src={profileImg} alt="profileImg" id="profile_img" />
        <h1 id="twitter">Mike_Adeshina</h1>
        <h2 id="slack">michado2019</h2>
      </div>
    </div>
  );
}
