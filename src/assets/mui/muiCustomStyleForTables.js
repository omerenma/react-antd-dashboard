import { createMuiTheme } from "@material-ui/core/styles";
import { Colors, Fonts } from "../../assets/themes/theme";
export const theme = createMuiTheme({
  
  typography: {
    useNextVariants: true,
  },
  overrides: {
    MUIDataTable: {
      root: {
        backgroundColor: "#AAF",
      },
      paper: {
        boxShadow: "none",
      },
    },
    MuiTablePagination: {
      root: {
        fontSize: Fonts.font,
        overflow: "hidden",
      },
      input: {
        marginTop: 10,
      },
      actions: {
        marginRight: -12,
      },
     
      caption: {
        marginTop: -5,
      },
      toolbar: {
        minHeight: 10,
        height:39,
        padding: 0
      }
    },
    MuiSelect: {
      select: {
        paddingRight:15,
        marginTop: -4,
        fontSize: 9,
      },
    },
    MuiInputBase: {
      input: {
        padding: "0px 5px 5px",
        marginTop: -5,
        fontSize:9,

      }
    },
    
    MUIDataTableHeadCell: {
      root: {
        fontSize: Fonts.font,
        fontFamily:Fonts.primary,
        fontWeight: "bolder",
        color: Colors.textColor,
      },
    },
    MuiTableCell: {
      head:{
        fontSize: 12, 
        fontWeight: "bolder",
        color: "rgba(0,0,0,.6)",
        padding:7}, 
      body:{
        color: Colors.textColor,
      },
      root: {
        fontSize: Fonts.font,
        fontFamily:Fonts.primary,
        color: Colors.textColor,
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 15,
        paddingRight: 4,
        borderBottom: "1px solid #e8ebee",
        "&:first-child": {
          paddingRight: 0,
          paddingLeft: 13,
          width: "4%",
          // borderRight:'1px solid rgba(0, 0, 0, 0.12)'
        },
        "&:last-child": {
          paddingRight: 0,
          paddingLeft: 0,
          // width: "2%",
          // borderRight:'1px solid rgba(0, 0, 0, 0.12)'
 
        }
      }
    },
    MUIDataTableToolbar: {
      root: {
        marginRight: -10,
      },
      titleText: {
        fontSize: Fonts.font,
        fontFamily:Fonts.primary,
        color: Colors.blue,
      },
      icon: {
        // padding:10,
        // marginRight:10,
        color: Colors.blue,
        "&:hover": {
          color: Colors.blue,
        },
      },
      iconActive: {
        backgroundColor: Colors.blue,
        color: "#fff",
      },
    },
    MuiInputBase:{
      root:{
       fontSize:11 
      }
    },
    PageSizeSelector: { 
      inputRoot:{
        fontSize:8,
        marginTop:5
        
      },
      selectIcon:{
        top:-3
      },
      label:{
        fontSize:8,

      }
    },
    Pagination:{
      rowsLabel:{
        fontSize:8,

      }
    },
    Pager:{
      pager:{
        padding:0
      }
    }
  },
});
export const skillandTrainingTheme = createMuiTheme({
  overrides: {
    MUIDataTable: {
      root: {
        backgroundColor: "#AAF",
        padding: 0,
      },
      paper: {
        boxShadow: "none",
      },
    },
    MUIDataTableHeadCell: {
      root: {
        fontSize: Fonts.font,
        fontFamily: Fonts.primary,
        fontWeight: "bolder",
        color: Colors.textColor,
      },
    },
    MuiTableCell: {
      body: {
        color: Colors.textColor,
      },
      root: {
        fontSize: Fonts.font,
        fontFamily: Fonts.primary,
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 5,
        paddingRight: 0,
        borderBottom: "1px solid #e8ebee",
        "&:first-child": {
          width: "10%",
        },
        "&:last-child": {
          width: "5%",
        },
      },
    },
      MUIDataTableToolbar: {
        root: {
          marginRight: -10,
        },
        titleText: {
        fontSize: Fonts.font,
        fontFamily: Fonts.primary,
        color: Colors.blue,
        },
      },
  },
});
export const distributionTheme = createMuiTheme({
  overrides: {
    MUIDataTable: {
      root: {
        backgroundColor: "#AAF",
        padding: 0,
      },
      paper: {
        boxShadow: "none",
      },
    },
    MUIDataTableHeadCell: {
      root: {
        fontSize: Fonts.font,
        fontFamily: Fonts.primary,
        fontWeight: "bolder",
        color: Colors.textColor,
      },
    },
    MuiTableCell: {
      body: {
        color: Colors.textColor,
      },
      root: {
        fontSize: Fonts.font,
        fontFamily: Fonts.primary,
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 5,
        paddingRight: 0,
        borderBottom: "1px solid #e8ebee",
        "&:first-child": {
          width: "90%",
        },
        "&:last-child": {
          width: "10%",
        },
      },
    },
      MUIDataTableToolbar: {
        root: {
          marginRight: -10,
        },
        titleText: {
        fontSize: Fonts.font,
        fontFamily: Fonts.primary,
        color: Colors.blue,
        },
      },
  },
});
export const subscriptionTable = createMuiTheme({
  overrides: {
    MUIDataTable: {
      root: {
        backgroundColor: "#AAF",
        padding: 0,
      },
      paper: {
        boxShadow: "none",
      },
    },
    MUIDataTableHeadCell: {
      root: {
        fontSize: Fonts.font,
        fontFamily: Fonts.primary,
        fontWeight: "bolder",
        color: Colors.textColor,
      },
    },
    MuiTableCell: {
      body: {
        color: Colors.textColor,
      },
      root: {
        fontSize: Fonts.font,
        fontFamily: Fonts.primary,
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 7,
        paddingRight: 0,
        borderBottom: "1px solid #e8ebee",
        "&:first-child": {
          width: "30%",
        },
        "&:last-child": {
          width: "10%",
        },
      },
    },
      MUIDataTableToolbar: {
        root: {
          marginRight: -10,
        },
        titleText: {
        fontSize: Fonts.font,
        fontFamily: Fonts.primary,
        color: Colors.blue,
        },
      },
  },
});

