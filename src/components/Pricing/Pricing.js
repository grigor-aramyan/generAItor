import React, { Component } from 'react';

// components
import PricingCart from './PricingCart';
import PricingCartOrg from './PricingCartOrg';
import Header from '../Header';
import Footer from '../Footer';

export default class Pricing extends Component {
  render() {
    return (
      <section className="container-fluid pricing-rectangle">
        <div className="row">
          <Header />
          <div className="col-12 image_content_pricing">
            <img src="images/pricing_page_image.png" className="image_content-prc" alt="About us page" />
            <div className="inner-title">PRICING LIST</div>
            <img src="images/pricing_rectangle.png" className="pricing-bg" alt="" />
          </div>
        </div>

        <div className="row for_ideas">
          <div className="col-10 offset-1 col-lg-8 offset-lg-2 div-wrapper d-flex justify-content-center align-items-center">
            <div className="pricing-idea-wrapper text-center">
              <h3 className="pricing-idea-text">FOR IDEA GENERATORS</h3>
            </div>
          </div>
          <PricingCart
            title="Free"
            lineOne="info 1"
            lineTwo="info 2"
            lineThree="info 2"
            price="10"
          />
        </div>
        <div className="row for_org">
          <div className="col-10 offset-1 col-lg-8 offset-lg-2 div-wrapper d-flex justify-content-center align-items-center">
            <div className="pricing-org-wrapper">
              <h3 className="pricing-idea-text">FOR ORGANIZATIONS</h3>
            </div>
          </div>

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
        <div className="row">
          <Footer />
        </div>

      </section>
    );
  }
}
