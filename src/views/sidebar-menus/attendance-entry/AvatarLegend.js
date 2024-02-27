import React from 'react';
import { Paper, Grid, Typography, Avatar } from '@mui/material';
import Badge from '@mui/material/Badge';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';

const StyledBadge = styled(Badge)(() => ({
  '& .MuiBadge-badge': {
    opacity: '0.7'
  }
}));

function AvatarLegend({ legendItems }) {
  return (
    <Paper sx={{ mb: 1, display: 'flex', overflowX: 'auto' }}>
      <Grid
        container
        fullwidth
        direction="row"
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        justifyContent="center" // Center the items horizontally
        alignItems="center" // Align the items vertically
      >
        {legendItems.map((item) => (
          <Grid item key={item.avatar}>
            <Paper sx={{ padding: '10px' }}>
              <Typography variant="h4" color="#364152" display="flex" alignItems="center">
                <StyledBadge color="primary" overlap="circular" badgeContent={item.badgeContent}>
                  <Avatar
                    sx={{
                      width: 30,
                      height: 30,
                      backgroundColor: item.avatarColor,
                      color: '#000000',
                      marginRight: '6px',
                      fontSize: '16px'
                    }}
                  >
                    {item.avatar}
                  </Avatar>
                </StyledBadge>
                -{item.label}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

AvatarLegend.propTypes = {
  legendItems: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      avatarColor: PropTypes.string.isRequired,
      badgeContent: PropTypes.number.isRequired
    })
  ).isRequired
};

export default AvatarLegend;
