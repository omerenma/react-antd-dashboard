import React, { Component } from 'react'
import { Button,withStyles,Typography, Grid } from '@material-ui/core';
//import { Button,withStyles, TextField, Typography, Grid, IconButton } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import { styles } from './menuActionStyles'
import EditSharpIcon from '@material-ui/icons/EditSharp';
import { Colors } from '../../styles/themes';
import Loader from 'react-loader-spinner';
import DropdownRole from './DropDownRole'
import {  SubmitButton } from '../../components/Buttons/index'
import {TextField} from '../../components/TextField/index'



class EditComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            name:"Hamisu Lawal",
            role:"Developer"

        }
    }

    handleClickOpen = () => {
        this.setState({
            open: true,
        })
    }
    handleClose = () => {
        this.setState({
            open: false,
        })
    }
    handleChange = (e) => {
        if (e.target) {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }
    handleSubmit = (e) =>{
        e.preventDefault()
    }
    render() {
        const { classes, isLoading } = this.props
        return (
            <div>
                <Button
                    variant="contained"
                    classes={{ root: classes.actionButton, label: classes.btnLabel }}
                    onClick={this.handleClickOpen}>
                    <EditSharpIcon fontSize="small" className={classes.editIcons} style={{marginBottom:12}}/>
                    <ListItemText primary="Change role" classes={{ primary: classes.ListItemText }} style={{marginLeft:12, paddingRight:80, marginBottom:10, fontFamily:'roboto'}}/>
                </Button>
                <Dialog
                    style={{left:103, bottom:150}}
                    open={this.state.open}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    onClose={this.handleClose}
                >
                    <div className={classes.root}>
                        <div className={classes.headerRoot}>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <Typography style={{
                                    color: "#2196F3",
                                    fontSize: 16,
                                    marginLeft: 15,
                                    marginTop: 8,
                                    fontFamily:'roboto'
                                    
                                }} gutterBottom>
                                   Change administrator role
                                    </Typography>
                                {/* <IconButton aria-label="close"
                                    className={classes.closeBtn}
                                    onClick={this.handleClose}>
                                    <Tooltip title="close" aria-label="close">
                                        <CloseIcon />
                                    </Tooltip>
                                </IconButton> */}
                            </Grid>
                        </div>
                        <Grid container spacing={0}>
                            <Grid item xs={12} sm={12}>
                                <form  className={classes.container} noValidate autoComplete="off">
                                    <Grid item xs={12} sm={12} md={12} lg={12} style={{marginTop:'-30px'}}>
                                        <TextField
                                            name="name"
                                            label="Name"
                                            value={this.state.name}
                                            className={classes.textField}
                                            margin="normal"
                                            variant="outlined"
                                            InputProps={{
                                                className: classes.resized
                                            }}
                                            InputLabelProps={{
                                                shrink: true,
                                                className: classes.label
                                            }}
                                        />
                                        </Grid>

                                        <Grid item xs={12} sm={12} md={12} lg={12}>
                                        <TextField
                                            name="name"
                                            label="Role"
                                            value={this.state.role}
                                            className={classes.textField}
                                            margin="normal"
                                            variant="outlined"
                                            InputProps={{
                                                className: classes.resized
                                            }}
                                            InputLabelProps={{
                                                shrink: true,
                                                className: classes.label
                                            }}
                                        />
                                        <Grid style={{marginLeft:260,bottom:45,position: 'relative'}}><DropdownRole style={{marginTop:'100px'}}/></Grid>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={12} lg={12}>

                                    <div className="cancel" style={{position:'absolute',
                                            marginLeft:170, 
                                            border:'1px solid hsl(359.6,82.1%,62.7%)',
                                            borderRadius:2,
                                            color:'hsl(359.6,82.1%,62.7%)',
                                            padding:'6px, 12px',
                                            fontSize:12,
                                            width:'auto',
                                            display:'flex',
                                            textTransform:'capitalize',
                                            background:'transparent',
                                            top:175
                                            }}>
                                            <Button
                                            // variant="outlined"
                                            className={classes.cancelButton}
                                            onClick={this.handleClose}
                                            disabled={isLoading}
                                            disableRipple={isLoading}
                                            style={{textTransform:'capitalize', fontSize:12, color:'hsl(359.6,82.1%,62.7%)'}}
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



                                            <SubmitButton
                                                type="submit"
                                                variant="contained"
                                                color="primary"
                                                fullWidth
                                                className={classes.submitAddButton}
                                                disabled={isLoading}
                                                style={{
                                                backgroundColor: isLoading ? Colors.blueSecondary : '',
                                                position:'absolute', 
                                                left:'77%', 
                                                top:'73%', 
                                                width:60,
                                                height:35, 
                                                textAlign:'center', 
                                               
                                                }}
                                                disableRipple={isLoading}
                                                onClick={this.handleSubmit}
                                            >
                                                <span className='submit-btn'  style={{marginTop:-5, marginLeft:5}}>{isLoading ? <Loader type="ThreeDots"
                                                    color="#f4f4f4"
                                                    height="15"
                                                    width="30" /> : 'Save'}</span>
                                            </SubmitButton>



                                            </Grid>
                                </form>
                            </Grid>
                        </Grid>
                    </div>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(EditComponent);