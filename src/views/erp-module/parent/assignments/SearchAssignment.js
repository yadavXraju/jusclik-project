import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import Autocomplete from '@mui/material/Autocomplete';
import { data } from './AssignmentData';
import { Grid } from '@mui/material';
import DateComponent from 'components/ui/custom-input/DateComponent';


const uniqueSubjects = [...new Set(data.map((item) => item.name))];
const subjects = uniqueSubjects.map((subject) => ({ title: subject }));

const SearchAssignment = ({ onSearch }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [searchText, setSearchText] = useState('');

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleSubjectChange = (event, newValue) => {
    setSelectedSubject(newValue);
  };

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    const searchCriteria = {
      startDate,
      endDate,
      subject: selectedSubject ? selectedSubject.title : '',
      searchText
    };

    onSearch(searchCriteria);
  };

  return (
    <Box 
      component="form"
      sx={{
        display: 'flex',
        alignItems: 'end',
        justifyContent: 'start',
        gap: 2,
        borderRadius: '30px',
        padding: '20px',
        mb: '15px',
        backgroundColor: '#fff',
        
      }}
      noValidate
      autoComplete="off"
    >
      <Grid container spacing={2} sx={{ paddingLeft: '20px', paddingTop: '10px'  }}>
        <Grid lg={2}    sm={12} md={6} xs={12} sx={{'& .css-4jnixx-MuiStack-root': {display:'flex' , flexDirection:'column'}, paddingRight:'10px' ,'& .MuiTextField-root': {minWidth:'auto !important'} }}>
          {/* <LocalizationProvider dateAdapter={AdapterDayjs}  >

              <DatePicker
                label="From"
                value={startDate}
                onChange={handleStartDateChange}
                slots={{
                  openPickerIcon: CalendarMonthTwoToneIcon
                }}
              

              />
           
          </LocalizationProvider> */}
          <DateComponent 
           value={startDate}
           label="From"
           onChange={handleStartDateChange}
          />
        </Grid>

        <Grid lg={2} sm={12} md={6} xs={12} sx={{'& .css-4jnixx-MuiStack-root': {display:'flex' , flexDirection:'column'},paddingRight:'10px' , '& .MuiTextField-root': {minWidth:'auto !important'}}}>
          {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer component={['DatePicker']}>
              <DatePicker
                label="To"
                value={endDate}
                onChange={handleEndDateChange}
                slots={{
                  openPickerIcon: CalendarMonthTwoToneIcon
                }}
              />
            </DemoContainer>
          </LocalizationProvider> */}
            <DateComponent 
           value={startDate}
           label="From"
           onChange={handleEndDateChange}
          />
        </Grid>

        {/*Commented for responsive */}

        {/*<LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer component={['DatePicker']}>
           <DatePicker label="From" value={startDate} onChange={handleStartDateChange} slots={{
            openPickerIcon: CalendarMonthTwoToneIcon
          }} />
          
          <DatePicker label="To" value={endDate} onChange={handleEndDateChange} slots={{
            openPickerIcon: CalendarMonthTwoToneIcon
          }} />
        </DemoContainer>
        </LocalizationProvider> */}

        <Grid lg={2} sm={12} md={6} xs={12} sx={{ marginTop: '6px' ,paddingRight:'10px' }}>
          <Autocomplete
            id="highlights-demo"
            options={subjects}
            getOptionLabel={(option) => option.title}
            onChange={handleSubjectChange}
            renderInput={(params) => (
              <TextField {...params} label="Subjects" margin="normal" sx={{ marginBottom: '0px', marginTop: '0px' }} />
            )}
            renderOption={(props, option, { inputValue }) => {
              const parts = option.title.split(new RegExp(`(${inputValue})`, 'gi'));

              return (
                <li {...props}>
                  <div>
                    {parts.map((part, index) => (
                      <span
                        key={index}
                        style={{
                          fontWeight: part.toLowerCase() === inputValue.toLowerCase() ? 700 : 400
                        }}
                      >
                        {part}
                      </span>
                    ))}
                  </div>
                </li>
              );
            }}
          />
        </Grid>

        <Grid lg={2} sm={12} md={6} xs={12} sx={{paddingRight:'10px', paddingTop:'7px'}}>
          <TextField id="outlined-search" label="Search" type="search" value={searchText} onChange={handleSearchTextChange} fullWidth />
        </Grid>

        <Grid lg={2} sm={12} xs={12} sx={{paddingTop:'8px' }}>
          <Button
            variant="contained"
            startIcon={<SearchTwoToneIcon />}
            sx={{ height: '48px', borderRadius: '12px' }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </Box>
   
  );
};

export default SearchAssignment;
