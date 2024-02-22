import React from 'react';
import {  styled } from '@mui/material/styles';
import {  List, ListItem, Box, ListItemText , Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ErpModuleList } from './ErpModuleList';




// styles
const ListItemWrapper = styled('div')(({ theme }) => ({
  cursor: 'pointer',
  padding: 16,
  '&:hover': {
    background: theme.palette.primary.light
  },
  '& .MuiListItem-root': {
    padding: 0
  }
}));

const ErpModuleLayout = () => {

    const theme = useTheme();

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 450,
        py: 0,
        borderRadius: '10px',
        display:'flex',
        flexWrap:'wrap',
        [theme.breakpoints.down('md')]: {
          maxWidth: 300
        },
        '& .MuiListItemSecondaryAction-root': {
          top: 22
        },
        '& .MuiDivider-root': {
          my: 0
        },
        '& .list-container': {
          pl: 7
        }
      }}
    >
      {ErpModuleList.map((erp, index) => (
        <React.Fragment key={index} >
          <ListItemWrapper  sx={{flex:'0 0 50%' }}>
            <ListItem alignItems="center"  sx={{ gap: '10px' , flexDirection:'column' }}>
              <Box sx={{
                // backgroundColor: alert.bgColor,
                padding: '6px',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                color:'rgb(30, 136, 229)',
                flexDirection:'column'
              }}>
                {erp.icon}
                <ListItemText primary={erp.name} />
              </Box>

       
            </ListItem>

          </ListItemWrapper>
          <Divider key={`divider-${index}`} />
        </React.Fragment>
      ))}
    </List>
  );
};

export default ErpModuleLayout;
