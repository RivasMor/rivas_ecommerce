import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CartWidget from './CartWidget';
import { MenuItem } from '@mui/material';
import {Link} from  'react-router-dom';


const NavBar = () =>{
    return( 
    <Box sx={{ flexGrow: 1,}}>
      <AppBar position="static">
        <Toolbar sx={{ bgcolor: "#ab6f45" }} >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
          <MenuItem ><Link to = "/" style = {{textDecoration:'none', color:'white'}}>
          <Typography  variant="h5" component="div" sx={{ flexGrow: 3 }}>
            STORE
           
          </Typography>
          </Link>
          </MenuItem>
        <MenuItem>
                  <Typography textAlign="center"><Link to="/category/2"  style = {{textDecoration:'none', color:'white'}}> Abrigos </Link></Typography>
                </MenuItem>
                <MenuItem >
                  <Typography textAlign="center"><Link to="/category/1"  style = {{textDecoration:'none', color:'white'}}> Remeras  </Link></Typography>
                </MenuItem>
                <MenuItem>
                <Button color="inherit" edge="end">Login</Button>
          <CartWidget/>
                </MenuItem>
       
         
          
        </Toolbar>
      </AppBar>
    </Box>
      );
}

export default NavBar