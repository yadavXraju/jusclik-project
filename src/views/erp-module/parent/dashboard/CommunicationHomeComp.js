import * as React from 'react';
import AlignItemsList from 'views/erp-module/parent/parent-sidebar/communication-message/Contact-list';
import ParamWidgetHeader from 'views/common-section/ParamWidgetHeader';
import { Grid ,Paper} from '@mui/material';

const CommunicationHomeComp = () => {

  
return (
  <Paper
    sx={{
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '12px',
      border: '1px solid rgba(128, 128, 128, 0.25)',
      boxShadow: '4px 4px 9px 2px #ddddddc2',
      marginBottom: '20px', // Add some bottom margin for spacing
    }}
  >
    <ParamWidgetHeader title='communication' />
    <Grid sx={{ padding: '24px', height: '470px',overflowY:"auto" }}>
      {/* Assuming AlignItemsList is a custom component */}
      <AlignItemsList communication_wrapper_style={{ paddingLeft: 0, paddingRight: 0 }} />
    </Grid>
  </Paper>
);
};

export default CommunicationHomeComp;
