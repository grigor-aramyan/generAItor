import React, { Component } from "react";
import OrgCard from "./OrgCard";
import Header from "../Header";
class Organizations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: ["Telecomication", "Programing", "Engineering"],
      organizations: [
        {
          category: "Telecomication",
          name: "Rostelecom",
          imgSrc: "images/org-rect.png",
        },
        {
          category: "Telecomication",
          name: "Rostelecom",
          imgSrc: "images/org-rect.png",
        },
        {
          category: "Telecomication",
          name: "Rostelecom",
          imgSrc: "images/org-rect.png",
        },
        {
          category: "Telecomication",
          name: "Rostelecom",
          imgSrc: "images/org-rect.png",
        },
        {
          category: "Programing",
          name: "Rostelecom",
          imgSrc: "images/org-rect.png",
        },
        {
          category: "Programing",
          name: "Rostelecom",
          imgSrc: "images/org-rect.png",
        },
      ],
      selectedCategory: "Telecomication",
      isdropdownActive: false,
    };
  }

  getOrganizations = (e) => {
    this.setState({ isdropdownActive: !this.state.isdropdownActive });
  };
  render() {
    const {
      organizations,
      selectedCategory,
      categories,
      isdropdownActive,
    } = this.state;
    return (
      <div>
        <Header />
        <div className="container justify-content-center pt-5">
          <div className="org-title-wrapper">
            <h1 className="org-title">ORGANIZATIONS</h1>
          </div>
          <div className="select-orgs">
            <span onClick={this.getOrganizations} className="select-title">
              Choose fields
            </span>

            <img src="images/org-vector.png" alt="" className="select-icon" />
          </div>
          <ul className="select-list">
            {isdropdownActive &&
              categories.map((e, i) => {
                return (
                  <li
                    value={e}
                    key={i}
                    className="category-list-item"
                    onClick={() => this.setState({ selectedCategory: e })}
                  >
                    {e}
                  </li>
                );
              })}
          </ul>
          {isdropdownActive && <div className="org-transparent-image"></div>}

          <div className="d-flex justify-content-center organizations-card-wrapper">
            {organizations.map(
              (e, i) =>
                e.category === selectedCategory && (
                  <div key={i}>
                    <OrgCard name={e.name} imgSrc={e.imgSrc} />
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Organizations;
