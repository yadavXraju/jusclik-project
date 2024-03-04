import React from 'react';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ 
    placeholder = "Search...",
    onChange,
    onSearch,
    inputProps = {},
    buttonProps = {},
    rootSx = {},
    inputSx = { 
    },
    buttonSx = {},
    id="inputbase"
}) => {
    const handleChange = (event) => {
        if (onChange) {
            onChange(event);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && onSearch) {
            onSearch();
        }
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', ...rootSx}}>
            <InputBase
                placeholder={placeholder}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                sx={{flex: 1,border:'1px solid #a8adb1',borderRadius: '10px 0px 0px 10px', height: '50px',backgroundColor:'#f8fafc',borderRight:'none',paddingLeft:'10px', ...inputSx,}}
                inputProps={inputProps}
                id={id}
            />
            <IconButton onClick={onSearch} aria-label="search" sx={{border:'1px solid #a8adb1',borderRadius: '0px 8px 8px 0px',height: '50px',backgroundColor:'#f8fafc',borderLeft:'none',...buttonSx,}} {...buttonProps}>
                <SearchIcon />
            </IconButton>
        </Box>
    );
};

export default SearchBar;
