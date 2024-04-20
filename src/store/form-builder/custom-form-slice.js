import { createSlice } from '@reduxjs/toolkit';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
// import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import MultipleStopTwoToneIcon from '@mui/icons-material/MultipleStopOutlined';
import LooksOneTwoToneIcon from '@mui/icons-material/LooksOneOutlined';
// import BadgeTwoToneIcon from '@mui/icons-material/BadgeOutlined';
// import ContactMailTwoToneIcon from '@mui/icons-material/ContactMailOutlined';
import DateRangeTwoToneIcon from '@mui/icons-material/DateRangeOutlined';
import InventoryTwoToneIcon from '@mui/icons-material/InventoryOutlined';
import ArrowDropDownTwoToneIcon from '@mui/icons-material/ArrowDropDownOutlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AudioFileOutlinedIcon from '@mui/icons-material/AudioFileOutlined';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import InsertPageBreakTwoToneIcon from '@mui/icons-material/InsertPageBreakOutlined';
import ChecklistRtlTwoToneIcon from '@mui/icons-material/ChecklistRtlOutlined';
import StarBorderTwoToneIcon from '@mui/icons-material/StarBorderOutlined';
import SavingsTwoToneIcon from '@mui/icons-material/SavingsOutlined';
import FormatListNumberedTwoToneIcon from '@mui/icons-material/FormatListNumberedOutlined';
import PaymentTwoToneIcon from '@mui/icons-material/PaymentOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
// import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import CommitOutlinedIcon from '@mui/icons-material/CommitOutlined';
import FunctionsOutlinedIcon from '@mui/icons-material/FunctionsOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
import GridOnOutlinedIcon from '@mui/icons-material/GridOnOutlined';

const basicFields = [
                    {
                        id: 3,
                        name: "Single Line",
                        type: "text",
                        label:"",
                        selected: false,
                        icon:CommitOutlinedIcon 
                    },
                    {
                        name: "Multi  Line",
                        type: "text",
                        label:"",
                        selected: true,
                        id: 4,
                        icon:MultipleStopTwoToneIcon
                    },
                    {
                        name: "Number",
                        type: "date",
                        label:"",
                        selected: false,
                        id: 5,
                        icon:LooksOneTwoToneIcon
                    },
                    {
                        name: "Name",
                        type: "text",
                        label:"",
                        selected: false,
                        id: 8,
                        icon:PersonOutlineOutlinedIcon
                    },
                    {
                        name: "Address",
                        type: "text",
                        label:"",
                        selected: false,
                        id: 9,
                        icon:HomeOutlinedIcon
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
                        id: 14,
                        icon:DateRangeTwoToneIcon,
                    }, 
                    {
                        name:"Decision-Box",
                        type:"text",
                        label:"",
                        selected:false,
                        id:15,
                        icon:InventoryTwoToneIcon,
                    },{
                        name:"Drop Down",
                        type:"text",
                        label:"",
                        selected:false,
                        id:16,
                        icon:ArrowDropDownTwoToneIcon
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
                        id:18,
                        icon:ChecklistRtlTwoToneIcon
                    },
                    {
                        name:"Checkbox",
                        type:"text",
                        label:"",
                        selected:false,
                        id:19,
                        icon:CheckBoxOutlinedIcon
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
                        id:21,
                        icon:SavingsTwoToneIcon
                    },
                    {
                        name:"File Upload",
                        type:"text",
                        label:"",
                        selected:false,
                        id:22,
                        icon:CloudUploadOutlinedIcon
                    },{
                        name:"Image Upload",
                        type:"text",
                        label:"",
                        selected:false,
                        id:23,
                        icon:CloudUploadOutlinedIcon
                    },{
                        name:"Audio/Video Upload",
                        type:"text",
                        label:"",
                        selected:false,
                        id:24,
                        icon:AudioFileOutlinedIcon
                    },
                    {
                        name:"Description",
                        type:"text",
                        label:"",
                        selected:false,
                        id:25,
                        icon:DescriptionOutlinedIcon
                    },{
                        name:"Section",
                        type:"text",
                        label:"",
                        selected:false,
                        id:26,
                        icon:MenuOpenOutlinedIcon
                    },
                    {
                        name:"Page Break",
                        type:"text",
                        label:"",
                        selected:false,
                        id:28,
                        icon:InsertPageBreakTwoToneIcon
                    },
                    {
                        name:"Slider",
                        type:'text',
                        label:"",
                        selected:false,
                        id:29,
                        icon:TuneOutlinedIcon
                    },
                    {
                        name:"Rating",
                        type:"text",
                        label:"",
                        selected:false,
                        id:30,
                        icon:StarBorderTwoToneIcon
                    },{
                        name:"Unique ID",
                        type:"text",
                        label:"",
                        selected:false,
                        id:31,
                        icon:FormatListNumberedTwoToneIcon
                    }
    ]

const advancedFields=[
    {
        id:13,
        name:"Payment",
        type:"text",
        icon:PaymentTwoToneIcon
    },
    {
        id:15,
        name:"Formula",
        icon:FunctionsOutlinedIcon
    },
    {
        id:16,
        name:"Subform"
    },
    {
        id:17,
        name:"Matrix Choice",
        icon:GridOnOutlinedIcon 
    },
    {
        id:18,
        name:"Image Choices",
        icon:ImageOutlinedIcon
    },
    {
        id:19,
        name:"Signature",
        icon:AutoFixHighOutlinedIcon
    },
    {
        id:20,
        name:"Terms and Conditions",
        icon:IndeterminateCheckBoxOutlinedIcon
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


