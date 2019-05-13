import React from "react";
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
          <a data-test="anchor" href="#home" className="active">
            Politico
          </a>
          <div className="flex" />
          <a data-test="anchor" href="#vote">
            Vote
          </a>
          <a data-test="anchor" href="#login">
            Login
          </a>
          <a data-test="anchor" href="#signup">
            Signup
          </a>
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
