import { Button, Grid, Paper } from '@mui/material'
import React from 'react'
import  { TermDropDown,ClassDropDown,StudentDropDown,AreaDropDown } from '../SearchFilter/filterComponent/DropDown'
import {ClassData} from '../marks-entry-panel/dropdown data/ClassData'
import {Term }from '../marks-entry-panel/dropdown data/TermData'

import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
function UpperTab( { onClassChange,
  selectedClass,
  onTermChange,
  selectedTerm,
  data,
  selectedStudent, onStudentChange}) {


  return (
    <div>
      <Paper sx={{padding:"20px 30px",margin:"10px 0px"}}>
      <Grid spacing={2} sx={{display:'flex',flexDirection:"row",alignItems:"center"}}> 
            {/* Pass onClassChange function to handle class changes */}
        <ClassDropDown 
        data={ClassData} 
        onClassChange={onClassChange}
        selectedClass={selectedClass
        } sx={{ margin: '10px' }} />
          <TermDropDown // Use the adjusted TermDropDown component
          data={Term}
          onTermChange= {onTermChange}
          selectedTerm={ selectedTerm}
        />
        
       <StudentDropDown data={data}   selectedClass={selectedClass} selectedStudent={selectedStudent}   onStudentChange={ onStudentChange} />
       <AreaDropDown data={data}   />
  
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
