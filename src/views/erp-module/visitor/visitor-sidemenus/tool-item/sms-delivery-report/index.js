import React, { useState } from 'react';
import { Grid, Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Typography from '@mui/material/Typography';
import { DatePicker } from '@mui/x-date-pickers';


const SmsDeliveryReport = () => {
  const [dateStart, SetDateStart] = useState();
  const handleDateChange = (newDate) => {
    SetDateStart(newDate);
    console.log(newDate);
  }

  return (
    <Paper>
      <Grid container spacing={1}>
        <Grid item xs={8} sm={8} md={8} lg={2} >
          <Typography variant="h5" component="h2" gutterBottom>
            Sms Date From
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Pick a Date"
              inputFormat="MM/dd/yyyy"
              value={dateStart}
              onChange={handleDateChange}
              className="startDate"
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={8} sm={8} md={8} lg={2}>
          <Typography variant="h5" component="h2" gutterBottom>
            Sms Date From
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Pick a Date"
              inputFormat="MM/dd/yyyy"
              value={dateStart}
              onChange={handleDateChange}
              className="startDate"
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={8} sm={8} md={8} lg={2}>
          <Typography variant="h5" component="h2" gutterBottom>
            Sms Date From
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Pick a Date"
              inputFormat="MM/dd/yyyy"
              value={dateStart}
              onChange={handleDateChange}
              className="startDate"
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={8} sm={8} md={8} lg={2}>
          <Typography variant="h5" component="h2" gutterBottom>
            Sms Date From
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Pick a Date"
              inputFormat="MM/dd/yyyy"
              value={dateStart}
              onChange={handleDateChange}
              className="startDate"
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={8} sm={8} md={8} lg={2}>
          <Typography variant="h5" component="h2" gutterBottom>
            Sms Date From
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Pick a Date"
              inputFormat="MM/dd/yyyy"
              value={dateStart}
              onChange={handleDateChange}
              className="startDate"
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={8} sm={8} md={8} lg={2}>
          <Typography variant="h5" component="h2" gutterBottom>
            Sms Date From
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Pick a Date"
              inputFormat="MM/dd/yyyy"
              value={dateStart}
              onChange={handleDateChange}
              className="startDate"
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default SmsDeliveryReport