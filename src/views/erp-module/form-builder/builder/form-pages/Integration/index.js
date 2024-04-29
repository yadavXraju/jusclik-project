import React from 'react';
import { Box,Typography} from '@mui/material';
import ParamTabs from 'views/common-section/ParamSearchTabs';
import useDrawer from 'hooks/useDrawer';

const Component=()=>{
    return(
        <Box sx={{
            display: "flex", flexDirection: "row",
            justifyContent: "space-between", height: "80px",
            alignItems: "center", backgroundColor: "#f8fafccc",
            padding: "0px 20px"
        }}>
            <Box sx={{ marginTop: "5px" }}>
                <Typography sx={{ marginLeft: "20px", display: "flex", alignItems: "center", gap: "10px" }} variant="h4">
                   Field Rule
                </Typography>
                <Typography sx={{ fontSize: "smaller" }}>
                    Configure rules to show or hide fields based on the input of another field.
                </Typography>
            </Box>
        </Box>
    )
}

const Rule = () => {
    const { anchor, toggleDrawer } = useDrawer();
    const tabPage = [
        {
            id: 1,
            name: "Student Info & Fee",
            component: Component,
            props: {
                toggleDrawer: toggleDrawer,
                toggleAddDrawer: anchor
            }
        },
        {
            id: 2,
            name: "HR & Payroll",
            component: Component,
            props: {
                toggleDrawer: toggleDrawer,
                toggleAddDrawer: anchor
            }
        }, {
            id: 3,
            name: "Progress & Result",
            component: Component,
            props: {
                toggleDrawer: toggleDrawer,
                toggleAddDrawer: anchor
            }
        },
        {
            id: 4,
            name: "Library",
            component: Component,
            props: {
                toggleDrawer: toggleDrawer,
                toggleAddDrawer: anchor
            }
        },
        {
            id: 5,
            name: "Inventory",
            component: Component,
            props: {
                toggleDrawer: toggleDrawer,
                toggleAddDrawer: anchor
            }
        },
        {
            id: 6,
            name: "Financial Accounting",
            component: Component,
            props: {
                toggleDrawer: toggleDrawer,
                toggleAddDrawer: anchor
            }
        },
        {
            id: 7,
            name: "Website",
            component: Component,
            props: {
                toggleDrawer: toggleDrawer,
                toggleAddDrawer: anchor
            }
        },
        {
            id: 8,
            name: "Visitor",
            component: Component,
            props: {
                toggleDrawer: toggleDrawer,
                toggleAddDrawer: anchor
            }
        },
        {
            id: 9,
            name: "Medical Examination",
            component: Component,
            props: {
                toggleDrawer: toggleDrawer,
                toggleAddDrawer: anchor
            }
        },
        {
            id: 10,
            name: "Admission",
            component: Component,
            props: {
                toggleDrawer: toggleDrawer,
                toggleAddDrawer: anchor
            }
        },
        {
            id: 11,
            name: "Customer Relationship",
            component: Component,
            props: {
                toggleDrawer: toggleDrawer,
                toggleAddDrawer: anchor
            }
        },
        {
            id:12,
            name: "Parent",
            component: Component,
            props: {
                toggleDrawer: toggleDrawer,
                toggleAddDrawer: anchor
            }
        },
        {
            id:13,
            name: "Teacher",
            component: Component,
            props: {
                toggleDrawer: toggleDrawer,
                toggleAddDrawer: anchor
            }
        },
    ]

    return (
        <Box sx={{ marginTop: "20px" }}> 
            <ParamTabs tabPage={tabPage} />
        </Box>
    )
}


export default Rule;