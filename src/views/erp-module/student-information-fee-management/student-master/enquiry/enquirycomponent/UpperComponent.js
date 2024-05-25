import React,{useState} from 'react'
import { Paper,Box,Avatar,Grid,Chip,IconButton,TextField,MenuItem,Autocomplete,FormControl,InputLabel,Select } from '@mui/material';
import AvatarImage from '../../../../../../../assets/images/avatar.png';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import { hundredOptions } from './StudentData';


const UpperComponent = () => {
    const [value, setValue] = useState(hundredOptions[0]);
    const [inputValue, setInputValue] = useState('');
    const [template, setTemplate] = useState('');
    const [section, setSection] = useState('');
  
  
  
    const handleChange = (event) => {
      setTemplate(event.target.value);
    };
  
    const handleChangeSection = (event) => {
      setSection(event.target.value);
    };
  
    const handleFirst = () => {
      setValue(hundredOptions[0]);
    };
    const handlePrevious = (index) => {
      const finalIndex = index == 0 ? hundredOptions.length - 1 : index - 1;
      setValue(hundredOptions[finalIndex]);
    };
    const handleNext = (index) => {
      const finalIndex = index == hundredOptions.length - 1 ? 0 : index + 1;
      setValue(hundredOptions[finalIndex]);
    };
    const handleLast = () => {
      setValue(hundredOptions[hundredOptions.length - 1]);
    };
  return (
    <div>
        <Paper>
            <Grid container spacing={2} sx={{ padding: '15px  15px 25px', display: 'flex', alignItems: 'center' }}>
                <Grid item xs={2}>
                <Grid item sx={{display: 'flex',justifyContent:"center", alignItems: 'center' }} >
                      <Box>
                          <Avatar alt="Remy Sharp" src={AvatarImage} sx={{ width: 100, height: 100 }} />
                      </Box>
                      </Grid>
                </Grid>
                <Grid item xs={5}  sx={{display: 'flex',flexDirection:'column', alignItems: 'center' }}>
                    <Grid container spacing={0}>
                    <Grid item xs={12} sx={{ display: 'flex' }}>
                     
                      <Grid item xs={6} sx={{display: 'flex',justifyContent:"center", alignItems: 'center' }}>
                        <Box sx={{marginLeft:"-31px"}}>
                        <Chip
          label={value?.id}
          onClick={() => {
            console.log('doing something');
          }}
          sx={{ p: 3, width: '300px' }}
          color="primary"
        />
                        </Box>
                      </Grid>
                      <Grid item xs={6} sx={{display: 'flex',justifyContent:"center", alignItems: 'center' }}>
                      <Box sx={{ marginLeft: '-66px' }}>
          <IconButton sx={{ p: 0 ,border:"2px solid #C0C0C0",height:"40px",width:"40px" ,borderRadius:"0px" ,margin:"2px"}} id="first" onClick={() => handleFirst()}>
            <SkipPreviousIcon sx={{ fontSize: '30px' }} />
          </IconButton>
          <IconButton sx={{p: 0 ,border:"2px solid #C0C0C0",height:"40px",width:"40px" ,borderRadius:"0px" ,margin:"2px"}} id="previous" onClick={() => handlePrevious(value.index)}>
            <NavigateBeforeIcon sx={{ fontSize: '30px' }} />
          </IconButton>
          <IconButton sx={{ p: 0 ,border:"2px solid #C0C0C0",height:"40px",width:"40px" ,borderRadius:"0px",margin:"2px"}} id="next" onClick={() => handleNext(value.index)}>
            <NavigateNextIcon sx={{ fontSize: '30px' }} />
          </IconButton>
          <IconButton sx={{ p: 0 ,border:"2px solid #C0C0C0",height:"40px",width:"40px" ,borderRadius:"0px",margin:"2px" }} id="last" onClick={() => handleLast()}>
            <SkipNextIcon sx={{ fontSize: '30px' }} />
          </IconButton>
        </Box>
                    </Grid>
                  </Grid>

                  <Grid item xs={12}  sx={{display: 'flex',justifyContent:"center", alignItems: 'center' }} >
                  <Autocomplete
                sx={{width:"500px"  ,margin:"16px 0 0px -107px"}}
          disablePortal
          id="combo-box-demo"
          options={hundredOptions}
          renderInput={(params) => <TextField {...params} label="Visiters" />}
          value={value}
          onChange={(event, newValue) => {
            // console.log(event.target.index)
            console.log('new value variable ', newValue);
            if (newValue != null) {
              setValue(newValue);
            } else {
              setValue('');
            }
          }}
          inputValue={inputValue}
          onInputChange={(event, newValue) => {
            setInputValue(newValue);
          }}
        />
                  </Grid>
                    </Grid>
 
                  
                </Grid>
                <Grid item xs={5}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center' }}>
                          <Grid item xs={6}>
                            <TextField
                              id="outlined-select-option"
                              type="date"
                              fullWidth
                              label="Entry Date"
                              sx={{}}
                              InputLabelProps={{
                                shrink: true
                              }}
                            />
                          </Grid>
                          <Grid item xs={6}>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                              <Chip
                                label={value?.index}
                                onClick={() => {
                                  console.log('doing something');
                                }}
                                sx={{ p: 3, width: '100%' }}
                                color="primary"
                              />
                            </Box>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container spacing={2}>
                          <Grid item xs={6}>
                            <FormControl fullWidth>
                              <InputLabel id="demo-simple-select-label">Class</InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={template}
                                label="Class"
                                onChange={handleChange}
                              >
                                <MenuItem value={1}>Class 1</MenuItem>
                                <MenuItem value={2}>Class 2</MenuItem>
                                <MenuItem value={3}>Class 3</MenuItem>
                                <MenuItem value={3}>Class 4</MenuItem>
                                <MenuItem value={3}>Class 5</MenuItem>
                                <MenuItem value={3}>Class 6</MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                          <Grid item xs={6}>
                            <FormControl fullWidth>
                              <InputLabel id="demo-simple-select-label">Section</InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={section}
                                label="Class"
                                onChange={handleChangeSection}
                              >
                                <MenuItem value={1}>A</MenuItem>
                                <MenuItem value={2}>B</MenuItem>
                                <MenuItem value={3}>C</MenuItem>
                                <MenuItem value={3}>D</MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
            </Grid>
        </Paper>
    </div>
  )
}

export default UpperComponent
