import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton, Box, Button, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import useOutsideClick from 'hooks/useClickOutside';
import {
    FilterByEnquiryDate, FilterByEnquiryNo, FilterByStudentName,
    FilterByClass, FilterBySection
} from './filter-options';

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

const Filter = ({ customFilterContainerStyle = {}, customSelectedFilter = {}, customAvialbelFilter = {}, customClearFilter = {}, applyFilter = 0 }) => {
    const { ref, isOpen, setIsOpen } = useOutsideClick(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilter, setSelectedFilter] = useState([]);

    const handleFilterSelected = (item) => {
        setIsOpen(false);
        setSelectedFilter([...selectedFilter, item]);
    }

    const filterAvailableFields = () => {
        return isOpen ? availableColumns.filter((column) =>
            column.headerName.toLowerCase().includes(searchTerm.toLowerCase())
        ) : [];
    };



    const style = {
        defaultFilterContainerStyle: {
            position: "relative",
            border: "1px solid #f0f5f8",
            zIndex: "2", 
            width: "100%",
            height:"480px"
        },
        defaultSelectedFilter: {
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            top: "100px",
            width: "100%",
            overflowY: "auto",
            backgroundColor: "#eef2f629", zIndex: "3"
        },
        defualtAvialbelFilter: {
            width: "calc(100% - 20px)",
            height: "340px",
            overflowY: 'auto',
            zIndex: "5",
            position: 'relative',
            backgroundColor: "white",
            paddingLeft: "20px"
        },
        defaultClearFilter: {
            position: "absolute",
            width: "100%",
            top: "420px",
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: "20px",
            height: "60px",
            borderTop: "1px solid #f0f5f8",
            alignItems: "center", gap: "20px"
        },
    }

    const filterContainerStyle = Object.keys(customFilterContainerStyle).length === 0
        ? style?.defaultFilterContainerStyle
        : customFilterContainerStyle;

    const selectedFilterStyle = Object.keys(customSelectedFilter).length === 0
        ? style?.defaultSelectedFilter
        : customSelectedFilter;

    const avialbelFilterStyle = Object.keys(customAvialbelFilter).length === 0
        ? style?.defualtAvialbelFilter
        : customAvialbelFilter;

    const clearFilterStyle = Object.keys(customClearFilter).length === 0
        ? style?.defaultClearFilter
        : customClearFilter;

    return (
        <>
            <Box sx={filterContainerStyle} ref={ref}>
                {/* Search DropDown */}
                <TextField
                    variant="outlined"
                    placeholder="Choose a Property..."
                    sx={{ width: "100%", padding: "20px 20px 0px 20px", zIndex: "2" }}
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
                <Box sx={selectedFilterStyle} className="scrollbar">
                    {
                        selectedFilter && selectedFilter.map((item) =>
                            <item.filter key={item?.id} />
                        )
                    }
                </Box>

                {/* Displaying Available Fields */}
                {
                    isOpen && <Box sx={avialbelFilterStyle} className="scrollbar">
                        {filterAvailableFields().map((item) => (
                            <Box
                                key={item.id}
                            >
                                <Typography variant="h5" sx={{ border: "1px solid #f5f8fa", height: "30px", cursor: "pointer" }} onClick={() => handleFilterSelected(item)}>{item.id}: {item.headerName}</Typography>
                            </Box>
                        )
                        )}
                    </Box>
                }

                {/*Clear Filter Button*/}
                <Box sx={clearFilterStyle}>
                    {applyFilter == 1 && (<Button sx={{ height: "40px" }} onClick={() => setSelectedFilter()} variant="outlined">Apply Filter</Button>)}
                    <Button sx={{ height: "40px" }} onClick={() => setSelectedFilter([])} variant="outlined">Clear Filter</Button>
                </Box>
            </Box>
        </>
    )
}

export default Filter;


