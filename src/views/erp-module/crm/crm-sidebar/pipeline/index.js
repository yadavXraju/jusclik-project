// PAGE OWNER : DAMANDEEP
// DESCRIPTION  kanban component that uses react-trello package
import React from 'react';
import CustomPipeline from './customPipeline';
import { IconButton, ButtonGroup } from '@mui/material';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import ViewColumnOutlinedIcon from '@mui/icons-material/ViewColumnOutlined';
import KanbanListView from './listView';

const Pipeline = () => {    

    const [selected, setSelected] = React.useState('pipeline');
  
    const handleToggle = (value) => {
      setSelected(value);
    };
    console.log(selected);
  return (
    <>
     <ButtonGroup variant="contained" aria-label="icon button group" sx={{marginLeft:'25px',backgroundColor:'#fff'}}>
      <IconButton
        color={selected === 'pipeline' ? 'primary' : 'default'}
        onClick={() => handleToggle('pipeline')}
      >
        <ViewColumnOutlinedIcon />
      </IconButton>
      <IconButton
        color={selected === 'listview' ? 'primary' : 'default'}
        onClick={() => handleToggle('listview')}
      >
        <FormatListBulletedOutlinedIcon />
      </IconButton>
    </ButtonGroup>
    {(selected==='pipeline')&&<CustomPipeline />}
    {(selected==='listview')&&<KanbanListView/>}
    </>
  );
};

export default Pipeline;
