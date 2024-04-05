import {Box,Typography} from '@mui/material';

import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
const TabsName = ({ name, number }) => {
    return (
      <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'space-between' ,  }}>
        <Box sx={{ display: 'flex', gap: '5px', alignItems: "center" }}>
          <Typography style={{
          //  display: 'inline-block',
           width: '30px',
           height: '30px',
           borderRadius: '50%',
          //  color:'rgb(52, 64, 64)',
           textAlign: 'center',
           lineHeight: '22px',
           fontSize: '15px',
           fontWeight: 'bold',
           border: '1px solid rgb(221, 221, 221)',
           boxSizing: 'border-box',
           borderColor:'inherit',  
           display:'flex',
           alignItems:'center',
           justifyContent:'center' ,
           marginRight:'5px'
          }}
          className='number-bg'
          >{number + 1}</Typography>
          <Typography>{name}</Typography>
        </Box>
        <ChevronRightOutlinedIcon sx={{ marginTop: "2px" }} />
      </Box>
    );
  };

  export default TabsName;