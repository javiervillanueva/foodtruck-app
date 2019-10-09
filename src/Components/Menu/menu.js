import React from "react";
import "./menu.css"



export default class VendorMenuCard extends React.Component {
    render() {
        return (

            <div className="Wrapper">
                <div className= "topBox">
                    <div className="foodImage"></div>
                    <div className ="textBoxes">
                        <div className ="foodBox">Taco cat's famous best Taco!</div>
                        <div className ="moneyBox"> <h1>Much money</h1></div>
                    </div>
                </div>
                    <div className="bottompart">
                        <div className="discription">
                            <h1> We only make tacos with really good food bits.
                                each Taco is made WITH SO MUCH love! we cant even handle it! 
                            </h1>
                        </div>
                    </div>
            </div>
        )
    }
}
