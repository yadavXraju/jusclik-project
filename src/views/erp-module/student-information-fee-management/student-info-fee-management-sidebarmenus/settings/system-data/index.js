import React, { useState} from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Typography, Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import useDrawer from 'hooks/useDrawer';
import ParamSearchBar from 'views/common-section/ParamSearchBar';
import {
  Class,
  Section,
  House,
  ChequeCategory,
  OtherCategory,
  ConcessionCategory,
  InvoiceType,
  FeeGroup,
  FeeHead,
  TransportSlab,
  BounceEmailNotification,
  StudentDocuments,
  Currency,
  LeftReason,
  GatePassAccompaniedBy,
  GatePassReason,
  Nationality,
  Wing,
  TransportRoute,
  TransportStop
} from './tabPages';
import 'assets/scss/tabscustomization.css';


const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}


const SetupTabs = () => {
  const [value, setValue] = useState(0);
  const { anchor, toggleDrawer } = useDrawer();
  const [searchTerm, setSearchTerm] = useState('');
  const tabPage = [
    {
      id: 1,
      name: "Wing",
      component: Wing,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 2,
      name: "Class",
      component: Class,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    }, {
      id: 3,
      name: "Section",
      component: Section,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 4,
      name: "House",
      component: House,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 5,
      name: "Cheque Category",
      component: ChequeCategory,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 6,
      name: "Other Category",
      component: OtherCategory,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 7,
      name: "Concession Category",
      component: ConcessionCategory,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 8,
      name: "Invoice Type",
      component: InvoiceType,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 9,
      name: "Fee Group",
      component: FeeGroup,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 10,
      name: "Fee Head",
      component: FeeHead,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 11,
      name: "Transport Slab",
      component: TransportSlab,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 12,
      name: "Transport Route",
      component: TransportRoute,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 13,
      name: "Transport Stop",
      component: TransportStop,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 14,
      name: "Bounce Email Notification Reason",
      component: BounceEmailNotification,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 15,
      name: "Student Documents",
      component: StudentDocuments,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 16,
      name: "Currency",
      component: Currency,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 17,
      name: "Left Reasons",
      component: LeftReason,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 18,
      name: "Gate pass Reasons",
      component: GatePassReason,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 19,
      name: "Gate pass Accompanied By",
      component: GatePassAccompaniedBy,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 20,
      name: "Nationality {Restricted}",
      component: Nationality,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    }
  ]

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const filterData = tabPage.filter((tab) => tab.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", width: "97%", alignItems: "center" }}>
        <Typography variant="p" sx={{ marginTop: "-20px", marginLeft: "20px" }}>
          Setup System Data  as application setting to manage all application settings
        </Typography>
        <Button onClick={toggleDrawer('right', true)} sx={{ margin: "0px 0px 20px 60px", height: "40px", color: '#fff' }} variant="contained" startIcon={<AddIcon />}>Add Field</Button>
      </Box>
      <Box sx={{ flexGrow: 1, display: 'flex', background: "none" }}>
        <Box>
          <ParamSearchBar value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)} />
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, height: "auto", minWidth: "300px !important", bgcolor: 'background.paper', border: "1px solid #EEEDEB", borderRadius: "10px" }}
            className="testf"
          >
            {filterData.map((tab, index) => (
              <Tab key={tab?.id} label={tab.name} {...a11yProps(index)} sx={{ borderBottom: "1px solid #eef2f6", width: ' 100%', alignItems: "baseline" }} className="testf" />
            ))}
          </Tabs>
        </Box>
        {
          filterData.map((tab, index) => {
            return <TabPanel key={tab?.id} value={value} index={index} sx={{ width: "100%", bgcolor: 'background.paper', marginLeft: "40px", borderRadius: "10px", overflowX: "auto" }}>
              <tab.component  {...tab.props } />
            </TabPanel>
          })
        }
      </Box >
    </>
  );
}


export default SetupTabs;

