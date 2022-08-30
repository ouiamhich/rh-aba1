import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./departement.scss";

export const Departement = () => {
  return (
    <div className="departement">
      <Sidebar />
      <div className="departementContainer">
        <Navbar />
      </div>
    </div>
  );
};
