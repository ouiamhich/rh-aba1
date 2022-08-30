import React from "react";
import Emptable from "../../components/datatable/Emptable";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "../home/home.scss";
import "./list.scss";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Emptable title="Employee" button="Add Employee" />
      </div>
    </div>
  );
};

export default List;
