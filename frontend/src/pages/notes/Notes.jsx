import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./note.scss";

export const Notes = () => {
  return (
    <div className="note">
      <Sidebar />
      <div className="noteContainer">
        <Navbar />
      </div>
    </div>
  );
};
