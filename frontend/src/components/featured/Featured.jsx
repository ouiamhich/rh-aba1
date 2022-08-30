import MoreVertIcon from "@mui/icons-material/MoreVert";
import Brightness1Icon from '@mui/icons-material/Brightness1';
import Pie from "../pie/Pie";
import './featured.scss'
const Featured = (props) => {
    return (
      <div className="featured">
        <div className="top">
          <h1 className="title">{props.title}</h1>
          <MoreVertIcon fontSize="small" />
        </div>
        <div className="bottom">
          <div className="featuredChart">
            <Pie/>
          </div>
                   
          <div className="summary">
            <div className="item">
              <div className="itemTitle"> <Brightness1Icon style={{fontSize:"7px"}}/> in</div>
              
            </div>
            <div className="item">
              <div className="itemTitle"><Brightness1Icon style={{fontSize:"7px"}}/>out</div>
              
            </div>
            <div className="item">
              <div className="itemTitle"><Brightness1Icon style={{fontSize:"7px"}}/>none</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Featured;