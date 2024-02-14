import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Chip from '@mui/material/Chip';
import Grid from '@mui/system/Unstable_Grid/Grid';
import { StudentList } from 'views/sidebar-menus/Student-homework-upload/StudentHomeworkList';

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

export default CircularSelectClass;
