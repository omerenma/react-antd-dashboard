import React,{ Component } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


// export default function DropList() {
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div >
//       <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
//         <ArrowDropDownIcon  />
//       </Button>
//       <Menu
//       style={{marginLeft:60, marginTop:20}}
//         id="simple-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//       >
//         <MenuItem onClick={handleClose}>Hamisu L. Ahmed</MenuItem>
//       </Menu>
//     </div>
//   );
// }
 class DropList extends Component {
  constructor(props){
    super(props);
    this.state = {
        anchorEl :null,
        setAnchorEl: null,
       
      }
  }

   handleClick = (e) => {
     this.setState({anchorEl:e.currentTarget})
    };

   handleClose = () => {this.setState({anchorEl:null})};

    // Make a get call when the component mounts to fetch admin  roles
   // componentDidMount()
   //map through the items and display them on the menu items

  render(){
    const open = Boolean(this.state.anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return(
      <div>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
        <ArrowDropDownIcon style={{marginTop:'6px'}}  />
      </Button>
      <Menu
      style={{marginLeft:60, marginTop:20}}
        id={id}
        anchorEl={this.state.anchorEl}
        keepMounted
        open={open}
        onClose={this.handleClose}
       
      >
        <MenuItem onClick={this.handleClose}>Developer</MenuItem>
      </Menu>
      </div>
    )
  }

}

export default DropList;