import React from "react";
import { Link } from "react-router-dom";
import "./layout.css";
import menu from "../../images/menu.svg";
import close from "../../images/close.svg";

class Layout extends React.Component {
  state = {
    open: false
  };

  toggleOpen = event => {
    this.setState(state => ({
      open: !state.open
    }));
  };
  render() {
    const { open } = this.state;
    return (
      <div>
        <div className={open ? `topnav responsive` : `topnav`} id="myTopnav">
          <Link data-test="anchor" to="/" className="active">
            Politico
          </Link>
          <div className="flex" />
          <Link data-test="anchor" to="/listusers">
            Listusers
          </Link>
          <Link data-test="anchor" to="/listparties">
            Listparties
          </Link>
          <Link data-test="anchor" to="/login">
            Login
          </Link>
          <a
            href="#menu"
            onClick={this.toggleOpen}
            className="icon"
            data-test="nav-toggle"
          >
            {open ? (
              <img src={close} alt="close" data-test="menu-close" />
            ) : (
              <img src={menu} alt="menu" data-test="menu-open" />
            )}
          </a>
        </div>

        {this.props.children}
      </div>
    );
  }
}

export default Layout;
