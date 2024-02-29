import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const ParamAttachement = ({rootSx={display:"flex",flexDirection:"row",gap:"5px"},color='primary',label=""}) => {
    return (
        <Box sx={rootSx}>
            <AttachFileIcon color={color} />
            <AddIcon color={color} />
            <Typography variant="body2" color={color}>
              {label}
            </Typography>
        </Box>
    )
}

export default ParamAttachement