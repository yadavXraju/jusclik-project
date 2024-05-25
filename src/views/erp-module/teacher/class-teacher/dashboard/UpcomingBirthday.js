// Page Owner : Abhshek Negi 
// Description :  Upcoming Birthday Widget in tacher dashboard

import { Typography , Grid} from '@mui/material';
import {Divider , Box , Paper} from '@mui/material';
import { boxHeight ,  subTitle , subtitle2 } from 'components/dashboard/CommonCss';
import AvatarImg from 'assets/images/Avatar-images/avatar.png';
import ParamWidgetHeader from 'components/dashboard/WidgetHeader';

export const BirthdayList = [
  {
    id: 1,
    icon: <img src={AvatarImg} alt="avatar" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />,
    name : 'Suraj Mishra',
    class : 'V A' ,
    birthday : '15-04-2024'
  },
  {
    id: 2,
    icon: <img src={AvatarImg} alt="avatar" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />,
    name : 'Harsh Jaswal',
    class : 'V A' ,
    birthday : '12-05-2024'
  },
  {
    id: 3,
    icon: <img src={AvatarImg} alt="avatar" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />,
    name : 'Abhishek Negi',
    class : 'V A' ,
    birthday : '15-05-2024'
  },
  {
    id: 4,
    icon: <img src={AvatarImg} alt="avatar" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />,
    name : 'Megha',
    class : 'V A' ,
    birthday : '03-11-2024'
  },

  {
    id: 5,
    icon: <img src={AvatarImg} alt="avatar" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />,
    name : 'Rahul',
    class : 'V A' ,
    birthday : '04-11-2024'
  },

  {
    id: 6,
    icon: <img src={AvatarImg} alt="avatar" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />,
    name : 'Ashish',
    class : 'V A' ,
    birthday : '25-12-2024'
  },

  {
    id: 7,
    icon: <img src={AvatarImg} alt="avatar" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />,
    name : 'Shruti',
    class : 'V A' ,
    birthday : '25-01-2025'
  },
 
];

const UpcomingBirthday =()  => {

  return (
     <>
     <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '12px',
        border: '1px solid rgba(128, 128, 128, 0.25)',
        boxShadow: '4px 4px 9px 2px #ddddddc2',
        marginBottom: '20px', // Add some bottom margin for spacing
      }}
    >
             <ParamWidgetHeader title='Upcoming Birthdays' />
           <Grid item sx={{padding:'24px'}}style={boxHeight}>
           {/* maping data */}
            {BirthdayList.map((item, index) => (
                <Grid item xs={12} key={index} sx={{paddingTop:'0 !important'}}>
                  <Grid container direction="column">
                    <Grid item>
                      <Grid container alignItems="center" justifyContent="space-between" sx={{gap:'14px'}}>
                        {/* title and icon */}
                        <Grid item sx={{display:'flex' , gap:'16px' ,alignItems:'center',}}>

                          {/* Icon */}
                          <Box sx={{
                              backgroundColor: item.bgColor,
                              // padding: '6px',
                              borderRadius: '50%',
                              color: '#fff',
                              display: 'flex',
                              justifyContent: 'center',
                           }}>
                                  {item.icon}
                           </Box>

                            {/* title */}
                            <Box>
                              <Typography variant="h3" style={subTitle}>
                                 {item.name}
                               </Typography>
                      
                               {/* desc */}
                                <Grid item>
                                   <Typography variant="subtitle" style={subtitle2}>
                                          {item.class}
                                    </Typography>
                                </Grid>
                            </Box>

                        </Grid>

                         {/* birthday date              */}
                        <Grid item sx={{marginLeft:'auto'}}>
                          <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item>
                              <Box>
                                 <Typography variant='h4'>{item.birthday}</Typography>
                              </Box>
                            </Grid>
                          </Grid>
                        </Grid>
                 
                      </Grid>
                    </Grid>
  
                  </Grid>
                  <Divider sx={{ my: 1.5 , color:'1px solid #80808024'}} />
                </Grid>
            ))}
           
           </Grid>
      </Paper> 
  </>
  )
}

export default UpcomingBirthday

