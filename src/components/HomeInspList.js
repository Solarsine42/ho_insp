import React, { useState } from "react";
import HomeInsp from "./HomeInsp";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

const HomeInspList = props => {
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const listOfInspections = props.inspections
    .filter(inspection => String(inspection.member_number).includes(search))
    .map((inspection, i) =>
      props.inspections ? <HomeInsp key={i} inspection={inspection} /> : null
    );

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          label="Member Number"
          variant="outlined"
          name="search"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </form>
      <div>{listOfInspections}</div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    inspections: state.inspections.all
  };
}

export default connect(mapStateToProps)(HomeInspList);
