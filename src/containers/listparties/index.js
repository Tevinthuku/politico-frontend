import React from "react";
import { connect } from "react-redux";

import Center from "../../components/center";
import Listitem from "../../components/listitem";

import { getAllParties } from "../../actions/parties";

export class UnconnectedPartiesList extends React.Component {
  componentDidMount() {
    const { getAllParties } = this.props;
    getAllParties();
  }

  render() {
    const { isFetching, partieslist } = this.props;

    return (
      <div>
        {isFetching && (
          <Center data-test="loading">Loading list of parties</Center>
        )}
        <h1>List parties</h1>
        {partieslist &&
          partieslist.map((party, i) => (
            <Listitem key={i} title={party.name} message={party.hqAddress} />
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { parties } = state;
  return {
    partieslist: parties.partieslist,
    isFetching: parties.isFetching
  };
};

export default connect(
  mapStateToProps,
  { getAllParties }
)(UnconnectedPartiesList);
