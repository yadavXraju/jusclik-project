import React, { useState } from 'react';
import { Typography, Grid, Box } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import PolicyOutlinedIcon from '@mui/icons-material/PolicyOutlined';
import { useNavigate } from 'react-router';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import DirectionsBusFilledOutlinedIcon from '@mui/icons-material/DirectionsBusFilledOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import ManageHistoryOutlinedIcon from '@mui/icons-material/ManageHistoryOutlined';

const ReportsPayroll = () => {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  const sections = [
    {
      title: 'Overview',
      icon: <PolicyOutlinedIcon />,
      pages: [
        { name: 'Enquiry', path: '/erp/student-info-fee/reports/enquiry' },
        { name: 'Register', path: '/erp/student-info-fee/reports/register' },
        { name: 'Admission', path: '/erp/student-info-fee/reports/admission' },
        { name: 'Enrolment Review', path: '/erp/student-info-fee/reports/enrolment-review' },
        { name: 'Withdraw review', path: '/erp/student-info-fee/reports/withdraw-review' }
      ]
    },
    {
      title: 'Student',
      icon: <PeopleAltOutlinedIcon />,
      pages: [
        { name: 'Student Age As On', path: '/erp/student-info-fee/reports/student-age-as-on' },
        { name: 'Student Strength', path: '/erp/student-info-fee/reports/student-strength' }
      ]
    },

    {
      title: 'Transport',
      icon: <DirectionsBusFilledOutlinedIcon />,
      pages: [
        { name: 'User List', path: '/erp/student-info-fee/reports/user-list' },
        { name: 'Attendance', path: '/erp/student-info-fee/reports/attendance' },
        { name: 'Transport user as on', path: '/erp/student-info-fee/reports/transport-user-as-on' },
        { name: 'Logs', path: '/erp/student-info-fee/reports/logs' },
        { name: 'Routes & Stops', path: '/erp/student-info-fee/reports/routes-&-stops' }
      ]
    },

    {
      title: 'Invoices',
      icon: <ReceiptOutlinedIcon />,
      pages: [
        {
          name: 'Ledger',
          path: '/erp/student-info-fee/reports/ledger'
        }
      ]
    },

    {
      title: 'Fee Management',
      icon: <CreditCardOutlinedIcon />,
      pages: [
        {
          name: 'Transaction',
          path: '/erp/student-info-fee/reports/transaction'
        },

        { name: 'Concession', path: '/erp/student-info-fee/reports/concession' },
        {
          name: 'Adjustment',
          path: '/erp/student-info-fee/reports/adjustment'
        },

        { name: 'PG Settlement Report', path: '/erp/student-info-fee/reports/pg-settlement' },

        { name: 'Fee Structure', path: '/erp/student-info-fee/reports/free-structure' }
      ]
    },

    {
      title: 'Student Records',
      icon: <FolderOpenOutlinedIcon />,
      pages: [
        { name: 'Tuition Fee Certificate', path: '/erp/student-info-fee/reports/tuition-fee-certificate' },
        { name: 'School Learning Certificate ', path: '/erp/student-info-fee/reports/school-learning-certificate' },
        { name: 'Gate Pass', path: '/erp/student-info-fee/reports/gate-pass' },
        {
          name: 'Identity Card',
          path: '/erp/student-info-fee/reports/identity-card'
        }
      ]
    },

    {
      title: 'Activity',
      icon: <ManageHistoryOutlinedIcon />,
      pages: [
        { name: 'Parent/Teacher Login List', path: '/erp/student-info-fee/reports/parent/teacher-login-list' },
        { name: 'User Logs ', path: '/erp/student-info-fee/reports/user-logs' },
        { name: 'Deleted Fee Invoices', path: '/erp/student-info-fee/reports/deleted-fee-invoices' },
        { name: 'Deleted Fee Transactions', path: '/erp/student-info-fee/reports/deleted-fee-transactions' }
      ]
    }
  ];

  const toggleFavorite = (page) => {
    if (favorites.some((fav) => fav.name === page.name)) {
      setFavorites(favorites.filter((fav) => fav.name !== page.name));
    } else {
      setFavorites([...favorites, page]);
    }
  };

  return (
    <Box sx={{ paddingLeft: '30px', paddingRight: '40px', paddingTop: '20px' }}>
      {favorites.length > 0 && (
        <Typography variant="h4" sx={{ paddingBottom: '10px' }}>
          Favorites:
        </Typography>
      )}
      <Grid container spacing={5}>
        {favorites.map((page, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index} sx={{ paddingBottom: '20px' }}>
            <Typography sx={{ paddingBottom: '10px', borderBottom: '1px dashed #cbcbcb' }} onClick={() => navigate(page.path)}>
              <a href={`#${page.name}`} style={{ textDecoration: 'none', textTransform: 'none', color: '#408dfb' }}>
                {page.name}
              </a>
            </Typography>
          </Grid>
        ))}
      </Grid>
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
              {section.pages.map((page) => (
                <Typography
                  key={page.name}
                  sx={{
                    paddingBottom: '19px',
                    borderBottom: '1px dashed #cbcbcb',
                    display: 'flex',
                    alignItems: 'center',
                    paddingTop: '15px'
                  }}
                >
                  {favorites.some((fav) => fav.name === page.name) ? (
                    <StarIcon onClick={() => toggleFavorite(page)} sx={{ color: '#f8cb01' }} />
                  ) : (
                    <StarBorderIcon onClick={() => toggleFavorite(page)} sx={{ color: '#cbcbcb' }} />
                  )}
                  <Typography onClick={() => navigate(page.path)} sx={{ color: '#408dfb', marginLeft: '8px', cursor: 'pointer' }}>
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

export default ReportsPayroll;
