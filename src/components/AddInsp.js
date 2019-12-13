import React, { useState } from "react";
import { connect } from "react-redux";
import { addInspection } from "../store/inspections/actions";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

const AddInsp = props => {
  const classes = useStyles();
  const [memberNumber, setMemberNumber] = useState("");
  const [policyNumber, setPolicyNumber] = useState("");
  const [address, setAddress] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [specialInstr, setSpecialInstr] = useState("");
  return (
    <div>
      <Typography style={{ textAlign: "center" }} variant="h4">
        Add Inspection Form
      </Typography>
      <br />
      <form
        onSubmit={() => {
          props.dispatch(
            addInspection({
              address: address,
              contact_info: contactInfo,
              inspector_id: null,
              member_number: Number(memberNumber),
              policy_number: policyNumber,
              special_instructions: specialInstr
            })
          );
          props.history.push("/");
        }}
        className={classes.root}
      >
        <div>
          <TextField
            required
            label="Member #"
            value={memberNumber}
            onChange={e => setMemberNumber(e.target.value)}
            variant="outlined"
          />
          <TextField
            required
            label="Policy #"
            value={policyNumber}
            onChange={e => setPolicyNumber(e.target.value)}
            variant="outlined"
          />
          <TextField
            required
            label="Address"
            value={address}
            onChange={e => setAddress(e.target.value)}
            variant="outlined"
          />
          <TextField
            required
            placeholder="XXX-XXX-XXXX"
            label="Contact Phone"
            value={contactInfo}
            onChange={e => setContactInfo(e.target.value)}
            variant="outlined"
            helperText="(Dashes only)"
          />
          <div>
            <FormControl fullWidth>
              <TextField
                style={{ width: "86%" }}
                multiline
                label="Special Instructions"
                value={specialInstr}
                onChange={e => setSpecialInstr(e.target.value)}
                variant="outlined"
                helperText="Specific location directions, additional contact info, special conditions or concerns"
              />
            </FormControl>
          </div>
          <div style={{ marginTop: "20px" }}>
            <Button
              style={{
                width: "40%",
                margin: "0 30% 0 30%",
                backgroundColor: "#12395B"
              }}
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<Icon>send</Icon>}
              type="submit"
            >
              Send
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    inspections: state.inspections.all
  };
}

export default connect(mapStateToProps)(AddInsp);
