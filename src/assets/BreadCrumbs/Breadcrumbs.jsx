import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles, Breadcrumbs } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {styles} from '../../containers/containerStyles/styles'
import { HomeIcon } from '../../assets/mui';

class MainBreadcrumbs extends  Component {
    render () {
        const { classes, breadcrumbData } = this.props;
        return (
            <div className={classes.root}>
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} arial-label="Breadcrumb">
                <HomeIcon style={{verticalAlign:"top", height:"0.8em"}}/>
                <Typography color="textPrimary">{breadcrumbData.parent}</Typography>
                {breadcrumbData.child && <Typography color="textPrimary">{breadcrumbData.child}</Typography>}
                </Breadcrumbs>
            </div>
        )
    }
}

MainBreadcrumbs.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  const mapStateToProps = (state) => {
    return {
      breadcrumbData: state.updateBreadcrumb.breadcrumbData
    }
  }
  
  export default connect(mapStateToProps)(withStyles(styles)(MainBreadcrumbs));
  