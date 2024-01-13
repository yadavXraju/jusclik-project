import React, { useState } from 'react';
import { Grid, Paper, Typography, styled} from '@mui/material';
import { gridSpacing } from 'store/constant';
import { data } from 'views/sidebar-menus/assignments/AssignmentData';

const StyledCheckbox = styled('input')(({ theme, checked }) => ({
  color: checked ? theme.palette.success.main : theme.palette.primary.main,
}));

const AssignmentsHomeComp = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxClick = (id) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(id)
        ? prevSelectedItems.filter((itemId) => itemId !== id)
        : [...prevSelectedItems, id]
    );
  };

  return (
    <Grid  spacing={gridSpacing}>
        <Grid spacing={gridSpacing}>
            <Grid item component={Paper} lg={12} md={12} sm={12} xs={12} sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <Typography variant='h2' sx={{ textAlign: 'left', color: '#99a1b7', letterSpacing: '.5px' }}>HOMEWORK & ASSIGNMENTS</Typography>

              {data.map((item) => (
                <Grid container key={item.id} lg={8} sx={{ gap:'8px' }}>
                  <Grid item col={3} sx={{ display: 'flex' , gap:'3px' }}>
                    <Grid
                      sx={{
                        background: selectedItems.includes(item.id) ? theme => theme.palette.success.main : theme => theme.palette.primary.main,
                        width: '5px',
                        height: '100%',
                        borderRadius:'3px'
                      }}
                    >  </Grid>
         
                      <StyledCheckbox
                        type='checkbox'
                        checked={selectedItems.includes(item.id)}
                        onClick={() => handleCheckboxClick(item.id)}
                      />

                  </Grid>

                  <Grid item col={9}>
                    <Typography variant='body1' sx={{  }}>
                      {item.description}
                    </Typography>

                    <Typography variant='body1' sx={{ color: '#99a1b7', fontWeight: '500' , fontSize:'14px' }}>
                      {item.name}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            </Grid>
        </Grid>
    </Grid>
  );
}

export default AssignmentsHomeComp;
