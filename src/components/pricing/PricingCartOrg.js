import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PricingCartOrg extends Component {
  render() {
    const { title, lineOne, lineTwo, lineThree, price } = this.props;

    return (
      <div className="col-md-3 col-lg-3">
        <div className="pricing-org-rectangle">
          <h1 className="pricing-org-free-title">{title}</h1>
          <div className="pricing-org-free-line"></div>
          <div className="pricing-org-list-wrapper text-center">
            <ul>
              <li className="pricing-org-list-item">
                <img src="images/vector.png" alt="Vektor" />
                {lineOne}
              </li>
              <li className="pricing-org-list-item">
                <img src="images/vector.png" alt="Vektor" />
                {lineTwo}
              </li>
              <li className="pricing-org-list-item">
                <img src="images/vector.png" alt="Vektor" />
                {lineThree}
              </li>
            </ul>
          </div>
          <div className="pricing-price-org">
            <span className="pricing-price-usd-org">USD</span>
            <span className="pricing-price-num-org">{price}</span>
          </div>
          <div className="pricing-org-subscribe-btn">
            <div>
              <a className="pricing-org-btn-text" href="#">
                subscribe
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PricingCartOrg.propTypes = {
  title: PropTypes.string.isRequired,
  lineOne: PropTypes.string.isRequired,
  lineTwo: PropTypes.string.isRequired,
  lineThree: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};

export default PricingCartOrg;
