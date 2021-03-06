import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SubMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subMenuOpen: false,
    };
  }

  render() {
    const { item } = this.props;
    return (
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
    );
  }
}
