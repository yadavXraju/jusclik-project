//@Page Onwer-Tarun Pandey
import React from 'react';
import { Box} from '@mui/material';
import ParamTabs from 'components/SearchTabs';
import useDrawer from 'hooks/useDrawer';
import FieldRule from './field-rule';
import FormRule from './form-rule';
import PageRule from './page-rule';
import DenySubmission from './deny-submission';

const Rule = () => {
  const { anchor, toggleDrawer } = useDrawer();
  const tabPage = [
    {
      id: 1,
      name: "Field Rule",
      component: FieldRule,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 2,
      name: "Form Rule",
      component:FormRule,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    }, {
      id: 3,
      name: "Page Rule",
      component: PageRule,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
    {
      id: 4,
      name: "Deny Submissions",
      component: DenySubmission,
      props: {
        toggleDrawer: toggleDrawer,
        toggleAddDrawer: anchor
      }
    },
  ]

  return (
    <Box sx={{ marginTop: "20px" }}>
      <ParamTabs tabPage={tabPage} />
    </Box>
  )
}


export default Rule;