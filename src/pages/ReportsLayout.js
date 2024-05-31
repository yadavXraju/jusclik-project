import React, { useState } from 'react';
import { Typography, Grid, Box, Card, Tabs, Tab } from '@mui/material';

import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import PropTypes from 'prop-types';
import SearchBar from 'components/SearchBar';

const ReportsPayroll = ({ sections }) => {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  const toggleFavorite = (pageName, pagePath) => {
    const isFavorite = favorites.some((page) => page.name === pageName);
    if (isFavorite) {
      setFavorites(favorites.filter((page) => page.name !== pageName));
    } else {
      setFavorites([...favorites, { name: pageName, path: pagePath }]);
    }
  };

  return (
    <Box sx={{ paddingLeft: '30px', paddingRight: '40px', paddingTop: '20px' }}>
      {favorites.length > 0 && (
        <Box sx={{ display: 'flex', paddingBottom: '20px' }}>
          <VerifiedOutlinedIcon />
          <Typography variant="h4" sx={{ paddingBottom: '10px', marginTop: '3px', paddingLeft: '10px' }}>
            Favorites:
          </Typography>
        </Box>
      )}
      {favorites.length > 0 && (
        <Grid container spacing={2} sx={{ paddingBottom: '30px' }}>
          {favorites.map((favorite, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index} sx={{ paddingBottom: '20px' }}>
              <Typography sx={{ paddingBottom: '10px', borderBottom: '1px dashed #cbcbcb' }}>
                <Typography
                  style={{ textDecoration: 'none', textTransform: 'none', color: '#408dfb', cursor: 'pointer' }}
                  onClick={() => navigate(favorite.path)}
                >
                  {favorite.name}
                </Typography>
              </Typography>
            </Grid>
          ))}
        </Grid>
      )}
      <Grid container spacing={5}>
        {sections.map((section, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {section.icon}
              <Typography variant="h4" sx={{ textDecoration: 'none', textTransform: 'none', marginLeft: '10px' }}>
                {section.title}
              </Typography>
            </Box>
            <Box sx={{ paddingTop: '20px' }}>
              {section.pages.map((page, pageIndex) => (
                <Typography
                  key={pageIndex}
                  sx={{
                    paddingBottom: '19px',
                    borderBottom: '1px dashed #cbcbcb',
                    display: 'flex',
                    alignItems: 'center',
                    paddingTop: '15px'
                  }}
                >
                  {favorites.some((favPage) => favPage.name === page.name) ? (
                    <StarIcon onClick={() => toggleFavorite(page.name, page.path)} sx={{ color: '#f8cb01', cursor: 'pointer' }} />
                  ) : (
                    <StarBorderIcon onClick={() => toggleFavorite(page.name, page.path)} sx={{ color: '#cbcbcb', cursor: 'pointer' }} />
                  )}
                  <Typography
                    style={{ textDecoration: 'none', textTransform: 'none', color: '#408dfb', marginLeft: '8px', cursor: 'pointer' }}
                    onClick={() => navigate(page.path)}
                  >
                    {page.name}
                  </Typography>
                </Typography>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}
const ReportsLayout = ({ data }) => {
  const [value, setValue] = React.useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const filterData =
    searchTerm.trim() !== ''
      ? data.filter((item) => {
          if (item.title.toLowerCase().includes(searchTerm)) {
            return true;
          } else {
            return item?.pages.some((submenu) => submenu.name.toLowerCase().includes(searchTerm) && submenu.path);
          }
        })
      : [];

  return (
    <>
      {' '}
      <Card>
        <Box sx={{ display: 'flex', width: '100%' }}>
          <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="General Reports" {...a11yProps(0)} />
                <Tab label="Custom Reports" {...a11yProps(1)} />
              </Tabs>
            </Box>
          </Box>
          <Box sx={{ width: '40%', borderBottom: '1px solid #cbcbcb85' }}>
            <SearchBar onChange={(e) => setSearchTerm(e.target.value)} />
            <Box>
              <Card
                className="scrollbar"
                sx={{
                  overflowY: 'scroll',
                  maxHeight: '200px',
                  margin: 'auto',
                  paddingLeft: '30px'
                }}
              >
                {filterData.map((item) => (
                  <React.Fragment key={item.title}>
                    <p style={{ paddingBottom: '10px', paddingTop: '10px', fontWeight: 'bold' }}>{item?.title}</p>
                    {item.pages.map((submenu) => (
                      <Link key={submenu.name} to={submenu.path} style={{ textDecoration: 'none' }}>
                        <Typography key={submenu.name} style={{ padding: '4px 0', color: '#000' }}>
                          {submenu.name}
                        </Typography>
                      </Link>
                    ))}
                  </React.Fragment>
                ))}
              </Card>
            </Box>
          </Box>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <ReportsPayroll sections={data} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Custom Reports
        </CustomTabPanel>
      </Card>
    </>
  );
};

export default ReportsLayout;
