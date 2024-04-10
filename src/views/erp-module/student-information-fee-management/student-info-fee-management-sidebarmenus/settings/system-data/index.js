import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Systemdata from 'views/common-section/ParamSearchTabs'; 
import useDrawer from 'hooks/useDrawer'; 
import {
  Class,
  Section,
  House,
  ChequeCategory,
  OtherCategory,
  ConcessionCategory,
  InvoiceType,
  FeeGroup,
  FeeHead,
  TransportSlab,
  BounceEmailNotification,
  StudentDocuments,
  Currency,
  LeftReason,
  GatePassAccompaniedBy,
  GatePassReason,
  Nationality,
  Wing,
  TransportRoute,
  TransportStop
} from './tabPages';




const SystemDataPages = () => {
  const { anchor, toggleDrawer } = useDrawer();
  const tabPage = [
    {
      id: 1,
      name: "Wing",
      component: Wing,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 2,
      name: "Class",
      component: Class,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    }, {
      id: 3,
      name: "Section",
      component: Section,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 4,
      name: "House",
      component: House,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 5,
      name: "Cheque Category",
      component: ChequeCategory,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 6,
      name: "Other Category",
      component: OtherCategory,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 7,
      name: "Concession Category",
      component: ConcessionCategory,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 8,
      name: "Invoice Type",
      component: InvoiceType,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 9,
      name: "Fee Group",
      component: FeeGroup,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 10,
      name: "Fee Head",
      component: FeeHead,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 11,
      name: "Transport Slab",
      component: TransportSlab,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 12,
      name: "Transport Route",
      component: TransportRoute,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 13,
      name: "Transport Stop",
      component: TransportStop,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 14,
      name: "Bounce Email Notification Reason",
      component: BounceEmailNotification,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 15,
      name: "Student Documents",
      component: StudentDocuments,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 16,
      name: "Currency",
      component: Currency,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 17,
      name: "Left Reasons",
      component: LeftReason,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 18,
      name: "Gate pass Reasons",
      component: GatePassReason,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 19,
      name: "Gate pass Accompanied By",
      component: GatePassAccompaniedBy,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 20,
      name: "Nationality {Restricted}",
      component: Nationality,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    }
  ]
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", width: "97%", alignItems: "center" }}>
        <Typography variant="p" sx={{ marginTop: "-20px", marginLeft: "20px" }}>
          Setup System Data  as application setting to manage all application settings
        </Typography>
        <Button onClick={toggleDrawer('right', true)} sx={{ margin: "0px 0px 20px 60px", height: "40px", color: '#fff' }} variant="contained" startIcon={<AddIcon />}>Add Field</Button>
      </Box>
      <Systemdata tabPage={tabPage} />
    </>
  );
}

export default SystemDataPages;





