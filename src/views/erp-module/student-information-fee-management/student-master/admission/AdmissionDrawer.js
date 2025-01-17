// ======= Page Owner Vikash =========
// ======= Drawer for Admission From ========
import React, {useState, useEffect} from 'react';
import useDrawer from 'hooks/useDrawer';
import { Button, Box, Grid, Typography, Card } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DrawerLayOut from 'layout/drawer-layout';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import TextArea from 'antd/es/input/TextArea';
import PersonAddAltTwoToneIcon from '@mui/icons-material/PersonAddAltTwoTone';
import HomeWorkTwoToneIcon from '@mui/icons-material/HomeWorkTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import HandymanTwoToneIcon from '@mui/icons-material/HandymanTwoTone';
import TextsmsTwoToneIcon from '@mui/icons-material/TextsmsTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import BottomNavbar from 'components/BottomNavbar';
import ProfileDetail from 'components/forms/PrimaryDetails';
import ContactPerson from 'components/forms/ContactPerson';
import { useSelector, useDispatch } from 'react-redux';
import { addField, subGroupbyGroup } from 'store/student-info-and-fee/student/admission-slice';
import CommonAddress from 'components/forms/Address';
import Mainformlayout from 'layout/main-form-layout';
import Profile from 'components/forms/Profile';


const buttonsData = [
  { name: 0, icon: <PersonAddAltTwoToneIcon />, label: 'Primary Details' },
  { name: 1, icon: <DescriptionTwoToneIcon />, label: 'Other Details' },
  { name: 2, icon: <HomeWorkTwoToneIcon />, label: 'Address' },
  { name: 3, icon: <PeopleAltTwoToneIcon />, label: 'Contact Person' },
  { name: 4, icon: <HandymanTwoToneIcon />, label: 'Custom Fields' },
  { name: 5, icon: <TextsmsTwoToneIcon />, label: 'Remarks' }
];

const AdmissionDrawer = ({DrawerBtn = false, editIcon = false, currEditItem, handleClick}) => {
  // ========= call custom hook for toggle drawer ==========
  const { anchor, toggleDrawer } = useDrawer();

  const handleEditClick=(event)=>{
    toggleDrawer('top', true)(event);
    handleClick();
  }


  const dispatch = useDispatch();
  const { studentDetailsData, subGroups } = useSelector((state) => state.admission);
  const [selectedButton, setSelectedButton] = useState(0);
  const [section, setSection] = useState([]);
  const [option, setOption] = useState();

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const [student, setStudentDetails] = useState('');

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
      if (item?.sectionCode === 3) {
        console.log(item?.section)
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
        updatedSections.push({ label: subitem.name, value: subitem.name });
      });
    });
    setSection(updatedSections);
  };

  useEffect(() => {
    getSectionName();
  }, [])

  const handleChange = (name, newValue) => {
    setStudentDetails({ ...student, [name]: newValue });
  };

  // ======= data for Address component ==========
  const studentAddressFields = [
    { name: 'currentAddress', label: 'Address', type: 'textarea', fullWidth: true },
    { name: 'country', label: 'Country/Region', type: 'text' },
    { name: 'city', label: 'City', type: 'text' },
    { name: 'state', label: 'State', type: 'text' },
    { name: 'zipCode', label: 'Zip Code', type: 'text' }
  ];


  let cardComponent;
  switch (selectedButton) {
    case 0:
      cardComponent = <ProfileDetail setStudentDetail={handleChange} setEditItem={currEditItem} studentFields={option?.primaryDetails} type="Primary Details" />;
      break;
    case 1:
      cardComponent = <ProfileDetail studentFields={option?.otherDetails} type="Other  Details" />;
      break;
    case 2:
      cardComponent = <CommonAddress addressFields={studentAddressFields} title="Current" />;
      break;
    case 3:
      cardComponent = <ContactPerson studentFields={option?.contactPerson} />;
      break;
    case 4:
      cardComponent = <ProfileDetail studentFields={option?.customFields} type="Custom Fields" />;
      break;
    case 5:
      cardComponent = <>
      <Card sx={{padding:'10px'}}>
      <Typography variant={'h4'} p={1.4} mb={2} sx={{borderBottom:'1px solid #ccc'}}>
      Remarks
      </Typography>
    <Grid container spacing={1} sx={{ display: 'flex', height: '100%' }}>
    <Grid item xs={12} sm={12} lg={12}>
    <Box pb={1}>
              <Box p={0.5}>Remarks</Box>
              <TextArea rows={4} placeholder="Enter your text here..." fullWidth variant="outlined" />
            </Box>
      </Grid>
    </Grid>
    </Card>
      </>;
      break;
    default:
      cardComponent = null;
  }

  const handleAddField = (customFields) => {
    dispatch(addField(customFields))
  }

  const handleSubGroup = (subGroupName) => {
    dispatch(subGroupbyGroup(subGroupName));
  }

  const grid1=<Profile />
  

  const grid2= [
    buttonsData.map((button) => (
      <Button
        key={button.name}
        sx={{
          color: selectedButton === button.name ? '#2196f3' : 'black',
          justifyContent: 'start',
          fontSize: '14px'
        }}
        startIcon={button.icon}
        size="large"
        onClick={() => handleButtonClick(button.name)}
      >
        <Box>
          <div style={{ justifyContent: 'start', display: 'flex' }}>{button.label}</div>
        </Box>
      </Button>
    ))
  ]

  const grid3 = [
    cardComponent
  ]

  const DrawerBody = () => {
    return (
      <>
      <Box mt={1}>
      <Mainformlayout grid1={grid1} grid2={grid2} grid3={grid3} />
      <BottomNavbar
        tabPageLength={buttonsData.length}
        value={selectedButton}
        setValue={setSelectedButton}
        handleAddField={handleAddField}
        handleSubGroup={handleSubGroup}
        subGroups={subGroups}
        customStyle={{ width: '100%', bottom: '0', borderRadius: '1px' }}
        section={section}
      />
      </Box>
      </>
    )
  }

  return (
    <>
      {DrawerBtn && (
         <Button onClick={toggleDrawer('top', true)} sx={{mr:'8px'}} variant="outlined" startIcon={<AddOutlinedIcon />}>
         Add Student
         </Button>
      )}
      {editIcon && (
          <EditTwoToneIcon onClick={() => handleEditClick(event)}/>
      )}

      <DrawerLayOut anchor={anchor} direction={'top'} toggleDrawer={toggleDrawer}
        Title={'Add Student'} Body={<DrawerBody />} CustomBodyStyle={{ height:'calc(100vh - 115px)'}} customStyles={{width:'100%'}} 
      />
    </>
  );
};

export default AdmissionDrawer;