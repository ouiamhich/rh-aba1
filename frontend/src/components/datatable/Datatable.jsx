import React, { useState } from "react";
import "./datatable.scss";
import { DataGrid } from "@material-ui/data-grid";
import { projectRows, projectColumns } from "../../datatablesource";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import AddIcon from "@mui/icons-material/Add";

const Datatable = (props) => {
  const [data, setData] = useState(projectRows);

  const progressColumn = [
    {
      field: "progress",
      headerName: "Progress",
      width: 230,
      renderCell: (params) => {
        const now = "60";
        return (
          <div
            className="progress"
            style={{ textDecoration: "none", color: "red" }}
          >
            <ProgressBar variant="primary" now={now} label={`${now}%`} />
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="top">
        <div className="left">
          <div className="datatableTitle">{props.title}</div>
        </div>
        <div className="right">
          <div className="datatableButton">
            <Button style={{ backgroundColor: "#509AD8" }}>
              {" "}
              <AddIcon /> {props.button}
            </Button>
          </div>
        </div>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={projectColumns.concat(progressColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
