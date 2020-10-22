import React,{ Component } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { API } from '../../constants/payrollActionConstants/payrollconfig/costants'
import { fetchAndHandleTokenRefresh } from '../../API/common'
import GetName from './getName'


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
        name:""
       
      }
  }

   handleClick = (e) => {
      this.setState({anchorEl:e.currentTarget})
       };

    // handleClick = (e) => {
    //   this.setState({name:e.currentTarget.value})
    // }
   

  
   handleClose = () => {
     this.setState({anchorEl:null})
    };

    // Make a get call when the component mounts to fetch admin names
    componentDidMount(){
      const users = () => {
        const accessToken= 'DD5AA09DE4CA1D1461BF5FE5FA500A7C63E297AE1C391DD0683248F75F53EDE647450C6E64FEC52EF5C8D4007C9805C1C959E4D395A0781536983922277F36C921596650E2286F2EEF625D60B2F2453FAACDE6AC021DD73304887A85E9B3A848D4497594296242E5BB25916D3F0CFA5E1522FD45D29D06E7ED5EC64CE372802AE521F5DC7398FAE385A3D7689DA98BE5CEAB91982F71C50F58B8E7F575B6B6EAE6F5F6EFE5499781A7EC57B3F346EBBD5DD813F6D0D632A041D79EC8EB1A8739F91BE0B1D37FC336C5537FF56C64966DAB8F06EE449D5AF6E7213C582AB5499A406CA3434459F52A9E794DE4292E0F69D5A6A4B73D8B43DDC9F62B2F6F0895672EA11E0B6130AEE31F1703B073A22A5CFB3B9306AF188CC5ADB435838475E5616694A4437FCE0160B68AEB2FCBD4FF48D2DB087E492DE9BB3E2E5A2483A6E8C808B6BF56C6D6D96A0EF0AF8700534B07E6972CA3F71B8BABA8FD41B14F3DFF911BF085A83A181BB6CF66E8B4CC8C79C191F1BD261D34CF1D0EC6C88C15F8C7117E99E9B48098A8315A76BD81EA4C37D58DAF202D180339AAC69405E6C04F88B02430090E44EC06D9F21B3473C11FB710CE50510FA1288B9FE0AF72786E116434959A1E3CFB6A239A027C3391C2D3937D24E5BBFC2038C1F2740EED643F1FC92AA2AEBC397F16C4523B4DFBCAC051F29589EB3EB59FF104F44ACB5744626AB143977822728353FC85AC1003F3BF44C51971038BF09899FC4C4C2B308A1BA2D494E4B14799CF04774E9D0228D54F593AC019821A3A1BE3A9EE173E5E270CAFCD7645642D89C17B169A186045763D261E1BDA6291235FE2A3C3E3679FC60FD9ADD3E47E9E523B5D1FB83DB57F74B4787A717D9E9F76229D3D4C54BCF56270338FADB31C9608DC396A0E9C8E4854BC0BA6C890D4AB6D086034CB224C881592FE3F39AE1CBA7B0E21D91B626A0FDC8CA644DDF38CCCE82BFA92CB6C43B0FEC1EFDBF7124D3A5F34A11A0645C1EDF4FE7E2BC7AEC43BC6CA1F3E35D719441781B61FC81247AAA294B786339B9FE9C483C6B017265072D44714B1'
        const headers={ Authorization: `Bearer ${accessToken}`}
        const method = "GET";
        const path = API.GET_ALLOWANCE_URL;
        return fetchAndHandleTokenRefresh(path, method, null, headers)
      }    
    }
   //map through the items and display them on the menu items

  render(){
    const open = Boolean(this.state.anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return(
      <div>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
        <ArrowDropDownIcon style={{marginTop:'6px'}} />
      </Button>
      <Menu
      style={{marginLeft:100, marginTop:20}}
        id={id}
        anchorEl={this.state.anchorEl}
        keepMounted
        open={open}
        onClose={this.handleClose}
       
      >
        <MenuItem onClick={this.handleClose}><GetName/></MenuItem>
      </Menu>
      </div>
    )
  }

}

export default DropList;