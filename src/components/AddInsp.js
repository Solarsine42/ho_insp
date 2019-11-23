import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";

const AddInsp = () => {
  const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  }));

  const classes = useStyles();
  const [state, setState] = React.useState({
    age: "",
    name: "hai"
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };

  return (
    <div>
      <form
        className={{ display: "flex", flexWrap: "wrap" }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            style={{
              width: "220px",
              marginLeft: "10px",
              marginRight: "10px"
            }}
            label="Member #"
            type="text"
            variant="outlined"
          />

          <TextField
            style={{
              marginLeft: "10px",
              marginRight: "10px",
              width: "220px"
            }}
            label="Policy #"
            type="text"
            variant="outlined"
            placeholder="example: HO91A"
          />
        </div>
        <br />
        <div style={{ marginBottom: "10px" }}>
          <Typography style={{ marginLeft: "5%" }} variant="h5">
            Searching for Address on Profile...
          </Typography>
        </div>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
            Inspection Type
          </InputLabel>
          <Select
            style={{ minWidth: "300px" }}
            // value={age}
            // onChange={handleChange}
            labelWidth={labelWidth}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"IO"}>Inside/Outside w/Valuation</MenuItem>
            <MenuItem value={"PRC"}>
              Proof of Repairs/Claims Evaluation
            </MenuItem>
          </Select>
        </FormControl>
      </form>
    </div>
  );
};

export default AddInsp;
