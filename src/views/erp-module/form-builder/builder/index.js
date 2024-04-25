import ParamStepper from 'views/common-section/param-stepper';
import BuilderComponent from './builder-component';
import Rule from '../Rule'


const FormBuilder = () => {
  const tabPages = [
    {
      id: 1,
      name: "Builder",
      component:BuilderComponent
    },
    {
      id: 2,
      name: "Rule",
      component:Rule
    },
    {
      id:3,
      name:"Settings",
      component:Rule
    },
    {
      id:4,
      name:"Themes",
      component:Rule
    },
    {
      id:5,
      name:"Share",
      component:Rule
    },
    {
      id:6,
      name:"Integrations",
      component:Rule
    },
    {
      id:7,
      name:"Approvals",
      component:Rule
    }
  ]
  return (
    <>
      <ParamStepper tabPage={tabPages} numberShow={false}
        iconShow={false} showBottomNav={false}
        customtabSytle={{ backgroundColor: "white", marginRight: "0px", minWidth: "auto" }}
        customStyleTabs={{ backgroundColor: "white", paddingLeft: "20px", marginRight: "0px", minWidth: "auto", }}
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

