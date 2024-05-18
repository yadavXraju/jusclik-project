import React, { useState } from 'react';
import { Grid, TextField, Card, useMediaQuery, Typography, Checkbox, Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';

const CommonContactPerson = ({ fields }) => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const [contactPersons, setContactPersons] = useState([{ id: 1 }]); // Initial contact person

  // Handle adding a new contact person
  const handleAddPersonClick = () => {
    const newId = contactPersons.length > 0 ? contactPersons[contactPersons.length - 1].id + 1 : 1;
    setContactPersons([...contactPersons, { id: newId }]);
  };

  // Handle removing a contact person
  const handleRemovePerson = (id) => {
    setContactPersons(contactPersons.filter((person) => person.id !== id));
  };

  return (
    <>
      {/* Other Details */}
      <Card sx={{ padding: '10px' }}>
        {contactPersons.map((person, index) => (
          <div key={person.id}>
            <Typography variant={'h4'} p={1.4} mb={2} sx={{ borderBottom: '1px solid #ccc' }}>
              Contact Person {index + 1}
            </Typography>
            <Grid container spacing={2} sx={{ display: 'flex', height: '100%' }}>
              {fields.map((field) => (
                <Grid item xs={12} sm={12} lg={field.name === 'address' ? 12 : 6} key={`${field.name}-${person.id}`}>
                  <TextField
                    size={isMobile ? 'small' : 'normal'}
                    id={`${field.name}-${person.id}`}
                    fullWidth
                    label={field.label}
                    variant="outlined"
                  />
                </Grid>
              ))}
              <Grid item xs={12}>
                <Checkbox label="checkbox" size="small" />
                <span style={{ fontSize: '12px', fontWeight: '500' }}>This is Primary Contact</span>
              </Grid>
              {contactPersons.length > 1 && (
                <Grid item xs={12}>
                  <Button
                    startIcon={<HighlightOffOutlinedIcon />}
                    sx={{ color: '#f19e9e', display: `button-${person.id}` === 'button-1' ? 'none' : '' }}
                    onClick={() => handleRemovePerson(person.id)}
                  >
                    Remove Contact Person
                  </Button>
                </Grid>
              )}
            </Grid>
          </div>
        ))}
        <Box pt={1}>
          <Button startIcon={<AddIcon />} onClick={handleAddPersonClick}>
            Add Contact Person
          </Button>
        </Box>
      </Card>
    </>
  );
};

export default CommonContactPerson;
