import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PricingCartOrg extends Component {
    render() {
        const {
            title,
            lineOne,
            lineTwo,
            lineThree,
            price
        } = this.props;

        return(
            <div className="col-md-3 col-lg-3">
                <div className="pricing-org-rectangle">
                    <h1 className="pricing-free">{ title }</h1>
                    <div className="pricing-free-line"></div>
                    <div className="pricing-org-list-wrapper">
                    <ul>
                        <li className="pricing-org-list-item">
                            <img src="images/vector.png" alt="Vektor" />
                            { lineOne }
                        </li>
                        <li className="pricing-org-list-item">
                            <img src="images/vector.png" alt="Vektor" />
                            { lineTwo }
                        </li>
                        <li className="pricing-org-list-item">
                            <img src="images/vector.png" alt="Vektor" />
                            { lineThree }
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
        );
    }
}

PricingCartOrg.propTypes = {
    title: PropTypes.string.isRequired,
    lineOne: PropTypes.string.isRequired,
    lineTwo: PropTypes.string.isRequired,
    lineThree: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
}

export default PricingCartOrg;