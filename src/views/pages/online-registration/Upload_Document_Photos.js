import React from 'react'

function Upload_Document_Photos() {
  return (
    <>
    <Grid item xs={10} sx={{ paddingTop: '0 !important', paddingRight: '4rem' }}>
      <Paper sx={{height:'86vh'}}>
        <Box sx={{ padding: '2rem' }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', paddingBottom: '1rem' }}>
            {' '}
            STEP 10 : UPLOAD DOCUMENTS / PHOTOS{' '}
          </Typography>

          <Divider />
        </Box>

        <Grid sx={{ padding: '1rem 4rem' }} container spacing={4}>
          <Grid item xs={4}>
            <TextField
              label="Mother`s Name (Biological)"
              name="mother_name"
              value={Formdata.mother_name}
              error={FormError.mother_name}
              onChange={MotherDetailsChangeHandler}
              fullWidth
              required
              inputProps={{ style: { backgroundColor: '#ffffff' } }}
            />

            <TextField
              label="Aadhaar card no"
              name="aadhar_card_no"
              sx={{ marginTop: '20px' }}
              value={Formdata.aadhar_card_no}
              error={FormError.aadhar_card_no}
              onChange={MotherDetailsChangeHandler}
              fullWidth
              required
              inputProps={{ style: { backgroundColor: '#ffffff' } }}
            />

            <TextField
              label="Organisation"
              name="organisation"
              sx={{ marginTop: '20px' }}
              value={Formdata.organisation}
              error={FormError.organisation}
              onChange={MotherDetailsChangeHandler}
              fullWidth
              required
              inputProps={{ style: { backgroundColor: '#ffffff' } }}
            />

            <TextField
              label="Last Institute Attended"
              name="last_institute_attended"
              value={Formdata.last_institute_attended}
              onChange={MotherDetailsChangeHandler}
              sx={{ marginTop: '20px' }}
              error={FormError.last_institute_attended}
              fullWidth
              required
              inputProps={{ style: { backgroundColor: '#ffffff' } }}
            />

            <TextField
              label="PAN Card"
              name="pan_card"
              value={Formdata.pan_card}
              sx={{ marginTop: '20px' }}
              onChange={MotherDetailsChangeHandler}
              fullWidth
              inputProps={{ style: { backgroundColor: '#ffffff' } }}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              label="Phone No"
              name="phone_no"
              value={Formdata.phone_no}
              onChange={PhoneNumberHandler}
              error={FormError.phone_no}
              fullWidth
              required
              inputProps={{ style: { backgroundColor: '#ffffff' } }}
            />

            <TextField
              label="Qualification"
              name="qualification"
              value={Formdata.qualification}
              onChange={MotherDetailsChangeHandler}
              sx={{ marginTop: '20px' }}
              error={FormError.qualification}
              fullWidth
              required
              inputProps={{ style: { backgroundColor: '#ffffff' } }}
            />

            <TextField
              label="Designation"
              name="designation"
              value={Formdata.designation}
              error={FormError.designation}
              sx={{ marginTop: '20px' }}
              onChange={MotherDetailsChangeHandler}
              fullWidth
              required
              inputProps={{ style: { backgroundColor: '#ffffff' } }}
            />

            <TextField
              label="Office Address"
              name="office_address"
              value={Formdata.office_address}
              onChange={MotherDetailsChangeHandler}
              sx={{ marginTop: '20px' }}
              error={FormError.office_address}
              fullWidth
              required
              inputProps={{ style: { backgroundColor: '#ffffff' } }}
            />

            <TextField
              label="Age"
              name="age"
              value={Formdata.age}
              onChange={MotherDetailsChangeHandler}
              sx={{ marginTop: '20px' }}
              error={FormError.age}
              fullWidth
              required
              inputProps={{ style: { backgroundColor: '#ffffff' } }}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              label="Email"
              name="email"
              value={Formdata.email}
              onChange={MotherDetailsChangeHandler}
              error={FormError.email}
              fullWidth
              required
              inputProps={{ style: { backgroundColor: '#ffffff' } }}
            />

            <TextField
              label="Profession"
              name="profession"
              value={Formdata.profession}
              onChange={MotherDetailsChangeHandler}
              sx={{ marginTop: '20px' }}
              error={FormError.profession}
              fullWidth
              required
              inputProps={{ style: { backgroundColor: '#ffffff' } }}
            />

            <TextField
              label="Annual Income"
              name="annual_income"
              value={Formdata.annual_income}
              error={FormError.annual_income}
              onChange={MotherDetailsChangeHandler}
              sx={{ marginTop: '20px' }}
              fullWidth
              required
              inputProps={{ style: { backgroundColor: '#ffffff' } }}
            />

            <TextField
              label="Area of Interest"
              name="area_of_interest"
              value={Formdata.area_of_interest}
              onChange={MotherDetailsChangeHandler}
              sx={{ marginTop: '20px' }}
              error={FormError.area_of_interest}
              fullWidth
              required
              inputProps={{ style: { backgroundColor: '#ffffff' } }}
            />
          </Grid>
        </Grid>

        <Box sx={{ paddingBottom: '6rem', display: 'flex', paddingRight: '4.2rem', paddingTop: '2rem' }}>
          <Button onClick={() => handleSubmit('eight')} variant="contained" sx={{ height: '38px', width: '144px', marginLeft: 'auto' }}>
            Save and Next
          </Button>
        </Box>
      </Paper>
    </Grid>
  </>
  )
}

export default Upload_Document_Photos