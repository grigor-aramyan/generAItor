import React from 'react';

const Info = () => {
    return(
        <div>
            <section className="container-fluid info">
                <div className="row">
                <div className="image_content">
                    <img src="images/info_img.jpg" className="image_content-img" alt="About us page"/>
                    <div className="inner-title">INNOVITIES WE TRUST</div>
                </div>
                
                <div className="info_description">
                    <div className="info_description_about">
                        <div className="info_description-title">ABOUT US</div>
                        <p className="info_description-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                           standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
                           type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                           the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 
                           to make a type specimen book.</p>
                    </div>
                    <div className="info_description_works">
                    <div className="info_description_about">
                        <div className="info_description-title">HOW IT WORKS</div>
                        <p className="info_description-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                           standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
                           type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                           the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 
                           to make a type specimen book.</p>
                    </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Info;