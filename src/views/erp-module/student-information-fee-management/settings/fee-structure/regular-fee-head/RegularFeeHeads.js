// Page owner : Abhishek negi
// description : Regular fee head

import React,{useState} from 'react';
import ParamTableDragDrop from 'components/table-data-grid/TableDragDrop';
import { Drawer,Box,Typography,Button ,  Grid , TextField } from '@mui/material';
import SelectList from 'components/ui/custom-input/SelectList';
import  ParamStepper from 'components/tabs/Stepper';
import FeeHeadGlobally from 'views/erp-module/student-information-fee-management/settings/fee-structure/regular-fee-head/FeeHeadGlobally';
import FeeHeadStudentWise from 'views/erp-module/student-information-fee-management/settings/fee-structure/regular-fee-head/FeeHeadStudentWise';

// ===============   Add fee head Drawer start
const FeeHeadDrawer = () => {
  // ========= state for Attach Slab ============
  const [feeHead, setFeeHead] = useState('');
  const [periodicity, setperiodicity] = useState('');
  const [feeType, setFeeType] = useState('');
  const [toBeChargeFrom, setToBeChargeFrom] = useState('');




  const PeriodicityOptions = [
    { value: 'Monthly', label: 'Monthly' },
    { value: 'Quarterly ', label: 'Quarterly ' },
    { value: 'Half Yearly', label: 'Half Yearly' },
    { value: 'Annually', label: 'Annually' },

  ];

  const FeeTypeOptions = [
    { value: 'Supplementary', label: 'Supplementary' },
    { value: 'One time ', label: 'One time ' },
    { value: 'Half Yearly', label: 'Optional Fee Head' },

  ];

  const ToBeChargeFromOptions = [
    { value: 'Old students', label: 'Old students' },
    { value: 'New student', label: 'New student' },
    { value: 'Old student and New student', label: 'Old student and New student' },

  ];


  const FeeHead = (event) => {
    setFeeHead(event.target.value);
  };


  const Periodicity = (event) => {
    setperiodicity(event.target.value);
  };

  const FeeType= (event) => {
    setFeeType(event.target.value);
  };

  const ToBeChargeFrom= (event) => {
    setToBeChargeFrom(event.target.value);
  };
  
  return (
    <>
    <Grid  sx={{padding:'16px' , border:'1px solid #ccc' , borderRadius:'5px' , marginTop:'1rem'}}>

      <Grid item xs={12} sx={{paddingBottom:'16px'}} >
             <TextField id="fee-head" value={feeHead} label="Fee Head" variant="outlined" onChange={FeeHead} fullWidth />
        </Grid>


        <Grid item xs={12} sx={{paddingBottom:'16px'}} >
            <SelectList 
                label="Periodicity"
                options={ PeriodicityOptions}
                value={periodicity}
                onChange={Periodicity}
            />
        </Grid>

        <Grid item xs={12} sx={{paddingBottom:'16px'}} >
            <SelectList 
                label="Fee Type"
                options={FeeTypeOptions}
                value={feeType}
                onChange={FeeType}
            />
        </Grid>

        <Grid item xs={12} sx={{paddingBottom:'16px'}} >
            <SelectList 
                label="To be charged from"
                options={ToBeChargeFromOptions}
                value={toBeChargeFrom}
                onChange={ToBeChargeFrom}
            />
        </Grid>

    </Grid>
    </>
  )
}
// ===============   Add fee head Drawer end

// ===============    fee head config start
const tabs = [
  {
      id: 1,
      name: 'Configure Globally',
      value: '1',
      component: FeeHeadGlobally ,
    },


  {
    id: 2,
    name: 'Configure Student Wise',
    value: '2',
    component: FeeHeadStudentWise ,
  },


];

const FeeHeadConfigTab = () => {
return (
  <>
        <ParamStepper 
            tabPage={tabs}  //for tab label
            customtabWrapper={{marginTop:'0px'}} // outer box of tabs
            customStyleTabs={{borderBottom:'1px solid #ccc', marginTop:'20px' , }} // MuiTabs-root styles
            customtabSytle={{margin:'0 5px 0 20px' , padding:'0px' , minWidth:'0'}} // tab btn styles
            customtabPanelStyle={{paddingRight:'0' , marginTop:'0px' , padding:'0px',height:'auto'}}
            showBottomNav={false}
         />  
   </>
)
}
// ===============    fee head config end

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


const RegularFeeHeads = ({ anchor, toggleDrawer }) => {

  return (
    <>
      <ParamTableDragDrop tableStyle={{ paddingBottom: '4rem' }} dragIcon={true} columns={tableHeadings} initialData={data} >
         <FeeHeadConfigTab />
      </ParamTableDragDrop>
      <Drawer anchor="right" open={anchor.right} onClose={toggleDrawer('right', false)}>
        <Box sx={{ width: { xs: '100vw', sm: 650 }, padding: '1rem' }} role="presentation">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0rem', borderBottom: '1px solid #ccc' }}>
            <Typography variant="h4"> Fee Structure </Typography>
            <Button sx={{ marginTop: '-6px' }} onClick={toggleDrawer('right', false)}>
              Close
            </Button>
          </Box>
            <FeeHeadDrawer />
        </Box>
      </Drawer>
    </>
  );
};

export default RegularFeeHeads;
