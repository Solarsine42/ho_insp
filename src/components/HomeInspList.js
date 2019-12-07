import React, { useState } from "react";
import HomeInsp from "./HomeInsp";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#12395B"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#12395B"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#12395B"
      },
      "&:hover fieldset": {
        borderColor: "#12395B"
      },
      "&.Mui-focused fieldset": {
        borderColor: "#12395B"
      }
    }
  }
})(TextField);

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
        <CssTextField
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
