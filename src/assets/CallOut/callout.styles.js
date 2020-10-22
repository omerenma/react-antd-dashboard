// /* eslint-disable comma-dangle */
// /* eslint-disable import/prefer-default-export */
import {lighten } from 'polished'
import { Colors, Fonts } from '../themes/theme'

export const styles = (theme) => ({
  callOutButton: {
    "&:hover": {
      backgroundColor: lighten(0.09, "#ddd"),
    },
  },
  callout: {
    position: "relative,",
  },
  "&:hover": {
    backgroundColor:Colors.blue,
    color: Colors.light
},
autoCompletePaper:{
  borderRadius:0,
  boxShadow:"none",
  border:"0.1px solid #2196F3",
marginTop:-1,
fontSize: Fonts.font,
color: Colors.textColor,
fontFamily: Fonts.primary
},
autoCompleteInput:{
padding:"0 4px !important"
},
resizedAutoComplete:{
  marginTop:5,
  paddingTop:-41,
  height: 30,
  width: '100%',
  color:Colors.textColor,
  fontSize: Fonts.font,
},
listbox:{
  overflowY: "auto",
},
popupIcon:{
  fontSize:28,
},
popupIndicator:{
backgroundColor:"#FCFDFE",
marginRight:-6,
marginTop:-2,
padding:2,
},
endAdornment:{
top:"11%",
},
focused: {},
  outlinedInput: {
      background:"#FCFDFE",
      height: 30,
      width: '100%',
      color:Colors.textColor,
      fontSize: Fonts.font,
      borderColor: '#E8EBEE',
      borderRadius: 2,
        "&:hover $notchedOutline": {
          borderColor: '#E8EBEE'
      },
    '&$focused $notchedOutline': {
      borderColor: '#2196F3'
    },
  },
  notchedOutline: {},
  listItemIcon:{
    color: Colors.menuListColor,
    minWidth:25,
    // marginTop:4
  },
  actionButton: {
    width: "100%",
    display:"flex",
      marginLeft:5,
      marginRight:5,
  textTransform: 'capitalize',
  color: Colors.textColor,
  }, 
  menuItemRoot:{
    marginLeft:10,
    marginRight:10,
    FontFamily:Fonts.primary,
    FontSize:Fonts.font,
    padding:4,
    backgroundColor: Colors.light,
    '&:hover': {
      backgroundColor: Colors.light,
    },
    '&:focus': {
      backgroundColor: Colors.light,
    }
  },
  menu: {
    display: "flex",
  },
  paper:{
    width:"auto",
    height:"auto",
    marginLeft:-12,
    borderRadius: 0,
    marginRight:10,
    marginTop:7,
    backgroundColor: Colors.light,
    '&:hover': {
      backgroundColor: Colors.light,
    },
    '&:focus': {
      backgroundColor: Colors.light,
    }
  },
    submitButton: {
      marginLeft: 290,
      marginBottom: 20,
      marginTop: 10,
      width: 100,
      backgroundColor: Colors.blueSecondary,
      borderRadius: 4,
      '&:hover': {
        backgroundColor:Colors.blue,
        color: 'white',
      }
    },
    submitAddButton: {
      [theme.breakpoints.up('sm')]: {
        marginTop: 10,
        marginBottom: 15,
      },
      marginTop: 15,
      marginBottom: 15,
    },
    editHeader: {
      color: Colors.blueSecondary,
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
      width: 300,
    },
    formWrapper: {
      display: 'flex',
      flexDirection: 'column',
    },
    delete: {
      color: '#fff',
      fontSize: 18,
      marginLeft: 15,
      marginTop: 8,
      textTransform: 'capitalize',
    },
    listItemIcon:{
      color: "#DE0A0A",
      minWidth:25,
      // marginTop:4
    },
    button: {
      width: "100%",
      display:"flex",
      marginLeft:5,
      marginRight:5,   
    textTransform: 'capitalize',
    color: Colors.textColor,
    },
    deleteText: {
      color: "#DE0A0A",
    },
    header: {
    display:"flex",
    justifyContent:"center",
    }
  });