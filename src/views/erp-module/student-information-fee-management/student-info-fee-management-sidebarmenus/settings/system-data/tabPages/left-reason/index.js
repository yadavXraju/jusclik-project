import React from 'react'
import ParamTable from 'components/table-data-grid/Table';
import Drawer from '@mui/material/Drawer';
import DrawerContent from './DrawerContent';

const tableHeadings = [
  {
    id: 2,
    tabHeading: "Left Reasons {Restricted}"
  },
  {
    id: 3,
    tabHeading: "Type"
  },
  {
    id: 4,
    tabHeading: "	Created On"
  },
  {
    id: 5,
    tabHeading: "Action"
  }
];

const data = [
  {
    id: 1, 
    "leftReasons": "Transferred to other school",
    "type": "For Admission",
    "CreatedOn": "05.Feb.2019"
  },
  {
    id: 2,
    "leftReasons": "Moved to another city",
    "type": "For Admission",
    "CreatedOn": "10.May.2020"
  },
  {
    id: 3,
    "leftReasons": "Financial reasons",
    "type": "For Admission",
    "CreatedOn": "15.Jul.2021"
  },
  {
    id: 4,
    "leftReasons": "Health issues",
    "type": "For Admission",
    "CreatedOn": "20.Oct.2022"
  },
  {
    id: 5,
    "leftReasons": "Family relocation",
    "type": "For Admission",
    "CreatedOn": "25.Dec.2023"
  }
]



const LeftReason = ({toggleAddDrawer, toggleDrawer}) => {
  return (
    <>
      <ParamTable columns={tableHeadings} data={data} />
      <Drawer anchor={'right'} open={toggleAddDrawer.right} onClose={toggleDrawer('right', false)}>
        <DrawerContent  data={tableHeadings} toggleDrawer={toggleDrawer} name="Wing {Restricted}" />
      </Drawer>
    </>
  )
}

export default LeftReason