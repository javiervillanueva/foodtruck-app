import React from "react";
import "./menu.css"
import Button from '@material-ui/core/Button'
import { connect } from "react-redux";
import {getMenuById } from "../../redux/actions";
import axios from "axios";
class Menulist extends React.Component {

    componentDidMount(){
        axios.get("/api/get-menu-items-id")
        .then(response =>{
            this.props.getMenuById(response.data);
            console.log(response.data)
        })
    }

    render() {
        let MenuCard= this.props.vendorMenu.map(vendorMenu =>{
            return(
                <div className="wrapper" key={vendorMenu.id}>
                <div className= "topBox">
                    <div className="foodImage"></div>
                    <div className ="textBoxes">
                        <div className ="foodBox"><h1 className="foodName">{vendorMenu.title}</h1></div>
                        <div className ="moneyBox"> <h1 className="cost">${vendorMenu.price}</h1></div>
                    </div>
                </div>
                    <div className="bottompart">
                        <div className="discription">
                            <h1 className="foodDiscription">{vendorMenu.description}</h1>
                        </div>
                    </div>
            </div>
            )
        });
        return (
            <div className ="menuWrapper">
                <div className ="menuCard">
               {MenuCard}
                </div>
                <Button variant ="contained" className="addItem" href ="/vendor/menuadd">
                    <h1>Add An Item</h1>
                </Button>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
      vendorMenu: state.vendorMenu
    };
  }

export default connect(mapStateToProps,{getMenuById:getMenuById})(Menulist)