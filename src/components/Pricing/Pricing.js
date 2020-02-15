import React, { Component } from 'react';

// components
import PricingCart from './PricingCart';
import PricingCartOrg from './PricingCartOrg';
import Header from '../Header';
import Footer from '../Footer';

export default class Pricing extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="pricing-header-wrapper">
              <Header />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-between">
            <div className="pricing-rectangle"></div>

            <div className="col-10 offset-1 col-lg-8 offset-lg-2 div-wrapper d-flex justify-content-center align-items-center pricing-image-wrapper ">
              <img
                src="images/pricing_page_image.png"
                alt=""
                className="responsive-image"
              />
            </div>
            <div className="pricing-image-title-wrapper">
              <h1 className="pricing-image-title">PRICING LIST</h1>
            </div>
            <div className="pricing-rectangle2"></div>
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
          <PricingCart
            title="Free"
            lineOne="info 1"
            lineTwo="info 2"
            lineThree="info 2"
            price="10"
          />
        </div>
        <div className="row">
          <div className="col-10 offset-1 col-lg-8 offset-lg-2 div-wrapper d-flex justify-content-center align-items-center">
            <div className="pricing-organization-wrapper">
              <h3 className="pricing-organization-title">FOR ORGANIZATIONS</h3>
            </div>
            <div className="pricing-org-line"></div>
          </div>
        </div>

        <div className="row">
          <div className="col-10 offset-1 col-lg-8 offset-lg-2 div-wrapper d-flex justify-content-center align-items-center">
            <div className="pricing-org-rect-wrapper">
              <PricingCartOrg
                title="Free"
                lineOne="info 1"
                lineTwo="info 2"
                lineThree="info 2"
                price="10"
              />
              <PricingCartOrg
                title="Free"
                lineOne="info 1"
                lineTwo="info 2"
                lineThree="info 2"
                price="10"
              />
              <PricingCartOrg
                title="Free"
                lineOne="info 1"
                lineTwo="info 2"
                lineThree="info 2"
                price="10"
              />
              <PricingCartOrg
                title="Free"
                lineOne="info 1"
                lineTwo="info 2"
                lineThree="info 2"
                price="10"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="pricing-footer-wrapper">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
