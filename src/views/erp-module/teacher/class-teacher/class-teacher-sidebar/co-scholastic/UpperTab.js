// sangeeta


import { Button, Grid, Paper } from '@mui/material'
import React from 'react'
import  { TermDropDown,ClassDropDown,StudentDropDown,AreaDropDown } from '../SearchFilter/DropDown'
import {ClassData} from '../marks-entry-panel/dropdown-data/ClassData'
import {Term }from '../marks-entry-panel/dropdown-data/TermData'

import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
function UpperTab( { onClassChange,
  selectedClass,
  onTermChange,
  selectedTerm,
  data,
  selectedStudent, onStudentChange}) {


  return (
    <div>
    <Paper sx={{ padding: "20px 30px", margin: "10px 0px" }}>
      <Grid container spacing={2}>
        {/* Pass onClassChange function to handle class changes */}
        <Grid item xs={12} xl={2} lg={6} md={6} sx={{ textAlign: 'center' }}>
          <ClassDropDown
            data={ClassData}
            onClassChange={onClassChange}
            selectedClass={selectedClass}
            sx={{ margin: '10px' }}
          />
        </Grid>
  
        <Grid item xs={12} xl={2} lg={6} md={6} sx={{ textAlign: 'center' }}>
          <TermDropDown
            data={Term}
            onTermChange={onTermChange}
            selectedTerm={selectedTerm}
          />
        </Grid>
  
        <Grid item xs={12} xl={2} lg={6} md={6} sx={{ textAlign: 'center' }}>
          <StudentDropDown
            data={data}
            selectedClass={selectedClass}
            selectedStudent={selectedStudent}
            onStudentChange={onStudentChange}
          />
        </Grid>
  
        <Grid item xs={12} xl={2} lg={6} md={6} sx={{ textAlign: 'center' }}>
          <AreaDropDown data={data} />
        </Grid>
  
        {/* Grid item containing the Search button */}
        <Grid item xs={12} xl={2} lg={12} md={12} sx={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            startIcon={<SearchTwoToneIcon />}
            sx={{ height: '48px', borderRadius: '12px', width: '12.8rem' }} // Set width to 100% for full width
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </Paper>
  </div>
  
  )
}

export default UpperTab
