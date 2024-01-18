import React from 'react'
import AttachmentIcon from '@mui/icons-material/Attachment';
import { Tooltip , IconButton } from '@mui/material';


const Attachment = ({handleOpenDialog}) => {

 


  return (
    <>
        <Tooltip title="Attachment">
              <IconButton sx={{padding:'0'}}onClick={handleOpenDialog}>
                <AttachmentIcon />
              </IconButton>
        </Tooltip>
    </>
  )
}

export default Attachment