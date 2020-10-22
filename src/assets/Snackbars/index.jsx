import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import Slide from '@material-ui/core/Slide';
import {styles} from './styles'

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
};

const SlideTransition = React.forwardRef((props, ref) => {
  return <Slide {...props} ref={ref} direction="left" timeout={500} />;
});

const MySnackbarContent = React.forwardRef((props, ref) => {
  const { classes, className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];
  return (
    <SnackbarContent
    ref={ref}
      className={classNames(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
      ]}
      {...other}
    />
  );
});

MySnackbarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(["success", "warning", "error", "info"]).isRequired
};

const MySnackbarContentWrapper = withStyles(styles)(MySnackbarContent);

class Snackbars extends React.Component {
  render() {
    const {isOpen, handleClose, variant, message, ...props } = this.props;
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right"
          }}
          open={isOpen}
          autoHideDuration={3000}
          onClose={handleClose}
          TransitionComponent={SlideTransition}
        >
          <MySnackbarContentWrapper
            onClose={handleClose}
            variant={variant}
            message={message}
          />
        </Snackbar>
      </div>
    );
  }
}
Snackbars.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Snackbars);
