import  React,{useRef} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Box, useMediaQuery } from '@mui/material';
import SearchStudentMaster from 'components/SearchStudentMaster';
import PrintPdf from 'components/print/withPrintPdf';
import PrintExcel from 'components/print/PrintExcel';
import DownloadPdf from 'components/print/DownloadPdf';
import StudentInfo from './StudentInfo';
import 'assets/scss/tabscustomization.css';

const studentData=[
  {
    id: 1,
    regNo: "000001",
    regDate: "11.Jul2023",
    student: "Tarun",
    class: "XII",
    gender: "Male",
    mobile:"882630112",
    email:"sect@gmail.com",
    activityLog:"Syllabus : 29-Jun-2023 07:30 PM"
  },
  {
    id: 2,
    regNo: "000002",
    regDate: "12.Jul2023",
    student: "Example",
    class: "X",
    gender: "Female",
    mobile:"882630112",
    email:"sect@gmail.com",
    activityLog:"Syllabus : 29-Jun-2023 07:30 PM"
  },
  {
    id: 3,
    regNo: "000003",
    regDate: "13.Jul2023",
    student: "John Doe",
    class: "IX",
    gender: "Male",
    mobile:"882630112",
    email:"sect@gmail.com",
    activityLog:"Syllabus : 29-Jun-2023 07:30 PM"
  },
  {
    id: 4,
    regNo: "000004",
    regDate: "14.Jul2023",
    student: "Alice",
    class: "VIII",
    gender: "Female",
    mobile:"882630112",
    email:"sect@gmail.com",
    activityLog:"Syllabus : 29-Jun-2023 07:30 PM"
  },
  {
    id: 5,
    regNo: "000005",
    regDate: "15.Jul2023",
    student: "Bob",
    class: "XI",
    gender: "Male",
    mobile:"882630112",
    email:"sect@gmail.com",
    activityLog:"Syllabus : 29-Jun-2023 07:30 PM"
  },
  {
    id: 6,
    regNo: "000006",
    regDate: "16.Jul2023",
    student: "Emma",
    class: "X",
    gender: "Female",
    mobile:"882630112",
    email:"sect@gmail.com",
    activityLog:"Syllabus : 29-Jun-2023 07:30 PM"
  },
  {
    id: 7,
    regNo: "000007",
    regDate: "17.Jul2023",
    student: "Alex",
    class: "VII",
    gender: "Male",
    mobile:"882630112",
    email:"sect@gmail.com",
    activityLog:"Syllabus : 29-Jun-2023 07:30 PM"
  },
  {
    id: 8,
    regNo: "000008",
    regDate: "18.Jul2023",
    student: "Sophia",
    class: "IX",
    gender: "Female",
    mobile:"882630112",
    email:"sect@gmail.com",
    activityLog:"Syllabus : 29-Jun-2023 07:30 PM"
  },
  {
    id: 9,
    regNo: "000009",
    regDate: "19.Jul2023",
    student: "David",
    class: "XII",
    gender: "Male",
    mobile:"882630112",
    email:"sect@gmail.com",
    activityLog:"Syllabus : 29-Jun-2023 07:30 PM"
  },
  {
    id: 10,
    regNo: "000010",
    regDate: "20.Jul2023",
    student: "Lily",
    class: "VIII",
    gender: "Female",
    mobile:"882630112",
    email:"sect@gmail.com",
    activityLog:"Syllabus : 29-Jun-2023 07:30 PM"
  }
];

const tableHeadings = [
  {
      id:0,
      heading:"S.No"
  },
  {
      id:1,
      heading:"Reg No"
  },
  {
      id:2,
      heading:"Student",
  },
  {
      id:3,
      heading:"Class"
  },
  {
      id:4,
      heading:"Gender"
  },
  {
      id:5,
      heading:"Mobile"
  },
  {
      id:6,
      heading:"Email"
  },
  {
      id:7,
      heading:"Activity Log"
  }
];
 
