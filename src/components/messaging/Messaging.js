import React from 'react';
import SideBar from './SideBar';
import Message from './Message';
import MiniChat from './MiniChat';

const activeMiniChat = {
  position: 'absolute',
  bottom: '10px',
};
class Messaging extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          name: 'Rostelecom Armenia',
          imgSrc: 'images/org_profile_img.png',
        },
        {
          name: 'Ucom Armenia',
          imgSrc: 'images/org_profile_img.png',
        },
      ],
      messages: [
        { user: 'he', msg: 'Thank you for your feedback.' },
        { user: 'me', msg: 'Thank you for your feedback.' },
      ],
      isActiveminiChat: false,
      newMessage: '',
    };
  }

  sendMessage = () => {
    const myMessage = { user: 'me', msg: this.state.newMessage };
    this.state.messages.push(myMessage);
    this.setState({ newMessage: '' });
  };
  render() {
    const { messages, isActiveminiChat, users, newMessage } = this.state;
    return (
      <div>
        <div className="container justify-content-center mt-5">
          <div className="row d-flex align-atems-center">
            <div className="col-3">
              <SideBar users={users} />
            </div>
            <div className="col-9">
              <div className="messages-wrapper">
                <div className="message-user-name-wrapper">
                  <h2 className="message-user-name">{users[0].name}</h2>
                  <div className="message-user-name-undeline"></div>
                </div>
                <div className="messages-today d-flex align-items-center justify-content-center">
                  <div className="left-line"></div>
                  <h3 className="today-message-title">Today</h3>
                  <div className="right-line"></div>
                </div>
                {messages.map((e, i) => {
                  return (
                    <div key={i}>
                      <div
                        className={
                          e.user == 'he'
                            ? 'col-6 messages-content'
                            : ' col-6 offset-6 messages-content'
                        }
                      >
                        <Message message={e.msg} />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="d-flex send-message-wrapper">
                <div className="col-9 nopadding">
                  <input
                    type="text"
                    className="write-message-input"
                    value={newMessage}
                    onChange={(e) =>
                      this.setState({ newMessage: e.target.value })
                    }
                  />
                </div>
                <div className="col-3 nopadding">
                  <button
                    type="submit"
                    className="write-message-btn"
                    onClick={this.sendMessage}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row justify-content-end">
            <div className="col-2 offset-10 mt-5">
              <div style={isActiveminiChat ? activeMiniChat : null}>
                <div className="d-flex align-items-center justify-content-between mini-chat-title-wrapper">
                  <h4
                    className="mini-chat-title"
                    onClick={() => this.setState({ isActiveminiChat: true })}
                  >
                    {users[0].name}
                  </h4>
                  <img
                    src="images/chat-close.png"
                    className="mini-chat-close-icon"
                    onClick={() => this.setState({ isActiveminiChat: false })}
                  />
                </div>
                {isActiveminiChat && (
                  <MiniChat
                    messages={messages}
                    newMessage={newMessage}
                    handleChange={(e) =>
                      this.setState({ newMessage: e.target.value })
                    }
                    sendMessage={this.sendMessage}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Messaging;
