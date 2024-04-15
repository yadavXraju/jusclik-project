import React, { useState } from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
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
import {useNavigate} from 'react-router-dom';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const formNames = [{id:1,name:'admission'}, {id:2,name:'check'}, {id:3,name:'complain'}];

const AllFroms = () => {
  const [isHover, setIsHover] = useState(-1);
  const navigate=useNavigate();
  return (
    <>
      <Paper sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", height: "60px", alignItems: 'center', padding: "20px", borderRadius: "10px" }}>
        <Typography>My Forms</Typography>
        <Box sx={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "center" }}>
          <Button variant="contained">New Form</Button>
          <SearchRoundedIcon />
          <FilterListRoundedIcon />
          <VerticalAlignBottomIcon />
        </Box>
      </Paper>
      {
        formNames.map((item) =>
          <Paper key={item?.id} sx={{ display: "flex", justifyContent: "space-between", alginItems: "center", marginTop: "20px", height: "80px", padding: "20px", borderRadius: "10px",cursor:"pointer" }} 
          onMouseEnter={() => { setIsHover(item?.id) }} onMouseLeave={() => setIsHover(-1)}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }} >
              <Checkbox {...label} />
              <DescriptionOutlinedIcon />
              <Box sx={{ display: "flex", flexDirection: "column", alginItems: "center" }}>
                <Typography>{item.name}</Typography>
                {isHover==item?.id &&<Typography >All Enteries  |  Reports  |  Settings  |  Analytics  |  Audit</Typography>}
              </Box>
            </Box>
            {isHover==item?.id&&<Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <CreateOutlinedIcon onClick={()=>navigate(`${item?.id}/builder`)}/>
              <MailOutlineOutlinedIcon />
              <ShareOutlinedIcon />
              <InfoOutlinedIcon />
              <MoreHorizOutlinedIcon />
            </Box>}
          </Paper>
        )
      }
    </>
  )
}


export default AllFroms;