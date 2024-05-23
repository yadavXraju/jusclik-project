// ======= Page Owner Vikash =========
// ======= Return Employee Form Tabs =========
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid, Card } from '@mui/material';
import PersonAddAltTwoToneIcon from '@mui/icons-material/PersonAddAltTwoTone';
import HomeWorkTwoToneIcon from '@mui/icons-material/HomeWorkTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import TextsmsTwoToneIcon from '@mui/icons-material/TextsmsTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import { useSelector,useDispatch } from 'react-redux';
import ProfileDetail from './ProfileDetails';
import EmployeeProfile from './EmployeeProfile';
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import LeaderboardTwoToneIcon from '@mui/icons-material/LeaderboardTwoTone';
import Education from './Education';
import Experience from './Experience';
import TextArea from 'antd/es/input/TextArea';
import BottomNavbar from 'views/erp-common-component/bottom-navbar';
import {addField,subGroupbyGroup} from 'store/Hr-Payroll/AddEmployee-slice';
import CommonAddress from '../../../../../component/CommonAddress';
import CommonContactPerson from 'component/CommonContactPerson';


const buttonsData = [
  { name: 0, icon: <PersonAddAltTwoToneIcon />, label: 'Primary Details' },
  { name: 1, icon: <DescriptionTwoToneIcon />, label: 'Other Details' },
  { name: 2, icon: <SchoolTwoToneIcon />, label: 'Education' },
  { name: 3, icon: <LeaderboardTwoToneIcon />, label: 'Experience' },
  { name: 4, icon: <HomeWorkTwoToneIcon />, label: 'Address' },
  { name: 5, icon: <PeopleAltTwoToneIcon />, label: 'Contact Person' },
  { name: 6, icon: <TextsmsTwoToneIcon />, label: 'Remarks' },
];


