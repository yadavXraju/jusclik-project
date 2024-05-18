import React, { useState } from 'react';
import { Grid, TextField, Card, Typography, Box, Checkbox } from '@mui/material';
import TextArea from 'antd/es/input/TextArea';

const CommonAddress = ({ addressFields, title }) => {
  const initialFormState = addressFields.reduce((acc, field) => {
    acc[field.name] = '';
    acc[`permanent${field.name.charAt(0).toUpperCase() + field.name.slice(1)}`] = '';
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialFormState);
  const [isSameAsCurrent, setIsSameAsCurrent] = useState(false);

  const handleCheckboxChange = (event) => {
    const { checked } = event.target;
    setIsSameAsCurrent(checked);
    const newFormData = { ...formData };
    addressFields.forEach((field) => {
      const permanentField = `permanent${field.name.charAt(0).toUpperCase() + field.name.slice(1)}`;
      newFormData[permanentField] = checked ? formData[field.name] : '';
    });
    setFormData(newFormData);
  };

  const handleAddressChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <>
      {/* Current Address */}
      <Card sx={{ padding: '10px' }}>
        <Typography variant={'h4'} p={1.4} mb={2} sx={{ borderBottom: '1px solid #ccc' }}>
          {title} Address
        </Typography>
        <Grid container spacing={2} sx={{ display: 'flex', height: '100%' }}>
          {addressFields.map((field) => (
            <Grid item xs={12} sm={12} lg={field.fullWidth ? 12 : 6} key={field.name}>
              <Box pb={1}>
                {field.type === 'textarea' ? (
                  <>
                    <Box p={0.5}>{field.label}</Box>
                    <TextArea
                      rows={4}
                      placeholder={`Enter your ${field.label.toLowerCase()} here...`}
                      fullWidth
                      variant="outlined"
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleAddressChange}
                    />
                  </>
                ) : (
                  <TextField
                    fullWidth
                    label={field.label}
                    variant="outlined"
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleAddressChange}
                  />
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Card>

      {/* Permanent Address */}
      <Card sx={{ padding: '10px' }}>
        <Typography variant={'h4'} p={1} mb={2} sx={{ borderBottom: '1px solid #ccc' }}>
          Permanent Address (
          <Checkbox
            sx={{ padding: '0px', marginRight: '5px' }}
            label="checkbox"
            size="small"
            checked={isSameAsCurrent}
            onChange={handleCheckboxChange}
          />
          <span style={{ fontSize: '12px', fontWeight: '500' }}>Same As Current Address</span>)
        </Typography>
        <Grid container spacing={1} sx={{ display: 'flex', height: '100%' }}>
          {addressFields.map((field) => (
            <Grid item xs={12} sm={12} lg={field.fullWidth ? 12 : 6} key={`permanent${field.name}`}>
              <Box pb={1}>
                {field.type === 'textarea' ? (
                  <>
                    <Box p={0.5}>{field.label}</Box>
                    <TextArea
                      rows={4}
                      placeholder={`Enter your ${field.label.toLowerCase()} here...`}
                      fullWidth
                      variant="outlined"
                      name={`permanent${field.name.charAt(0).toUpperCase() + field.name.slice(1)}`}
                      value={formData[`permanent${field.name.charAt(0).toUpperCase() + field.name.slice(1)}`]}
                      onChange={handleAddressChange}
                      disabled={isSameAsCurrent}
                    />
                  </>
                ) : (
                  <TextField
                    fullWidth
                    label={field.label}
                    variant="outlined"
                    name={`permanent${field.name.charAt(0).toUpperCase() + field.name.slice(1)}`}
                    value={formData[`permanent${field.name.charAt(0).toUpperCase() + field.name.slice(1)}`]}
                    onChange={handleAddressChange}
                    disabled={isSameAsCurrent}
                  />
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Card>
    </>
  );
}

export default CommonAddress;