const sendSyallbus=[...tableHeadings,{id:9,heading:"Select All"}];
const admissionDate=[...tableHeadings,{id:8,heading:"Adm Invite Date Time"},{id:9,heading:"Select All"}];
const admissionResult=[...tableHeadings,{id:8,heading:"Adm Invite Status"},{id:9,heading:"Select All"}];
const interviewDate=[...tableHeadings,{id:8,heading:"Interview Date Time"},{id:9,heading:"Select All"}];
const interviewResult=[...tableHeadings,{id:8,heading:"Interview Status"},{id:9,heading:"Select All"}];
const admFormaility=[...tableHeadings,{id:8,heading:"Adm Formalities Date Time"},{id:9,heading:"Select All"}];
const finalSelection=[...tableHeadings,{id:8,heading:"Final Selection Status"},{id:9,heading:"Select All"}];
const Orientation=[...tableHeadings,{id:8,heading:"Orientation Date Time"},{id:9,heading:"Select All"}];
const reTest=[...tableHeadings,{id:8,heading:"Re-Test Date Time"},{id:9,heading:"Select All"}];

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
    id: 7,
    option: "Orientation"
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
  }, {
    id: 11,
    option: "Form Status"
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

 const VerticalTabs=()=>{
  const ref = useRef();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const matches = useMediaQuery('(max-width:1080px)');
  return (
    <>
      <Box
        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: matches ? null : "flex" }}
      >
        <Tabs
          orientation={matches ? "horizontal" : "vertical"}
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
          className="tabs-option"
        >
          {
            tabOption.map((item) =>
              <Tab key={item?.id} label={item?.option} {...a11yProps(item?.id)} sx={{ alignItems: "left" }} />
            )
          }
        </Tabs>
        <TabPanel value={value} index={0}>
          <SearchStudentMaster />
          <Box sx={{display:"flex",justifyContent:"flex-end",marginTop:"40px",marginBottom:"10px"}}>
            <PrintPdf ref={ref}/>
            <PrintExcel />
            <DownloadPdf />
          </Box>
          <StudentInfo ref={ref}  tableHeadings={sendSyallbus} studentData={studentData} type={1}/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SearchStudentMaster />
          <Box sx={{display:"flex",justifyContent:"flex-end",marginTop:"40px",marginBottom:"10px"}}>
            <PrintPdf ref={ref}/>
            <PrintExcel />
            <DownloadPdf />
          </Box>
          <StudentInfo ref={ref}  tableHeadings={admissionDate} studentData={studentData} type={2}/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <SearchStudentMaster />
          <Box sx={{display:"flex",justifyContent:"flex-end",marginTop:"40px",marginBottom:"10px"}}>
            <PrintPdf ref={ref}/>
            <PrintExcel />
            <DownloadPdf />
          </Box>
          <StudentInfo ref={ref}  tableHeadings={admissionResult} studentData={studentData} type={3}/>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <SearchStudentMaster />
          <Box sx={{display:"flex",justifyContent:"flex-end",marginTop:"40px",marginBottom:"10px"}} >
            <PrintPdf ref={ref}/>
            <PrintExcel />
            <DownloadPdf />
          </Box>
          <StudentInfo ref={ref}  tableHeadings={interviewDate} studentData={studentData} type={4}/>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <SearchStudentMaster />
          <Box sx={{display:"flex",justifyContent:"flex-end",marginTop:"40px",marginBottom:"10px"}}>
            <PrintPdf ref={ref}/>
            <PrintExcel />
            <DownloadPdf />
          </Box>
          <StudentInfo ref={ref}  tableHeadings={interviewResult} studentData={studentData} type={5}/>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <SearchStudentMaster />
          <Box sx={{display:"flex",justifyContent:"flex-end",marginTop:"40px",marginBottom:"10px"}}>
            <PrintPdf ref={ref}/>
            <PrintExcel />
            <DownloadPdf />
          </Box>
          <StudentInfo ref={ref}  tableHeadings={admFormaility} studentData={studentData} type={6}/>
        </TabPanel>
        <TabPanel value={value} index={6}>
          <SearchStudentMaster />
          <Box sx={{display:"flex",justifyContent:"flex-end",marginTop:"40px",marginBottom:"10px"}}>
            <PrintPdf ref={ref}/>
            <PrintExcel />
            <DownloadPdf />
          </Box>
          <StudentInfo ref={ref}  tableHeadings={finalSelection} studentData={studentData} type={7}/>
        </TabPanel>
        <TabPanel value={value} index={7}>
          <SearchStudentMaster />
          <Box sx={{display:"flex",justifyContent:"flex-end",marginTop:"40px",marginBottom:"10px"}}>
            <PrintPdf ref={ref}/>
            <PrintExcel />
            <DownloadPdf />
          </Box>
          <StudentInfo ref={ref}  tableHeadings={Orientation} studentData={studentData} type={8}/>
        </TabPanel>
        <TabPanel value={value} index={8}>
          <SearchStudentMaster />
          <Box sx={{display:"flex",justifyContent:"flex-end",marginTop:"40px",marginBottom:"10px"}}>
            <PrintPdf ref={ref}/>
            <PrintExcel />
            <DownloadPdf />
          </Box>
          <StudentInfo ref={ref}  tableHeadings={reTest} studentData={studentData} type={9}/>
        </TabPanel>
        <TabPanel value={value} index={9}>
        </TabPanel>
        <TabPanel value={value} index={10}>
        </TabPanel>
        <TabPanel value={value} index={11}>
        </TabPanel>
      </Box>
    </>
  );
}

export default VerticalTabs;