// ======= Page Owner Vikash =========

import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Remarks from './Remarks';
import PersonAddAltTwoToneIcon from '@mui/icons-material/PersonAddAltTwoTone';
import HomeWorkTwoToneIcon from '@mui/icons-material/HomeWorkTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import HandymanTwoToneIcon from '@mui/icons-material/HandymanTwoTone';
import TextsmsTwoToneIcon from '@mui/icons-material/TextsmsTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import BottomNavbar from '../../../../../../../erp-common-component/bottom-navbar';
import ProfileDetail from './PrimaryDetails';
import ContactPerson from './ContactPerson';
import { useSelector, useDispatch } from 'react-redux';
import { addField, subGroupbyGroup } from 'store/student-info-and-fee/student/admission-slice';
import CommonAddress from 'components/CommonAddress';
import Mainformlayout from 'layout/main-form-layout';
import Profile from './Profile';

const buttonsData = [
  { name: 0, icon: <PersonAddAltTwoToneIcon />, label: 'Primary Details' },
  { name: 1, icon: <DescriptionTwoToneIcon />, label: 'Other Details' },
  { name: 2, icon: <HomeWorkTwoToneIcon />, label: 'Address' },
  { name: 3, icon: <PeopleAltTwoToneIcon />, label: 'Contact Person' },
  { name: 4, icon: <HandymanTwoToneIcon />, label: 'Custom Fields' },
  { name: 5, icon: <TextsmsTwoToneIcon />, label: 'Remarks' }
];


const Mainform1 = ({ currEditItem }) => {
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
        setOption(prevOption => ({ ...prevOption, ["contactPerson"]: item?.section }));
      }
      if (item?.sectionCode === 3) {
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
      cardComponent = <Remarks />;
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

  return (
    <>
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
    </>
  );
};

export default Mainform1;
