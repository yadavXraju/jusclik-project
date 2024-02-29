import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const ParamAttachement = ({ rootSx = { display: "flex", flexDirection: "row", gap: "5px" }, color = 'primary', label = "" }) => {
    return (
        <Box sx={rootSx}>
            <AttachFileIcon color={color} sx={{ width: "20px", height: "20px" }} />
            <Box sx={{display:"flex"}}>            
                <AddIcon color={color} sx={{ width: "15px", height: "15px", marginTop: "3px" }} />
                <Typography variant="body2" color={color}>
                    {label}
                </Typography>
            </Box>
            <InfoOutlinedIcon sx={{color:"#bdbdbd"}} />
        </Box>
    )
}

export default ParamAttachement