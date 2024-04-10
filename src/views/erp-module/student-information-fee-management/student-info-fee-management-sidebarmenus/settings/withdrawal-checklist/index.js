import React from 'react';
import ParamTable from 'views/erp-common-component/ParamTable';
// import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Typography, Box, } from '@mui/material';
// import Drawer from '@mui/material/Drawer';
import DrawerAddNew from './DrawerAddNew';
import DrawerNewTask from './DrawerNewTask';
import withParamDrawer from 'views/common-section/withParamDrawer';



const tableHeadings = [
  {
    id: 2,
    tabHeading: "Task Name"
  },
  {
    id: 3,
    tabHeading: "Assigned To"
  },
  {
    id: 4,
    tabHeading: "Due Date"
  },
  {
    id: 5,
    tabHeading: "Status"
  },
  {
    id: 6,
    tabHeading: "Action"
  }
]

const data = [
  {
    "Task Name": "Withdrawal Approval Principal",
    "Assigned To": "Not Assigned",
    "Due Date": "08-03-2024",
    "Status" : "In Progress"
  },
  {
    "Task Name": "Withdrawal Approval Principal",
    "Assigned To": "Not Assigned",
    "Due Date": "08-03-2024",
    "Status" : "In Progress"
  },
  {
    "Task Name": "Withdrawal Approval Principal",
    "Assigned To": "Not Assigned",
    "Due Date": "08-03-2024",
    "Status" : "In Progress"
  },
  {
    "Task Name": "Withdrawal Approval Principal",
    "Assigned To": "Not Assigned",
    "Due Date": "08-03-2024",
    "Status" : "In Progress"
  },
  {
    "Task Name": "Withdrawal Approval Principal",
    "Assigned To": "Not Assigned",
    "Due Date": "08-03-2024",
    "Status" : "In Progress"
  },
  {
    "Task Name": "Withdrawal Approval Principal",
    "Assigned To": "Not Assigned",
    "Due Date": "08-03-2024",
    "Status" : "In Progress"
  },
  {
    "Task Name": "Withdrawal Approval Principal",
    "Assigned To": "Not Assigned",
    "Due Date": "08-03-2024",
    "Status" : "In Progress"
  },
  {
    "Task Name": "Withdrawal Approval Principal",
    "Assigned To": "Not Assigned",
    "Due Date": "08-03-2024",
    "Status" : "In Progress"
  },
  {
    "Task Name": "Withdrawal Approval Principal",
    "Assigned To": "Not Assigned",
    "Due Date": "08-03-2024",
    "Status" : "In Progress"
  },
  {
    "Task Name": "Withdrawal Approval Principal",
    "Assigned To": "Not Assigned",
    "Due Date": "08-03-2024",
    "Status" : "In Progress"
  },
  {
    "Task Name": "Withdrawal Approval Principal",
    "Assigned To": "Not Assigned",
    "Due Date": "08-03-2024",
    "Status" : "In Progress"
  },
  {
    "Task Name": "Withdrawal Approval Principal",
    "Assigned To": "Not Assigned",
    "Due Date": "08-03-2024",
    "Status" : "In Progress"
  },
  {
    "Task Name": "Withdrawal Approval Principal",
    "Assigned To": "Not Assigned",
    "Due Date": "08-03-2024",
    "Status" : "In Progress"
  },
  
];


const WithdrawalChecklist = () => {
//   const handleChange=()=>{

//   }
// Wrap your component with the withParamDrawer HOC
const AddNewChecklist = withParamDrawer(DrawerAddNew);

const AddNewTask = withParamDrawer(DrawerNewTask);
  return (
    <>
    <Box
        sx={{
          paddingRight: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(224, 224, 224, 1)',
          background: '#fff',
          padding: '16px 24px',
          width:'85%'
        }}
      >
        <Box>
        <Typography variant="h3">Withdrawal Checklist</Typography>
        <Typography variant="h5" paddingTop={2}>Add a checklist of task that need to be completed as part of exit process.</Typography>
        </Box>
       <Box sx={{display:"flex"}}>
       <div style={{paddingRight:'5px'}}>
      <AddNewChecklist
        buttonLabel="Add New" 
        drawerTitle="Withdrawal Checklist" 
      />
    </div>
    <div>
      <AddNewTask
        buttonLabel="Import New Task" 
        drawerTitle="Withdrawal Checklist" 
      />
    </div>
       </Box>
      </Box>
     <Box sx={{width:'85%'}}>
     <ParamTable columns={tableHeadings} data={data} tablePaper={{borderRadius:'0',height:'auto'}} />
     </Box>
    </>
  )
}

export default WithdrawalChecklist;








