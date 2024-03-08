import React from 'react'
import ParamTable from 'views/common-section/ParamTable';
import Drawer from '@mui/material/Drawer';
import DrawerContent from './DrawerContent';

const tableHeadings=[
  {
    id:2,
    tabHeading:"Gate Pass Reasons"
  },
  {
    id:3,
    tabHeading:"Created by"
  },
  {
   id:4,
   tabHeading:"Created On"
  },
  {
    id:5,
    tabHeading:"Action"
  }
];


const data = [
  {
    id: 1,
    gatePass: "Umang Kumar",
    CreatedBy: "Umang Kumar",
    CreatedOn: "08.Feb.2024"
  },
  {
    id: 2,
    gatePass: "John Doe",
    CreatedBy: "John Doe",
    CreatedOn: "10.May.2024"
  },
  {
    id: 3,
    gatePass: "Alice Smith",
    CreatedBy: "Alice Smith",
    CreatedOn: "15.Jul.2024"
  },
  {
    id: 4,
    gatePass: "Emily Brown",
    CreatedBy: "Emily Brown",
    CreatedOn: "20.Oct.2024"
  },
  {
    id: 5,
    gatePass: "James Wilson",
    CreatedBy: "James Wilson",
    CreatedOn: "25.Dec.2024"
  }
];


const GatePassReason = ({toggleAddDrawer, toggleDrawer}) => {
  return (
    <>
     <ParamTable columns={tableHeadings} data={data}/>
     <Drawer anchor={'right'} open={toggleAddDrawer.right} onClose={toggleDrawer('right', false)}>
        <DrawerContent  data={tableHeadings} toggleDrawer={toggleDrawer} name="Wing {Restricted}" />
      </Drawer>
    </>
  )
}

export default GatePassReason;