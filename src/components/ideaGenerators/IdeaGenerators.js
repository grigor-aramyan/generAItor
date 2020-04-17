import React from "react";
import FollowerCard from "../followers/FollowerCard";
import Header from "../Header";

class IdeaGenerators extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topGenerators: [
        { name: "Anna", surname: "Hakobyan", img: "images/follower1.png" },
        { name: "Karine", surname: "Antonyan", img: "images/follower2.png" },
        { name: "Anna", surname: "Hakobyan", img: "images/follower1.png" },
        { name: "Anna", surname: "Hakobyan", img: "images/follower1.png" },
      ],
    };
  }

  render() {
    const { topGenerators } = this.state;

    return (
      <div>
        <Header />
        <div className="conatiner">
          <div className="followers-title-wrapper">
            <h1 className="followers-title">IDEA GENERATORS</h1>
          </div>
          <div className="followers-count-wrapper">
            <h3 className="followers-count">Top Generators</h3>
          </div>
          <div className="d-flex justify-content-center flex-wrap ideaGenerators-card-wrapper">
            {topGenerators &&
              topGenerators.map((e, i) => (
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

export default IdeaGenerators;
