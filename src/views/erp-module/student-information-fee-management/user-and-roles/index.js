// ======= Page Owner Vikash =========
// ======= School Fee Entry Page =========
import React,{useState} from 'react';
import ParamStepper from 'components/tabs/Stepper';
import { Card } from '@mui/material';
import UserDetails from './User-Authorisation/UserDetails';
import RoleDetails from './Role-Authorisation/RoleDetails';

const UserAndRole = () => {
  const [value, setValue] = useState(0);

  // drawer btn
  const tabPage = [
    {
      id: 1,
      name: 'Roles',
      value: '1',
      component: RoleDetails
    },
    {
      id: 2,
      name: 'Users',
      value: '2',
      component: UserDetails
    },
   
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Card>
        {/* stepper tabs  */}
        <ParamStepper variant='scrollable' tabPage={tabPage}
          numberShow={false} iconShow={false}
          value={value} handleChange={handleChange}
          customtabWrapper={{ marginTop: '0px', margin:'10px' }}
        />
      </Card>

    </>
  );
};

export default UserAndRole;
