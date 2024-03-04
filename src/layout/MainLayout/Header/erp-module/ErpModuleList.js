import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
// import stufee from '../../../../assets/images/stufee.svg';
// import hr from '../../../../assets/images/hr.svg';
import progress from '../../../../assets/images/erp-module-icon/progress.svg';
import library from '../../../../assets/images/erp-module-icon/library.svg';
import inventory from '../../../../assets/images/erp-module-icon/inventory.svg'
import finance from '../../../../assets/images/erp-module-icon/finance.svg'
import website from '../../../../assets/images/erp-module-icon/website.svg'
import visitor from '../../../../assets/images/erp-module-icon/visitor.svg'
import medical from '../../../../assets/images/erp-module-icon/medical.svg'
import admission from '../../../../assets/images/erp-module-icon/admission.svg'
import relationship from '../../../../assets/images/erp-module-icon/customer.svg'
import stufee from '../../../../assets/images/erp-module-icon/fee.svg'
import hr from '../../../../assets/images/erp-module-icon/hr.svg'


export const ErpModuleList = [

    {
        id:12,
        name:'Parent Dashboard',
        icon : <LanguageOutlinedIcon sx={{margin:'auto'}}/>,
        url: '/parent/dashboard',
        role : 'parent',
    },

    {
        id:13,
        name:'class teacher dashboard',
        icon : <LanguageOutlinedIcon sx={{margin:'auto'}}/>,
        url: '/class-teacher/dashboard',
        role : 'class-teacher',
    },


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
        url: '',
        role : 'hr-pay-roll',
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
        url: '',
        role : 'library',
    },

    {
        id:5,
        name:'Inventory',
        icon : <img src={inventory} alt='icon' style={{width:'34px', margin:'auto'}} />,
        url: '',
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
        url: '',
        role : 'customer-relationship',
    },

]