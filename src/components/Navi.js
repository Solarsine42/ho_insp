import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Navi = () => {
  return (
    <div>
      <Link style={{ color: "white" }} to="/">
        <strong>Main</strong>
      </Link>
    </div>
  );
};

export default connect()(Navi);
