import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import { StudentList } from './StudentHomeworkList';
import subjects from './HomeStudentDatalist';

export default function HomeCategory() {
  const [selectedSubject, setSelectedSubject] = React.useState('');
  const [selectedClass, setSelectedClass] = React.useState('');
  const [students, setStudents] = React.useState([]);
  const [isStudentListVisible, setIsStudentListVisible] = React.useState(false);

  const handleSubjectChange = (event) => {
    const subjectValue = event.target.value;
    setSelectedSubject(subjectValue);
    setSelectedClass(''); // Reset selected class when subject changes
    setIsStudentListVisible(false); // Hide student list when subject changes
    filterStudents(subjectValue, '');
  };

  const handleClassChange = (event) => {
    const classValue = event.target.value;
    setSelectedClass(classValue);
    setIsStudentListVisible(true); // Show student list when class is selected
    filterStudents(selectedSubject, classValue);
  };

  const filterStudents = (subject, classValue) => {
    let filteredStudents = StudentList;
    if (subject && classValue) {
      filteredStudents = StudentList.filter((student) => student.class === classValue);
    }
    setStudents(filteredStudents);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
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
      <FormControl sx={{ width: '100%', mt: 2 }}>
        <InputLabel id="class-select-label">Select Class</InputLabel>
        <Select
          labelId="class-select-label"
          id="class-select"
          value={selectedClass}
          label="Select Class"
          onChange={handleClassChange}
          disabled={!selectedSubject}
        >
          {(subjects.find((subject) => subject.value === selectedSubject)?.classes || []).map((classItem) => (
            <MenuItem key={`${classItem.class}-${classItem.section}`} value={classItem.class}>
              {`${classItem.class}-${classItem.section}`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
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
