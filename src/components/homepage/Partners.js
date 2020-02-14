import React from "react";
 export default class Partners extends React.Component {
     render(){
        return(
            <section className = "container-fluid new-partners">
                <div className = "container partners">
                    <h1 className = "text-center">NEW PARTNERS</h1>
                    <div className = "row partners">
                        <div className = "col-md-4 d-flex justify-content-center">
                        <img
                                src = "images/partner.png"
                                alt = "Partner 1"
                                title = "Partner 1"
                                className = "partner"
                                />
                        </div>
                        <div className = "col-md-4 d-flex justify-content-center">
                        <img
                                src = "images/partner.png"
                                alt = "Partner 2"
                                title = "Partner 2"
                                className = "partner"
                                />
                        </div>
                        <div className = "col-md-4 d-flex justify-content-center">
                            <img
                                src = "images/partner.png"
                                alt = "Partner 3"
                                title = "Partner 3"
                                className = "partner"
                                />
                        </div>
                    </div>
                </div>
            </section>
        )
     }
 }
