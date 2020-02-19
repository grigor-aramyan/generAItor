import React, { Component } from 'react';
import OrgProfileButtons from './OrgProfileButtons';
// import PropTypes from 'prop-types';

export default class OrgProfileMain extends Component {
  constructor() {
    super();
    // this.state = {
    //   isLogged: true
    // };
  }

  render() {
    const { organization, followers, feedbacks, isLogged } = this.props;

      return (
        <div className="container-fluid">
         <div className="d-flex justify-content-around align-items-center org_profile">
          <div className="organization_images-wrapper">
           <div className="user-image-recatngle">
            <img src="images/org_profile_img.png" 
                 alt="organization profile image"
                 className="org_profile_img"/>
           </div>
          </div>
          <div className="organization_info-wrapper">
           <div className="inner_info">
            <h1 className="organization_name">{organization}</h1>
           <div className="d-flex justify-content-between organization-add_info">
             <div className="followers">
              <p><span>{followers}</span> followers</p>
             </div>
             <div className="feedbacks">
              <p><span>{feedbacks}</span> feedbacks</p>
             </div>
             </div>
            </div>
            <OrgProfileButtons
            isLogged={isLogged} />
           </div>
          </div>
        </div>
    )
  }
}

// OrgProfileMain.propTypes = {
//   organization: PropTypes.string.isRequired,
//   followers: PropTypes.string.isRequired,
//   feedbacks: PropTypes.string.isRequired,
//   isLogged: PropTypes.bool.isRequired
// };
