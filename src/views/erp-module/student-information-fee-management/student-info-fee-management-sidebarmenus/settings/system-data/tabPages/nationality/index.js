import React from 'react'
import ParamTable from 'components/Table';
import Drawer from '@mui/material/Drawer';
import DrawerContent from './DrawerContent';

const tableHeadings = [
  {
    id: 2,
    tabHeading: "Nationality Restricted"
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
    nationality: "Afghan",
    createdOn: "09.Jan.2024"
  },
  {
    id: 1,
    nationality: "Inida ",
    createdOn: "09.Jan.2024"
  },
  {
    id: 1,
    nationality: "Pakistan",
    createdOn: "09.Jan.2024"
  },
  {
    id: 1,
    nationality: "Australia",
    createdOn: "09.Jan.2024"
  },
  {
    id: 1,
    nationality: "Bangladesh",
    createdOn: "09.Jan.2024"
  }
];


const GatePass = ({toggleAddDrawer, toggleDrawer}) => {
  return (
    <>
      <ParamTable columns={tableHeadings} data={data} />
      <Drawer anchor={'right'} open={toggleAddDrawer.right} onClose={toggleDrawer('right', false)}>
        <DrawerContent data={tableHeadings} toggleDrawer={toggleDrawer}  />
      </Drawer>
    </>
  )
}

export default GatePass;