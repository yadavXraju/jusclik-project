// @Page Owner-Tarun Pandey
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FileOpenOutlinedIcon from '@mui/icons-material/FileOpenOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ApprovalOutlinedIcon from '@mui/icons-material/ApprovalOutlined';
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import FormatPaintOutlinedIcon from '@mui/icons-material/FormatPaintOutlined';
import ParamStepper from 'components/tabs/Stepper';
import BuilderComponent from './form-pages/builder-component';
import Rule from './form-pages/Rule';
import Settings from './form-pages/settings';
import Integration from './form-pages/Integration';

const FormBuilder = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // Form Builder Pages
  const tabPages = [
    {
      id: 1,
      name: "Builder",
      component: BuilderComponent,
      icon: <FileOpenOutlinedIcon />
    },
    {
      id: 2,
      name: "Rule",
      component: Rule,
      icon: <DescriptionOutlinedIcon />
    },
    {
      id: 3,
      name: "Settings",
      component: Settings,
      icon: <SettingsOutlinedIcon />
    },
    {
      id: 4,
      name: "Themes",
      component: Rule,
      icon: <FormatPaintOutlinedIcon />
    },
    {
      id: 5,
      name: "Share",
      component: Rule,
      icon: <ShareOutlinedIcon />
    },
    {
      id: 6,
      name: "Integrations",
      component: Integration,
      icon: <IntegrationInstructionsOutlinedIcon />
    },
    {
      id: 7,
      name: "Approvals",
      component: Rule,
      icon: <ApprovalOutlinedIcon />
    }
  ]

  return (
    <>
      <ParamStepper tabPage={tabPages} numberShow={false}
        iconShow={false} showBottomNav={false}
        value={value}
        handleChange={handleChange}
        customtabSytle={{ backgroundColor: "white", marginRight: "10px", minWidth: "auto", flexDirection: 'row', gap: '10px', alignItems: 'center' }}
        customTabsStyle={{ backgroundColor: "white", paddingLeft: "20px", marginRight: "0px", minWidth: "auto", gap: "20px", height: "63px" }}
        customtabPanelStyle={{
          borderTopLeftRadius: '0px',
          borderTopRightRadius: '0px',
          overflow: "hidden",
          background: "none",
          padding: "0px"
        }}
      />
    </>
  )
}

export default FormBuilder;