export const turnOverTheme = createMuiTheme({
  overrides: {
    MUIDataTable: {
      root: {
        backgroundColor: "#AAF",
        padding: 0,
      },
      paper: {
        boxShadow: "none",
      },
    },
    MUIDataTableHeadCell: {
      root: {
        fontSize: Fonts.font,
        fontFamily: Fonts.primary,
        fontWeight: "bolder",
        color: Colors.textColor,
      },
    },
    MuiTableCell: {
      body: {
        color: Colors.textColor,
      },
      root: {
        fontSize: Fonts.font,
        fontFamily: Fonts.primary,
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 7,
        paddingRight: 0,
        borderBottom: "1px solid #e8ebee",
        "&:first-child": {
          width: "40%",
        },
        "&:last-child": {
          width: "30%",
        },
      },
    },
      MUIDataTableToolbar: {
        root: {
          marginRight: -10,
        },
        titleText: {
        fontSize: Fonts.font,
        fontFamily: Fonts.primary,
        color: Colors.blue,
        },
      },
  },
});

export const themeWideTable = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  overrides: {
    MUIDataTable: {
      root: {
        backgroundColor: "#AAF",
      },
      paper: {
        boxShadow: "none",
      },
    },
    MuiTablePagination: {
      root: {
        fontSize: Fonts.font,
        overflow: "hidden",
      },
      input: {
        marginTop: 10,
      },
      actions: {
        marginRight: -12,
      },
      caption: {
        marginTop: 0,
      },
      toolbar: {
        minHeight: 0,
        height: 35,
        padding: 0,
      },
    },
    MuiSelect: {
      select: {
        marginTop: -4,
        fontSize: 9,
      },
    },
    MuiInputBase: {
      input: {
        padding: "0px 5px 5px",
      },
    },
    MUIDataTableHeadCell: {
      root: {
        fontSize: Fonts.font,
        fontFamily: Fonts.primary,
        fontWeight: "bolder",
        color: Colors.textColor,
      },
    },
    MuiTableCell: {
      body: {
        color: Colors.textColor,
      },
      root: {
        fontSize: Fonts.font,
        fontFamily: Fonts.primary,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 15,
        paddingRight: 4,
        borderBottom: "1px solid #e8ebee",
        "&:first-child": {
          paddingRight: 0,
          paddingLeft: 13,
          width: "4%",
        },
        "&:last-child": {
          paddingRight: 0,
          paddingLeft: 0,
          width: "2%",
        },
      },
    },
    MUIDataTableToolbar: {
      root: {
        marginRight: -10,
      },
      titleText: {
        fontSize: Fonts.font,
        fontFamily: Fonts.primary,
        color: Colors.blue,
      },
      icon: {
        color: Colors.blue,
        "&:hover": {
          color: Colors.blue,
        },
      },
      iconActive: {
        backgroundColor: Colors.blue,
        color: "#fff",
      },
    },
    MuiInput: {
      root: {
        fontSize:11,
        color: "red",
      },
    },
  },
});

