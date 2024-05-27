// Page owner : Abhishek negi
// description : Concession Config 

import React, { useState } from 'react';
import { Drawer,Box,Typography,Button , Grid, TextField,  Checkbox , FormControlLabel} from '@mui/material';
import  ParamStepper from 'components/tabs/Stepper';
import ParamTableDragDrop from "components/table-data-grid/TableDragDrop";
import ConfigureStudentWise from 'views/erp-module/student-information-fee-management/settings/fee-structure/concession/ConfigureStudentWise';
import ConfigureGlobally from 'views/erp-module/student-information-fee-management/settings/fee-structure/concession/ConfigureGlobally';

// ======== concession new head Comp start
const ConcessionNewHead = () => {
  const [concessionCategory, setConcessionCategory] = useState('');
  const [approvalId, setApprovalId] = useState('');
  const [approvalBased, setApprovalBased] = useState(true);


  const ConcessionCategory = (event) => {
    setConcessionCategory(event.target.value);
  };

  const ApprovalId = (event) => {
    setApprovalId(event.target.value);
  };



  const handleApprovalBased = (event) => {
      setApprovalBased(event.target.checked);
  };
    
//   console.log(approvalBased)

  return (
    <>
      <Grid sx={{ padding: '16px', border: '1px solid #ccc', borderRadius: '5px', marginTop: '1rem' }}>

        <Grid item xs={12} sx={{ paddingBottom: '16px' }}>
          <TextField id="fee-head" value={concessionCategory} label="Concession Category" variant="outlined" onChange={ConcessionCategory} fullWidth />
        </Grid>

        <Grid item xs={12} sx={{ padding: '3px 12px' , border:'1px solid #bfc0c2', marginBottom:'20px' ,  borderRadius:'10px'}} >
              <FormControlLabel
                  control={<Checkbox />}
                  checked={approvalBased}
                  onChange={handleApprovalBased}
                  inputProps={{ 'aria-label': 'controlled' }}
                  label="Approval Based" 
             />
        </Grid>

        <Grid item xs={12} >
          <TextField id="approvalId" sx={{ paddingBottom: '16px' }} value={approvalId} label="Approval Id" variant="outlined" onChange={ApprovalId} fullWidth />
        </Grid>
        
      </Grid>
    </>
  );
};
// ======== concession new head Comp end
const tabs = [
  {
      id: 1,
      name: 'Configure Globally',
      value: '1',
      component:ConfigureGlobally,
    },


  {
    id: 2,
    name: 'Configure Student Wise',
    value: '2',
    component:  ConfigureStudentWise,
  },


];

const ConcessionConfig = () => {
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
// ======== concession config Comp end


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
  },
  
  {
    id: 7,
    tabHeading: 'Action'
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
            >
              <ConcessionConfig />
            </ParamTableDragDrop>

            <Drawer anchor="right" open={anchor.right} onClose={toggleDrawer('right', false)}>
                    <Box sx={{ width: { xs: '100vw', sm: 650 }, padding: '1rem' }} role="presentation">
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0rem', borderBottom: '1px solid #ccc' }}>
                        <Typography variant="h4"> Fee Structure </Typography>
                        <Button sx={{ marginTop: '-6px' }} onClick={toggleDrawer('right', false)}>
                        Close
                        </Button>
                    </Box>
                     
                     <ConcessionNewHead />
                    </Box>
            </Drawer>
    </>
  );
};

export default Concession;


