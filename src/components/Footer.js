import {Grid, Typography} from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () =>{
    return(
        <>
<Grid md={12} 
    container
  direction="row"
  justifyContent="center"
  alignItems="center"
  sx={{
    height:"20vh", 
      backgroundColor: "#ab6f45"

}}>
    <Grid item md={12} xs={12}>        
        <Typography align="center" sx={{color:'white'}}><WhatsAppIcon sx={{color:'white'}} /> +549351278965</Typography>
        <Typography align="center" sx={{color:'white'}}><InstagramIcon sx={{color:'white'}} /></Typography>
        <Typography align="center" sx={{color:'white'}}>Salta 258 | Cordoba</Typography>
        
    </Grid>
    
               
            
            
        </Grid>
        </>
    )
}
export default Footer;