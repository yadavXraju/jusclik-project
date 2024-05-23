// ======= Page Owner Tarun =========
import React from 'react';
import Box from '@mui/material/Box';
import { Grid,Card } from '@mui/material';

const Mainform1 = ({grid1,grid2,grid3}) => {
  return (
    <>
      <Card>
        <Grid container spacing={3} mb={8} sx={{ display: 'flex', height: '100%' }}>
          <Grid item xs={12} sm={12} lg={3}>
            <Box sx={{ border: '1px solid #ccc', borderRadius: '10px' }}>
              <Card>
                <Box sx={{ borderBottom: '1px solid #ccc' }}>
                  {grid1}
                </Box>
                <Box sx={{ flex: '0 0 auto', display: 'flex', flexDirection: 'column', padding: '20px' }}>
                   {grid2}
                </Box>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} lg={9}>
            <Box sx={{ flex: '1', overflow: 'auto', border: '1px solid #ccc', borderRadius: '10px' }}>
              <Box>{grid3}</Box>
            </Box>
          </Grid>
        </Grid>
      </Card> 
      {/* <BottomNavbar
        tabPageLength={buttonsData.length}
        value={selectedButton}
        setValue={setSelectedButton}
        handleAddField={handleAddField}
        handleSubGroup={handleSubGroup}
        subGroups={subGroups}
        customStyle={{ width: '100%', bottom: '0', borderRadius: '1px' }}
        section={section}
      /> */}
    </>
  );
};

export default Mainform1;
