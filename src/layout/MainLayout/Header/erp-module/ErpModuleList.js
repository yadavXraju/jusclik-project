import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import fee from '../../../../assets/images/fee.png'
import result from '../../../../assets/images/results.png'


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
        // icon : <LanguageOutlinedIcon sx={{margin:'auto'}}/>,
        icon : <img src={fee} alt='icon' style={{width:'34px', margin:'auto'}} />,
        url: '/erp/student-info-fee/dashboard',
    },

    {
        id:2,
        name:'HR & Payroll',
         icon : <LanguageOutlinedIcon sx={{margin:'auto'}}/>,
        url: '',
    },


    {
        id:3,
        name:'Progress & Result',
        //  icon : <LanguageOutlinedIcon sx={{margin:'auto'}}/>,
        icon : <img src={result} alt='icon' style={{width:'34px', margin:'auto'}} />,
        url: '',
    },

    {
        id:4,
        name:'Library',
         icon : <LanguageOutlinedIcon sx={{margin:'auto'}}/>,
        url: '',
    },

    {
        id:5,
        name:'Inventory',
         icon : <LanguageOutlinedIcon sx={{margin:'auto'}}/>,
        url: '',
    },

    {
        id:6,
        name:'Financial Accounting',
         icon : <LanguageOutlinedIcon sx={{margin:'auto'}}/>,
        url: '',
    },

    {
        id:7,
        name:'Website ',
         icon : <LanguageOutlinedIcon sx={{margin:'auto'}}/>,
        url: '',
    },

    {
        id:8,
        name:'Visitor',
         icon : <LanguageOutlinedIcon sx={{margin:'auto'}}/>,
         url: '/erp/visitor/dashboard',
    },


    {
        id:9,
        name:'Medical Examination',
         icon : <LanguageOutlinedIcon sx={{margin:'auto'}}/>,
        url: '',
    },

    {
        id:10,
        name:'Parent Relationship',
         icon : <LanguageOutlinedIcon sx={{margin:'auto'}}/>,
        url: '',
    },

    {
        id:11,
        name:'Customer Relationship ',
         icon : <LanguageOutlinedIcon sx={{margin:'auto'}}/>,
        url: '',
    },

]