// Page Owner: Suraj
// Description: Attendance Search Filter

import React from 'react';
import { Paper, Box, FormControl, InputLabel, Select, MenuItem, Button, useMediaQuery } from '@mui/material';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';
import ParameterizedDateComponent from 'components/ui/custom-input/DateComponent';
import ParameterizedAutoComplete from 'components/ui/custom-input/AutoComplete';

export default function SearchFilterBox({
  selectClass,
  selectSection,
  filteredSections,
  ClassList,
  SectionList,
  handleChange,
  handleSearchClick,

}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Paper sx={{ borderRadius: '30px' }}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', p: 2, gap: 1, justifyContent: isMobile ? 'center' : 'left' }}>
        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label={datePickerLabel}
            value={datePickerValue}
            openTo={datePickerOpenTo}
            views={datePickerViews}
            onChange={handleMonthChange}
            slots={{ openPickerIcon: CalendarMonthTwoToneIcon }}
            sx={{ minWidth: '250px' }}
          />
        </LocalizationProvider> */}
        <ParameterizedDateComponent   
        onChange={handleChange}  
        value={selectClass}
        label='Select Date'
        name="selectdate"
        />

        <ParameterizedAutoComplete  name='selectClass' onChange={handleChange} label='Select Class' />
        <FormControl sx={{ minWidth: 250 }}>
          <InputLabel id="class-select-label">Select Class</InputLabel>
          <Select
            name="class"
            labelId="class-select-label"
            id="class-select"
            value={selectClass}
            label="Select Class"
            onChange={handleChange}
          >
            {ClassList.map((classItem) => (
              <MenuItem key={classItem.value} value={classItem.value}>
                {classItem.class}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 250 }}>
          <InputLabel id="section-select-label">Select Section</InputLabel>
          <Select
            name="section"
            labelId="section-select-label"
            id="section-select"
            value={selectSection}
            label="Select Section"
            onChange={handleChange}
          >
            {(selectClass && filteredSections.length > 0 ? filteredSections : SectionList).map((sectionItem) => (
              <MenuItem key={sectionItem.value} value={sectionItem.value}>
                {sectionItem.section}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        
        <Button
          variant="contained"
          startIcon={<SearchTwoToneIcon />}
          sx={{ height: '50px', borderRadius: '12px', width: isMobile ? '250px' : '100px' }}
          onClick={handleSearchClick}
        >
          Search
        </Button>
       
      </Box>
    </Paper>
  );
}

SearchFilterBox.propTypes = {
  theme: PropTypes.object.isRequired, // Theme object from Material-UI
  selectClass: PropTypes.string.isRequired,
  selectSection: PropTypes.string.isRequired,
  filteredSections: PropTypes.array.isRequired,
  ClassList: PropTypes.array.isRequired,
  SectionList: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSearchClick: PropTypes.func.isRequired,
  datePickerLabel: PropTypes.string.isRequired,
  datePickerValue: PropTypes.instanceOf(Date).isRequired,
  datePickerOpenTo: PropTypes.oneOf(['month']).isRequired,
  datePickerViews: PropTypes.arrayOf(PropTypes.oneOf(['month', 'year'])).isRequired,
  handleMonthChange: PropTypes.func.isRequired
};
