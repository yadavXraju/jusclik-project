// Page Owner Abhishek
// Description : List of erp modules and Mapping layout 

import React from 'react';
import { styled } from '@mui/material/styles';
import { List, ListItem, Box, ListItemText, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
// import { ErpModuleList } from './ErpModuleList';
import { useNavigate } from 'react-router';
import { handleErpModule } from 'store/layout/erp-module-slice';
import { useDispatch } from 'react-redux';
import progress from 'assets/images/erp-module-icon/progress.svg';
import library from 'assets/images/erp-module-icon/library.svg';
import inventory from 'assets/images/erp-module-icon/inventory.svg';
import finance from 'assets/images/erp-module-icon/finance.svg';
import website from 'assets/images/erp-module-icon/website.svg';
import visitor from 'assets/images/erp-module-icon/visitor.svg';
import medical from 'assets/images/erp-module-icon/medical.svg';
import admission from 'assets/images/erp-module-icon/admission.svg';
import relationship from 'assets/images/erp-module-icon/customer.svg';
import stufee from 'assets/images/erp-module-icon/fee.svg';
import hr from 'assets/images/erp-module-icon/hr.svg';
import formBuilder from 'assets/images/erp-module-icon/form-builder.svg';

// styles
const ListItemWrapper = styled('div')(({ theme }) => ({
  cursor: 'pointer',
  padding: 16,
  '&:hover': {
    background: theme.palette.primary.light
  },
  '& .MuiListItem-root': {
    padding: 0
  }
}));



// erp module list icons and name
export const ErpModuleList = [
    {
        id:1,
        name:'Student Info & Fee ',
        icon : <img src={stufee} alt='icon' style={{width:'34px', margin:'auto'}} />,
        url: '/erp/student-info-fee/dashboard',
        role : 'stufee',
    },

    {
        id:2,
        name:'HR & Payroll',
        icon : <img src={hr} alt='icon' style={{width:'34px', margin:'auto'}} />,
        url: '/erp/hr-payroll/dashboard',
        role : 'hr-payroll',
    },


    {
        id:3,
        name:'Progress & Result',
        icon : <img src={progress} alt='icon' style={{width:'34px', margin:'auto'}} />,
        url: '',
        role : 'progress-result',
    },

    {
        id:4,
        name:'Library',
        icon : <img src={library} alt='icon' style={{width:'34px', margin:'auto'}} />,
        url: '/erp/library/dashboard',
        role : 'library',
    },

    {
        id:5,
        name:'Inventory',
        icon : <img src={inventory} alt='icon' style={{width:'34px', margin:'auto'}} />,
        url: '/erp/inventory/dashboard',
        role : 'inventory',
    },

    {
        id:6,
        name:'Financial Accounting',
        icon : <img src={finance} alt='icon' style={{width:'34px', margin:'auto'}} />,
        url: '',
        role : 'financial-accounting',
    },

    {
        id:7,
        name:'Website ',
        icon : <img src={website} alt='icon' style={{width:'34px', margin:'auto'}} />,
        url: '',
        role : 'website',
    },

    {
        id:8,
        name:'Visitor',
        icon : <img src={visitor} alt='icon' style={{width:'34px', margin:'auto'}} />,
         url: '/erp/visitor/dashboard',
         role : 'visitor',
    },


    {
        id:9,
        name:'Medical Examination',
        icon : <img src={medical} alt='icon' style={{width:'34px', margin:'auto'}} />,
        url: '',
        role : 'medical-examination',
    },

    {
        id:10,
        name:'Admission',
        icon : <img src={admission} alt='icon' style={{width:'34px', margin:'auto'}} />,
        url: '',
        role : 'admission',
    },

    {
        id:11,
        name:'Customer Relationship ',
        icon : <img src={relationship} alt='icon' style={{width:'34px', margin:'auto'}} />,
        url: '/erp/crm/dashboard',
        role : 'crm',
    },

    {
        id:12,
        name:'Form Builder',
        icon : <img src={formBuilder} alt='icon' style={{width:'34px', margin:'auto'}} />,
        url: '/erp/forms',
        role : 'form-builder',
    },

]

const ErpModuleLayout = ({ setOpen }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (url, role) => {
    localStorage.setItem('userRole', role);
    navigate(url);
    setOpen(false); 
    dispatch(handleErpModule({url , role}))
  };

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 350,
        py: 0,
        borderRadius: '10px',
        display: 'flex',
        flexWrap: 'wrap',
        [theme.breakpoints.down('md')]: {
          maxWidth: 300
        },
        '& .MuiListItemSecondaryAction-root': {
          top: 22
        },
        '& .MuiDivider-root': {
          my: 0
        },
        '& .list-container': {
          pl: 7
        }
      }}
    >
      {ErpModuleList.map((erp, index) => (
        <React.Fragment key={index}>
          <ListItemWrapper sx={{ flex: '0 0 50%', borderBottom: '1px solid #8080801c', display: 'flex', alignItems: 'center' }}>
            <ListItem alignItems="center" sx={{ gap: '10px', flexDirection: 'column' }} onClick={() => handleClick(erp.url, erp.role)}>
              <Box sx={{
                // backgroundColor: alert.bgColor,
                padding: '6px',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'left',
                color: 'rgb(30, 136, 229)',
                flexDirection: 'column',
                textAlign: 'center',
              }}>
                {erp.icon}

                
                <ListItemText primary={erp.name} />
              </Box>
            </ListItem>
          </ListItemWrapper>
          <Divider key={`divider-${index}`} />
        </React.Fragment>
      ))}
    </List>
  );
};

export default ErpModuleLayout;
