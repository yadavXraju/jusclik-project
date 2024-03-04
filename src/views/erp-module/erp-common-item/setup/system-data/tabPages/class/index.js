import React from 'react';
import {Grid} from '@mui/material';
import ParamTable from 'views/common-section/ParamTable';

const tableHeading=[
    {
    id:1,
    tabHeading:"Records"
    },
    {
    id:2,	
    tabHeading:"Class"
    },
    {
    id:3,
    tabHeading:"Wing"
    },
    {	
    id:4,
    tabHeading:"Academic Year Upto"
    },
    {
    id:5,
    tabHeading:"Class Initials"
    },
    {
    id:6,
    tabHeading:"Group Name"	
    },
    {
    id:7,
    tabHeading:"Do Not Show On Website Enquiry Page"
    },
    {
    id:8,
    tabHeading:"Created by"
    },
    {
    id:9,
    tabHeading:"Created On"
    }
    ]

const classData = [
        {
          id: 1,
          records: 'select',
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
          id: 2,
          records: 'select',
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
          id: 3,
          records: 'select',
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
          records: 'select',
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
          records: 'select',
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
          records: 'select',
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
          records: 'select',
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


const Class = () => {
    return (
        <Grid container spacing={2}>
            <Grid xs={12} sm={12} md={12} lg={12}>
                <ParamTable columns={tableHeading} data={classData} />
            </Grid>
            <Grid  xs={12} sm={12} md={12} lg={6}>

            </Grid>
        </Grid>
    )
}

export default Class