import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Vhome.css"

class Vhome extends React.Component {
  render() {
    return (
      <div className="Vhome">
        <div className="Body">
          <div className="mainsection">
            <div className="Upper">
              <div className="Img-icon"><img></img></div>
              <div className="VendorName">Vendor Name Here</div>
              <div className="today"></div>
            </div>
            <div className="Lower">
              <h1 className="Schedule">Schedule</h1>
              <div className ="monday">

              </div>
              <div className ="">

              </div>
              <div className ="monday">

            </div>  
            
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Vhome;
