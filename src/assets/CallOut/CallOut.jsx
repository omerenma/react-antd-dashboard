import React, { Component } from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { withStyles } from '@material-ui/core';
import { styles } from './callout.styles';
import {
  Button, Menu, MenuItem
} from '@material-ui/core';


class CallOut extends Component {
  state = {
    anchorEl: null,
  }
  CalloutOpen = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  render() {
    const {
      classes,
      TopAction,
      BottomAction,
      ThirdAction,
      FourthAction
    } = this.props;
    const { anchorEl } = this.state
    return (
      <div key={this.props.key} className={classes.callout}>
        <Button onClick={this.CalloutOpen} color="inherit" className={classes.callOutButton}>
          <MoreVertIcon size="small" />
        </Button>
        {/* <Menu
                style={{marginLeft:-40, marginTop:20}}

                  id="simple-menu"
                  anchorEl={anchorEl}
                  transformOrigin={{ vertical: "top"}}
                  open={Boolean(anchorEl)}
                  onClose={() => this.setState({ anchorEl: null })}
                  classes={{ paper: classes.paper }}
                  autoFocus={false}
                  disableAutoFocusItem={true}
                >
                  {TopAction && <MenuItem 
                  style={{height:35}}
                  onClick={()=>this.handleFirstActionProps()} 
                  classes={{ root: classes.menuItemRoot }}
                  >{TopAction}</MenuItem>
                }
                  <div className={classes.line1} ></div>
                {BottomAction && <MenuItem  
                 style={{height:35}}
                onClick={()=>this.handleSecondActionProps()} 
                classes={{root: classes.menuItemRoot}}
                  >{BottomAction}</MenuItem>} */}
                  {/* <Divider classes={{root: classes.divider}}/>
                  {ThirdAction && <MenuItem  onClick={()=>this.handleSecondActionProps()} 
                style={{color:Colors.danger,paddingLeft:0,paddingRight:0}}
                  >{ThirdAction}</MenuItem>} */}
                {/* </Menu> */}
               <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          transformOrigin={{
            vertical: 'top',
            horizontal: 0,
        }}
         open={Boolean(anchorEl)}
          onClose={() => this.setState({ anchorEl: null })}
          classes={{ paper: classes.paper }}
          autoFocus={false}
          disableAutoFocusItem={true}
        >
          {TopAction && <MenuItem
            classes={{ root: classes.menuItemRoot }}
          >{TopAction}</MenuItem>
          }
          {BottomAction && <MenuItem
            classes={{ root: classes.menuItemRoot }}
          >{BottomAction}</MenuItem>}
          {ThirdAction && <MenuItem
            classes={{ root: classes.menuItemRoot }}
          >{ThirdAction}</MenuItem>}
          {FourthAction && <MenuItem
            classes={{ root: classes.menuItemRoot }}
          >{FourthAction}</MenuItem>}
        </Menu>

      </div>
    )
  }
}

export default withStyles(styles)(CallOut)
