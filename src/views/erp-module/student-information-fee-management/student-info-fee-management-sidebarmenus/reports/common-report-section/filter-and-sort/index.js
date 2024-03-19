import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton, Box, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import useOutsideClick from 'hooks/useClickOutside';
import ParamDateRange from 'views/common-section/ParamDateRange';

const availableColumns = [
  { id: '001', field: 'enqNo', headerName: 'Enq No', },
  { id: '002', field: 'enqDate', headerName: 'Enq Date', selected: false },
  { id: '003', field: 'studentName', headerName: 'Student Name', selected: false },
  { id: '004', field: 'class', headerName: 'Class', selected: false },
  { id: '005', field: 'section', headerName: 'Section', selected: false },
  { id: '006', field: 'classSection', headerName: 'Class Section', selected: false },
  { id: '007', field: 'gender', headerName: 'Gender', selected: false },
  { id: '008', field: 'birthDate', headerName: 'Birth Date', selected: false },
  { id: '009', field: 'age', headerName: 'Age (Today)', selected: false },
  { id: '010', field: 'address', headerName: 'Address (Complete)', selected: false },
  { id: '011', field: 'commPhone', headerName: 'Comm Phone (M)', selected: false },
  { id: '012', field: 'commEmail', headerName: 'Comm Email', selected: false },
  { id: '013', field: 'joinClass', headerName: 'Join Class', selected: false },
  { id: '014', field: 'concessionCategory', headerName: 'Concession Category', selected: false },
  { id: '015', field: 'fatherName', headerName: 'Father Name', selected: false },
  { id: '016', field: 'motherName', headerName: 'Mother Name', selected: false },
  { id: '017', field: 'nationality', headerName: 'Nationality', selected: false },
  { id: '018', field: 'religion', headerName: 'Religion', selected: false },
  { id: '019', field: 'previousSchool', headerName: 'Previous School', selected: false },
  { id: '020', field: 'lastGradeCompleted', headerName: 'Last Grade Completed', selected: false },
  { id: '021', field: 'guardianName', headerName: 'Guardian Name', selected: false },
  { id: '022', field: 'guardianRelationship', headerName: 'Guardian Relationship', selected: false },
  { id: '023', field: 'guardianPhone', headerName: 'Guardian Phone', selected: false },
  { id: '024', field: 'guardianEmail', headerName: 'Guardian Email', selected: false },
];

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState([]);
  const { ref, isOpen, setIsOpen } = useOutsideClick(false);

  const handleFilterSelected = (id) => {
    setSelectedFilter([...selectedFilter, id]);
  }

  const filterAvailableFields = () => {
    return isOpen ? availableColumns.filter((column) =>
      column.headerName.toLowerCase().includes(searchTerm.toLowerCase()) 
    ) : [];
  };


  return (
    <Box sx={{ marginLeft: "-24px", display: "flex", flexDirection: "row", height: 'calc(100vh - 350px)' }}>
      <Box sx={{ backgroundColor: "#eef2f629", border: "1px solid #f0f5f8", width: "300px" }} ref={ref}>
        <TextField
          variant="outlined"
          placeholder="Choose a Property..."
          sx={{ width: "300px" }}
          onChange={(event) => setSearchTerm(event.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <ArrowDropDownIcon onClick={() => setIsOpen(true)} />
                </IconButton>
              </InputAdornment>
            ),
          }}
          onClick={() => setIsOpen(true)}
        />
        {/* Displaying Selecte Filters */}
        {
          selectedFilter && selectedFilter.map((item) =>
                   <ParamDateRange key={item?.id} />
            )
        }
        <Box sx={{ height: "calc(100vh - 400px)", overflowY: 'auto' }} className="scrollbar">
          {filterAvailableFields().map((item) => (
            <Box
              key={item.id}
            >
              <Typography variant="h5" sx={{ border: "1px solid #f5f8fa", height: "30px" }} onClick={() => handleFilterSelected(item.id)}>{item.id}: {item.headerName}</Typography>
            </Box>
          )
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default SearchBar;
