import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar'
import ProTip from './ProTip.jsx';
import Copyright from './Copyright.jsx';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import profileImg from '/profile.gif'
import './App.css'

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
       
          <a href="#">
            <img src={profileImg} className="logo" alt="Ghost" />
          </a>
      

      
        <Typography variant="h3" component="h3" sx={{mb:2}}>mitwilsch</Typography>
        <p className="gme">
          💎🙌
        </p>
       
        <Copyright />
      </Box>
    </Container>
  );
}