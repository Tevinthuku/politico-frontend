import React from "react";
import { withRouter } from "react-router";

import { connect } from "react-redux";

import { login } from "../../actions/auth";

import { Input } from "../../components/input";

import Center from "../../components/center";
export class LoginUnconnectedComponent extends React.Component {
  state = {
    email: "",
    password: ""
  };
  handleSubmit = event => {
    const { email, password } = this.state;
    const { login, history } = this.props;
    event.preventDefault();
    login(email, password, history);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    const { email, password } = this.state;
    return (
      <Center>
        <form onSubmit={this.handleSubmit} data-test="loginform">
          <Input
            placeholder="email"
            type="email"
            data-test="email"
            value={email}
            name="email"
            onChange={this.handleChange}
          />
          <Input
            placeholder="password"
            type="password"
            data-test="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <Input data-test="submit" type="submit" value="Login" />
        </form>
      </Center>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state;

  return {
    user
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { login }
  )(LoginUnconnectedComponent)
);
