import React from "react";
import "./sidebar.scss";
import logo from "./digi.png";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <div className="logo">
          <Link to="/">
            <span>
              <img alt="logo" className="logoImg" src={logo} />
            </span>
          </Link>
        </div>
      </div>

      <div className="center">
        <ul>
          <p className="title">Main</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <InsertChartIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>

          <p className="title">Humain Ressource</p>
          <Link to="/employees" style={{ textDecoration: "none" }}>
            <li>
              <PeopleAltRoundedIcon className="icon" />
              <span>Employees</span>
            </li>
          </Link>

          <Link to="/projects" style={{ textDecoration: "none" }}>
            <li>
              <PlaylistAddCheckIcon className="icon" />
              <span>Projects</span>
            </li>
          </Link>

          <Link to="/manage" style={{ textDecoration: "none" }}>
            <li>
              <TimeToLeaveIcon className="icon" />
              <span>Manage</span>
            </li>
          </Link>

          <Link to="/settings" style={{ textDecoration: "none" }}>
            <li>
              <SettingsIcon className="icon" />
              <span>Settings</span>
            </li>
          </Link>

          <Link to="/notes" style={{ textDecoration: "none" }}>
            <li>
              <NoteAddIcon className="icon" />
              <span>Notes </span>
            </li>
          </Link>

          <p className="title">Utilisateur</p>
          <li>
            <AssignmentIndIcon className="icon" />
            <span>Profil</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Log out</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
