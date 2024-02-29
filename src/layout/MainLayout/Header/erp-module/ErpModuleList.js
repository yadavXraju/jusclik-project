import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import stufee from '../../../../assets/images/stufee.svg';
import hr from '../../../../assets/images/hr.svg';
import progress from '../../../../assets/images/progress.svg';
import library from '../../../../assets/images/library.svg';
import inventory from '../../../../assets/images/inventory.svg'
import finance from '../../../../assets/images/finance.svg'
import website from '../../../../assets/images/website.svg'
import visitor from '../../../../assets/images/visitor.svg'
import medical from '../../../../assets/images/medical.svg'
import admission from '../../../../assets/images/admission.svg'
import relationship from '../../../../assets/images/relationship.svg'


export const ErpModuleList = [

    {
        id:12,
        name:'Parent Dashboard',
        icon : <LanguageOutlinedIcon sx={{margin:'auto'}}/>,
        url: '/parent/dashboard',
    },

    {
        id:13,
        name:'class teacher dashboard',
        icon : <LanguageOutlinedIcon sx={{margin:'auto'}}/>,
        url: '/class-teacher/dashboard',
    },


    {
        id:1,
        name:'Student Info & Fee ',
        icon : <img src={stufee} alt='icon' style={{width:'34px', margin:'auto'}} />,
        url: '/erp/student-info-fee/dashboard',
    },

    {
        id:2,
        name:'HR & Payroll',
        icon : <img src={hr} alt='icon' style={{width:'34px', margin:'auto'}} />,
        url: '',
    },


    {
        id:3,
        name:'Progress & Result',
        icon : <img src={progress} alt='icon' style={{width:'34px', margin:'auto'}} />,
        url: '',
    },

    {
        id:4,
        name:'Library',
        icon : <img src={library} alt='icon' style={{width:'34px', margin:'auto'}} />,
        url: '',
    },

    {
        id:5,
        name:'Inventory',
        icon : <img src={inventory} alt='icon' style={{width:'34px', margin:'auto'}} />,
        url: '',
    },

    {
        id:6,
        name:'Financial Accounting',
        icon : <img src={finance} alt='icon' style={{width:'34px', margin:'auto'}} />,
        url: '',
    },

    {
        id:7,
        name:'Website ',
        icon : <img src={website} alt='icon' style={{width:'34px', margin:'auto'}} />,
        url: '',
    },

    {
        id:8,
        name:'Visitor',
        icon : <img src={visitor} alt='icon' style={{width:'34px', margin:'auto'}} />,
         url: '/erp/visitor/dashboard',
    },


    {
        id:9,
        name:'Medical Examination',
        icon : <img src={medical} alt='icon' style={{width:'34px', margin:'auto'}} />,
        url: '',
    },

    {
        id:10,
        name:'Admission',
        icon : <img src={admission} alt='icon' style={{width:'34px', margin:'auto'}} />,
        url: '',
    },

    {
        id:11,
        name:'Customer Relationship ',
        icon : <img src={relationship} alt='icon' style={{width:'34px', margin:'auto'}} />,
        url: '',
    },

]