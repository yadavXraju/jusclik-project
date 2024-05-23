// @Page Onwer-Tarun Pandey
import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton, Box, Button, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import useOutsideClick from 'hooks/useClickOutside';

const Filter = ({ customFilterContainerStyle = {},
    customSelectedFilter = {}, customAvialbelFilter = {},
    customClearFilter = {}, applyFilter = 0,
    availableColumns
}) => {
    const { ref, isOpen, setIsOpen } = useOutsideClick(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilter, setSelectedFilter] = useState([]);

    const handleFilterSelected = (item) => {
        setIsOpen(false);
        if (!selectedFilter.includes(item))
            setSelectedFilter([...selectedFilter, item]);
    }

    const filterAvailableFields = () => {
        return isOpen ? availableColumns.filter((column) =>
            column.headerName.toLowerCase().includes(searchTerm.toLowerCase())
        ) : [];
    };

    const handleRemove = (itemToRemove) => {
        setSelectedFilter(selectedFilter.filter(item => item.id !== itemToRemove));
    };

   
    const style = {
        defaultFilterContainerStyle: {
            position: "relative",
            border: "1px solid #f0f5f8",
            zIndex: "2",
            width: "100%",
            height: "480px"
        },
        defaultSelectedFilter: {
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            top: '100px',
            height: "320px",
            width: "100%",
            overflowY: "auto",
            backgroundColor: "#eef2f629",
            zIndex: "3"
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
                            <item.filter key={item?.id} handleRemove={handleRemove} id={item?.id} selectedFilter={selectedFilter} />
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
                                <Typography variant="h5" sx={{ border: "1px solid #f5f8fa", height: "30px", cursor: "pointer" }}
                                    onClick={() => handleFilterSelected(item)}>{item.id}: {item.headerName}
                                </Typography>
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


