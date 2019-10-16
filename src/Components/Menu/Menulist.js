import React from "react";
import "./menu.css"
import VendorMenuCard from "./menu";
import Button from '@material-ui/core/Button'

export default class Menulist extends React.Component {
    render() {
        return (
            <div className ="menuWrapper">
                <div className ="menuCard">
                <VendorMenuCard/>
                

                </div>
                <Button variant ="contained" className="addItem" href ="/vendor/menuadd">
                    <h1>Add An Item</h1>
                </Button>
            </div>
        )
    }
}
