import React from 'react';
import { Typography, Chip, List, ListItem, ListItemText, Divider , Grid , Paper , Box} from '@mui/material';
import ParamWidgetHeader from 'components/dashboard/WidgetHeader';

const StockList = () => {
    // Dummy data for dynamic rendering
    const stocks = [
      { title: 'Bottle Trap', department: ' Utility', status: '4 Remaining' },
      { title: 'Golden Paper', department: ' Stationary', status: '6 Remaining' },
      { title: 'Hard Broom', department: ' Utility', status: '1 Remaining' },
      { title: 'Scissor Medium', department: ' Stationary', status: '2 Remaining' },
      { title: 'Poem Books 1st Class', department: ' Stationary', status: '3 Remaining' },
    ];
  
    return (
      <List>
        {stocks.map((stock, index) => (
          <React.Fragment key={index}>
            <ListItem style={{ padding: '13px 8px', borderRadius: '4px' }}>
              <ListItemText sx={{display:"flex", justifyContent:"space-between"}}
                primary={
                  <>
                    <Typography variant="h4" style={{ marginBottom: '4px' }}>{stock.title}</Typography>
                    <Typography variant="body1">department: {stock.department}</Typography>
                  </>
                }
                secondary={
                  <Chip style={{ backgroundColor: '#f2506270', marginRight: '8px' }} size="small" label={stock.status} />
                }
              />
            </ListItem>
            {index !== stocks.length - 1 && <Divider variant="middle" />}
          </React.Fragment>
        ))}
      </List>
    );
  };

const LowStockItems = () => {
  return (
    <>
      <Paper variant="elevation" elevation="3">
        <ParamWidgetHeader title='Low Stock Items'/>

        {/* list  */}
        <Grid sx={{ display: 'flex'}}>
          <Box className='scrollbar-2' sx={{overflow: 'scroll', width: '100%',height:"425px", typography: 'body1', padding: '10px' }}>
            <StockList />
          </Box>
        </Grid>
      </Paper>
    </>
  )
}

export default LowStockItems