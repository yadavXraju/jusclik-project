import React from 'react';
import { Avatar , Tooltip } from '@mui/material';



const SiblingSwitch = () => {
  return (
    <div>
      <Tooltip sx={{cursor : 'pointer'}} title='Sibling Switch' arrow>
      <Avatar alt="Abhishek" src="/static/images/avatar/1.jpg" />
      </Tooltip>
    </div>
  );
}

export default SiblingSwitch;
