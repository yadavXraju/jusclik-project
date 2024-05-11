import React, { useState } from 'react';
import { Grid, TextField, Card, useMediaQuery, Typography, Checkbox, Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';


const ContactPerson = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const [contactPersons, setContactPersons] = useState([{ id: 1 }]); // Initial contact person

  // =========== Handle add person =============
  const handleAddPersonClick = () => {
    const newId = contactPersons.length + 1;
    setContactPersons([...contactPersons, { id: newId }]);
    console.log(newId)
  };

  // ============== handle remove person ============
  const handleRemovePerson = (id) => {
    const updatedPersons = contactPersons.filter((person) => person.id !== id);
    setContactPersons(updatedPersons);
  };

  return (
    <>
      {/* Other Details */}
      <Card sx={{ padding: '10px' }}>
        {contactPersons.map((person) => (
          <div key={person.id}>
            <Typography variant={'h4'} p={1.4} mb={2} sx={{ borderBottom: '1px solid #ccc' }}>
              Contact Person {person.id}
            </Typography>
            <Grid container spacing={2} sx={{ display: 'flex', height: '100%' }}>

                    <Grid item xs={12} sm={12} lg={4}>
                      <TextField size={isMobile ? 'small' : 'normal'} id={`title-${person.id}`} fullWidth label="Title" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={4}>
                      <TextField size={isMobile ? 'small' : 'normal'} id={`firstname-${person.id}`} fullWidth label="First Name" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={4}>
                      <TextField size={isMobile ? 'small' : 'normal'} id={`lastname-${person.id}`} fullWidth label="Last Name" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={4}>
                      <TextField size={isMobile ? 'small' : 'normal'} fullWidth id={`Relaction-${person.id}`} label={'Relation'} variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={4}>
                      <TextField size={isMobile ? 'small' : 'normal'} id={`Mobile-${person.id}`} fullWidth label="Mobile" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={4}>
                      <TextField size={isMobile ? 'small' : 'normal'} id={`Email-${person.id}`} fullWidth label="Email" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6}>
                      <TextField size={isMobile ? 'small' : 'normal'} id={`Education-${person.id}`} fullWidth label="Education" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6}>
                      <TextField size={isMobile ? 'small' : 'normal'} id={`Occupation-${person.id}`} fullWidth label="Occupation" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6}>
                      <TextField size={isMobile ? 'small' : 'normal'} id={`Company-${person.id}`} fullWidth label="Company" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6}>
                      <TextField size={isMobile ? 'small' : 'normal'} id={`Designation-${person.id}`} fullWidth label="Designation" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={12}>
                      <TextField size={isMobile ? 'small' : 'normal'} id={`address-${person.id}`} fullWidth label="Address (Office)" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6}>
                      <TextField size={isMobile ? 'small' : 'normal'} id={`Aadhaar-${person.id}`} fullWidth label="Aadhaar No" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6}>
                      <TextField size={isMobile ? 'small' : 'normal'} id={`Pan-${person.id}`} fullWidth label="PAN" variant="outlined" />
                    </Grid>
                
              <Grid item xs={12}>
                <Checkbox label="checkbox" size="small" />
                <span style={{ fontSize: '12px', fontWeight: '500' }}>This is Primary Contact</span>
              </Grid>
              {contactPersons.length > 1 && (
                <Grid item xs={12}>
                  <Button startIcon={<HighlightOffOutlinedIcon />} id={`button-${person.id}`} sx={{ color: '#f19e9e', display: `button-${person.id}` === 'button-1' ? 'none' : '' }} onClick={() => handleRemovePerson(person.id)}>Remove Contact Person</Button>
                </Grid>
              )}
            </Grid>
          </div>
        ))}
        <Box pt={1}>
          <Button startIcon={<AddIcon />} onClick={handleAddPersonClick}>
            Add Contact person
          </Button>
        </Box>
      </Card>
    </>
  );
}

export default ContactPerson;