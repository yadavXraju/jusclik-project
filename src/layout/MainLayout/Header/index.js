import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, ButtonBase , useMediaQuery} from '@mui/material';

// project imports
import LogoSection from '../LogoSection';
import ProfileSection from './ProfileSection';
import SchoolName from './SchoolNameAndLogoSection';
import NotificationSection from './NotificationSection';
import { useLocation } from 'react-router';

// assets
import { IconMenu2 } from '@tabler/icons';
import SiblingSwitch from './SiblingSwitchSection';
import AcadmicYear from './AcadmicYearSection';
import HelpSection from './HelpSection';
import ErpModule from './erp-module';



// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = ({ handleLeftDrawerToggle }) => {

  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:767px)')
  const smallMobile = useMediaQuery('(max-width:425px)')

  // check the url 
  const isERP = location.pathname.includes('erp');

  return (
    <>
      {/* logo & toggler button */}
      <Box
        sx={{
          width: 228,
          display: 'flex',
          [theme.breakpoints.down('md')]: {
            width: 'auto',
            marginLeft :'auto'
          }
        }}
      >
        <Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
          <LogoSection />
        </Box>
        <ButtonBase  sx={{ borderRadius: '12px', overflow: 'hidden',  }}>
          <Avatar
            variant="rounded"
            sx={{
              ...theme.typography.commonAvatar,
              ...theme.typography.mediumAvatar,
              transition: 'all .2s ease-in-out',
              background: theme.palette.secondary.light,
              color: theme.palette.secondary.dark,
              '&:hover': {
                background: theme.palette.secondary.dark,
                color: theme.palette.secondary.light
              }
            }}
            onClick={handleLeftDrawerToggle}
            color="inherit"
          >
            <IconMenu2 stroke={1.5} size="1.3rem" />
          </Avatar>
        </ButtonBase>
      </Box>

    
       <Box style={{width:'100%'}} sx={{display:'flex', justifyContent:'space-between', flexWrap: isMobile ? 'wrap' : null }}>
          {/* right side box */}
          <Box sx={{flex: isMobile ? '0 0 100%' : '0 0 60%', flexWrap:'wrap'}}>
            {/* school Name and logo*/}
            <SchoolName/>
          </Box>
            
          {/* left side box */}
          <Box sx={{display:'flex', alignItems:'center' , flex: isMobile ? '0 0 100%' : '0 0 40%',  justifyContent:  smallMobile ? 'flex-start' : 'end', flexWrap:'wrap', marginLeft: smallMobile ? '1rem' : null}}>

            {/* erp module  and sibling switch */}

            { isERP ? <ErpModule />  : <SiblingSwitch />}

            {/* help section */}
            <HelpSection/>

            {/* acadmic section */}
            <AcadmicYear/>

            {/* notification */}
            <NotificationSection />

            {/* profile */}
            <ProfileSection />


          </Box>

       </Box>
    </>
  );
};

Header.propTypes = {
  handleLeftDrawerToggle: PropTypes.func
};

export default Header;
