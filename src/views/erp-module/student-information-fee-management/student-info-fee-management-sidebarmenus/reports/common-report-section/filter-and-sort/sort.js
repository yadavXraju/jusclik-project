import React, { useState } from 'react'
import { Box, Grid } from '@mui/material';
import { TextField, InputAdornment, IconButton, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import useOutsideClick from 'hooks/useClickOutside';

const availableColumns = [
    {
        id: '001',
        field: 'enqNo',
        headerName: 'Enq No',
    },
    {
        id: '002',
        field: 'enqDate',
        headerName: 'Enq Date',
    },
    {
        id: '003',
        field: 'studentName',
        headerName: 'Student Name',
    },
    {
        id: '004',
        field: 'class',
        headerName: 'Class',
        type: "multiselect",
    },
    {
        id: '005',
        field: 'section',
        headerName: 'Section',
    },
    {
        id: '006',
        field: 'classSection',
        headerName: 'Class Section',
    },
    {
        id: '007',
        field: 'gender',
        headerName: 'Gender',
    },
    {
        id: '008',
        field: 'birthDate',
        headerName: 'Birth Date',
    },
    {
        id: '009',
        field: 'age',
        headerName: 'Age (Today)',
    },
    {
        id: '010',
        field: 'address',
        headerName: 'Address (Complete)',
    },
    {
        id: '011',
        field: 'commPhone',
        headerName: 'Comm Phone (M)',
    },
    {
        id: '012',
        field: 'commEmail',
        headerName: 'Comm Email',
    },
    {
        id: '013',
        field: 'joinClass',
        headerName: 'Join Class',
    },
    {
        id: '014',
        field: 'concessionCategory',
        headerName: 'Concession Category',
    },
    {
        id: '015',
        field: 'fatherName',
        headerName: 'Father Name',
    },
    {
        id: '016',
        field: 'motherName',
        headerName: 'Mother Name',
    },
    {
        id: '017',
        field: 'nationality',
        headerName: 'Nationality',
    },
    {
        id: '018',
        field: 'religion',
        headerName: 'Religion',
    },
    {
        id: '019',
        field: 'previousSchool',
        headerName: 'Previous School',
    },
    {
        id: '020',
        field: 'lastGradeCompleted',
        headerName: 'Last Grade Completed',
    },
    {
        id: '021',
        field: 'guardianName',
        headerName: 'Guardian Name',
    },
    {
        id: '022',
        field: 'guardianRelationship',
        headerName: 'Guardian Relationship',
    },
    {
        id: '023',
        field: 'guardianPhone',
        headerName: 'Guardian Phone',
    },
    {
        id: '024',
        field: 'guardianEmail',
        headerName: 'Guardian Email',
    },
];

const sortingOrderOption = [
    {
        id: 1,
        headerName: "Ascending",
    },
    {
        id: 2,
        headerName: "Descending",
    }
]

const Sort = () => {
    const [sortProperty, setSortProperty] = useState("Choose a Property...");
    const [sortingOrder, setSortingOrder] = useState("Ascending ...");
    const { ref, isOpen, setIsOpen } = useOutsideClick(false);
    const outsideClick = useOutsideClick(false);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSortProperty = (item) => {
        setIsOpen(false);
        setSortProperty(item);
    }

    const handleSortOrder = (item) => {
        outsideClick.setIsOpen(false);
        setSortingOrder(item?.headerName);
    }

    const filterAvailableFields = () => {
        return isOpen ? availableColumns.filter((column) =>
            column.headerName.toLowerCase().includes(searchTerm.toLowerCase())
        ) : [];
    };

    return (
        <>
         <Typography variant="h2" sx={{ margin:"20px 0px 20px 20px"}}>Sort</Typography>
            <Grid container spacing={0} sx={{ border: "1px solid #f0f5f8", width: "100%", }}>
                {/* Filter Based On Property */}
                <Grid item xs={12} sm={12} md={6} ref={ref} sx={{ width: "350px" }}>
                    <TextField
                        variant="outlined"
                        placeholder={sortProperty}
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
                    {
                        isOpen && <Box sx={{ marginTop: "-15px", width: "calc(100% - 20px)", height: "calc(100vh - 400px)", overflowY: 'auto', backgroundColor: "white", paddingLeft: "20px", zIndex: "5" }} className="scrollbar">
                            {filterAvailableFields().map((item) => (
                                <Box key={item.id}>
                                    <Typography variant="h5" sx={{ border: "1px solid #f5f8fa", height: "30px", cursor: "pointer" }} onClick={() => handleSortProperty(item?.headerName)}>{item.headerName}</Typography>
                                </Box>
                            )
                            )}
                        </Box>
                    }
                </Grid>
                {/* Sorting Order(Ascending and Descending) */}
                <Grid item xs={12} sm={12} md={6} ref={outsideClick.ref} sx={{ width: "350px" }}>
                    <TextField
                        variant="outlined"
                        placeholder={sortingOrder}
                        sx={{ width: "100%", padding: "20px 20px 20px 20px" }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton>
                                        <ArrowDropDownIcon onClick={() => outsideClick.setIsOpen1(true)} />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        onClick={() => outsideClick.setIsOpen(true)}
                    />
                    {
                        outsideClick.isOpen && <Box sx={{ marginTop: "-15px", width:"calc(100% - 20px)", height: "calc(100vh - 400px)",paddingLeft:"20px",overflowY: 'auto', backgroundColor: "white", zIndex: "5" }} className="scrollbar">
                            {
                                sortingOrderOption.map((item) => (
                                    <Box key={item.id}>
                                        <Typography variant="h5" sx={{ border: "1px solid #f5f8fa", height: "30px", cursor: "pointer" }} onClick={() => handleSortOrder(item)}>{item.headerName}</Typography>
                                    </Box>
                                )
                                )
                            }
                        </Box>
                    }
                </Grid>
            </Grid>
        </>
    )
}

export default Sort;

