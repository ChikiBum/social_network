import React  from "react";
import preloader from '../../../assets/images/preloader-3.gif';

const Preloader = (props) => {
    return <div style={{'max-width': '80px'}}>
          <img src={preloader} style={{'max-width': '180px'}}/> 
    </div>
}

export default Preloader;