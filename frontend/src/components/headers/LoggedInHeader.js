import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Payments from "../Payments";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { ApplicantMenu, EmployerMenu } from "../data/SidebarData";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import * as actions from "../../actions";

class LoggedInHeader extends Component {
  constructor(props) {
    super(props);
    this.handleSidebar = this.handleSidebar.bind(this);
    this.state = {
      sidebar: false,
    };
  }

  handleButton() {
    console.log("hekllo");
  }

  handleCheckout() {
    const data = {
      priceId: "price_1I7qTREah8AfDWDxVT8yjaiP",
    };
    actions.createCheckoutSession(JSON.stringify(data));
  }

  handleSidebar() {
    const sidebar = this.state.sidebar;
    this.setState({ sidebar: !sidebar });
  }
  renderPayment() {
    return <Payments />;
  }

  render() {
    // function that updates state in
    // toggles on off
    const sidebar = this.state.sidebar;
    var Menu;

    const SideBar =
      this.props.auth && this.props.auth.role === "Applicant"
        ? ApplicantMenu
        : EmployerMenu;
    return (
      <div>
        <div className="navbar">
          <div className="login-header add-full-height">
            <div>
              <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={this.handleSidebar} />
              </Link>
              <Button onClick={this.handleCheckout}>pay</Button>
            </div>
            <div>People Count</div>
            <div>
              {this.props.auth.role === "Employer" && this.props.auth.isAdmin
                ? this.renderPayment()
                : undefined}
              <Dropdown className="user-options-dropdown add-full-width">
                <Dropdown.Toggle
                  className="user-drp-button add-half-width right-corner"
                  variant="primary"
                  id="dropdown-basic"
                >
                  <FaIcons.FaUser></FaIcons.FaUser>
                </Dropdown.Toggle>

                <Dropdown.Menu className="add-half-width">
                  <Dropdown.Item></Dropdown.Item>
                  <Dropdown.Item href="/profile">User Profile</Dropdown.Item>
                  <Dropdown.Item href="/api/logout">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <div className="nav-menu-items" onClick={this.handleSidebar}>
            <div className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </div>
            {SideBar.map((item, index) => {
              return (
                <div key={index}>
                  <div className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </div>
                  <div className="sub_menu">
                    {item.sub_menu === undefined
                      ? undefined
                      : item.sub_menu === undefined
                      ? undefined
                      : item.sub_menu.map((sub, subindex) => {
                          return (
                            <div key={subindex} className="nav-text">
                              <Link to={sub.path}>
                                <span>{sub.title}</span>
                              </Link>
                            </div>
                          );
                        })}
                  </div>
                </div>
              );
            })}
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(LoggedInHeader);
