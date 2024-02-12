import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Grid from '@mui/system/Unstable_Grid/Grid';
import { StudentList } from './StudentHomeworkList';
import subjects from './HomeStudentDatalist';

export default function HomeCategory() {
  const [selectedSubject, setSelectedSubject] = React.useState('');
  const [selectedClass, setSelectedClass] = React.useState([]); // Initialize as empty array
  const [students, setStudents] = React.useState([]);
  const [isStudentListVisible, setIsStudentListVisible] = React.useState(false);

  const handleSubjectChange = (event) => {
    const subjectValue = event.target.value;
    setSelectedSubject(subjectValue);
    setSelectedClass([]); // Reset selected classes when subject changes
    setIsStudentListVisible(false); // Hide student list when subject changes
    filterStudents(subjectValue, '');
  };

  const handleClassChange = (event) => {
    const classValues = event.target.value;
    setSelectedClass(classValues);
    setIsStudentListVisible(true); // Show student list when class is selected
    filterStudents(selectedSubject, classValues);
  };

  const filterStudents = (subject, classValues) => {
    let filteredStudents = StudentList;
    if (subject && classValues.length > 0) {
      filteredStudents = StudentList.filter((student) => classValues.includes(student.class));
    }
    setStudents(filteredStudents);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Grid sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Grid item sx={{ width: '180px' }}>
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
        <Grid sx={{ width: '180px' }}>
          <FormControl sx={{ width: '100%' }}>
            <InputLabel id="class-select-label">Select Class</InputLabel>
            <Select
              labelId="class-select-label"
              id="class-select"
              value={selectedClass}
              label="Select Class"
              onChange={handleClassChange}
              disabled={!selectedSubject}
              multiple
              renderValue={(selected) => (
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {selected.map((classItem) => (
                    <div key={classItem} style={{ margin: '2px', padding: '4px', backgroundColor: '#e0e0e0', borderRadius: '4px' }}>
                      {classItem}
                    </div>
                  ))}
                </div>
              )}
            >
              {(subjects.find((subject) => subject.value === selectedSubject)?.classes || []).map((classItem) => (
                <MenuItem key={`${classItem.class}-${classItem.section}`} value={classItem.class}>
                  {`${classItem.class}-${classItem.section}`}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      {isStudentListVisible && students.length > 0 && <StudentHomeworkList students={students} />}
      {isStudentListVisible && students.length === 0 && <p>No Data Found!</p>}
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
    <Paper elevation={3} sx={{ marginBottom: '16px', marginTop: '30px', padding: '20px' }}>
      <form onSubmit={(e) => e.preventDefault()}>
        <div style={{ border: '1px solid #dcdcdc', borderRadius: '4px', overflowY: 'auto', maxHeight: '200px' }}>
          {students.map((student) => (
            <div key={student.admnNo} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', padding: '8px' }}>
              <Checkbox
                checked={selectedStudents.includes(student.admnNo)}
                onChange={() => handleCheckboxChange(student.admnNo)}
                sx={{ mr: 1 }}
              />
              <div>
                <p style={{ margin: '0', fontSize: '16px', fontWeight: '500' }}>
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
