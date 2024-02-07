import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';

// Assuming StudentList is in the same directory
import { StudentList } from './StudentHomeworkList';
// Separate data source for selection form
const SectionList = ['Select All', ...new Set(StudentList.map((student) => `${student.class} - ${student.section}`))];

export default function HomeCategory() {
  const [selectedSection, setSelectedSection] = React.useState('');

  const handleSelectChange = (event) => {
    setSelectedSection(event.target.value);
  };

  return (
    <>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="section-select-label">Select Section</InputLabel>
        <Select
          labelId="section-select-label"
          id="section-select"
          value={selectedSection}
          onChange={handleSelectChange}
          inputProps={{ inputProps: { 'data-testid': 'section-select' } }}
        >
          {SectionList.map((section, index) => (
            <MenuItem key={index} value={section}>
              {section}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {selectedSection !== 'Select All' && selectedSection && <StudentHomeworkList selectedSection={selectedSection} />}
      {selectedSection === 'Select All' && <StudentHomeworkList />}
    </>
  );
}

function StudentHomeworkList({ selectedSection }) {
  let filteredStudents = StudentList;

  if (selectedSection && selectedSection !== 'Select All') {
    // Extract class and section from the selected section
    const [selectedClass, selectedSectionName] = selectedSection.split(' - ');
    // Filter students based on selected class and section
    filteredStudents = StudentList.filter((student) => student.class === selectedClass && student.section === selectedSectionName);
  }

  const [selectedStudents, setSelectedStudents] = React.useState([]);

  const handleCheckboxChange = (studentId) => {
    if (selectedStudents.includes(studentId)) {
      setSelectedStudents(selectedStudents.filter((id) => id !== studentId));
    } else {
      setSelectedStudents([...selectedStudents, studentId]);
    }
  };

  return (
    <div>
      {filteredStudents.map((student) => (
        <div key={student.admnNo}>
          <Checkbox
            checked={selectedStudents.includes(student.admnNo)}
            onChange={() => handleCheckboxChange(student.admnNo)}
          />
          <p>{student.name}</p>
          <p>{student.admnNo}</p>
        </div>
      ))}
    </div>
  );
}
