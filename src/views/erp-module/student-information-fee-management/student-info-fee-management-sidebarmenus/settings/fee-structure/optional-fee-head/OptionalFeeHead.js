import React from 'react';
import ParamTableDragDrop from 'component/ParamTableDragDrop';
import { Drawer,Box,Typography,Button } from '@mui/material';
import OptionalFeeHeadDrawer from './OptionalFeeHeadDrawer';
import OptionalFeeHeadConfigTab from './optional-fee-head-config/OptionalFeeHeadConfig';

const tableHeadings = [
  {
    id: 1,
    tabHeading: ''
  },
  {
    id: 2,
    tabHeading: 'Fee Head'
  },

  {
    id: 3,
    tabHeading: 'Periodicity' //'Prioridicity'
  },

  {
    id: 4,
    tabHeading: 'Fee Type'
  },

  {
    id: 5,
    tabHeading: 'To be charged from'
  },

  {
    id: 6,
    tabHeading: 'Action'
  }
];

const data = [
  {
    id: '1',
    feeHead: 'Registration Fee',
    prioridicity: 'Annual',
    feeType: 'Supplementary',
    chargeFrom: 'New students ',
  },
  {
    id: '2',
    feeHead: 'Late Fee',
    prioridicity: 'Annual',
    feeType: 'Supplementary',
    chargeFrom: 'Old and new students',
  },
  {
    id: '3',
    feeHead: 'Tuition Fee',
    prioridicity: 'Annual',
    feeType: 'One time ',
    chargeFrom: 'Old students ',
  },
  {
    id: '4',
    feeHead: 'Admission Fee',
    prioridicity: 'Annual',
    feeType: 'One time ',
    chargeFrom: 'New students ',
  },
  {
    id: '5',
    feeHead: 'Caution Money',
    prioridicity: 'Annual',
    feeType: 'One time ',
    chargeFrom: 'Old and new students',
  },
  {
    id: '6',
    feeHead: 'Registration Fee',
    prioridicity: 'Annual',
    feeType: 'Supplementary',
    chargeFrom: 'New students ',
  },
  {
    id: '7',
    feeHead: 'Late Fee',
    prioridicity: 'Annual',
    feeType: 'Supplementary',
    chargeFrom: 'Old and new students',
  },

  {
    id: '8',
    feeHead: 'Registration Fee',
    prioridicity: 'Annual',
    feeType: 'Supplementary',
    chargeFrom: 'New students ',
  },
  {
    id: '9',
    feeHead: 'Late Fee',
    prioridicity: 'Annual',
    feeType: 'Supplementary',
    chargeFrom: 'Old and new students',
  },

  {
    id: '10',
    feeHead: 'Tuition Fee',
    prioridicity: 'Annual',
    feeType: 'One time ',
    chargeFrom: 'Old students ',
  },
  {
    id: '11',
    feeHead: 'Admission Fee',
    prioridicity: 'Annual',
    feeType: 'One time ',
    chargeFrom: 'New students ',
  },
  {
    id: '12',
    feeHead: 'Caution Money',
    prioridicity: 'Annual',
    feeType: 'One time ',
    chargeFrom: 'Old and new students',
  },
  {
    id: '13',
    feeHead: 'Registration Fee',
    prioridicity: 'Annual',
    feeType: 'Supplementary',
    chargeFrom: 'New students ',
  },
  {
    id: '14',
    feeHead: 'Late Fee',
    prioridicity: 'Annual',
    feeType: 'Supplementary',
    chargeFrom: 'Old and new students',
  },
  {
    id: '15',
    feeHead: 'Registration Fee',
    prioridicity: 'Annual',
    feeType: 'Supplementary',
    chargeFrom: 'New students ',
  },
  {
    id: '16',
    feeHead: 'Late Fee',
    prioridicity: 'Annual',
    feeType: 'Supplementary',
    chargeFrom: 'Old and new students',
  },
  {
    id: '17',
    feeHead: 'Tuition Fee',
    prioridicity: 'Annual',
    feeType: 'One time ',
    chargeFrom: 'Old students ',
  },
  {
    id: '18',
    feeHead: 'Admission Fee',
    prioridicity: 'Annual',
    feeType: 'One time ',
    chargeFrom: 'New students ',
  },
  {
    id: '19',
    feeHead: 'Caution Money',
    prioridicity: 'Annual',
    feeType: 'One time ',
    chargeFrom: 'Old and new students',
  },
  {
    id: '20',
    feeHead: 'Registration Fee',
    prioridicity: 'Annual',
    feeType: 'Supplementary',
    chargeFrom: 'New students ',
  },
  {
    id: '21',
    feeHead: 'Late Fee',
    prioridicity: 'Annual',
    feeType: 'Supplementary',
    chargeFrom: 'Old and new students',
  }
];


const OptionalFeeHead = ({ anchor, toggleDrawer }) => {

  return (
    <>
      <ParamTableDragDrop tableStyle={{ paddingBottom: '4rem' }} dragIcon={true} columns={tableHeadings} initialData={data} >
         <OptionalFeeHeadConfigTab />
      </ParamTableDragDrop>
      <Drawer anchor="right" open={anchor.right} onClose={toggleDrawer('right', false)}>
        <Box sx={{ width: { xs: '100vw', sm: 650 }, padding: '1rem' }} role="presentation">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0rem', borderBottom: '1px solid #ccc' }}>
            <Typography variant="h4"> Fee Structure </Typography>
            <Button sx={{ marginTop: '-6px' }} onClick={toggleDrawer('right', false)}>
              Close
            </Button>
          </Box>
            <OptionalFeeHeadDrawer />
        </Box>
      </Drawer>
    </>
  );
};

export default OptionalFeeHead;
