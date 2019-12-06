import React, { useState } from "react";
import DeleteInsp from "./DeleteInsp";
import ModifyInsp from "./ModifyInsp";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
    color: "#fac705"
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: "white"
  }
}));

const HomeInsp = props => {
  const inspection = props.inspection;
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root} style={{ padding: "5px" }}>
      <ExpansionPanel
        style={{ background: "#12385b" }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel1bh-content"
        >
          <Typography className={classes.heading}>
            {inspection.member_number}
          </Typography>
          <Typography className={classes.secondaryHeading}>
            {inspection.address}
          </Typography>
        </ExpansionPanelSummary>
        <Container>
          <ExpansionPanelDetails>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  Policy: {inspection.policy_number}
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  Contact: {inspection.contact_info}
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  Inspector Assigned:{" "}
                  {inspection.inspector_id ? inspection.inspector_id : "None"}
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  Special Instructions:{" "}
                  {inspection.special_instructions
                    ? inspection.special_instructions
                    : "None"}
                </Paper>
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <ModifyInsp />
              </Grid>
              <Grid item xs={6}>
                <DeleteInsp />
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
        </Container>
      </ExpansionPanel>
    </div>
  );
};

export default connect()(HomeInsp);
