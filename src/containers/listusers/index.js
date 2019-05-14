import React from "react";

import { connect } from "react-redux";

import Center from "../../components/center";
import Listitem from "../../components/listitem";

import { getAllUsers } from "../../actions/userslist";

export class Listusers extends React.Component {
  componentDidMount() {
    const { getAllUsers } = this.props;

    getAllUsers();
  }
  render() {
    const { userslist } = this.props;

    return (
      <div>
        <h1>List users</h1>
        {userslist.isFetching ? (
          <Center>
            <div data-test="loading">Loading users</div>
          </Center>
        ) : (
          <div>
            {userslist.payload.map((user, i) => (
              <Listitem
                title={user.username}
                message={user.email}
                key={i}
                data-test="each-user"
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { userslist } = state;
  return {
    userslist
  };
};

export default connect(
  mapStateToProps,
  { getAllUsers }
)(Listusers);
