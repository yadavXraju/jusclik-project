import * as React from 'react';
import { Autocomplete } from '@mui/material';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';

// =========== list of students ===========
const students = [
  { id: 1, name: 'Suraj' },
  { id: 2, name: 'Abhishek' },
  { id: 3, name: 'Sangeeta' },
  { id: 4, name: 'Amit' },
  { id: 4, name: 'Ruby' },
];

export default function NotifyStudent() {
  const [selectedStudents, setSelectedStudents] = React.useState([]);

  const handleChange = (event, value) => {
    setSelectedStudents(value);
  };

  return (
    <Autocomplete
      multiple
      id="student-autocomplete"
      options={students}
      getOptionLabel={(student) => student.name}
      value={selectedStudents}
      onChange={handleChange}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          size='small'
          label="Notify"
          placeholder="Search"
        />
      )}
      renderTags={(value, getTagProps) =>
        value.map((student, index) => (
          <Chip
            key={student.id}
            label={student.name}
            {...getTagProps({ index })}
            onDelete={() => {
              const newSelectedStudents = [...selectedStudents];
              newSelectedStudents.splice(index, 1);
              setSelectedStudents(newSelectedStudents);
            }}
          />
        ))
      }
    />
  );
}
