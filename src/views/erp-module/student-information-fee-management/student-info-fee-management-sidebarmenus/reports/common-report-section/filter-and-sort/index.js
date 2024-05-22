// @Page Onwer-Tarun Pandey
import React from 'react';
import { Grid, Typography } from '@mui/material';
import TestFilter from './filter-options/TestFilter'
import { TextField, useMediaQuery } from '@mui/material';
import {
  FilterByEnquiryDate, FilterByEnquiryNo, FilterByStudentName,
  FilterByClass, FilterBySection
} from './filter-options/index';
import { InputAdornment, IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import useOutsideClick from 'hooks/useClickOutside';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const availableColumns = [
  {
    id: '001',
    field: 'enqNo',
    headerName: 'Enq No',
    filter: FilterByEnquiryNo,

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

// const sortingOrderOption = [
//   {
//     id: 1,
//     headerName: "Ascending",
//   },
//   {
//     id: 2,
//     headerName: "Descending",
//   }
// ]

const SelectedFilterComponent = ({ selectedFilter }) => {
  const selectSortProperty = selectedFilter;
  const isSmallerThan1200px = useMediaQuery('(max-width: 1200px)');
  const inputpadding = isSmallerThan1200px < 1200 ? "20px" : "10px";
  const outsideClick = useOutsideClick(false);
  return (
    <Grid container spacing={1} sx={{
      overflowY: "auto", position: "absolute",
      top: "0px", zIndex: "2", width: "100%"
    }} className="scrollbar">
      {
        selectSortProperty && selectSortProperty.map((item) =>
          <Grid item xs={12} sm={12} md={12} lg={12} key={item}
            sx={{ height:'108px', borderBottom: "1px solid #e5ebef" }}>
            <Grid item xs={12} sm={12} md={6} lg={12} sx={{display:"flex",justifyContent:"flex-end"}}>
              <CloseOutlinedIcon sx={{color:"rgb(35 32 41 / 38%)"}}/>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                {/* sorting property*/}
                <TextField
                  variant="outlined"
                  placeholder={item?.headerName}
                  sx={{ width: "100%", padding: `0px ${inputpadding} 0px 20px` }}
                />
              </Grid>

              {/* sorting order */}
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  variant="outlined"
                  placeholder={item?.order}
                  sx={{ width: "100%", padding: `0px 20px 0px ${inputpadding}` }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton>
                          <ArrowDropDownIcon onClick={() => { outsideClick.setIsOpen(!isOpen) }} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  onClick={() => { outsideClick.setIsOpen(true) }}
                />
                {/* {outsideClick.isOpen && sortPropertyOpen == item?.id &&
                  <Box sx={{
                    position: "absolute", top: "80px", width: "calc(100% - 20px)", height: "150px",
                    paddingLeft: "20px", paddingRight: "10px", overflowY: 'auto', backgroundColor: "white",
                    zIndex: "3"
                  }} className="scrollbar" ref={outsideClick.ref}>
                    {
                      sortingOrderOption && sortingOrderOption.map((sortItem) => (
                        <Box key={sortItem.id}>
                          <Typography variant="h5" sx={{ border: "1px solid #f5f8fa", height: "30px", cursor: "pointer" }
                          }
                            onClick={() => handleSortOrder(item?.id, sortItem.headerName)}>
                            {sortItem.headerName}</Typography>
                        </Box>
                      )
                      )
                    }
                  </Box>
                } */}
              </Grid >
            </Grid>
          </Grid>
        )}
    </Grid>
  )
}

const availableColumns2 = [
  {
    id: '001',
    field: 'enqNo',
    headerName: 'Enq No',
    filter: SelectedFilterComponent,

  },
  {
    id: '002',
    field: 'enqDate',
    headerName: 'Enq Date',
    filter: SelectedFilterComponent
  },
  {
    id: '003',
    field: 'studentName',
    headerName: 'Student Name',
    filter: SelectedFilterComponent
  },
  {
    id: '004',
    field: 'class',
    headerName: 'Class',
    type: "multiselect",
    filter: SelectedFilterComponent
  },
  {
    id: '005',
    field: 'section',
    headerName: 'Section',
    filter: SelectedFilterComponent
  },
  {
    id: '006',
    field: 'classSection',
    headerName: 'Class Section',
    filter: SelectedFilterComponent
  },
  {
    id: '007',
    field: 'gender',
    headerName: 'Gender',
    filter: SelectedFilterComponent
  },
  {
    id: '008',
    field: 'birthDate',
    headerName: 'Birth Date',
    filter: SelectedFilterComponent
  },
  {
    id: '009',
    field: 'age',
    headerName: 'Age (Today)',
    filter: SelectedFilterComponent
  },
  {
    id: '010',
    field: 'address',
    headerName: 'Address (Complete)',
    filter: SelectedFilterComponent
  },
  {
    id: '011',
    field: 'commPhone',
    headerName: 'Comm Phone (M)',
    filter: SelectedFilterComponent
  },
  {
    id: '012',
    field: 'commEmail',
    headerName: 'Comm Email',
    filter: SelectedFilterComponent
  },
  {
    id: '013',
    field: 'joinClass',
    headerName: 'Join Class',
    filter: SelectedFilterComponent
  },
  {
    id: '014',
    field: 'concessionCategory',
    headerName: 'Concession Category',
    filter: SelectedFilterComponent
  },
  {
    id: '015',
    field: 'fatherName',
    headerName: 'Father Name',
    filter: SelectedFilterComponent
  },
  {
    id: '016',
    field: 'motherName',
    headerName: 'Mother Name',
    filter: SelectedFilterComponent
  },
  {
    id: '017',
    field: 'nationality',
    headerName: 'Nationality',
    filter: SelectedFilterComponent
  },
  {
    id: '018',
    field: 'religion',
    headerName: 'Religion',
    filter: SelectedFilterComponent
  },
  {
    id: '019',
    field: 'previousSchool',
    headerName: 'Previous School',
    filter: SelectedFilterComponent
  },
  {
    id: '020',
    field: 'lastGradeCompleted',
    headerName: 'Last Grade Completed',
    filter: SelectedFilterComponent
  },
  {
    id: '021',
    field: 'guardianName',
    headerName: 'Guardian Name',
    filter: SelectedFilterComponent
  },
  {
    id: '022',
    field: 'guardianRelationship',
    headerName: 'Guardian Relationship',
    filter: SelectedFilterComponent
  },
  {
    id: '023',
    field: 'guardianPhone',
    headerName: 'Guardian Phone',
    filter: SelectedFilterComponent
  },
  {
    id: '024',
    field: 'guardianEmail',
    headerName: 'Guardian Email',
    filter: SelectedFilterComponent
  },
];


const FilterComponnet = () => {
  return (
    <TestFilter availableColumns={availableColumns} />
  )
}


const SortComponent = () => {
  return (
    <TestFilter availableColumns={availableColumns2} />
  )
}



const SearchBar = () => {
  const marginBottom = window.innerWidth < 1200 ? "20px" : "0px"
  return (
    <Grid container spacing={4} sx={{ marginTop: "10px", marginLeft: "-24px", minHeight: 'calc(100vh - 400px)' }}>
      {/*Filter Section*/}
      <Grid xs={12} sm={12} md={12} lg={6} sx={{ border: "1px solid #e5ebef", backgroundColor: "#eef2f629", marginBottom: marginBottom }}>
        <Typography variant="body1" sx={{ margin: "20px 0px 20px 20px", fontWeight: "bold" }}>Filter</Typography>
        <Typography variant="body1" sx={{ margin: "20px 0px 20px 20px" }}>You can select one or multiple property to filter data.</Typography>
        <FilterComponnet />
      </Grid>
      {/* Sort Section */}
      <Grid xs={12} sm={12} md={12} lg={6} sx={{ border: "1px solid #e5ebef", backgroundColor: "#eef2f629", marginBottom: marginBottom }}>
        <Typography variant="body1" sx={{ margin: "20px 0px 20px 20px", fontWeight: "bold" }}>Sort</Typography>
        <Typography variant="body1" sx={{ margin: "20px 0px 20px 20px" }}>You can select one or multiple property to Sort data.</Typography>
        <SortComponent />
      </Grid>
    </Grid >
  );
};

export default SearchBar;
