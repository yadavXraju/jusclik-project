import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton, Box, Grid, Typography, Button } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import useOutsideClick from 'hooks/useClickOutside';
import {
  FilterByEnquiryDate, FilterByEnquiryNo, FilterByStudentName,
  FilterByClass, FilterBySection
} from './filter-options';
import Sort from './sort';

const availableColumns = [
  {
    id: '001',
    field: 'enqNo',
    headerName: 'Enq No',
    filter: FilterByEnquiryNo
  },
  {
    id: '002',
    field: 'enqDate',
    headerName: 'Enq Date',
    filter: FilterByEnquiryDate
  },
  {
    id: '003',
    field: 'studentName',
    headerName: 'Student Name',
    filter: FilterByStudentName
  },
  {
    id: '004',
    field: 'class',
    headerName: 'Class',
    type: "multiselect",
    filter: FilterByClass
  },
  {
    id: '005',
    field: 'section',
    headerName: 'Section',
    filter: FilterBySection
  },
  {
    id: '006',
    field: 'classSection',
    headerName: 'Class Section',
    filter: FilterByEnquiryNo
  },
  {
    id: '007',
    field: 'gender',
    headerName: 'Gender',
    filter: FilterByEnquiryNo
  },
  {
    id: '008',
    field: 'birthDate',
    headerName: 'Birth Date',
    filter: FilterByEnquiryNo
  },
  {
    id: '009',
    field: 'age',
    headerName: 'Age (Today)',
    filter: FilterByEnquiryNo
  },
  {
    id: '010',
    field: 'address',
    headerName: 'Address (Complete)',
    filter: FilterByEnquiryNo
  },
  {
    id: '011',
    field: 'commPhone',
    headerName: 'Comm Phone (M)',
    filter: FilterByEnquiryNo
  },
  {
    id: '012',
    field: 'commEmail',
    headerName: 'Comm Email',
    filter: FilterByEnquiryNo
  },
  {
    id: '013',
    field: 'joinClass',
    headerName: 'Join Class',
    filter: FilterByEnquiryNo
  },
  {
    id: '014',
    field: 'concessionCategory',
    headerName: 'Concession Category',
    filter: FilterByEnquiryNo
  },
  {
    id: '015',
    field: 'fatherName',
    headerName: 'Father Name',
    filter: FilterByEnquiryNo
  },
  {
    id: '016',
    field: 'motherName',
    headerName: 'Mother Name',
    filter: FilterByEnquiryNo
  },
  {
    id: '017',
    field: 'nationality',
    headerName: 'Nationality',
    filter: FilterByEnquiryNo
  },
  {
    id: '018',
    field: 'religion',
    headerName: 'Religion',
    filter: FilterByEnquiryNo
  },
  {
    id: '019',
    field: 'previousSchool',
    headerName: 'Previous School',
    filter: FilterByEnquiryNo
  },
  {
    id: '020',
    field: 'lastGradeCompleted',
    headerName: 'Last Grade Completed',
    filter: FilterByEnquiryNo
  },
  {
    id: '021',
    field: 'guardianName',
    headerName: 'Guardian Name',
    filter: FilterByEnquiryNo
  },
  {
    id: '022',
    field: 'guardianRelationship',
    headerName: 'Guardian Relationship',
    filter: FilterByEnquiryNo
  },
  {
    id: '023',
    field: 'guardianPhone',
    headerName: 'Guardian Phone',
    filter: FilterByEnquiryNo
  },
  {
    id: '024',
    field: 'guardianEmail',
    headerName: 'Guardian Email',
    filter: FilterByEnquiryNo
  },
];


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState([]);
  const { ref, isOpen, setIsOpen } = useOutsideClick(false);

  const handleFilterSelected = (item) => {
    setIsOpen(false);
    setSelectedFilter([...selectedFilter, item]);
  }

  const filterAvailableFields = () => {
    return isOpen ? availableColumns.filter((column) =>
      column.headerName.toLowerCase().includes(searchTerm.toLowerCase())
    ) : [];
  };

  const marginBottom = window.innerWidth < 1200 ? "20px" : "0px"

  return (
    <Grid container spacing={4} sx={{ marginTop: "10px", marginLeft: "-24px",minHeight: 'calc(100vh - 400px)' }}>
      {/*Filter Section*/}
      <Grid xs={12} sm={12} md={12} lg={6} sx={{ border: "1px solid #e5ebef", backgroundColor: "#eef2f629", marginBottom: marginBottom }}>
        <Typography variant="h2" sx={{ margin: "20px 0px 20px 20px" }}>Filter</Typography>
        <Box sx={{ position: "relative", border: "1px solid #f0f5f8", zIndex: "2", width: "100%", minHeight: 'calc(100vh - 480px)' }} ref={ref} className="testf">
          <TextField
            variant="outlined"
            placeholder="Choose a Property..."
            sx={{ width: "100%", padding: "20px 20px 20px 20px" }}
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
          {/* Displaying Selected Filters */}
          <Box sx={{ display: "flex", flexDirection: "column", position: "absolute", top: "100px", width: "100%", overflowY: "auto", backgroundColor: "#eef2f629", zIndex: "3" }} className="scrollbar">
            {
              selectedFilter && selectedFilter.map((item) =>
                <item.filter key={item?.id} />
              )
            }
          </Box>
          {/* Displaying Available Fields */}
          {isOpen && <Box sx={{ width: "calc(100% - 20px)", height: "calc(100vh - 400px)", overflowY: 'auto', zIndex: "5", position: 'relative', backgroundColor: "white", paddingLeft: "20px" }} className="scrollbar">
            {filterAvailableFields().map((item) => (
              <Box
                key={item.id}
              >
                <Typography variant="h5" sx={{ border: "1px solid #f5f8fa", height: "30px", cursor: "pointer" }} onClick={() => handleFilterSelected(item)}>{item.id}: {item.headerName}</Typography>
              </Box>
            )
            )}
          </Box>}
        </Box>
        {/* Clear Filter Button */}
        <Box sx={{ marginTop:"auto",marginRight:"20px",height:"60px",display:"flex",justifyContent:"flex-end"}}>
          <Button sx={{marginTop:"auto",marginBottom:"auto",height:"40px"}} onClick={() => setSelectedFilter([])} variant="outlined">Clear Filter</Button>
        </Box>
      </Grid>
      {/* Sort Section */}
      <Grid xs={12} sm={12} md={12} lg={6} sx={{ border: "1px solid #e5ebef", backgroundColor: "#eef2f629", marginBottom: marginBottom }}>
        <Sort />
      </Grid>
    </Grid >
  );
};

export default SearchBar;
