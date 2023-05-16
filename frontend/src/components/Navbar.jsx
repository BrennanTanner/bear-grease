import React, { useCallback, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import {
   AppBar,
   Box,
   Toolbar,
   IconButton,
   Typography,
   Menu,
   Container,
   Avatar,
   Button,
   Tooltip,
   MenuItem,
   InputBase,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import PetsIcon from '@mui/icons-material/Pets';
import { Cart } from '../components/index';
import { onAuthStateChanged } from 'firebase/auth';
import { authenticator } from '../services/firebase';

const Search = styled('div')(({ theme }) => ({
   position: 'relative',
   borderRadius: theme.shape.borderRadius,
   backgroundColor: alpha(theme.palette.common.white, 0.15),
   '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
   },
   marginLeft: 0,
   width: '100%',
   [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
   },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
   padding: theme.spacing(0, 2),
   height: '100%',
   position: 'absolute',
   pointerEvents: 'none',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
   color: 'inherit',
   '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
         width: '12ch',
         '&:focus': {
            width: '20ch',
         },
      },
   },
}));

const pages = ['Catalog', '🚧Blog🚧'];
const settings = ['🚧Account🚧', 'Logout'];

function ResponsiveAppBar() {
   const auth = authenticator;
   const navigate = useNavigate();

   const [anchorElNav, setAnchorElNav] = React.useState(null);
   const [anchorElUser, setAnchorElUser] = React.useState(null);
   const [isloggedIn, setIsloggedIn] = useState(false);
   const [user, setUser] = useState(false);
   const [isLoading, setIsLoading] = useState(false);

   const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
   };
   const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
   };

   const handleCloseNavMenu = () => {
      setAnchorElNav(null);
   };

   const handleCloseUserMenu = () => {
      setAnchorElUser(null);
   };

   useEffect(() => {
      onAuthStateChanged(auth, (user) => {
         if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            setUser(user);
            setIsloggedIn('true');
            // ...
         } else {
            console.log('user is signed out ');
            // User is signed out
            // ...
         }
      });
   }, [navigate]);

   const handlelogout = useCallback(async () => {
      setIsLoading(true);
      await auth.signOut();
      navigate(0);
   }, [navigate]);

   return (
      <AppBar position='fixed'>
         <Container maxWidth='xl'>
            <Toolbar disableGutters>
               <PetsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
               <Typography
                  variant='h6'
                  noWrap
                  component='a'
                  href='/'
                  sx={{
                     mr: 2,
                     display: { xs: 'none', md: 'flex' },
                     fontFamily: 'monospace',
                     fontWeight: 700,
                     letterSpacing: '.3rem',
                     color: 'inherit',
                     textDecoration: 'none',
                  }}
               >
                  BEAR GREASE
               </Typography>

               <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                  <IconButton
                     size='large'
                     aria-label='account of current user'
                     aria-controls='menu-appbar'
                     aria-haspopup='true'
                     onClick={handleOpenNavMenu}
                     color='inherit'
                  >
                     <MenuIcon />
                  </IconButton>
                  <Menu
                     id='menu-appbar'
                     anchorEl={anchorElNav}
                     anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                     }}
                     keepMounted
                     transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                     }}
                     open={Boolean(anchorElNav)}
                     onClose={handleCloseNavMenu}
                     sx={{
                        display: { xs: 'block', md: 'none' },
                     }}
                  >
                     <Search>
                        <SearchIconWrapper>
                           <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                           placeholder='Search…'
                           inputProps={{ 'aria-label': 'search' }}
                        />
                     </Search>

                     <MenuItem onClick={handleCloseNavMenu}>
                        <Button
                           onClick={() => {
                              navigate('/catalog');
                           }}
                           variant='body2'
                        >
                           Catalog
                        </Button>
                     </MenuItem>
                     <MenuItem onClick={handleCloseNavMenu}>
                        <Button
                           onClick={() => {
                              navigate('/');
                           }}
                           variant='body2'
                        >
                           🚧About Us🚧
                        </Button>
                     </MenuItem>
                  </Menu>
               </Box>
               <PetsIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
               <Typography
                  variant='h5'
                  noWrap
                  component='a'
                  href=''
                  sx={{
                     mr: 2,
                     display: { xs: 'flex', md: 'none' },
                     flexGrow: 1,
                     fontFamily: 'monospace',
                     fontWeight: 700,
                     letterSpacing: '.3rem',
                     color: 'inherit',
                     textDecoration: 'none',
                  }}
               >
                  BEAR GREASE
               </Typography>
               <Search
                  sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
               >
                  <SearchIconWrapper>
                     <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                     placeholder='Search…'
                     inputProps={{ 'aria-label': 'search' }}
                     sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
                  />
               </Search>
               <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  <MenuItem
                     onClick={() => {
                        navigate('/catalog');
                     }}
                  >
                     Catalog
                  </MenuItem>
                  <MenuItem
                     onClick={() => {
                        navigate('/');
                     }}
                  >
                     🚧About Us🚧
                  </MenuItem>
               </Box>
               <Box sx={{ flexGrow: 0 }}>
                  <Cart />
               </Box>
               <Box sx={{ flexGrow: 0 }}>
                  {!isloggedIn && (
                     <Button href='/login' variant='body2'>
                        Login
                     </Button>
                  )}
                  {!isloggedIn && (
                     <Button href='/login' variant='body2'>
                        Sign up
                     </Button>
                  )}
                  {isloggedIn && (
                     <Tooltip title='Open settings'>
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                           <Avatar alt='Remy Sharp' src={user.photoURL} />
                        </IconButton>
                     </Tooltip>
                  )}
                  <Menu
                     sx={{ mt: '45px' }}
                     id='menu-appbar'
                     anchorEl={anchorElUser}
                     anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                     }}
                     keepMounted
                     transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                     }}
                     open={Boolean(anchorElUser)}
                     onClose={handleCloseUserMenu}
                  >
                     <MenuItem onClick={handleCloseUserMenu}>
                        <Typography textAlign='center'>
                           {' '}
                           {user.displayName}
                        </Typography>
                     </MenuItem>
                     <MenuItem onClick={handleCloseUserMenu}>
                        <Typography textAlign='center'> 🚧Account🚧</Typography>
                     </MenuItem>
                     <MenuItem onClick={handleCloseUserMenu}>
                        <Button onClick={handlelogout} variant='body2'>
                           Logout
                        </Button>
                     </MenuItem>
                  </Menu>
               </Box>
            </Toolbar>
         </Container>
      </AppBar>
   );
}
export default ResponsiveAppBar;
