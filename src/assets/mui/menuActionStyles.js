import { Colors } from '../themes/theme';

export const styles = theme => ({
    root: {
      width: '350px',
      height:'165px',
      overflow:'hidden'
      
    },
    formWrapper: {
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column',
      paddingLeft: 50,
      paddingRight: 50,
     
    
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      padding: "10px 20px",
      
    
      
    },
    textField: {
      [theme.breakpoints.up('sm')]: {
        width: '100%',
        paddingRight: 20,
        marginLeft: 8,
        marginRight: 8,
        textTransform: 'capitalize',
      },
      width: '100%',
      paddingRight: 20,
      marginLeft: 8,
      marginRight: 8,
      textTransform: 'capitalize',
    },
    label: {
      // fontSize:14,
      color: 'rgba(0, 0, 0, 0.8)'
    },
    resized: {
      height: 35,
      width: '100%',
      color: 'rgba(0, 0, 0, 0.8)',
      fontSize: 12,
    },
    resizComment: {
      width: '100%',
      height: 45,
      color: 'rgba(0, 0, 0, 0.8) !important',
      fontSize: 10,
    },
    FormHelperText: {
      color:Colors.blueSecondary,
      marginTop: '-0.5em',
      float: 'right',
      fontSize: 12,
      marginRight: 12,
    },
    editIcons: {
    //   marginLeft: 5
    },
    closeBtn: {
      [theme.breakpoints.up('sm')]: {
        position: 'absolute',
        top: 0,
        right: 6,
        color: '#EB5757',
        cursor: 'pointer',
        fontSize:12
      },
      position: 'absolute',
      top: 0,
      right: 6,
      color: '#fff',
      cursor: 'pointer'
    },
  
    closeButton: {
      [theme.breakpoints.up('sm')]: {
        position: 'absolute',
        top: 0,
        right: 6,
        color: 'red',
        cursor: 'pointer'
      },
      position: 'absolute',
      top: 0,
      right: 6,
      color: 'red',
      cursor: 'pointer'
    },
  
    addButton: {
      // position: "relative",
      top:10,
      // left: 585,
      float:'right',
      marginRight:10,
      textTransform: "capitalize",
      // backgroundColor: Colors.primary,
      backgroundColor:'#2196f3',
      color: '#fff',
      '&:hover': {
        backgroundColor: Colors.primary,
      }
    },
    // button: {
    //   float: 'right',
    //   position: 'relative',
    //   margin: 4,
    //   backgroundColor: Colors.primary,
    //   color: 'white',
    //   textTransform: 'capitalize',
    //   '&:hover': {
    //     backgroundColor: "#fff",
    //     color: Colors.primary,
    //   },
    //   borderRadius: 5
    // },

    button: {
      width: "100%",
      display:"flex",
      marginLeft:5,
      marginRight:5,   
    textTransform: 'capitalize',
    //color: Colors.textColor,
    },
    deleteText: {
      color: "#DE0A0A",
    },

    headerRoot: {
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'row',
      // backgroundColor: Colors.primary,
      color: '#fff',
      width: 410,
      height: 45,
      marginBottom: 20
    },
    addheaderRoot: {
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'row',
      width: 410,
      height: 50,
      marginTop: 10,
      marginBottom: 10,
      color: Colors.primary,
    },
    addHeader: {
      color: Colors.primary,
      marginLeft: 12,
      marginBottom: 0,
      textTransform: 'capitalize',
      fontSize: 16
    },
    addIconButtons: {
      marginLeft: 180,
      marginBottom: 0,
      color: 'red',
    },
    IconButtons: {
      padding: 3,
      marginLeft: 230,
      marginBottom: 0,
      '&:hover': {
        color: 'white',
      },
    },
    closeIcon: {
      color: '#fff',
      fontSize: 24,
      '&:hover': {
        color: Colors.primary,
      },
    },
    fieldWrappers: {
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'row'
    },
    Fields: {
      width: 180,
    },
    Fields1: {
      width: 180,
      marginLeft: 10
    },
    fieldSizes: {
      height: 40,
    },
    emailToolTip: {
      background: Colors.primary
    },
    emailHeight: {
      marginTop: -1,
      height: 4,
      lineHeight: 2,
      position: 'absolute',
    },
    textFields: {
      width: 370,
    },
    currentDesign: {
      fontSize: 13,
      marginLeft: 5,
      color: Colors.primary
    },
    currentDesigBox: {
      width: 370,
      marginBottom: 0,
      marginTop: 0,
    },
    menuEmails: {
      // margin: 0,
      // fontSize: 11  ,
      // color: Colors.primary,
      // paddingTop: 50,
      color:Colors.blueSecondary,
      marginTop: 9,
      float: 'right',
      fontSize: 12,
    },
    buttonBox: {
      width: 410,
    },
    rippleText: {
      fontSize: 16,
      color: 'white',
      width: 100,
    },
    submitButton: {
      marginLeft: 290,
      marginBottom: 20,
      marginTop: 15,
      width: 100,
      backgroundColor: Colors.primary,
      borderRadius: 4,
      '&:hover': {
        backgroundColor: Colors.primary,
        color: 'white',
      }
    },
    submitAddButton: {
      [theme.breakpoints.up('sm')]: {
        backgroundColor: Colors.primary,
        color: 'rgba(255, 255, 255, 0.8)',
        textTransform: 'capitalize',
        marginTop: 15,
        marginBottom: 15,
        display: 'flex',
        margin: "0 auto",
        width: "160px",
        left:'25%',
        top:'-62%',
        height: 45,
        fontFamily:'Poppins',
        fontWeight:600,
        fontSize: '14px',
        lineHeight: '31px',
        '&:hover': {
          backgroundColor: Colors.primary,
          color: 'rgba(255, 255, 255)',
        }
      },
      backgroundColor: Colors.primary,
      color: 'rgba(255, 255, 255, 0.8)',
      textTransform: 'capitalize',
      marginTop: 15,
      marginBottom: 15,
      padding: 5,
      display: 'flex',
      width: '100%',
      height: 45,
      '&:hover': {
        backgroundColor: Colors.primary,
        color: 'rgba(255, 255, 255)',
      }
    },
  
    actionButton: {
      boxShadow: 'none',
      width: 120,
      height: 50,
      textTransform: 'capitalize',
      color: Colors.primary,
      backgroundColor: "#fff",
      '&:hover': {
        backgroundColor: "rgba(205,205,205,.4)",
      },
      '&:focus': {
        backgroundColor: "rgba(205,205,205,.4)",
      }
    },
    btnLabel: {
      width: "100%",
    },
    ListItemText: {
      color:Colors.blueSecondary,
    },
    editHeader: {
      color: Colors.primary,
      marginRight: 150,
      textTransform: 'capitalize',
      fontSize: 14
    },
    FormHelper: {
      color: 'red'
    }
  });
  
  export const Deletestyles = theme => ({
    root: {
      width: 380,
      height:'125px'
    },
    formWrapper: {
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column',
    },
    headerWrapper: {
      display: 'flex',
      flexDirection: 'row',
      width: 380,
      height: 40,
      // backgroundColor:Colors.primary
    },
    rippleText: {
      fontSize: 16,
      color: 'white',
      width: 100,
    },
    delete: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 500,
      color: 'rgba(79, 79, 79, 0.88)',
      fontSize: 18,
      marginLeft: 85,
      marginTop: 8,
      textTransform: 'capitalize',
    },
    closeIcon: {
      [theme.breakpoints.up('sm')]: {
        position: 'absolute',
        top: 8,
        right: 15,
        color: 'red',
        cursor: 'pointer'
      },
      position: 'absolute',
      top: 0,
      right: 6,
      color: 'red',
      cursor: 'pointer'
    },
    // button: {
    //   boxShadow: 'none',
    //   width: 120,
    //   height: 50,
    //   textTransform: 'capitalize',
    //   backgroundColor: "#fff",
    //   '&:hover': {
    //     backgroundColor: "#d3d3d3",
    //   },
    //   '&:focus': {
    //     backgroundColor: "#d3d3d3",
    //   }
    // },
    btnLabel: {
      width: "100%",
    },
    deleteIcons: {
    marginRight:10,
    color: "#de0a0a",
    },
    ListItemText: {
      color: "#de0a0a",
    },
    header: {
      marginTop: 15,
      marginBottom: 15,
      marginLeft: 15,
      fontSize: 16,
      color:'#000000'
    },
    deleteButtonBox: {
      marginTop: 15,
      width: 360,
    },
    cancelButton: {
      marginLeft: '20%',
      marginBottom: 15,
      width: 100,
      borderRadius: 4,
      color: '#1565C0',
      background: '#FFFFFF',      
      border: '1px solid #1565C0',
      boxSizing: 'border-box',
      borderRadius: '5px',
      textTransform: 'capitalize',
      '&:hover': {
        backgroundColor: Colors.greyLight,
        color: '#000',
      }
    },
    submitButton: {
      //marginRight: '20%',
      left:20,
      marginBottom: 15,
      width: 100,
      borderRadius: 4,
      backgroundColor: Colors.primary,
      color: '#FFFFFF',
      fontFamily:'Poppins',
      textTransform: 'capitalize',
      '&:hover': {
        backgroundColor: Colors.primary,
        color: '#fff',
      }
    },
    divider: {
      padding: 1,
      backgroundColor: Colors.greyLight,
      width: "100%"
    }
  });