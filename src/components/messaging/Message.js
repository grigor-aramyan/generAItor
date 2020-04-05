import React from 'react';

class Message extends React.Component {
  render() {
    return (
      <div>
        <div className="message">
          <p className="message-text">{this.props.message}</p>
        </div>
        <img src="images/Polygon.png" className="message-triangle-img" />
      </div>
    );
  }
}

export default Message;
