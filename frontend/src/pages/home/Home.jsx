import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import "./home.scss";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Datatable from "../../components/datatable/Datatable";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="employe" />
          <Widget type="departement" />
          <Widget type="utilisateur" />
          <Widget type="projet" />
        </div>
        <div className="charts">
          <Featured title="Employees Check-ins" />
          <Featured title="Employees Distributions" />
          <Chart title="Projects KPI" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <Datatable title="Projects" button="New Project" />
        </div>
      </div>
    </div>
  );
};

export default Home;
