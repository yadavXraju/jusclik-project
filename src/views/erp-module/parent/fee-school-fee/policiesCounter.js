// // ======= Page Owner Vikash =========
// // ======= Counter For School Fee Page ========
import { Box } from '@mui/system';
import React from 'react';
import Grid from '@mui/system/Unstable_Grid/Grid';
import { Paper, Typography } from '@mui/material';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import VerifiedIcon from '@mui/icons-material/Verified';

function PoliciesCounter() {
  const policyData = [
    { title: 'Total', icon: <ShieldOutlinedIcon sx={{ background: "rgb(229, 231, 235)", borderRadius: '50%', padding: '8px', fontSize: '3rem', color: 'rgb(17, 25, 39)' }} />, amount: '5300.00', invoices: 'from 12 invoices' },
    { title: 'Paid', icon: <GppGoodOutlinedIcon sx={{ background: "rgb(240, 253, 249)", borderRadius: '50%', padding: '8px', fontSize: '3rem', color: 'rgb(16, 185, 129)' }} />, amount: '5300.00', invoices: 'from 12 invoices' },
    { title: 'Pending', icon: <AccessTimeOutlinedIcon sx={{ background: "rgb(255, 250, 235)", borderRadius: '50%', padding: '8px', fontSize: '3rem', color: 'rgb(247, 144, 9)' }} />, amount: '5300.00', invoices: 'from 12 invoices' },
    { title: 'Total', icon: <VerifiedIcon sx={{ background: "rgb(229, 231, 235)", borderRadius: '50%', padding: '8px', fontSize: '3rem', color: '#2a65bf' }} />, amount: '5300.00', invoices: 'from 12 invoices' }
  ];

  return (
    <Box>
      <Grid container spacing={2}>
        {policyData && policyData.map((policy, index) => (
          <Grid item xs={12} sm={6} lg={3} key={index}>
            <Paper elevation={2}>
              <Box p={3} sx={{ borderRadius: '10px' }}>
                <div style={{ marginLeft: 'auto', display: 'inline-block', margin: '15px' }}>
                  {policy.icon}
                </div>
                <div style={{ display: 'inline-block' }}>
                  <Typography color={'rgb(108, 115, 127)'} variant='h4'>{policy.title}</Typography>
                  <Typography color={'rgb(17, 25, 39)'} variant='h3'>{policy.amount}</Typography>
                  <Typography color={'rgb(108, 115, 127)'} variant='h4'>{policy.invoices}</Typography>
                </div>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default PoliciesCounter;