const EmployeeFormTab = ({ currEditItem }) => {
  const dispatch=useDispatch();
  const { studentDetailsData,subGroups } = useSelector((state) => state.employeeSlice);
  const [selectedButton, setSelectedButton] = useState(0);
  const [section,setSection]=useState([]);
  const [option, setOption] = useState({
    primaryDetails: [],
    otherDetails: [],
    address: [],
    contactPerson: [],
    customFields: [],
    remarks: []
  });

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const [employee, setEmployeeDetails] = useState('');

  useEffect(() => {
    studentDetailsData.forEach((item) => {
      if (item?.sectionCode === 0) {
        setOption(prevOption => ({ ...prevOption, ["primaryDetails"]: item?.section }));
      }
      if (item?.sectionCode === 1) {
        setOption(prevOption => ({ ...prevOption, ["otherDetails"]: item?.section }));
      }
      if (item?.sectionCode === 2) {
        setOption(prevOption => ({ ...prevOption, ["address"]: item?.section }));
      }
      if(item?.sectionCode === 3){
        setOption(prevOption => ({ ...prevOption, ["contactPerson"]: item?.section }));
      }
      if (item?.sectionCode === 4) {
        setOption(prevOption => ({ ...prevOption, ["customFields"]: item?.section }));
      }
    });
  }, [studentDetailsData])

 
  const getSectionName = () => {
    const updatedSections = [];
    studentDetailsData.forEach((item) => {
      item?.section?.forEach((subitem) => {
        updatedSections.push({ label: subitem.name, value: subitem.name});
      });
    });
    setSection(updatedSections);
  };

  useEffect(() => {
    getSectionName();
  }, [])

  const handleChange =(name, newValue) => {
    setEmployeeDetails({ ...employee, [name]: newValue });
  };

  // =========== Data for Address Component ==========
  const employeeAddressFields = [
    { name: 'currentAddress', label: 'Address', type: 'textarea', fullWidth: true },
    { name: 'country', label: 'Country/Region', type: 'text' },
    { name: 'city', label: 'City', type: 'text' },
    { name: 'state', label: 'State', type: 'text' },
    { name: 'zipCode', label: 'Zip Code', type: 'text' }
  ];

  // =========== data for Contact Person ===========
  const employeeFields = [
    { name: 'title', label: 'Title' },
    { name: 'firstName', label: 'First Name' },
    { name: 'lastName', label: 'Last Name' },
    { name: 'relation', label: 'Relation' },
    { name: 'mobile', label: 'Mobile' },
    { name: 'email', label: 'Email' },
    { name: 'education', label: 'Education' },
    { name: 'occupation', label: 'Occupation' },
    { name: 'company', label: 'Company' },
    { name: 'designation', label: 'Designation' },
    { name: 'address', label: 'Address (Office)' },
    { name: 'aadhaar', label: 'Aadhaar No' },
    { name: 'pan', label: 'PAN' },
  ];

  
  let cardComponent;
  switch (selectedButton) {
    case 0:
      cardComponent = <ProfileDetail setEditItem={currEditItem} setStudentDetail={handleChange} EmployeeFields={option?.primaryDetails} type="Primary Details" />;
      break;
    case 1:
      cardComponent = <ProfileDetail EmployeeFields={option?.otherDetails} type="Other  Details" />;
      break;
    case 2:
      cardComponent = <Box p={2}><Education /></Box> ;
      break;
      case 3:
        cardComponent = <Box p={2}><Experience /></Box> ;
        break;
    case 4:
      cardComponent = <CommonAddress addressFields={employeeAddressFields} title="Current" /> ;
      break;
    case 5:
      cardComponent = <CommonContactPerson fields={employeeFields}/>;
      break;
      case 6:
        cardComponent = <>
        <Box p={2}>
              <Box p={0.5}>Remarks</Box>
              <TextArea
                rows={4}
                placeholder="Enter your text here..."
                fullWidth
                variant="outlined"
                name="Remarks"
              />
            </Box>
        </>;
        break;
    default:
      cardComponent = null;
  }

   const handleAddField=(customFields)=>{
      dispatch(addField(customFields))
   }
  
  const handleSubGroup=(subGroupName)=>{
     dispatch(subGroupbyGroup(subGroupName));
  }

  return (
    <>
      <Card>
        <Grid container spacing={3} mb={8} sx={{ display: 'flex', height: '100%' }}>
          <Grid item xs={12} sm={12} lg={3}>
            <Box sx={{ border: '1px solid #ccc', borderRadius: '4px' }}>
              
                <Box sx={{ borderBottom: '1px solid #ccc' }}>
                  <EmployeeProfile profileDetails={employee} />
                </Box>

                <Box sx={{ flex: '0 0 auto', display: 'flex', flexDirection: 'column', padding: '20px' }}>
                  {buttonsData.map((button) => (
                    <Button
                      key={button.name}
                      sx={{
                        color: selectedButton === button.name ? '#2196f3' : 'black',
                        justifyContent: 'start',
                        fontSize: '14px',
                      }}
                      startIcon={button.icon}
                      size="large"
                      onClick={() => handleButtonClick(button.name)}
                    >
                      <Box>
                        <div style={{ justifyContent: 'start', display: 'flex' }}>{button.label}</div>
                      </Box>
                    </Button>
                  ))}
                </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} lg={9}>
            <Box sx={{ flex: '1', overflow: 'auto', border: '1px solid #ccc', borderRadius: '4px' }}>
              <Box>{cardComponent}</Box>
            </Box>
          </Grid>
        </Grid>
      </Card>
      <BottomNavbar
        tabPageLength={buttonsData.length}
        value={selectedButton}
        setValue={setSelectedButton}
        handleAddField={handleAddField}
        handleSubGroup={handleSubGroup}
        subGroups={subGroups}
        customStyle={{ width: '100%', bottom: '0', left:'0', borderRadius: '1px' }}
        section={section}
      />
    </>
  );
};

export default EmployeeFormTab;