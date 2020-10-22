import { Colors, Fonts } from '../themes/theme'

export const styles = () => ({
    success: {
      backgroundColor:"#2AA983",
      color:"#fff",
      margin: 55,
      fontSize: Fonts.font
    },
    close: {
        padding:4,
      },
    error: {
      backgroundColor: "#ff0033",
      colors: Colors.light,
      fontSize: Fonts.font
    },
    info: {
      backgroundColor: Colors.blueSecondary,
      fontSize: Fonts.font
    },
    warning: {
      backgroundColor:"#FFF4CD",
      color:"#9C802F",
      fontSize: Fonts.font
    },
    icon: {
      fontSize: 20,
    },
    iconVariant: {
      opacity: 0.9,
      marginRight: 8,
    },
    message: {
      display: 'flex',
      alignItems: 'center',
    },
  });
  
