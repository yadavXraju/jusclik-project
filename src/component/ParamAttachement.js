import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {Box,FormLabel, Input,Paper,IconButton,Typography} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ParamAttachement = ({ rootSx = {}, color = 'primary', label = "" }) => {
    const [attachments, setAttachments] = useState([]);
    const handleFileChange = (e) => {
        const selectedFiles = e.target.files;
        setAttachments([...attachments, ...selectedFiles]);
    };

    const handleRemoveAttachment = (index) => {
        const updatedAttachments = [...attachments];
        updatedAttachments.splice(index, 1);
        setAttachments(updatedAttachments);
    };

    const formatBytes = (bytes) => {
        if (bytes === 0) return '0 KB';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = parseInt(Math.floor(Math.log(bytes) / Math.log(k)));
        return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
    };

    return (
        <Box sx={rootSx}>
            <Box sx={{display:"flex"}}>
            <FormLabel sx={{display:"flex"}}>
                <AttachFileIcon color={color} sx={{ width: "20px", height: "20px" }} />
                <Input
                    id="file-input"
                    type="file"
                    sx={{ display: 'none' }}
                    onChange={handleFileChange}
                    aria-describedby="file-error"
                />
                
                    <AddIcon color={color} sx={{ width: "15px", height: "15px", marginTop: "3px" }} />
                    <Typography variant="body2" color={color}>
                        {label}
                    </Typography>
            </FormLabel>
            <InfoOutlinedIcon sx={{ color: "#bdbdbd" }} />
            </Box>
            {attachments.length > 0 && (
              <Box>
                <ul style={{ listStyleType: 'none' }}>
                  {attachments.map((file, index) => (
                    <li key={index} style={{ display: 'flex' }}>
                      <Paper
                        sx={{
                          backgroundColor: '#90caf9',
                          paddingX: '10px',
                          marginY: '3px',
                          justifyContent: 'space-between',
                        }}
                      >
                        {file.name}- ({formatBytes(file.size)})
                        <IconButton size="small" onClick={() => handleRemoveAttachment(index)}>
                          <CloseIcon color="grey" />
                        </IconButton>
                      </Paper>
                    </li>
                  ))}
                </ul>
              </Box>
            )}
        </Box>
    )
}

export default ParamAttachement