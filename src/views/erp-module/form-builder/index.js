import React, { useState } from 'react';
import { Box, Typography, Button, Paper, TextField } from '@mui/material';
// import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
// import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import Checkbox from '@mui/material/Checkbox';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import VerticalAlignTopOutlinedIcon from '@mui/icons-material/VerticalAlignTopOutlined';
// import CreditScoreIcon from '@mui/icons-material/CreditScore';
import { useNavigate } from 'react-router-dom';
import { InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ParramPopover from 'components/ui/custom-input/PopOverasDropDown';
import Standard from 'assets/images/Form-Builder/standard.gif';
import Card from 'assets/images/Form-Builder/card.gif';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const formNames = [{ id: 1, name: 'Admission' }, { id: 2, name: 'Check' }, { id: 3, name: 'Complain' }];
const filterOption = ["All Forms", "Active Forms", "Disable Forms"];
const sortingOption = ["Created Time", "Modified Time", "Title"];


const SearchBar = () => {
  const [expanded, setExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    // Handle the search logic here (e.g., make an API call)
    console.log('Search term:', searchTerm);
  };

  const toggleSearchBar = () => {
    setExpanded(!expanded);
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSearch}
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: expanded ? 200 : 48,
      }}
    >
      {expanded && (
        <InputBase
          sx={{ ml: 1, flex: 1, border: "1px solid #eee" }}
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          inputProps={{ 'aria-label': 'search' }}
        />
      )}
      <IconButton onClick={toggleSearchBar}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};



const AllFroms = () => {
  const [isHover, setIsHover] = useState(-1);
  const [newFormCard, setNewFormCard] = useState(false);
  const [selectDropDown, setSelectDropDown] = useState("All Forms");
  const [selectSorting, setSelectSorting] = useState("Title");
  const [sortingOrder, setSortingOrder] = useState(true);
  const navigate = useNavigate();
  return (
    <>
      {/* All Forms Component */}
      {!newFormCard && <Box>
        <Paper sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", height: "60px", alignItems: 'center', padding: "20px", borderRadius: "10px" }}>
          <Typography variant="h4">My Forms</Typography>
          <Box sx={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "center" }}>
            <SearchBar />
            <Button variant="outlined" onClick={() => setNewFormCard(true)} startIcon={<AddOutlinedIcon />} sx={{height:"40px"}}>New Form</Button>
            <ParramPopover selectDropDown={selectDropDown} setSelectDropDown={setSelectDropDown} dropDownOption={filterOption} variant="outlined" buttonStyle={{height:"40px"}}/>
            {/*Sorting Order*/}
            <Box sx={{ display: "flex", alignItems: "center", border: "1px solid #2196f3", borderRadius: "4px",height:"40px"}}>
              <ParramPopover selectDropDown={selectSorting} setSelectDropDown={setSelectSorting} dropDownOption={sortingOption} buttonStyle={{height:"38px"}}/>
              <IconButton aria-label="delete" sx={{ borderLeft: "1px solid #2196f3", borderRadius: '0px', color: '#2196f3',height:"38px"}}>
                {sortingOrder ? (<VerticalAlignBottomIcon onClick={() => setSortingOrder(!sortingOrder)} />) :
                  (<VerticalAlignTopOutlinedIcon onClick={() => setSortingOrder(!sortingOrder)} />)}
              </IconButton>
            </Box>
          </Box>
        </Paper>
        {
          formNames && formNames.map((item) =>
            <Paper key={item?.id} sx={{ display: "flex", justifyContent: "space-between", alginItems: "center", marginTop: "20px", height: "80px", padding: "20px", borderRadius: "8px", cursor: "pointer" }}
              onMouseEnter={() => { setIsHover(item?.id) }} onMouseLeave={() => setIsHover(-1)}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }} >
                <Checkbox {...label} />
                <ArticleOutlinedIcon sx={{
                  border: '1px solid',
                  width: '2rem',
                  height: '2rem',
                  padding: '3px',
                  color: "rgb(0 0 0 / 18%)"
                }} />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography sx={{ alignItems: "center" }}>{item.name}</Typography>
                  {isHover == item?.id ? (<Typography>All Enteries  |  Reports  |  Settings  |  Analytics  |  Audit</Typography>) : (<Typography>Created On:  Apr 15,2024</Typography>)}
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
                gap: '5px'
              }}>
                <img src={Standard} style={{height: "69px",width:"64px"}} alt="standard"/>
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
                gap: '5px'
              }}>
                <img src={Card} alt="card" style={{height: "69px",width:"73px"}} />
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
            <Button variant="outlined" onClick={() => setNewFormCard(false)}>Cancel</Button>
            <Button variant="contained" onClick={() => navigate(`1/builder`)}>Create</Button>
          </Box>
        </Paper >
      }
    </>
  )
}


export default AllFroms;