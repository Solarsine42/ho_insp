import React from "react";
import { connect } from "react-redux";

class HomeInspList extends React.Component {
  state = {
    query: ""
  };

  handleSort = e => {
    this.setState({ query: e.target.value });
  };

  render() {
    return (
      <div>
        <div>thing 1</div>
        <div>thing 2</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    members: state.members.all,
    inspection: state.inspections.all
  };
}

export default connect(mapStateToProps)(HomeInspList);
