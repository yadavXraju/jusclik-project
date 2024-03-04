import React from 'react';
import ParamTable from 'views/common-section/ParamTable';

const tabHeadings=[
    {
      id:1,
      tabHeading:"records"
    },{
      id:2,
      tabHeading:"Currency {Restricted}"
    },
    {
      id:3,
      tabHeading:"Created On"
    }
]

const data = [
  {
    id: 1,
    records:"Roo1",
    currency: "INR",
    createOn: "05.Feb.2019"
  },
  {
    id: 2,
    records:"Roo2",
    currency: "USD",
    createOn: "10.May.2020"
  },
  {
    id: 3,
    records:"Roo3",
    currency: "EUR",
    createOn: "15.Jul.2021"
  },
  {
    id: 4,
    records:"Roo4",
    currency: "GBP",
    createOn: "20.Oct.2022"
  },
  {
    id: 5,
    records:"Rooo5",
    currency: "JPY",
    createOn: "25.Dec.2023"
  }
];



const Currency = () => {
  return (
    <>
    <ParamTable columns={tabHeadings} data={data}/>
    </>
  )
}

export default Currency;