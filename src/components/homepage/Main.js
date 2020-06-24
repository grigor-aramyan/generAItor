import React from "react";

const Main = () => {
  return (
    <div className='container-fluid'>
        <div className='main'></div>
        <div className='row d-flex align-items-center justify-content-between'>
          <div className='col-6 m-left'>
            <div className='main_left-side'>
              <h1 className='homepage-main-title text-center'>
                INNOVITIES WE TRUST
              </h1>
              <p className='main_content'>
                Innovities is a social platform <br />
                where innovative ideas are found by those who need them.
              </p>
              <div style={{ textAlign: "center" }}>
                <a href='#' className='main_button'>
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='main_right-side'>
              <img
                src='images/main_img-1.jpg'
                className='main_img-1'
                alt='Main image'
              />
              <img
                src='images/main_img-2.jpg'
                className='main_img-2'
                alt='Main image'
              />
              <hr className="main_line"></hr>
              
            </div>
          </div>
        </div>
    </div>
  );
};

export default Main;