export const themeTabsTable = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  overrides: {
    MUIDataTable: {
      root: {
        backgroundColor: "#AAF",
        width: "100%",
      },
      paper: {
        boxShadow: "none",
        paddingTop: 40,
        marginBottom: 0,
      },
    },
    MuiTablePagination: {
      root: {
        fontSize: Fonts.font,
        overflow: "hidden",
      },
      input: {
        marginTop: 10,
      },
      actions: {
        marginRight: -12,
      },
      caption: {
        marginTop: 0,
      },
      toolbar: {
        minHeight: 0,
        height: 35,
        padding: 0,
      },
    },
    MuiSelect: {
      select: {
        marginTop: -4,
        fontSize: 9,
      },
    },
    MuiInputBase: {
      input: {
        padding: "0px 5px 5px",
      },
    },
    MUIDataTableHeadCell: {
      root: {
        fontSize: Fonts.font,
        fontFamily: Fonts.primary,
        fontWeight: "bolder",
        color: Colors.textColor,
      },
    },
    MuiTableCell: {
      body: {
        color: Colors.textColor,
      },
      root: {
        fontSize: Fonts.font,
        fontFamily: Fonts.primary,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 15,
        paddingRight: 4,
        borderBottom: "1px solid #e8ebee",
        "&:first-child": {
          paddingRight: 0,
          paddingLeft: 20,
          width: "4%",
        },
        "&:last-child": {
          paddingRight: 20,
          // paddingLeft: 20,
          width: "20%",
          whiteSpace: "nowrap",
        },
      },
    },
    MUIDataTableToolbar: {
      root: {
        marginRight: -10,
      },
      titleText: {
        fontSize: Fonts.font,
        fontFamily: Fonts.primary,
        color: Colors.blue,
      },
      icon: {
        color: Colors.blue,
        "&:hover": {
          color: Colors.blue,
        },
      },
      iconActive: {
        backgroundColor: Colors.blue,
        color: "#fff",
      },
    },
    MuiInput: {
      root: {
        color: "red",
      },
    },
  },
});

