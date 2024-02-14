import { Button, Grid, Paper } from '@mui/material'
import React from 'react'
import  { TermDropDown,ClassDropDown, StudentDropDown } from '../SearchFilter/filterComponent/DropDown'
import {currencies} from '../marks-entry-panel/dropdown data/ClassData'
import {Term }from '../marks-entry-panel/dropdown data/TermData'

import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { studentData } from './Data/studentData'
function UpperTab( { onClassChange,
  selectedClass,
  onTermChange,
  selectedTerm,
  selectedStudent,
  onStudentChange,
  students,}) {


  return (
    <div>
      <Paper sx={{padding:"20px 30px",margin:"10px 0px"}}>
      <Grid spacing={2} sx={{display:'flex',flexDirection:"row"}}> 
            {/* Pass onClassChange function to handle class changes */}
        <ClassDropDown 
        data={currencies} 
        onClassChange={onClassChange}
        selectedClass={selectedClass
        } sx={{ margin: '10px' }} />
          <TermDropDown // Use the adjusted TermDropDown component
          data={Term}
          onTermChange= {onTermChange}
          selectedTerm={ selectedTerm}
        />
        
         <StudentDropDown data={studentData} selectedStudent={selectedStudent}  onStudentChange={ onStudentChange} students={students} />
  
        <Button
          variant="contained"
          startIcon={<SearchTwoToneIcon />}
          sx={{ height: '48px', borderRadius: '12px', marginTop: '-3px !important' }}
        >
          Search
        </Button>
      </Grid>
      </Paper>
    </div>
  )
}

export default UpperTab
