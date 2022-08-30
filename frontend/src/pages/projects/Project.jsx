import React from "react";
import Datatable from "../../components/datatable/Datatable";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./project.scss";

export const Project = () => {
  return (
    <div className="project">
      <Sidebar />
      <div className="projectContainer">
        <Navbar />
        <Datatable title="Projects" button="New Project" />
      </div>
    </div>
  );
};
