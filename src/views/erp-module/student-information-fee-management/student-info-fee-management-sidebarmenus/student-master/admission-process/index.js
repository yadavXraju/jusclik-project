import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Box, useMediaQuery } from '@mui/material';
import SearchStudentMaster from 'views/common-section/SearchStudentMaster';

const tabOption = [
  {
    id: 0,
    option: "Send Syllabus"
  },
  {
    id: 1,
    option: "Set Admission Date",
  },
  {
    id: 2,
    option: "Admission Select/Reject",
  },
  {
    id: 3,
    option: "Set Interview Date",
  },
  {
    id: 4,
    option: "Interview Select/Reject"
  },
  {
    id: 5,
    option: "Adm Formalities"
  },
  {
    id: 6,
    option: "Final Selection"
  },
  {
    id:7,
    option:"Orientation"
  },
  {
    id: 8,
    option: "Re-Test"
  },
  {
    id: 9,
    option: "SETUP MAIL"
  },
  {
    id: 10,
    option: "Send Reg Form"
  },{
    id:11,
    option:"Form Status"
  }
];


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
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
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const matches = useMediaQuery('(max-width:1080px)');

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: matches ? null : "flex" }}
    >
      <Tabs
        orientation={matches ? "horizontal" : "vertical"}
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider'}}
      >
        {
          tabOption.map((item) =>
            <Tab key={item?.id} label={item?.option} {...a11yProps(item?.id)} sx={{ alignItems: "left" }} />
          )
        }
      </Tabs>
      <TabPanel value={value} index={0}>
        <SearchStudentMaster />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SearchStudentMaster />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SearchStudentMaster />
      </TabPanel>
      <TabPanel value={value} index={3}>
      <SearchStudentMaster />
      </TabPanel>
      <TabPanel value={value} index={4}>
      <SearchStudentMaster />
      </TabPanel>
      <TabPanel value={value} index={5}>
      <SearchStudentMaster />
      </TabPanel>
      <TabPanel value={value} index={6}>
      <SearchStudentMaster />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <SearchStudentMaster />
      </TabPanel>
      <TabPanel value={value} index={8}>
        <SearchStudentMaster />
      </TabPanel>
      <TabPanel value={value} index={9}>
        <SearchStudentMaster />
      </TabPanel>
      <TabPanel value={value} index={10}>
      <SearchStudentMaster />
      </TabPanel>
      <TabPanel value={value} index={11}>
      <SearchStudentMaster />
      </TabPanel>
    </Box>
  );
}
