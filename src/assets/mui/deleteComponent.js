import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles";
import {Button} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import {Deletestyles} from './menuActionStyles';
import { blue } from './index';
import Loader from 'react-loader-spinner';
import {DeleteButton, CancelButton} from '../../components/Buttons/index'
import {NewDelete} from '../../Views/Settings/PayrollConfig/assets/icons/Icons'
import { Colors } from '../themes/theme';

 class DeleteComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            open : false,
        }
      }
      handleClickOpen = () => {
        this.setState({
            open : true,
        })
      }
      handleClose = () => {
        this.setState({
            open : false,
        })
      }
      handleChange = (e) => {
        if (e.target){
        this.setState({
          [e.target.id] : e.target.value
        })  
        }}

    handleDelete = () =>{}
    render() {
    const { classes, isLoading } = this.props
        return (
          <div>
          <Button
            variant="contained"
            classes={{ root: classes.button, label: classes.btnLabel }}
            onClick={this.handleClickOpen}
          >
            <DeleteSharpIcon className={classes.deleteIcons} style={{marginLeft:-10}}/>
            <ListItemText primary="Remove" classes={{ primary: classes.ListItemText }} style={{marginLeft:-30}}/>
          </Button>
          <Dialog
            open={this.state.open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            onClose={this.handleClose}
            style={{left:30, bottom:150}}
          >
              <div className={classes.root}>
            <div className={classes.formWrapper}>
              <div style={{position:'relative', top:70}}>
                <p style={{
                      marginLeft:'10px',
                     marginTop:'-10px', 
                     fontFamily:'roboto', 
                     color:'#000000', 
                     textAlign:'center', 
                     fontWeight: 500,
                     fontSize: '14px'
                     }}>Delete administrator</p>
                <p style={{
                  fontFamily:'roboto', 
                  textAlign:'center',
                  fontWeight:500,
                  fontSize:14
                  }}>Are you sure you want to delete administrator?</p>
              </div>
              {/* <div className={classes.headerWrapper} style={{marginLeft:'55px', marginTop:'-20px'}}>
                <Typography className={classes.delete} style={{fontFamily:'roboto', color:'#2196F3', textAlign:'center'}}>Delete administrator</Typography>
                
              </div>
                  <div style={{marginLeft:'-20px'}}>
               <Typography className={classes.header} style={{fontFamily:'roboto', textAlign:'center'}}>
                   Are you sure you want to delete administrator?
               </Typography>
               </div> */}
               <div style={{display:'flex', height:'120px', marginBottom:''}}>
                 <NewDelete style={{}}/>
                <div style={{position:'absolute', marginLeft:-140, bottom:-5}}>
               <div className={classes.deleteButtonBox}>
                <CancelButton
                  variant="outlined"
                  className={classes.cancelButton}
                  onClick={this.handleClose}
                  disabled={isLoading}
                  disableRipple={isLoading}
                  style={{width:57, height:35, left:'20px'}}
                >
                  <span style={{marginLeft:'-4px', fontFamily:'roboto'}}>Cancel</span>
              </CancelButton>
              </div>
              </div>
              <div style={{ position:'absolute', top:'74%'}}>
              <DeleteButton
                  variant="contained"
                  className={classes.submitButton}
                  onClick={this.handleDelete}
                  disabled={isLoading}
                  style={{ backgroundColor: isLoading ? Colors.blueSecondary : '' }}
                  style={{width:59}}
                  disableRipple={isLoading}
                >
                  <span className={classes.rippleText} style={{marginLeft:'-6px', fontFamily:'roboto'}}>{isLoading ? <Loader type="ThreeDots"
                    color="#f4f4f4"
                    height="15"
                    width="30" /> : 'Delete'}</span>
                </DeleteButton>
              </div>
              </div>
            
               </div>
                </div>
              </Dialog>
            </div>
        )
    }
}

export default withStyles(Deletestyles)(DeleteComponent);