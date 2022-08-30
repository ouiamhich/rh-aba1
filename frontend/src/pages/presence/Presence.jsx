import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./presence.scss";

export const Presence = () => {
  return (
    <div className="presence">
      <Sidebar />
      <div className="presenceContainer">
        <Navbar />
      </div>
    </div>
  );
};
