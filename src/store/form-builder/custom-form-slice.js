import { createSlice } from '@reduxjs/toolkit';


const basicFields = [
                    {
                        id: 3,
                        name: "Single Line",
                        type: "text",
                        selected: false
                    },
                    {
                        name: "Multi  Line",
                        type: "text",
                        selected: true,
                        id: 4
                    },
                    {
                        name: "Number",
                        type: "date",
                        selected: false,
                        id: 5
                    },
                    {
                        name: "Decimal",
                        type: "text",
                        selected: true,
                        id: 7
                    },
                    {
                        name: "Name",
                        type: "text",
                        selected: false,
                        id: 8
                    },
                    {
                        name: "Address",
                        type: "text",
                        selected: false,
                        id: 9
                    },
                    {
                        name: "Phone",
                        type: "text",
                        selected: false,
                        id: 10
                    },
                    {
                        name: "Email",
                        type: "date",
                        selected: false,
                        id: 11
                    },
                    {
                        name: "Date",
                        type: "text",
                        selected: false,
                        id: 12
                    },
                    {
                        name: "Time",
                        type: "text",
                        selected: false,
                        id: 13
                    },
                    {
                        name: "Date-Time",
                        type: "text",
                        selected: false,
                        id: 14
                    }, 
                    {
                        name:"Decision-Box",
                        type:"text",
                        selected:false,
                        id:15
                    },{
                        name:"DropDown",
                        type:"text",
                        selected:false,
                        id:16
                    },{
                        name:"Radio",
                        type:"text",
                        selected:false,
                        id:17
                    },{
                        name:"Multiple Choice",
                        type:"text",
                        selected:false,
                        id:18
                    },
                    {
                        name:"Checkbox",
                        type:"text",
                        selected:false,
                        id:19
                    },
                    {
                        name:"Website",
                        type:"text",
                        selected:false,
                        id:20
                    },{
                        name:"Currency",
                        type:"text",
                        selected:false,
                        id:21
                    },
                    {
                        name:"File Upload",
                        type:"text",
                        selected:false,
                        id:22
                    },{
                        name:"Image Upload",
                        type:"text",
                        selected:false,
                        id:23
                    },{
                        name:"Audio/Video Upload",
                        type:"text",
                        selected:false,
                        id:24
                    },
                    {
                        name:"Description",
                        type:"text",
                        selected:false,
                        id:25
                    },{
                        name:"Section",
                        type:"text",
                        selected:false,
                        id:26
                    },
                    {
                        name:"Section",
                        type:"text",
                        selected:false,
                        id:27
                    },{
                        name:"Page Break",
                        type:"text",
                        selected:false,
                        id:28
                    },
                    {
                        name:"Slider",
                        type:'text',
                        selected:false,
                        id:29
                    },
                    {
                        name:"Rating",
                        type:"text",
                        selected:false,
                        id:30
                    },{
                        name:"Unique ID",
                        type:"text",
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

//const selectedComponent=[
//     {
//         id:1245,
//         type:"Number",
           
//     }
// ]
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


