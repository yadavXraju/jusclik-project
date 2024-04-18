import React, { useState } from 'react';
import { Box, Typography, Button, Paper, TextField } from '@mui/material';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import Checkbox from '@mui/material/Checkbox';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

import CreditScoreIcon from '@mui/icons-material/CreditScore';
import { useNavigate } from 'react-router-dom';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const formNames = [{ id: 1, name: 'admission' }, { id: 2, name: 'check' }, { id: 3, name: 'complain' }];

const AllFroms = () => {
  const [isHover, setIsHover] = useState(-1);
  const [newFormCard, setNewFormCard] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      {/* All Forms Component */}
      {!newFormCard && <Box>
        <Paper sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", height: "60px", alignItems: 'center', padding: "20px", borderRadius: "10px" }}>
          <Typography>My Forms</Typography>
          <Box sx={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "center" }}>
            <Button variant="contained" onClick={() => setNewFormCard(true)}>New Form</Button>
            <SearchRoundedIcon />
            <FilterListRoundedIcon />
            <VerticalAlignBottomIcon />
          </Box>
        </Paper>
        {
          formNames.map((item) =>
            <Paper key={item?.id} sx={{ display: "flex", justifyContent: "space-between", alginItems: "center", marginTop: "20px", height: "80px", padding: "20px", borderRadius: "10px", cursor: "pointer" }}
              onMouseEnter={() => { setIsHover(item?.id) }} onMouseLeave={() => setIsHover(-1)}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }} >
                <Checkbox {...label} />
                <DescriptionOutlinedIcon />
                <Box sx={{ display: "flex", flexDirection: "column"}}>
                  <Typography sx={{alignItems:"center"}}>{item.name}</Typography>
                  {isHover == item?.id ?(<Typography>All Enteries  |  Reports  |  Settings  |  Analytics  |  Audit</Typography>):(<Typography>Created On:Apr 15,2024</Typography>)}
                </Box>
              </Box>
              {isHover == item?.id && <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <CreateOutlinedIcon onClick={() => navigate(`${item?.id}/builder`)} />
                <MailOutlineOutlinedIcon />
                <ShareOutlinedIcon />
                <InfoOutlinedIcon />
                <MoreHorizOutlinedIcon />
              </Box>}
            </Paper>
          )
        }
      </Box>
      }
      {/* New Form Card Component */}
      {newFormCard &&
        <Paper sx={{ width: "700px", height: "auto", padding: "20px", margin: "0 auto" }}>
          <Typography sx={{ marginTop: "20px" }}>Form Type</Typography>
          {/* Card Type */}
          <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "20px" }}>
            <Box sx={{ width: "300px", height: "200px", border: "1px solid gray", borderRadius: "5px", alignItems: 'center', justifyContent: "center" }}>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                gap:'5px'
              }}>
                <DescriptionOutlinedIcon sx={{ height: "100px", width: "100px" }} />
                <Typography>Standard</Typography>
                <Typography>Show Multiple fields on a page</Typography>
              </Box>
            </Box>
            <Box sx={{ width: "300px", height: "200px", border: "1px solid gray", borderRadius: "5px", alignItems: "center", justifyContent: "center" }}>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                gap:'5px'
              }}>
              <CreditScoreIcon sx={{ height: "100px", width: "100px" }} />
              <Typography>Card</Typography>
              <Typography>Show One Field on a Page</Typography>
            </Box>
          </Box>
        </Box>
          {/*Form Title*/}
      <Box sx={{ marginTop: "20px" }}>
        <Typography >Form Title</Typography>
        <TextField sx={{ width: "100%", marginTop: "10px", borderRadius: "10px" }}></TextField>
      </Box>
      {/* Action Button */}
      <Box sx={{ marginTop: "20px", display: "flex", gap: "20px" }}>
        <Button variant="outlined">Cancel</Button>
        <Button variant="contained">Create</Button>
      </Box>
    </Paper >
      }
    </>
  )
}


export default AllFroms;