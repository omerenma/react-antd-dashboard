import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateBreadcrumb } from '../actions/breadcrumbAction'
import MUIDataTable from "mui-datatables";
import CallOut from '../components/CallOut/CallOut';
import {theme} from  '../mui/muiCustomStyleForTables';
import { MuiThemeProvider } from '@material-ui/core/styles';
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from '@material-ui/core/InputAdornment';
import { withStyles, Tooltip, Grid, Paper, TextField } from '@material-ui/core';
import { Colors } from '../styles/themes';
// import Spinner from '../../components/Spinner';
import AddComponent from './addComponent'
import EditComponent from './editComponent';
import DeleteComponent from './deleteComponent';
export const styleProps = {
    color: Colors.greenSecondary,
    height: 50,
    width: 50,
    className: 'spinner-background-opt',
}
export const styles = theme => ({
    root: {
        display: 'flex',
        marginTop: 24,
        width: '100%',
        flexDirection: 'column'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: "10px 20px"
    },
    textField: {
        [theme.breakpoints.up('sm')]: {
            width: '100%',
            paddingRight: 20,
            textTransform: 'capitalize',
        },
        width: '100%',
        paddingRight: 20,
        textTransform: 'capitalize',
    },
    resized: {
        height: 35,
        width: '100%',
        color: 'rgba(0, 0, 0, 0.8)',
    },
})
class MUIDataTableExample extends Component {
    constructor(props) {
        super(props);
        this.dispatch = props.dispatch
        this.state = {
            rowsPerPage: 10,
            page: 0,
            searchText: "",
        }
    }
    componentDidMount = () => {
        this.dispatch(updateBreadcrumb({ parent: "muiDataTablesExample" }))
    }
    changePage = (page) => {
        // const { rowsPerPage } = this.state
        // const { id, getEmployeesRequests} = this.props
        // let credentials = {
        //     id,
        //     page: page + 1,
        //     pagesize: rowsPerPage
        // }
        // // getEmployeesRequests(credentials);
        // this.setState({
        //     page: page,
        //     rowsPerPage
        // })
    }
    onChangeRowsPerPage = (numberOfRows) => {
        // const { page } = this.state
        // this.setState({ rowsPerPage: numberOfRows })
        // const { id, getEmployeesRequests} = this.props
        // let credentials = {
        //     id,
        //     pagesize: numberOfRows,
        //     page: page
        // }
        // //  getEmployeesRequests(credentials);
        // this.setState({ rowsPerPage: numberOfRows })
    }
    handleTextChange = event => {
        this.setState({ searchText: event.target.value });
    };
    handleserachIconClick = () => {
        this.setState({ showSearchInput: !this.state.showSearchInput })
    }
    handleSearch = (e) => {
        e.preventDefault()
        const { page, rowsPerPage, searchText } = this.state
        let credentials = {
            pagesize: rowsPerPage,
            page,
            search: searchText,
        }
         // call your api here and pass in the credentials
        //       e.g this.props.GetPGInformationUpdateHistory(credentials);
        this.setState({ searchText: searchText });
    }
    handleKeyPress = (event) => {
        const { page, rowsPerPage, searchText } = this.state
        let credentials = {
            pagesize: rowsPerPage,
            page,
            search: searchText,
        }
        if (event.keyCode === 13) {
        // call your api here and pass in the credentials
        //       e.g this.props.GetPGInformationUpdateHistory(credentials);
            this.setState({ searchText: searchText });
        }
    }
    render() {
        const { classes } = this.props;
        const { page, rowsPerPage } = this.state
        const columns = ["S/N","Name", "Email", "Phone", " "];
        const data = [
            [1, "Hamisu L. Ahmed", "lahamisuahmed@gmail.com", "08098334685", <CallOut TopAction={<EditComponent />} BottomAction={<DeleteComponent  />} />],
            [2, "Shamsudeen Abubakar", "shamsudeenabubakar59@gmail.com", "09098334685", <CallOut TopAction={<EditComponent />} BottomAction={<DeleteComponent  />} />],
            [3, "Shams M. Abubaka", "deensisters.dev@gmail.com", "08198334685", <CallOut TopAction={<EditComponent />} BottomAction={<DeleteComponent  />}/>],
            [4, "Umar Umar", "omar@mail.com", "07098334685",<CallOut TopAction={<EditComponent />} BottomAction={<DeleteComponent  />} />],
            [5, "Shamsu Sani", "shamsu951@rocketmail.com", "08028334685", <CallOut TopAction={<EditComponent />} BottomAction={<DeleteComponent />}
        />]
        ];
        const options = {
            // pagination: true,
             pagination: false, //enable this if you dont want pagination
            filter: false,
            search: false,
            print: false,
            download: false,
            viewColumns: false,
            fixedHeaderOptions: true,
            responsive: 'scrollFullHeight',
            rowsPerPage: rowsPerPage,
            page: page,
            serverSide: true,
            sort: false,
            elevation: 0,
            // count: this.props.paging && this.props.paging["total-record"],
            selectableRows: 'none',
            rowsPerPageOptions: [5, 10, 15, 20],
            onTableChange: (action, tableState) => {
                switch (action) {
                    case 'changeRowsPerPage':
                        this.onChangeRowsPerPage(tableState.rowsPerPage)
                        break;
                    case 'changePage':
                        this.changePage(tableState.page);
                        break;
                 default:
                }
            
            }
        };
        return (
            <Paper className={classes.root}>
                <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={12} lg={10}>
                        <form className={classes.container} noValidate autoComplete="off">
                            <Grid item xs={5}>
                                <TextField
                                    type="search"
                                    placeholder="search"
                                    classes={{ root: classes.textField }}
                                    value={this.state.searchText}
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleTextChange}
                                    inputRef={el => (this.searchField = el)}
                                    onKeyUp={this.handleKeyPress}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Tooltip title="Search" aria-label="Search">
                                                    <SearchIcon className={classes.searchBtn} onClick={this.handleSearch} />
                                                </Tooltip>
                                            </InputAdornment>
                                        ),
                                        className: classes.resized
                          }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={2}>
                            <AddComponent />
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
                <MuiThemeProvider theme={theme}>
                    <MUIDataTable
                        data={data}
                        columns={columns}
                        options={options}
                    />
                 </MuiThemeProvider>
            </Paper>
        )
    }
}
export default connect()(withStyles(styles)(MUIDataTableExample))