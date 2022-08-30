import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./rapport.scss";

const Rapport = () => {
  return (
    <div className="rapport">
      <Sidebar />
      <div className="rapportContainer">
        <Navbar />
      </div>
    </div>
  );
};

export default Rapport;
