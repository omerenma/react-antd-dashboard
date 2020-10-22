import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, withStyles, Fab, Grid, Typography } from "@material-ui/core";
import Popover from "@material-ui/core/Popover";
import { Colors } from "../../styles/themes";
import Loader from "react-loader-spinner";
import { styles } from "./menuActionStyles";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";
import Dropdown from "./DropDown";
import DropdownRole from "./DropDownRole";
import { SubmitButton } from "../../components/Buttons/index";
import { TextField } from "../../components/TextField/index";
import { addAdmineHelper } from "../../helpers/payrollHelpers/payrollConfigHelper/payrollAdminHelper";

class AddAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      name: "",
      role: "",
      adminName: "",
      adminRole: "",
    };
  }

  handleClickOpen = (e) => {
    this.setState({ anchorEl: e.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const adminData = {
      adminName: this.state.adminName,
      adminRole: this.state.adminRole,
    };
    this.props.addAdmineHelper(adminData);
  };
  render() {
    const { classes, isLoading } = this.props;
    const open = Boolean(this.state.anchorEl);
    const id = open ? "simple-popover" : undefined;
    return (
      <div>
        <div>
          <Tooltip title="" aria-label="add">
            <Fab
              style={{ boxShadow: "none" }}
              aria-label="add"
              className={classes.addButton}
              size="small"
              onClick={this.handleClickOpen}
            >
              <AddIcon />
            </Fab>
          </Tooltip>
        </div>
        <Popover
          style={{ left: -165, top: -15 }}
          id={id}
          open={open}
          anchorEl={this.state.anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <div className={classes.root}>
            {/* <IconButton aria-label="close"
              className={classes.closeButton}
              onClick={this.handleClose}>
              <Tooltip title="close" aria-label="close">
                <CloseIcon />
              </Tooltip>
            </IconButton> */}
            <Grid container spacing={0}>
              <Grid item xs={12} sm={12}>
                <form
                  className={classes.container}
                  noValidate
                  autoComplete="off"
                >
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Typography
                      component="h2"
                      style={{
                        textAlign: "left",
                        color: Colors.primary,
                        paddingLeft: 10,
                      }}
                      gutterBottom
                    ></Typography>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    style={{ position: "relative", top: 30, height: "120px" }}
                  >
                    <p
                      style={{
                        position: "relative",
                        top: -30,
                        height: 10,
                        color: "#2196F3",
                        fontSize: 16,
                        marginLeft: 7,
                        fontFamily: "roboto",
                      }}
                    >
                      Add administrator
                    </p>
                    <TextField
                      name="name"
                      label="Name"
                      value={this.state.adminName}
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                      style={{ position: "relative", top: "-10px" }}
                      InputProps={{
                        className: classes.resized,
                      }}
                      InputLabelProps={{
                        shrink: true,
                        className: classes.label,
                      }}
                    />
                    <Grid
                      style={{
                        marginLeft: 260,
                        bottom: 55,
                        position: "relative",
                      }}
                    >
                      <Dropdown style={{ marginTop: "100px" }} />
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    style={{ position: "relative", top: -20 }}
                  >
                    <TextField
                      name="role"
                      label="Role"
                      value={this.state.adminRole}
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                      style={{ position: "relative", top: "-1px" }}
                      onChange={this.handleChange}
                      InputProps={{
                        className: classes.resized,
                      }}
                      InputLabelProps={{
                        shrink: true,
                        className: classes.label,
                      }}
                    />
                    <Grid
                      style={{
                        marginLeft: 260,
                        bottom: 45,
                        position: "relative",
                      }}
                    >
                      <DropdownRole style={{ marginTop: "100px" }} />
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <div
                      className="cancel"
                      style={{
                        position: "absolute",
                        marginLeft: 180,
                        border: "1px solid hsl(359.6,82.1%,62.7%)",
                        borderRadius: 2,
                        color: "hsl(359.6,82.1%,62.7%)",
                        padding: "6px, 12px",
                        fontSize: 12,
                        width: "auto",
                        display: "flex",
                        textTransform: "capitalize",
                        background: "transparent",
                        bottom: 10,
                      }}
                    >
                      <Button
                        // variant="outlined"
                        className={classes.cancelButton}
                        onClick={this.handleClose}
                        disabled={isLoading}
                        disableRipple={isLoading}
                        style={{
                          textTransform: "capitalize",
                          fontSize: 12,
                          color: "hsl(359.6,82.1%,62.7%)",
                        }}
                      >
                        Cancel
                      </Button>

                      {/* <CancelButton 
              className={classes.cancelButton}
              onClick={this.handleClose}
              disabled={addLoading}
              disableRipple={addLoading}
              /> */}
                    </div>
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <SubmitButton
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.submitAddButton}
                      disabled={isLoading}
                      style={{
                        backgroundColor: isLoading ? Colors.blueSecondary : "",
                        position: "absolute",
                        left: "80%",
                        padding: "6px, 12px",
                        width: "auto",
                        height: 35,
                        textAlign: "center",
                        top: 160,
                      }}
                      disableRipple={isLoading}
                      onClick={this.handleSubmit}
                    >
                      <span
                        className="submit-btn"
                        style={{ marginTop: -5, marginLeft: 2 }}
                      >
                        {isLoading ? (
                          <Loader
                            type="ThreeDots"
                            color="#f4f4f4"
                            height="15"
                            width="30"
                          />
                        ) : (
                          "Add"
                        )}
                      </span>
                    </SubmitButton>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </div>
        </Popover>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//       config: (adminData) => dispatch(addAdmineHelper(adminData))
//   }
// }

export default connect(mapStateToProps, { addAdmineHelper })(
  withStyles(styles)(AddAdmin)
);
