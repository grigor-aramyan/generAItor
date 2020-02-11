import React from 'react';

const Main = () => {
    return (
        <div>
            <section className="container-fluid main">
                <div className="row">
                <div className="col-lg-6 left-side">
                    <div className="main_left-side">
                        <h1>INNOVITIES WE TRUST</h1>
                        <p className="main_content">Innovities is a social platform <br />
                        where innovative ideas are found by those who need them.</p>
                        <a href="#" className="main_button">Learn More About Us</a>
                    </div>
                </div>
                <div className="col-lg-6">
                <div className="main_right-side">
                        <img src="images/main_img-1.jpg" className="main_img-1" alt=""/>
                        <img src="images/main_img-2.jpg" className="main_img-2" alt=""/>
                        <hr/>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default Main;