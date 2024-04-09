import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextArea from 'antd/es/input/TextArea';
import { Box, Button } from '@mui/material';
import Grid from '@mui/system/Unstable_Grid/Grid';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';

function AssetReplacementForm() {
  const [assetName, setassetName] = React.useState('');

  const handleChange = (event) => {
    setassetName(event.target.value);
  };

const [selectedFiles, setSelectedFiles] = React.useState([]);

const handleFileChange = (event) => {
  const files = Array.from(event.target.files);
  setSelectedFiles(files);
};

  return (
    <>
      <form>
        <Box mt={2} mb={1}>
          <FormControl fullWidth size='small'>
            <InputLabel id="assets-select-label">Asset Name</InputLabel>
            <Select labelId="assets-select-label" id="asset-select" value={assetName} label="Asset Name" onChange={handleChange}>
              <MenuItem value={10}>Asset 1</MenuItem>
              <MenuItem value={20}>Asset 2</MenuItem>
              <MenuItem value={30}>Asset 3</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box p={0.5}>Asset Detail</Box>
        <Box mb={1} bgcolor={'#f8fafc'} sx={{ border: '1px solid #ccc' }}>
          <Grid container spacing={1} p={2}>
            <Grid item xs={6} sm={4} lg={4}>
              <Box fontSize={10} color={'#8b8484'}>
                ASSET NAME
              </Box>
              <Box fontSize={14}>Asset 1</Box>
            </Grid>
            <Grid item xs={6} sm={4} lg={4}>
              <Box fontSize={10} color={'#8b8484'}>
                ASSET ID
              </Box>
              <Box fontSize={14}>001</Box>
            </Grid>
            <Grid item xs={6} sm={4} lg={4}>
              <Box fontSize={10} color={'#8b8484'}>
                ASSIGEND ON
              </Box>
              <Box fontSize={14}>01/02/2024</Box>
            </Grid>
            <Grid item xs={6} sm={4} lg={4}>
              <Box fontSize={10} color={'#8b8484'}>
                ASSET CATEGORY AND TYPE
              </Box>
              <Box fontSize={14}>Category - Asset 1</Box>
            </Grid>
          </Grid>
        </Box>

        <Box mb={2}>
          <Box p={0.5}>Describe Your Requirement in Detail</Box>
          <TextArea rows={4} placeholder="Enter your text here..." fullWidth variant="outlined" />
        </Box>

        <Button component="label" role={undefined} startIcon={<AttachFileOutlinedIcon />}>
          Upload Files
          <input type="file" style={{ display: 'none' }} onChange={handleFileChange} multiple />
        </Button>
        {selectedFiles.length > 0 && (
          <Box >
              {selectedFiles.map((file, index) => (
                <Box p={1} m={.5} bgcolor={'#f8fafc'} key={index} >{file.name}</Box>
              ))}
          </Box>
        )}

        <Box sx={{ padding: 2}}>
          <Button type="submit" variant="contained">
            Submit
          </Button>
          <Button type="submit">Cancel</Button>
        </Box>
      </form>
    </>
  );
}

export default AssetReplacementForm;
