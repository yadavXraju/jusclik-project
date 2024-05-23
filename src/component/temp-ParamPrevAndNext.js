//@Page Owner-Tarun Pandey
import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

const ParamPrevAndNext = ({value,data,setCurrValue,customStyle}) => {
    const handleFirst = () => {
        setCurrValue(data[0]);
      };

      const handlePrevious = (index) => {
        const finalIndex = index == 0 ? data.length - 1 : index - 1;
        setCurrValue(data[finalIndex]);
      };

      const handleNext = (index) => {
        const finalIndex = index == data.length - 1 ? 0 : index + 1;
        setCurrValue(data[finalIndex]);
      };

      const handleLast = () => {
        setCurrValue(data[data.length - 1]);
      };

    return (
        <>
            <Box sx={customStyle}>
                <IconButton sx={{ p: 0 }} id="first" onClick={() => handleFirst()}>
                    <SkipPreviousIcon sx={{ fontSize: '25px' }} />
                </IconButton>
                <IconButton sx={{ p: 0 }} id="previous" onClick={() => handlePrevious(value.index)}>
                    <NavigateBeforeIcon sx={{ fontSize: '25px' }} />
                </IconButton>
                <IconButton sx={{ p: 0 }} id="next" onClick={() => handleNext(value.index)}>
                    <NavigateNextIcon sx={{ fontSize: '25px' }} />
                </IconButton>
                <IconButton sx={{ p: 0 }} id="last" onClick={() => handleLast()}>
                    <SkipNextIcon sx={{ fontSize: '25px' }} />
                </IconButton>
            </Box>
        </>
    )
}

export default ParamPrevAndNext;