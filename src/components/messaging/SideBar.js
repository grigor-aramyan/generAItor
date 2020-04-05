import React from 'react';

class SideBar extends React.Component {
  render() {
    return (
      <div>
        <div className="message-sidebar">
          {this.props.users.map((e, i) => {
            return (
              <div key={i} className="message-user-img-wrapper">
                <img src={e.imgSrc} className="message-user-img" />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SideBar;
