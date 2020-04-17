import React from "react";
import NavPage from "../navPage/navPage";
import ProfileClick from "../ProfileClick/ProfileClick";
import SignInPage from "../signInPage/SignInPage";
import SignUp from "../signup/SignUp";
import { connect } from "react-redux";

class GeneralMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      toSignUp: false,
      toSignIn: false,
    };
  }
  render() {
    return (
      <div className="postition-obsolute">
        {this.props.isOpen && (
          <div>
            {!this.state.toSignIn && !this.state.toSignUp ? (
              <div>
                {this.props.isAuthenticated ? (
                  <NavPage />
                ) : (
                  <ProfileClick
                    openSignup={() =>
                      this.setState({ toSignIn: false, toSignUp: true })
                    }
                    openSignIn={() =>
                      this.setState({ toSignIn: true, toSignUp: false })
                    }
                  />
                )}
              </div>
            ) : this.state.toSignIn ? (
              <SignInPage />
            ) : (
              <SignUp />
            )}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps)(GeneralMenu);
