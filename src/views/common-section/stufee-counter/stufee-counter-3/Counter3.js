import React from 'react';
import { Grid, Box, Typography, Paper } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles'; // Import useTheme to access the theme
import { Icon } from '@mui/material';
import { motion } from 'framer-motion';

const StyledCounterBox = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  justifyContent: 'space-between',
  borderRadius: theme.spacing(2),
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  cursor: 'pointer',
  transition: 'box-shadow 0.3s ease, transform 0.3s ease',
  background: theme.palette.background.paper,
//   borderLeft: `6px solid ${theme.palette.primary.main}`,
  '&:hover': {
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
    transform: 'translateY(-6px)',
  },
}));

const CounterTitle = styled(Typography)({
  fontWeight: 600,
  fontSize: '1rem',
  color: '#444',
  textTransform: 'uppercase',
});

const CounterNumber = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '2rem',
  color: theme.palette.primary.main, // Access primary color from the theme palette
}));

const Counter3 = ({ Counter3Data }) => {
  const theme = useTheme(); // Access the theme object

  return (
    <Grid item container spacing={2} sx={{ flexDirection: 'column' }} lg={4}>
      <Paper elevation={0} sx={{ border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
        {Counter3Data.map((item, index) => (
          <Grid key={index} item>
            <StyledCounterBox
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              theme={theme} // Pass the theme to styled components
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Box
                  sx={{
                    padding: '12px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: theme.palette.secondary.main, // Access secondary color from the theme palette
                  }}
                >
                  {item.icon && <Icon component={item.icon} sx={{ fontSize: '28px', color: '#fff' }} />}
                </Box>
                <Box>
                  <CounterTitle>{item.counterTitle}</CounterTitle>
                  <CounterNumber>{item.CounterNumber}</CounterNumber>
                </Box>
              </Box>
            </StyledCounterBox>
          </Grid>
        ))}
      </Paper>
    </Grid>
  );
};

export default Counter3;
