import React from 'react';
import ParamTable from 'views/erp-common-component/ParamTable';
import DrawerContent from './DrawerContent';
import Drawer from '@mui/material/Drawer';

const tableHeadings=[
    {
      id:2,
      tabHeading:"Currency {Restricted}"
    },
    {
      id:3,
      tabHeading:"Created On"
    },
    {
      id:4,
      tabHeading:"Action"
    }
]

const data = [
  {
    id: 1,
    currency: "INR",
    createOn: "05.Feb.2019"
  },
  {
    id: 2,
    currency: "USD",
    createOn: "10.May.2020"
  },
  {
    id: 3,
    currency: "EUR",
    createOn: "15.Jul.2021"
  },
  {
    id: 4,
    currency: "GBP",
    createOn: "20.Oct.2022"
  },
  {
    id: 5,
    currency: "JPY",
    createOn: "25.Dec.2023"
  }
];



const Currency = ({toggleAddDrawer, toggleDrawer}) => {
  return (
    <>
    <ParamTable columns={tableHeadings} data={data}/>
    <Drawer anchor={'right'} open={toggleAddDrawer.right} onClose={toggleDrawer('right', false)}>
        <DrawerContent  data={tableHeadings} toggleDrawer={toggleDrawer}  />
      </Drawer>
    </>
  )
}

export default Currency;