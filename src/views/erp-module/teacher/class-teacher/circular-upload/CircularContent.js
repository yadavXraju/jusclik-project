import * as React from 'react';
import {InputLabel ,Box , MenuItem , FormControl , Select , Grid , TextField , Chip}  from '@mui/material';
import HomeReplyBox from 'views/erp-module/teacher/class-teacher/Student-homework-upload/HomeWorkDrawer/HomeReplyBox';
import HomeYoutubeLink from 'views/erp-module/teacher/class-teacher/Student-homework-upload/HomeWorkDrawer/HomeYoutubeLink';
import HomeworkTemplate from 'views/erp-module/teacher/class-teacher/Student-homework-upload/HomeWorkDrawer/HomeworkTemplate';
import { CommonDropZone } from 'components/upload-file/DropZone';
import { StudentList } from 'views/erp-module/teacher/class-teacher/Student-homework-upload/HomeWorkDrawer/StudentHomeworkList';

// ============== circular category start

export function CircularCategory() {
  const [circular, setCircular] = React.useState('');

  const handleChange = (event) => {
    setCircular(event.target.value);
  };

  return (
    <Box sx={{ paddingLeft:'11px', m:'5' }} >
      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label">Circular Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={circular}
          label="Circular Category"
          onChange={handleChange}
        >
          <MenuItem value={1}>Circulars</MenuItem>
          <MenuItem value={2}>School Notices</MenuItem>
          <MenuItem value={3}>Syllabus</MenuItem>
          <MenuItem value={4}>Result Circulars</MenuItem>
         
        </Select>
      </FormControl>
    </Box>
  );
}
// ============== circular category end 

// ==========  circular date start 
function CircularDate({label}) {

  return (
 <>
   <TextField
      id="outlined-select-option"
      type="date"
      fullWidth
      label={label}
      sx={{margin:"5px"}}
      InputLabelProps={{
        shrink: true,
      }}
    />
 </>
  )
}
// ==========  circular date end

// ===========  circular select class start
const CircularSelectClass = () => {
  const [selectedClasses, setSelectedClasses] = React.useState([]); // Initialize as empty array

  const handleClassDelete = (classToDelete) => {
    const updatedClasses = selectedClasses.filter(classItem => classItem !== classToDelete);
    setSelectedClasses(updatedClasses);
  };
  
  const handleClassChange = (event) => {
    const classValues = event.target.value;
    setSelectedClasses(classValues);
  };

  // Extract unique classes from the StudentList array
  const uniqueClasses = Array.from(new Set(StudentList.map(student => `${student.class}-${student.section}`)));

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Grid sx={{}}>
        <Grid sx={{ paddingLeft: '13px' }}>
          <FormControl sx={{ width: '100%' }}>
            <InputLabel id="class-select-label">Select Class</InputLabel>
            <Select
              labelId="class-select-label"
              id="class-select"
              value={selectedClasses}
              label="Select Class"
              onChange={handleClassChange}
              multiple
              renderValue={(selected) => (
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {selected.map((classItem) => (
                    <Chip
                      key={classItem}
                      label={classItem}
                      onDelete={() => handleClassDelete(classItem)}
                      style={{ margin: '2px', borderRadius: '4px' }}
                    />
                  ))}
                </div>
              )}
            >
              {uniqueClasses.map((classItem) => ( // Map over uniqueClasses to display unique class options
                <MenuItem key={classItem} value={classItem}>
                  {classItem}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </form>
  );
}

// ===========  circular select class end

// ===========  circular topic  start
export  function CircularTopic() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '100%' }, paddingLeft:'4px', paddingRight:'8px'
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Topic" variant="outlined" />
  
    </Box>
  );
}
// ===========  circular topic  end

const CircularContent = () => {
  const [selectedFile,setSelectedFile]=React.useState(null)
  const stateHandler=(_,value)=>setSelectedFile(value)
  return (
    <>
       <Grid>
     <Grid item sx={{ paddingLeft: '7px', paddingRight: '7px', paddingTop: '10px' }} xs={12}>
      <CircularDate label="Circular Date:" />
       </Grid>
       <Grid item xs={12} sx={{ paddingBottom: '10px', paddingTop: '10px' }}>
        <CircularCategory />
       </Grid>
       <Grid item xs={12} sx={{ paddingTop: '6px' }}>
         <CircularSelectClass />
        </Grid>
        <Grid item xs={12} sx={{ paddingTop: '6px' }}>
          <CircularTopic />
       </Grid>
        <Grid item xs={12} sx={{ paddingTop: '6px' }}>
         <HomeworkTemplate />
        </Grid>
        <Grid item xs={12}>
          <HomeReplyBox />
        </Grid>
        <Grid item xs={12}>
          <CommonDropZone stateHandler={stateHandler} selectedFile={selectedFile} updatekey={'_'} />
        </Grid>
       <Grid item sx={{ paddingLeft: '10px', paddingRight: '8px' }} xs={12}>
          <HomeYoutubeLink />
       </Grid>
      </Grid>
    </>
  )
}

export default CircularContent