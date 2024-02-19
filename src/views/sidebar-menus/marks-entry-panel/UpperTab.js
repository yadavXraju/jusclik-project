import { Button, Grid, Paper } from '@mui/material'
import React from 'react'
import  { ExamDropDown, SubjectDropDown, TermDropDown,ClassDropDown} from '../SearchFilter/filterComponent/DropDown'
import {ClassData} from './dropdown data/ClassData'
import {Term }from './dropdown data/TermData'
import { subject } from './dropdown data/SubjectData'
import { EXAM } from './dropdown data/ExamData'
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
function UpperTab( { onClassChange,selectedSubject, onSubjectChange,selectedClass, selectedTerm,onTermChange,selectedExam,onExamChange}) {


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
        <ExamDropDown data={EXAM}
        onExamChange= {onExamChange}
        selectedExam={ selectedExam}
        />
        <SubjectDropDown 
  data={subject} 
  selectedSubject={selectedSubject} // Pass the selectedSubject
  onSubjectChange={onSubjectChange} // Pass the onSubjectChange function
/>

  
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
