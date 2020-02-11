import React, { Component } from 'react';

export default class Pricing extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10 mx-auto ">
            <div className="pricing-rectangle"></div>
            <div className="pricing-rectangle2"></div>
            <div className="pricing-image-wrapper">
              <img
                src="images/pricing_page_image.png"
                alt=""
                className="responsive-image"
              />
              <h1 className="pricing-image-title">PRICING LIST</h1>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-10 offset-1 col-lg-8 offset-lg-2 div-wrapper d-flex justify-content-center align-items-center">
            <div className="pricing-idea-wrapper text-center">
              <h3 className="pricing-idea-text">FOR IDEA GENERATORS</h3>
              <div className="pricing-idea-line"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-10 offset-1 col-lg-8 offset-lg-2 div-wrapper d-flex justify-content-center align-items-center">
            <div className="pricing-center-rectangle">
              <div className="text-center">
                <h4 className="pricing-free">FREE</h4>
                <div className="pricing-center-free-line"></div>
                <div className="pricing-list-wrapper">
                  <ul>
                    <li className="pricing-list-item">
                      <img src="images/vector.png" alt="Vektor" /> Lorem, ipsum
                      dolor.
                    </li>
                    <li className="pricing-list-item">
                      <img src="images/vector.png" alt="Vektor" /> Lorem, ipsum
                      dolor.
                    </li>
                    <li className="pricing-list-item">
                      <img src="images/vector.png" alt="Vektor" /> Lorem, ipsum
                      dolor.
                    </li>
                  </ul>
                </div>

                <div className="pricing-price">
                  <h4 className="pricing-price-usd">USD</h4>
                  <h1 className="pricing-price-num">0</h1>
                </div>

                <div className="pricing-subscribe-btn">
                  <div>
                    <h2 className="pricing-btn-text">subscribe</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-10 offset-1 col-lg-8 offset-lg-2 div-wrapper d-flex justify-content-center align-items-center">
            <div className="pricing-organization-wrapper">
              <h3 className="pricing-organization-title">FOR ORGANIZATIONS</h3>
            </div>
            <div className="pricing-org-line"></div>
          </div>
        </div>

        {/* <div className="container-fluid"> */}
        <div className="row">
          <div className="col-10 offset-1 col-lg-8 offset-lg-2 div-wrapper d-flex justify-content-center align-items-center">
            <div className="pricing-org-rect-wrapper">
              <div className="col-md-3 col-lg-3">
                <div className="pricing-org-rectangle">
                  <h1 className="pricing-free">FREE</h1>
                  <div className="pricing-free-line"></div>
                  <div className="pricing-org-list-wrapper">
                    <ul>
                      <li className="pricing-org-list-item">
                        <img src="images/vector.png" alt="Vektor" /> Lorem,
                        ipsum dolor.
                      </li>
                      <li className="pricing-org-list-item">
                        <img src="images/vector.png" alt="Vektor" /> Lorem,
                        ipsum dolor.
                      </li>
                      <li className="pricing-org-list-item">
                        <img src="images/vector.png" alt="Vektor" /> Lorem,
                        ipsum dolor.
                      </li>
                    </ul>
                  </div>
                  <div className="pricing-org-subscribe-btn">
                    <div>
                      <h2 className="pricing-org-btn-text">subscribe</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3">
                <div className="pricing-org-rectangle">
                  <h1 className="pricing-free">FREE</h1>
                  <div className="pricing-free-line"></div>
                  <div className="pricing-org-list-wrapper">
                    <ul>
                      <li className="pricing-org-list-item">
                        <img src="images/vector.png" alt="Vektor" /> Lorem,
                        ipsum dolor.
                      </li>
                      <li className="pricing-org-list-item">
                        <img src="images/vector.png" alt="Vektor" /> Lorem,
                        ipsum dolor.
                      </li>
                      <li className="pricing-org-list-item">
                        <img src="images/vector.png" alt="Vektor" /> Lorem,
                        ipsum dolor.
                      </li>
                    </ul>
                  </div>
                  <div className="pricing-org-subscribe-btn">
                    <div>
                      <h2 className="pricing-org-btn-text">subscribe</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3">
                <div className="pricing-org-rectangle">
                  <h1 className="pricing-free">FREE</h1>
                  <div className="pricing-free-line"></div>
                  <div className="pricing-org-list-wrapper">
                    <ul>
                      <li className="pricing-org-list-item">
                        <img src="images/vector.png" alt="Vektor" /> Lorem,
                        ipsum dolor.
                      </li>
                      <li className="pricing-org-list-item">
                        <img src="images/vector.png" alt="Vektor" /> Lorem,
                        ipsum dolor.
                      </li>
                      <li className="pricing-org-list-item">
                        <img src="images/vector.png" alt="Vektor" /> Lorem,
                        ipsum dolor.
                      </li>
                    </ul>
                  </div>
                  <div className="pricing-org-subscribe-btn">
                    <div>
                      <h2 className="pricing-org-btn-text">subscribe</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3">
                <div className="pricing-org-rectangle">
                  <h1 className="pricing-free">FREE</h1>
                  <div className="pricing-free-line"></div>
                  <div className="pricing-org-list-wrapper">
                    <ul>
                      <li className="pricing-org-list-item">
                        <img src="images/vector.png" alt="Vektor" /> Lorem,
                        ipsum dolor.
                      </li>
                      <li className="pricing-org-list-item">
                        <img src="images/vector.png" alt="Vektor" /> Lorem,
                        ipsum dolor.
                      </li>
                      <li className="pricing-org-list-item">
                        <img src="images/vector.png" alt="Vektor" /> Lorem,
                        ipsum dolor.
                      </li>
                    </ul>
                  </div>
                  <div className="pricing-org-subscribe-btn">
                    <div>
                      <h2 className="pricing-org-btn-text">subscribe</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    );
  }
}
