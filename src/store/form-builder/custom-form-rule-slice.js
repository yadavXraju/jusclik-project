
import { createSlice } from '@reduxjs/toolkit';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import MultipleStopTwoToneIcon from '@mui/icons-material/MultipleStopOutlined';
import LooksOneTwoToneIcon from '@mui/icons-material/LooksOneOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CommitOutlinedIcon from '@mui/icons-material/CommitOutlined';


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
    ]



const initialState = {
    basicFields: basicFields,
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
    handleSelectField
} = customizationSlice.actions;

export default customizationSlice.reducer;


