import React from 'react';
import { Box, Button, Typography } from '@mui/material';

export default function Error401() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h1" style={{ color: 'white' }}>
        401
      </Typography>
      <Typography variant="h6" style={{ color: 'white' }}>
        You do not have permission to view this page!
      </Typography>
      <Button variant="contained" href='/home'>Back Home</Button>
    </Box>
  );
}