import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PricingCartOrg extends Component {
  render() {
    const { title, lineOne, lineTwo, lineThree, price } = this.props;

    return (
      <div className="col-6 col-md-4 col-lg-3 col-sm-6 d-flex justify-content-around">
        <div className="pricing-center-rectangle">
          <h4 className="pricing-free">{title}</h4>
          <div className="pricing-list-wrapper text-center">
            <ul>
              <li className="pricing-list-item">
                <img src="images/vector.png" alt="Vektor" />
                {lineOne}
              </li>
              <li className="pricing-list-item">
                <img src="images/vector.png" alt="Vektor" />
                {lineTwo}
              </li>
              <li className="pricing-list-item">
                <img src="images/vector.png" alt="Vektor" />
                {lineThree}
              </li>
            </ul>
          </div>
          <div className="pricing-price">
            <span className="pricing-price-usd">USD</span>
            <span className="pricing-price-num">{price}</span>
          </div>
          <div className="pricing-subscribe-btn">
            <div>
              <a className="pricing-btn-text" href="#">
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
