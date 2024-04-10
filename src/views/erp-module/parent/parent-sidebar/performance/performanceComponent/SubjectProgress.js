import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

// linear progressbar showing percentage
export default function LinearProgressWithLabel(props) {
  const { ...otherProps } = props;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1,paddingBottom:"5px" }}>
        <LinearProgress
          variant="determinate"
          {...otherProps}
     
       
        />
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired, // Make sure to include index in propTypes
};

