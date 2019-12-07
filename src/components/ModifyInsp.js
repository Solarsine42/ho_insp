import React, { useState } from "react";
import { connect } from "react-redux";
import { editInspection } from "../store/inspections/actions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

const ModifyInsp = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [editContactInfo, setEditContactInfo] = useState(
    props.inspection.contact_info
  );
  const [editSpecInstr, setEditSpecInstr] = useState(
    props.inspection.special_instructions
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Fab
        style={{ backgroundColor: "#FFDD00" }}
        aria-label="edit"
        onClick={handleClickOpen}
      >
        <EditIcon />
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Inspection Editor</DialogTitle>
        <DialogContent>
          <form className={classes.root} noValidate autoComplete="off">
            <div>
              <TextField
                label="Contact Phone"
                helperText="If there is a secondary number, add to special instructions"
                variant="outlined"
                name="contact_info"
                value={editContactInfo}
                onChange={e => setEditContactInfo(e.target.value)}
                required
              />
              <TextField
                multiline
                label="Special Instructions"
                variant="outlined"
                name="special_instructions"
                value={editSpecInstr}
                onChange={e => setEditSpecInstr(e.target.value)}
              />
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Back
          </Button>
          <Button
            onClick={() => {
              props.dispatch(
                editInspection(
                  {
                    contact_info: editContactInfo,
                    special_instructions: editSpecInstr
                  },
                  props.inspection.id
                )
              );
              setOpen(false);
            }}
            color="secondary"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default connect()(ModifyInsp);
