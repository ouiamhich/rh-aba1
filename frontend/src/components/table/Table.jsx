
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {DataGrid} from '@material-ui/data-grid';
import { Link } from "react-router-dom";
import { userRows,userColumns } from '../../datatablesource';
import { useState } from "react";

const List = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 130,
      renderCell: (params) => {
        return (
          <div className="cellAction" style={{ textDecoration: "none" }}>
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <VisibilityOutlinedIcon className='icon' style={{color : "green"}}/>
            </Link>
            <div>
              <DeleteOutlineOutlinedIcon  className='icon' style={{color : "red"}} onClick={() => handleDelete(params.row.id)}/>
            </div>
          </div>
        );
      },
    },
  ];


  return (
    <div className='datatable'>
      <div className="datatableTitle">
        Table des congés
        <Link to="/conges/new" className="link">
          ajouter
        </Link>
      </div>
      <DataGrid
        className='datagrid'
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
       
      />   
      </div>
  );
};

export default List;