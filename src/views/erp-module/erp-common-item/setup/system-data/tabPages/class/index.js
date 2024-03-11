import React from 'react';
import ParamTable from 'views/erp-module/erp-common-item/setup/system-data/ParamTable';
import DrawerContent from './DrawerContent';
import Drawer from '@mui/material/Drawer';

const tableHeadings = [
  {
    id: 2,
    tabHeading: "Class",
  },
  {
    id: 3,
    tabHeading: "Wing",
  },
  {
    id: 4,
    tabHeading: "Academic Year Upto"
  },
  {
    id: 5,
    tabHeading: "Class Initials"
  },
  {
    id: 6,
    tabHeading: "Group Name"
  },
  {
    id: 7,
    tabHeading: "Do Not Show On Website Enquiry Page"
  },
  {
    id: 8,
    tabHeading: "Created by"
  },
  {
    id: 9,
    tabHeading: "Created On"
  }, {
    id: 10,
    tabHeading: "Action"
  }
]

const classData = [
  {
    id: 1,
    class: 'kg',
    wing: '',
    academicYear: '',
    classIntials: '',
    groupName: '',
    show: '',
    createdBy: 'Umang Kumar',
    createdOn: '09.Feb.2024'
  },
  {
    id: 2,
    class: 'kg',
    wing: '',
    academicYear: '',
    classIntials: '',
    groupName: '',
    show: '',
    createdBy: 'Shardul Kumar',
    createdOn: '29.Sep.2023'
  },
  {
    id: 3,
    class: 'kg',
    wing: '',
    academicYear: '',
    classIntials: '',
    groupName: '',
    show: '',
    createdBy: '',
    createdOn: ''
  },
  {
    id: 4,
    class: 'kg',
    wing: '',
    academicYear: '',
    classIntials: '',
    groupName: '',
    show: '',
    createdBy: '',
    createdOn: ''
  },
  {
    id: 5,
    class: 'kg',
    wing: '',
    academicYear: '',
    classIntials: '',
    groupName: '',
    show: '',
    createdBy: '',
    createdOn: ''
  },
  {
    id: 6,
    class: 'kg',
    wing: '',
    academicYear: '',
    classIntials: '',
    groupName: '',
    show: '',
    createdBy: '',
    createdOn: ''
  },
  {
    id: 7,
    class: 'kg',
    wing: '',
    academicYear: '',
    classIntials: '',
    groupName: '',
    show: '',
    createdBy: '',
    createdOn: ''
  }
];

const Class = ({toggleAddDrawer, toggleDrawer}) => {
  return (
    <>
      <ParamTable columns={tableHeadings} data={classData} />
      <Drawer anchor={'right'} open={toggleAddDrawer.right} onClose={toggleDrawer('right', false)}>
        <DrawerContent  data={tableHeadings} toggleDrawer={toggleDrawer} name="Wing {Restricted}" />
      </Drawer>
    </>
  )
}

export default Class

