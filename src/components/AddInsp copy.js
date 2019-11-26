import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";

const AddInsp = () => {
  let [memberNumber, setMemberNumber] = useState(0);
  let [
    memberName,
    setMemberName,
    adress,
    setAdress,
    inspectionCompany,
    setInspectionCompany
  ] = useState("");

  const onSubmit = () => {
    let body = {
      memberNumber: memberNumber,
      body: ""
    };
  };

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
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple">Age</InputLabel>
            <Select
              native
              value={state.age}
              onChange={handleChange("age")}
              inputProps={{
                name: "age",
                id: "age-native-simple"
              }}
            >
              <option value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select>
          </FormControl>
          <TextField
            style={{
              width: "220px",
              marginLeft: "10px",
              marginRight: "10px"
            }}
            label="Member #"
            type="text"
            variant="outlined"
            value={memberNumber}
            onChange={() => setMemberNumber()}
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
        <div>
          <Typography style={{ marginLeft: "5%" }} variant="h5">
            Listed Address on Profile
          </Typography>
        </div>
        <br />

        <FormControl
          variant="outlined"
          className={{ margin: "theme.spacing(1)", minWidth: "120" }}
        >
          <InputLabel style={{ marginLeft: "10px" }}>
            Inspection Type
          </InputLabel>
          <Select
            style={{
              marginLeft: "10px",
              marginRight: "10px",
              width: "462px"
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Inside/Outside w/Valuation</MenuItem>
            <MenuItem value={20}>Post-Claims/Proof of Repair</MenuItem>
            <MenuItem value={30}>Underwriting Evaluation</MenuItem>
          </Select>
        </FormControl>
      </form>
    </div>
  );
};

export default AddInsp;
