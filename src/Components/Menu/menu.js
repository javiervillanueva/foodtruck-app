import React from "react";
import "./menu.css"



export default class VendorMenuCard extends React.Component {
    render() {
        return (

            <div className="wrapper">
                <div className= "topBox">
                    <div className="foodImage"></div>
                    <div className ="textBoxes">
                        <div className ="foodBox"><h1 className="foodName">Taco cat's famous best Taco!</h1></div>
                        <div className ="moneyBox"> <h1 className="cost">10$</h1></div>
                    </div>
                </div>
                    <div className="bottompart">
                        <div className="discription">
                            <h1 className="foodDiscription"> We only make tacos with really good food bits.
                                each Taco is made WITH SO MUCH love! we cant even handle it! 
                            </h1>
                        </div>
                    </div>
            </div>
        )
    }
}
