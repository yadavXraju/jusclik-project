import { Button, Grid, Paper } from '@mui/material'
import React from 'react'
import DropDown from '../SearchFilter/filterComponent/DropDown'
import {currencies} from './dropdown data/ClassData'
import {Term }from './dropdown data/TermData'
import { subject } from './dropdown data/SubjectData'
import { EXAM } from './dropdown data/ExamData'
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
function UpperTab( { onClassChange}) {


  return (
    <div>
      <Paper sx={{padding:"20px 30px",margin:"10px 0px"}}>
      <Grid spacing={2} sx={{display:'flex',flexDirection:"row"}}> 
            {/* Pass onClassChange function to handle class changes */}
        <DropDown data={currencies} onClassChange={onClassChange} sx={{ margin: '10px' }} />
        <DropDown  data={Term} />
        <DropDown data={subject} onClassChange={onClassChange}/>
        <DropDown data={EXAM}/>
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