import React from 'react';
import { Paper, Box, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import PropTypes from 'prop-types';

export default function SearchFilterBox({
  selectClass,
  selectSection,
  filteredSections,
  ClassList,
  SectionList,
  handleChange,
  handleSearchClick,
  datePickerLabel,
  datePickerValue,
  datePickerOpenTo,
  datePickerViews,
  handleMonthChange 
}) {
  return (
    <Paper sx={{ borderRadius: '30px' }}>
      <Box sx={{ display: 'flex',flexWrap:'wrap', alignItems: 'baseline', p: 2, gap:1 }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label={datePickerLabel}
            value={datePickerValue}
            openTo={datePickerOpenTo}
            views={datePickerViews}
            onChange={handleMonthChange}
            slots={{ openPickerIcon: CalendarMonthTwoToneIcon }}
            sx={{ minWidth: '250px' }}
          />
        </LocalizationProvider>
        <FormControl sx={{  minWidth: 250 }}>
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
          sx={{ height: '50px', borderRadius: '12px', margin: '8px' }}
          onClick={handleSearchClick}
        >
          Search
        </Button>
      </Box>
    </Paper>
  );
}

SearchFilterBox.propTypes = {
    selectClass: PropTypes.string.isRequired, // The selected class.
    selectSection: PropTypes.string.isRequired, // The selected section.
    filteredSections: PropTypes.array.isRequired, // The list of filtered sections.
    ClassList: PropTypes.array.isRequired, // The list of available classes.
    SectionList: PropTypes.array.isRequired, // The list of available sections.
    handleChange: PropTypes.func.isRequired, // Function to handle changes in class or section selection.
    handleSearchClick: PropTypes.func.isRequired, // Function to handle the search button click event.
    datePickerLabel: PropTypes.string.isRequired, // The label for the date picker.
    datePickerValue: PropTypes.instanceOf(Date).isRequired, // The value of the date picker.
    datePickerOpenTo: PropTypes.oneOf(['month']).isRequired, // The initial view for the date picker ('month' or 'year').
    datePickerViews: PropTypes.arrayOf(PropTypes.oneOf(['month', 'year'])).isRequired, // The views available for the date picker ('month', 'year').
    handleMonthChange: PropTypes.func.isRequired // Function to handle month changes in the date picker.
  };
