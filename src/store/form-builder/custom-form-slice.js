import { createSlice } from '@reduxjs/toolkit';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

const basicFields = [
                    {
                        id: 3,
                        name: "Single Line",
                        type: "text",
                        label:"",
                        selected: false
                    },
                    {
                        name: "Multi  Line",
                        type: "text",
                        label:"",
                        selected: true,
                        id: 4
                    },
                    {
                        name: "Number",
                        type: "date",
                        label:"",
                        selected: false,
                        id: 5
                    },
                    {
                        name: "Decimal",
                        type: "text",
                        label:"",
                        selected: true,
                        id: 7
                    },
                    {
                        name: "Name",
                        type: "text",
                        label:"",
                        selected: false,
                        id: 8
                    },
                    {
                        name: "Address",
                        type: "text",
                        label:"",
                        selected: false,
                        id: 9
                    },
                    {
                        name: "Phone",
                        type: "text",
                        label:"",
                        selected: false,
                        id: 10,
                        icon:PhoneAndroidOutlinedIcon,
                    },
                    {
                        name: "Email",
                        type: "date",
                        label:"",
                        selected: false,
                        id: 11,
                        icon:EmailOutlinedIcon
                    },
                    {
                        name: "Date",
                        type: "text",
                        label:"",
                        selected: false,
                        id: 12,
                        icon:CalendarMonthOutlinedIcon 
                    },
                    {
                        name: "Time",
                        type: "text",
                        label:"",
                        selected: false,
                        id: 13,
                        icon:AccessTimeOutlinedIcon 
                    },
                    {
                        name: "Date-Time",
                        type: "text",
                        label:"",
                        selected: false,
                        id: 14
                    }, 
                    {
                        name:"Decision-Box",
                        type:"text",
                        label:"",
                        selected:false,
                        id:15
                    },{
                        name:"Drop Down",
                        type:"text",
                        label:"",
                        selected:false,
                        id:16
                    },{
                        name:"Radio",
                        type:"text",
                        label:"",
                        selected:false,
                        id:17,
                        icon:RadioButtonCheckedOutlinedIcon
                    },{
                        name:"Multiple Choice",
                        type:"text",
                        label:"",
                        selected:false,
                        id:18
                    },
                    {
                        name:"Checkbox",
                        type:"text",
                        label:"",
                        selected:false,
                        id:19
                    },
                    {
                        name:"Website",
                        type:"text",
                        label:"",
                        selected:false,
                        id:20,
                        icon:LanguageOutlinedIcon,
                    },{
                        name:"Currency",
                        type:"text",
                        label:"",
                        selected:false,
                        id:21
                    },
                    {
                        name:"File Upload",
                        type:"text",
                        label:"",
                        selected:false,
                        id:22
                    },{
                        name:"Image Upload",
                        type:"text",
                        label:"",
                        selected:false,
                        id:23
                    },{
                        name:"Audio/Video Upload",
                        type:"text",
                        label:"",
                        selected:false,
                        id:24
                    },
                    {
                        name:"Description",
                        type:"text",
                        label:"",
                        selected:false,
                        id:25
                    },{
                        name:"Section",
                        type:"text",
                        label:"",
                        selected:false,
                        id:26
                    },
                    {
                        name:"Section",
                        type:"text",
                        label:"",
                        selected:false,
                        id:27
                    },{
                        name:"Page Break",
                        type:"text",
                        label:"",
                        selected:false,
                        id:28
                    },
                    {
                        name:"Slider",
                        type:'text',
                        label:"",
                        selected:false,
                        id:29
                    },
                    {
                        name:"Rating",
                        type:"text",
                        label:"",
                        selected:false,
                        id:30
                    },{
                        name:"Unique ID",
                        type:"text",
                        label:"",
                        selected:false,
                        id:31
                    }
    ]

const advancedFields=[
    {
        id:13,
        name:"Payment",
        type:"text"
    },
    {
        id:14,
        name:"Zoho CRM"
    },
    {
        id:15,
        name:"Formula"
    },
    {
        id:16,
        name:"Subform"
    },
    {
        id:17,
        name:"Matrix Choice"
    },
    {
        id:18,
        name:"Image Choices"
    },
    {
        id:19,
        name:"Signature"
    },
    {
        id:20,
        name:"Terms and Conditions"
    }
]


const initialState = {
    basicFields: basicFields,
    advancedFields:advancedFields
};

const customizationSlice = createSlice({
    name: 'custom',
    initialState,
    reducers: {
        handleSelectField: (state, action) => {
            const selectedId=action.payload;
            console.log(selectedId)
            state.basicFields.map((item)=>{
                 if(item?.id==selectedId){
                       item.selected=true;
                 }
            })
        },
    }
});


export const {
    handleSelectField,
} = customizationSlice.actions;

export default customizationSlice.reducer;


