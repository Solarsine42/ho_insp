import React, { useState } from "react";
import HomeInsp from "./HomeInsp";
import { connect } from "react-redux";

const HomeInspList = props => {
  const listOfMembers = props.members.map((member, i) => (
    <HomeInsp key={i} member={member.id} />
  ));
  console.log("props", props);

  const [setExpanded] = useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return <div>{listOfMembers}</div>;
};

function mapStateToProps(state) {
  return {
    members: state.members.all,
    inspections: state.inspections.all
  };
}

export default connect(mapStateToProps)(HomeInspList);
