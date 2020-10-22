import { createMuiTheme, Hidden } from '@material-ui/core/styles';
import {blue, grey} from './index'

export const theme = createMuiTheme({
  typography: {
    useNextVariants: true
},
    overrides: {
      paper: {
        boxShadow: "none",
        border: "100px solid red",
      },
      MuiTableCell: {
        root: {
          fontSize:13,
          paddingTop: 4,
          paddingBottom: 4,
          paddingLeft:15,
          paddingRight:4,
          
          "&:first-child": {
            paddingRight: 0,
            paddingLeft:13,
            width:"4%",
            
          },
          "&:last-child": {
            paddingRight: 0,
            paddingLeft:0,
            width:"2%",
            
          },
          
        }

      },
    
      MUIDataTableToolbar: {
        root: {
          marginRight: 10,
        },
        titleText: {
          color: blue[800],
        },
        icon :{
          // padding:10,
          // marginRight:10,
          color:blue[900],
          '&:hover': {
            color: blue[800],
          }
        },
        iconActive: {
          backgroundColor: blue[800],
          color:"#fff",
        },
      },
       MuiInput: {
          root: {
            color:"rgba(0,0,0,.7)",
          },
          
        },
        MUIDataTableHeadCell:{
          root:{
            color: 'rgba(155, 155, 155, 0.9)',
            fontWeight:600,
            lineHeight:5
          }
        },
        MUIDataTableBodyCell:{
          root:{
            fontFamily:'Roboto',
            color: 'rgba(155, 155, 155, 0.9)'
            
          }
        },
        
      
    }

  });
