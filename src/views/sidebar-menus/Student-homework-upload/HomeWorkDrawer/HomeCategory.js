import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Grid from '@mui/system/Unstable_Grid/Grid';
import { StudentList } from './StudentHomeworkList';
import subjects from './HomeStudentDatalist';

export default function HomeCategory() {
  const [selectedSubject, setSelectedSubject] = React.useState('');
  const [selectedClasses, setSelectedClasses] = React.useState([]); // Initialize as empty array
  const [students, setStudents] = React.useState([]);
  const [isStudentListVisible, setIsStudentListVisible] = React.useState(false);

  const handleSubjectChange = (event) => {
    const subjectValue = event.target.value;
    setSelectedSubject(subjectValue);
    setSelectedClasses([]); // Reset selected classes when subject changes
    setIsStudentListVisible(false); // Hide student list when subject changes
    filterStudents(subjectValue, []);
  };


  const handleClassDelete = (classToDelete) => {
    const updatedClasses = selectedClasses.filter(classItem => classItem !== classToDelete);
    setSelectedClasses(updatedClasses);
    setIsStudentListVisible(updatedClasses.length > 0);
    filterStudents(selectedSubject, updatedClasses);
  };
  
  const handleClassChange = (event) => {
    const classValues = event.target.value;
    console.log("Selected Class Values:", classValues); // Log selected class values
    setSelectedClasses(classValues);
    setIsStudentListVisible(classValues.length > 0); // Show student list when at least one class is selected
    filterStudents(selectedSubject, classValues);
  };
  
  const filterStudents = (subject, selectedClasses) => {
    let filteredStudents = StudentList;
    if (subject && selectedClasses.length > 0) {
      filteredStudents = StudentList.filter((student) => {
        const studentClass = `${student.class}-${student.section}`; // Format student's class and section
        return selectedClasses.includes(studentClass); // Check if the student's class is included in the selected classes
      });
    }
    setStudents(filteredStudents);
  };
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Grid sx={{}}>
        <Grid item sx={{ marginBottom: '9px', paddingLeft: '13px' }}>
          <FormControl sx={{ width: '100%' }}>
            <InputLabel id="subject-select-label">Select Subject</InputLabel>
            <Select
              labelId="subject-select-label"
              id="subject-select"
              value={selectedSubject}
              label="Select Subject"
              onChange={handleSubjectChange}
            >
              {subjects.map((subjectItem) => (
                <MenuItem key={subjectItem.value} value={subjectItem.value}>
                  {subjectItem.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid sx={{ paddingLeft: '13px' }}>
          <FormControl sx={{ width: '100%' }}>
            <InputLabel id="class-select-label">Select Class</InputLabel>
            <Select
              labelId="class-select-label"
              id="class-select"
              value={selectedClasses}
              label="Select Class"
              onChange={handleClassChange}
              disabled={!selectedSubject}
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
              {(subjects.find((subject) => subject.value === selectedSubject)?.classes || []).map((classItem) => (
               <MenuItem key={`${classItem.class}-${classItem.section}`} value={`${classItem.class}-${classItem.section}`}>
               {`${classItem.class}-${classItem.section}`}
             </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      {isStudentListVisible && students.length > 0 && <StudentHomeworkList students={students} />}
      {!isStudentListVisible && selectedClasses.length > 0 && <p>No Data Found!</p>}
    </form>
  );
}

function StudentHomeworkList({ students }) {
  const [selectedStudents, setSelectedStudents] = React.useState([]);

  const handleCheckboxChange = (studentId) => {
    if (selectedStudents.includes(studentId)) {
      setSelectedStudents(selectedStudents.filter((id) => id !== studentId));
    } else {
      setSelectedStudents([...selectedStudents, studentId]);
    }
  };

  return (
    <Paper elevation={3} sx={{ marginBottom: '16px', marginTop: '30px', padding: '20px', margin: '15px' }}>
      <form onSubmit={(e) => e.preventDefault()}>Select Student
        <div style={{ border: '1px solid #dcdcdc', borderRadius: '4px', overflowY: 'auto', maxHeight: '200px' }}>
          {students.map((student) => (
            <div key={student.admnNo} style={{ display: 'flex', alignItems: 'center' }}>
              <Checkbox
                checked={selectedStudents.includes(student.admnNo)}
                onChange={() => handleCheckboxChange(student.admnNo)}
                sx={{ mr: 1 }}
              />
              <div>
                <p style={{ margin: '0', fontSize: '14px', fontWeight: '500' }}>
                  {student.name} ({student.admnNo})
                </p>
              </div>
            </div>
          ))}
        </div>
      </form>
    </Paper>
  );
}
