import React from 'react';
import Message from './Message';

class MiniChat extends React.Component {
  render() {
    const { messages, newMessage, sendMessage, handleChange } = this.props;
    return (
      <div className="mini-chat-wrapper">
        <div className="mini-chat-message-content">
          <div className="mini-chat-message-list">
            {messages.map((e, i) => {
              return (
                <div
                  key={i}
                  className="mini-chat-message-item"
                  style={e.user == 'me' ? { marginLeft: '110px' } : null}
                >
                  <p className="mini-chat-message-text">{e.msg}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="d-flex mini-chat-send-message-wrapper">
          <input
            type="text"
            className="mini-chat-message-input"
            value={newMessage}
            onChange={handleChange}
          />
          <button className="mini-chat-send-message-btn" onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    );
  }
}

export default MiniChat;
