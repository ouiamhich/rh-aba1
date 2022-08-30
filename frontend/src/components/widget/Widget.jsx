import React from "react";
import ApartmentIcon from "@mui/icons-material/Apartment";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import "./widget.scss";

const Widget = ({ type }) => {
  let data;

  switch (type) {
    case "employe":
      data = {
        title: "17 Employees",
        link: "See details",
        icon: (
          <WorkHistoryIcon
            className="icon"
            style={{
              color: "#ED4C4C",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "departement":
      data = {
        title: "11 Departements",

        link: "See details",
        icon: (
          <ApartmentIcon
            className="icon"
            style={{
              backgroundColor: "#2C5AA71F",
              color: "#2C5AA7",
            }}
          />
        ),
      };
      break;
    case "utilisateur":
      data = {
        title: " 86 Users",

        link: "See details",
        icon: (
          <PeopleAltIcon
            className="icon"
            style={{ backgroundColor: "#975AB61F", color: "#975AB6" }}
          />
        ),
      };
      break;
    case "projet":
      data = {
        title: " 12 Projects",

        link: "See details",
        icon: (
          <FactCheckIcon
            className="icon"
            style={{
              backgroundColor: "#0D13521F",
              color: "#0D1352",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        {data.icon}

        {/* <span className="title">{data.title}</span>
      <span className="counter">
         100
      </span>
      <span className="link">{data.link}</span> */}
      </div>
      <div className="right">{data.title}</div>
    </div>
  );
};

export default Widget;
