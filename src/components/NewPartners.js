import React from "react";

class NewPartners {
    constructor() {
        super(props);
    }
    render() {
        return (
            <div className = "new-partners container">
                <h1>New PArtners</h1>
                <span></span>
                <div className = "row">
                    <div className = "col-md-4">
                        <img src = "./../public/images/partner.png" />
                    </div>
                    <div className = "col-md-4">
                        <img src = "./../public/images/partner.png" />
                    </div>
                    <div className = "col-md-4">
                        <img src = "./../public/images/partner.png" />
                    </div>
                </div>
                <img src = "./../public/images/partner.png" />
            </div>
        )
    }
    
}
export default NewPartners;