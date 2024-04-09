import React from 'react';
import ParamTableDragDrop from "views/common-section/ParamTableDragDrop";
import { Drawer,Box,Typography,Button } from '@mui/material';
import Tab1 from './Tab1';

const tableHeadings = [
  {
    id: 1,
    tabHeading: ''
  },

  {
    id: 2,
    tabHeading: 'Concession category'
  },
  {
    id: 3,
    tabHeading: 'Approval based'
  },
  {
    id: 4,
    tabHeading: 'Approval Id'
  },
  {
    id: 5,
    tabHeading: 'Applicable from'
  },
  {
    id: 6,
    tabHeading: 'Valid up to'
  }
];

const data = [
  {
    id: '1',
    concessionCategory: 'Vaccination Discount',
    approvalBased: 'Yes',
    approvalId: 'umangkumar853@gmail',
    applicableFrom: '2025-2026',
    ValidUpTo: '2026-2027'
  },
  {
    id: '2',
    concessionCategory: 'Scholarship',
    approvalBased: 'Yes',
    approvalId: 'umangkumar853@gmail',
    applicableFrom: '2025',
    ValidUpTo: '2026-2027'
  },
  {
    id: '3',
    concessionCategory: 'Free Transport',
    approvalBased: 'No',
    approvalId: 'umangkumar853@gmail',
    applicableFrom: '2025',
    ValidUpTo: '2026-2027'
  },
  {
    id: '4',
    concessionCategory: 'Management',
    approvalBased: 'No',
    approvalId: 'umangkumar853@gmail',
    applicableFrom: '2025',
    ValidUpTo: '2026-2027'
  },
  {
    id: '11',
    concessionCategory: 'Vaccination Discount',
    approvalBased: 'Yes',
    approvalId: 'rahulkumar853@gmail',
    applicableFrom: '2025-2026',
    ValidUpTo: '2026-2027'
  },
  {
    id: '12',
    concessionCategory: 'Scholarship',
    approvalBased: 'Yes',
    approvalId: 'riteshkumar853@gmail',
    applicableFrom: '2025',
    ValidUpTo: '2026-2027'
  },
  {
    id: '13',
    concessionCategory: 'Free Transport',
    approvalBased: 'No',
    approvalId: 'rajkumar853@gmail',
    applicableFrom: '2025',
    ValidUpTo: '2026-2027'
  },
  {
    id: '14',
    concessionCategory: 'Management',
    approvalBased: 'No',
    approvalId: 'rohitkumar853@gmail',
    applicableFrom: '2025',
    ValidUpTo: '2026-2027'
  },

  {
    id: '21',
    concessionCategory: 'Vaccination Discount',
    approvalBased: 'Yes',
    approvalId: 'ronakumar853@gmail',
    applicableFrom: '2025-2026',
    ValidUpTo: '2026-2027'
  },
  {
    id: '22',
    concessionCategory: 'Scholarship',
    approvalBased: 'Yes',
    approvalId: 'harshit853@gmail',
    applicableFrom: '2025',
    ValidUpTo: '2026-2027'
  },
  {
    id: '23',
    concessionCategory: 'Free Transport',
    approvalBased: 'No',
    approvalId: 'umangkumar853@gmail',
    applicableFrom: '2025',
    ValidUpTo: '2026-2027'
  },
  {
    id: '24',
    concessionCategory: 'Management',
    approvalBased: 'No',
    approvalId: 'umangkumar853@gmail',
    applicableFrom: '2025',
    ValidUpTo: '2026-2027'
  }
];

const Concession = ({ anchor , toggleDrawer }) => {
 

  return (
    <> 
             <ParamTableDragDrop
                tableStyle={{ paddingBottom: '4rem' }}
                dragIcon={true}
                columns={tableHeadings}
                initialData={data}
            />

            <Drawer anchor="right" open={anchor.right} onClose={toggleDrawer('right', false)}>
                    <Box sx={{ width: { xs: '100vw', sm: 650 }, padding: '1rem' }} role="presentation">
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0rem', borderBottom: '1px solid #ccc' }}>
                        <Typography variant="h4"> Fee Structure </Typography>
                        <Button sx={{ marginTop: '-6px' }} onClick={toggleDrawer('right', false)}>
                        Close
                        </Button>
                    </Box>
                    <Tab1 />
                    </Box>
            </Drawer>
    </>
  );
};

export default Concession;


