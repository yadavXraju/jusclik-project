import { Button, Grid, Paper } from '@mui/material'
import React from 'react'
import  { ExamDropDown, SubjectDropDown, TermDropDown,ClassDropDown} from '../SearchFilter/DropDown'
import {ClassData} from './dropdown data/ClassData'
import {Term }from './dropdown data/TermData'
import { subject } from './dropdown data/SubjectData'
import { EXAM } from './dropdown data/ExamData'
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
function UpperTab( { onClassChange,selectedSubject, onSubjectChange,selectedClass, selectedTerm,onTermChange,selectedExam,onExamChange}) {


  return (
    <div>
      <Paper sx={{padding:"20px 30px",margin:"10px 0px"}}>
      <Grid container spacing={2} >
            {/* Pass onClassChange function to handle class changes */}
            <Grid item xs={12} xl={2} lg={6} md={6} sx={{textAlign :'center'}}>
        
        <ClassDropDown 
        data={ClassData} 
        onClassChange={onClassChange}
        selectedClass={selectedClass
        } sx={{ margin: '10px' }} />

        </Grid>

        <Grid item xs={12} xl={2} lg={6} md={6} sx={{textAlign :'center'}}>
          <TermDropDown // Use the adjusted TermDropDown component
          data={Term}
          onTermChange= {onTermChange}
          selectedTerm={ selectedTerm}
        />
         </Grid>

         <Grid item xs={12} xl={2} lg={6} md={6} sx={{textAlign :'center'}}>

        <ExamDropDown data={EXAM}
        onExamChange= {onExamChange}
        selectedExam={ selectedExam}
        />

</Grid>

<Grid item xs={12} xl={2} lg={6} md={6} sx={{textAlign :'center'}}>
        <SubjectDropDown 
  data={subject} 
  selectedSubject={selectedSubject} // Pass the selectedSubject
  onSubjectChange={onSubjectChange} // Pass the onSubjectChange function
/>
</Grid>
  

<Grid item xs={12} xl={2} lg={12} md={12} sx={{paddingLeft:'17px !important' , textAlign:'center'}} >
  
        <Button
          variant="contained"
          startIcon={<SearchTwoToneIcon />}
          sx={{ height: '48px', borderRadius: '12px' ,textAlign:'center' , width: '12.8rem'}}
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
