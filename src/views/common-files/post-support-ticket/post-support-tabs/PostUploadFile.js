import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Button,Grid} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Chip from '@mui/material/Chip';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function InputFileUpload() {
  const [selectedFiles, setSelectedFiles] = React.useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleDelete = (fileToDelete) => () => {
    setSelectedFiles((files) => files.filter((file) => file !== fileToDelete));
  };

  return (
    <div>
        <Grid sx={{paddingTop:'20px',paddingLeft:'7px'}}>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        Upload file
        <VisuallyHiddenInput type="file" multiple onChange={handleFileChange} />
      </Button>
      </Grid>
      <div style={{ marginTop: '10px' }}>
        {selectedFiles.map((file) => (
          <Chip
            key={file.name}
            label={file.name}
            onDelete={handleDelete(file)}
            style={{ margin: '4px' }}
          />
        ))}
      </div>
    </div>
  );
}
