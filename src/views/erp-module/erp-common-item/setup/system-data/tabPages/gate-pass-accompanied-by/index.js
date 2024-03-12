import React from 'react'
import ParamTable from 'views/erp-module/erp-common-item/setup/system-data/ParamTable';
import Drawer from '@mui/material/Drawer';
import DrawerContent from './DrawerContent';

const tableHeadings = [
  {
    id: 2,
    tabHeading: "Gate Pass Accompanied By"
  },
  {
    id: 3,
    tabHeading: "Enable Custom Remarks"
  },
  {
    id: 4,
    tabHeading: "Created by"
  },
  {
    id: 5,
    tabHeading: "Created On"
  },
  {
    id:6,
    tabHeading:"Action"
  }
]

const data = [
  {
    id: 1,
    gatePass: "Father",
    enableCustom: false,
    createdBy: "Aatur Bansal",
    createdOn: "09.Jan.2024"
  },
  {
    id: 2,
    gatePass: "Mother",
    enableCustom: true,
    createdBy: "Priya Sharma",
    createdOn: "10.Feb.2024"
  },
  {
    id: 3,
    gatePass: "Guardian",
    enableCustom: false,
    createdBy: "Rahul Singh",
    createdOn: "15.Mar.2024"
  },
  {
    id: 4,
    gatePass: "Parent",
    enableCustom: true,
    createdBy: "Anjali Gupta",
    createdOn: "20.Apr.2024"
  },
  {
    id: 5,
    gatePass: "Sibling",
    enableCustom: false,
    createdBy: "Siddharth Patel",
    createdOn: "25.May.2024"
  }
];


const GatePass = ({toggleAddDrawer, toggleDrawer}) => {
  return (
    <>
      <ParamTable columns={tableHeadings} data={data} />
      <Drawer anchor={'right'} open={toggleAddDrawer.right} onClose={toggleDrawer('right', false)}>
        <DrawerContent data={tableHeadings} toggleDrawer={toggleDrawer} name="Wing {Restricted}" />
      </Drawer>
    </>
  )
}

export default GatePass