export const themePromotionTabsTable = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  overrides: {
    MUIDataTable: {
      root: {
        backgroundColor: "#AAF",
        width: "100%",
      },
      paper: {
        boxShadow: "none",
        paddingTop: 10,
        marginBottom: 0,
      },
    },
    MuiTablePagination: {
      root: {
        fontSize: Fonts.font,
        overflow: "hidden",
      },
      input: {
        marginTop: 10,
      },
      actions: {
        marginRight: -12,
      },
      caption: {
        marginTop: 0,
      },
      toolbar: {
        minHeight: 0,
        height: 35,
        padding: 0,
      },
    },
    MuiSelect: {
      select: {
        marginTop: -4,
        fontSize: 9,
      },
    },
    MuiInputBase: {
      input: {
        padding: "0px 5px 5px",
      },
    },
    MUIDataTableHeadCell: {
      root: {
        fontSize: Fonts.font,
        fontFamily: Fonts.primary,
        fontWeight: "bolder",
        color: Colors.textColor,
      },
    },
    MuiTableCell: {
      body: {
        color: Colors.textColor,
      },
      root: {
        fontSize: Fonts.font,
        fontFamily: Fonts.primary,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 15,
        paddingRight: 4,
        borderBottom: "1px solid #e8ebee",
        "&:first-child": {
          paddingRight: 0,
          paddingLeft: 20,
          width: "4%",
        },
        "&:last-child": {
          paddingRight: 20,
          // paddingLeft: 20,
          width: "20%",
          whiteSpace: "nowrap",
        },
      },
    },
    MUIDataTableToolbar: {
      root: {
        marginRight: -10,
      },
      titleText: {
        fontSize: Fonts.font,
        fontFamily: Fonts.primary,
        color: Colors.blue,
      },
      icon: {
        color: Colors.blue,
        "&:hover": {
          color: Colors.blue,
        },
      },
      iconActive: {
        backgroundColor: Colors.blue,
        color: "#fff",
      },
    },
    MuiInputBase:{
      root:{
       fontSize:11 
      }
    },
    PageSizeSelector: { 
      inputRoot:{
        fontSize:8,
        marginTop:5
        
      },
      selectIcon:{
        top:-3
      },
      label:{
        fontSize:8,

      }
    },
    Pagination:{
      rowsLabel:{
        fontSize:8,

      }
    },
    Pager:{
      pager:{
        padding:0
      }
    }
    // PageSizeSelector:{
    //   pageSizeSelector:{
    //     fontSize: 8

    //   }
    //   }
  },
})
export const payslipTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  overrides: {
    MUIDataTable: {
      root: {
        backgroundColor: "#AAF",
      },
      paper: {
        boxShadow: "none",
      },
    },
    MuiTablePagination: {
      root: {
        fontSize: Fonts.font,
        overflow: "hidden",
      },
      input: {
        marginTop: 10,
      },
      actions: {
        marginRight: -12,
      },
      caption: {
        marginTop: 0,
      },
      toolbar: {
        minHeight: 0,
        height: 35,
        padding: 0,
      },
    },
    MuiSelect: {
      select: {
        marginTop: -4,
        fontSize: 9,
      },
    },
    MuiInputBase: {
      input: {
        padding: "0px 5px 5px",
      },
    },
    MUIDataTableHeadCell: {
      root: {
        fontSize: Fonts.font,
        fontFamily: Fonts.primary,
        fontWeight: "bolder",
        color: Colors.textColor,
        padding: 15,
      },
    },
    MuiTableCell: {
      body: {
        color: Colors.textColor,
      },
      root: {
        fontSize: Fonts.font,
        fontFamily: Fonts.primary,
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 15,
        paddingRight: 4,
        borderBottom: "1px solid #e8ebee",
        "&:first-child": {
          paddingRight: 0,
          paddingLeft: 13,
          width: "4%",
        },
        "&:last-child": {
          paddingRight: 0,
          paddingLeft: 0,
          width: "2%",
        },
      },
    },
    MUIDataTableToolbar: {
      root: {
        marginRight: -10,
      },
      titleText: {
        fontSize: Fonts.font,
        fontFamily: Fonts.primary,
        color: Colors.blue,
      },
      icon: {
        color: Colors.blue,
        "&:hover": {
          color: Colors.blue,
        },
      },
      iconActive: {
        backgroundColor: Colors.blue,
        color: "#fff",
      },
    },
    MuiInput: {
      root: {
        color: "red",
      },
    },
  },
});
  