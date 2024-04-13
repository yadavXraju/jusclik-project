import { createSlice } from '@reduxjs/toolkit';


const modulesData = [
    {
        id: '1',
        name: 'Stufee',
        isSelected: false,
        accessLevel: [
            {
                id: 2,
                isSelected: false,
                name: "Full Access"
            }, {
                id: 3,
                isSelected: false,
                name: "View"
            }, {
                id: 4,
                isSelected: false,
                name: "Create"
            }, {
                id: 5,
                isSelected: false,
                name: "Edit"
            }, {
                id: 6,
                isSelected: false,
                name: "Delete"
            }, {
                id: 7,
                isSelected: false,
                name: 'Deleted'
            }
        ]
    },
    { id: '2', name: 'Payroll', isSelected: false,accessLevel: [
        {
            id: 2,
            isSelected: false,
            name: "Full Access"
        }, {
            id: 3,
            isSelected: false,
            name: "View"
        }, {
            id: 4,
            isSelected: false,
            name: "Create"
        }, {
            id: 5,
            isSelected: false,
            name: "Edit"
        }, {
            id: 6,
            isSelected: false,
            name: "Delete"
        }, {
            id: 7,
            isSelected: false,
            name: 'Deleted'
        }
    ] },
    { id: '3', name: 'Progress', isSelected: false,accessLevel: [
        {
            id: 2,
            isSelected: false,
            name: "Full Access"
        }, {
            id: 3,
            isSelected: false,
            name: "View"
        }, {
            id: 4,
            isSelected: false,
            name: "Create"
        }, {
            id: 5,
            isSelected: false,
            name: "Edit"
        }, {
            id: 6,
            isSelected: false,
            name: "Delete"
        }, {
            id: 7,
            isSelected: false,
            name: 'Deleted'
        }
    ] },
    { id: '4', name: 'Library', isSelected: false,accessLevel: [
        {
            id: 2,
            isSelected: false,
            name: "Full Access"
        }, {
            id: 3,
            isSelected: false,
            name: "View"
        }, {
            id: 4,
            isSelected: false,
            name: "Create"
        }, {
            id: 5,
            isSelected: false,
            name: "Edit"
        }, {
            id: 6,
            isSelected: false,
            name: "Delete"
        }, {
            id: 7,
            isSelected: false,
            name: 'Deleted'
        }
    ]},
    { id: '5', name: 'Inventory', isSelected: false,accessLevel: [
        {
            id: 2,
            isSelected: false,
            name: "Full Access"
        }, {
            id: 3,
            isSelected: false,
            name: "View"
        }, {
            id: 4,
            isSelected: false,
            name: "Create"
        }, {
            id: 5,
            isSelected: false,
            name: "Edit"
        }, {
            id: 6,
            isSelected: false,
            name: "Delete"
        }, {
            id: 7,
            isSelected: false,
            name: 'Deleted'
        }
    ] },
    { id: '6', name: 'Website', isSelected: false,accessLevel: [
        {
            id: 2,
            isSelected: false,
            name: "Full Access"
        }, {
            id: 3,
            isSelected: false,
            name: "View"
        }, {
            id: 4,
            isSelected: false,
            name: "Create"
        }, {
            id: 5,
            isSelected: false,
            name: "Edit"
        }, {
            id: 6,
            isSelected: false,
            name: "Delete"
        }, {
            id: 7,
            isSelected: false,
            name: 'Deleted'
        }
    ] },
    { id: '7', name: 'Visitor Mgmt', isSelected: false,accessLevel: [
        {
            id: 2,
            isSelected: false,
            name: "Full Access"
        }, {
            id: 3,
            isSelected: false,
            name: "View"
        }, {
            id: 4,
            isSelected: false,
            name: "Create"
        }, {
            id: 5,
            isSelected: false,
            name: "Edit"
        }, {
            id: 6,
            isSelected: false,
            name: "Delete"
        }, {
            id: 7,
            isSelected: false,
            name: 'Deleted'
        }
    ]},
    { id: '8', name: 'Medical', isSelected: false,accessLevel: [
        {
            id: 2,
            isSelected: false,
            name: "Full Access"
        }, {
            id: 3,
            isSelected: false,
            name: "View"
        }, {
            id: 4,
            isSelected: false,
            name: "Create"
        }, {
            id: 5,
            isSelected: false,
            name: "Edit"
        }, {
            id: 6,
            isSelected: false,
            name: "Delete"
        }, {
            id: 7,
            isSelected: false,
            name: 'Deleted'
        }
    ] }
];



const initialState = {
    moduleAccess: modulesData,
};

const customizationSlice = createSlice({
    name: 'admission',
    initialState,
    reducers: {
        handleFullAccesssChange: (state,action) => {
            const{name}=action.payload;
             state.moduleAccess.map((module)=>{
                if(module.name==name){
                    module.isSelected=true;
                   module.accessLevel.map((access)=>{
                      access.isSelected=true;
                   }) 
                }
             })
        },
        hanldeAccessChange: (state,action) => {
            const{name,accessName}=action.payload;
             state.moduleAccess.map((module)=>{
                if(module.name==name){
                    module.isSelected=true;
                   module.accessLevel.map((access)=>{
                    if(access.name==accessName)
                      access.isSelected=true;
                   }) 
                }
             })
        }
    },
});


export const { handleFullAccesssChange,hanldeAccessChange} = customizationSlice.actions;

export default customizationSlice.reducer;


