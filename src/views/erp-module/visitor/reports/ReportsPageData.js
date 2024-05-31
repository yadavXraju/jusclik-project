import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import ManageHistoryOutlinedIcon from '@mui/icons-material/ManageHistoryOutlined';
export const sections = [
    {
      title: 'Visitors',
      icon: <GroupsOutlinedIcon />,
      pages: [
        { name: 'Visitor Details', path: '/erp/visitor/reports/visitor-details' },
        { name: 'Blacklisted', path: '/erp/visitor/reports/blacklisted' },
        { name: 'Pre-Schedule Visits', path: '/erp/visitor/reports/pre-schedule-visits' },
        { name: 'Feedback / Satifaction Score ', path: '/erp/visitor/reports/feedback/satifaction-score' },
       
      ]
    },
    {
      title: 'Gate Pass',
      icon: <BadgeOutlinedIcon />,
      pages: [
        { name: 'Generated Gate Pass', path: '/erp/visitor/reports/generated-gate-pas' },
       
      ]
    },
    
    {
      title: 'Activity',
      icon: <ManageHistoryOutlinedIcon />,
      pages: [
       
        { name: 'Logs', path: '/erp/visitor/reports/logs' },
  ]
  }
  ];
  