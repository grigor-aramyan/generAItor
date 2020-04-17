import React from "react";
import FollowerCard from "./FollowerCard";
import { connect } from "react-redux";
import { getFollowers } from "../../actions/followerActions";
import Header from "../Header";

class Followers extends React.Component {
  componentDidMount() {
    this.props.getFollowers(3);
  }
  render() {
    const { followers } = this.props;
    const followerCount = followers.length;
    return (
      <div>
        <Header />
        <div className="conatiner">
          <div className="followers-title-wrapper">
            <h1 className="followers-title">FOLLOWERS</h1>
          </div>
          <div className="followers-count-wrapper">
            <h3 className="followers-count">
              You have {followerCount} new followers
            </h3>
          </div>
          <div className="d-flex justify-content-center">
            {followers &&
              followers.map((e, i) => (
                <div key={i} className="text-center">
                  <FollowerCard
                    name={e.name}
                    surname={e.surname}
                    imgSrc={e.img}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  followers: state.followers,
});
const mapDispatchToPropes = {
  getFollowers,
};
export default connect(mapStateToProps, mapDispatchToPropes)(Followers);
