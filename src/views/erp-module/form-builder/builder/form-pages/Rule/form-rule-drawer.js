//@Page Onwer-Tarun Pandey
import React, {useState} from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import UnfoldMoreOutlinedIcon from '@mui/icons-material/UnfoldMoreOutlined';
import Divider from '@mui/material/Divider';
import ParamSelectList from 'components/ParamSelectList';
import ParamTime from 'components/ParamTime';

const comparisonOptions = [
  { id: 1, label: 'Is', value: 'is' },
  { id: 2, label: 'Is Not', value: 'is_not' },
  { id: 3, label: 'Is Empty', value: 'is_empty' },
  { id: 4, label: 'Is Not Empty', value: 'is_not_empty' },
];

const timeOptions = {
  "Time": [
    { id: 5, label: 'Is Less Than', value: 'is_less_than' },
    { id: 6, label: 'Is Greater Than', value: 'is_greater_than' },
    { id: 7, label: 'Is Between', value: 'is_between' },
    { id: 8, label: 'Is Any Of', value: 'is_any_of' },
    { id: 9, label: 'Is None Of', value: 'is_none_of' }
  ]
};


const decisionBoxOptions = {
  "decisionBoxOptions": [
    { id: 5, label: 'True', value: true },
    { id: 6, label: 'False', value: false },
  ]
}

const multiLineOptions = {
  "multiLineOptions": [
    ...comparisonOptions,
    { id: 1, label: 'Contains', value: 'contains' },
    { id: 2, label: 'Not Contains', value: 'not_contains' },
    { id: 3, label: 'Starts With', value: 'start_with' },
    { id: 4, label: 'Ends With', value: 'end_with' },
  ]
}

const websiteOptions = {
  "websiteOptions": [
    { id: 5, label: 'Start With', value: 'start_with' },
    { id: 6, label: 'Ends With', value: 'ends_with' },
    { id: 7, label: 'Is Any of', value: 'is_any_of' },
    { id: 8, label: 'Is None of', value: 'is_none_of' }
  ]
}

const singleLineOptions = {
  "singleLineOptions": [
    ...multiLineOptions.multiLineOptions,
    { id: 1, label: 'Contains', value: 'contains' },
    { id: 2, label: 'Not Contains', value: 'not_contains' },
    { id: 3, label: 'Starts With', value: 'start_with' },
    { id: 4, label: 'Ends With', value: 'end_with' },
    { id: 7, label: 'Is Any of', value: 'is-any-of' },
    { id: 8, label: "Is None of", value: "is-none-of" }
  ]
}

const inputOptions = [
    { id: 1, label: 'Time', value: timeOptions },
    { id: 2, label: 'Decision Box', value: decisionBoxOptions },
    { id: 3, label: 'Multi Line', value: multiLineOptions },
    { id: 4, label: 'Website', value: websiteOptions },
    { id: 5, label: 'Single Line', value: singleLineOptions }
]

const DynamicInputForm = ({ type }) => {
   const typeField=Object.keys(type);
  return (
    <>
      {typeField[0]==='Time' ? (
        <ParamTime customStyle={{ width: "30%", paddingTop: '-8px', borderRadius: "5px" }} />
      ) : (
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      )}
    </>
  );
};

const RuleFormDrawer = ({ toggleDrawer }) => {
  //State for Rule(IF)
  const [selectedOption, setSelectedOption] = useState("");
  const [validationRule, setValidationRule] = useState(comparisonOptions);
  const [comp,setComp]=useState();
  const [ruleCount, setRuleCount] = useState(1);
  const [isHover, setIsHover] = useState(-1);
  //State for Then(Then)
  const [formLogic, setFormLogic] = useState(0);
  const [thenCount, setThenCount] = useState(1);
  const [isHoverThen, setIsHoverThen] = useState(-1);

  const handleChange = (e) => {
    if(e.target.name=="ruleType"){
    const inputOption=Object.keys(e.target.value);
    setSelectedOption(e.target.value);
    setValidationRule(e.target.value[inputOption[0]]);
    }
    else{
       setComp(e.target.value)
    }
  };
  
  return (
    <>
      <Box sx={{ width: "1050px", padding: "20px", height: 'calc(100vh - 100px)', overflow: "auto" }}
        role="presentation" className="scrollbar">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc' }}>
          <Typography variant="h4">Add Rule</Typography>
          <Button onClick={toggleDrawer('right', false)} sx={{ alignSelf: 'flex-end' }}>
            Close
          </Button>
        </Box>
        <Box sx={{
          display: "flex", flexDirection: "column", gap: "5px",
          marginTop: "20px"
        }} className="scrollbar">
          <Typography>Rule Name</Typography>
          <TextField id="outlined-basic" label="Outlined" variant="outlined"
            helperText="(Maximum 100 characters)"
            fullWidth
            sx={{ borderRadius: "8px" }}
          />
        </Box>
        <Divider sx={{ marginTop: '20px' }} />
        {/*Approach-*/}
        {/*For */}
        <Box sx={{
          display: "flex", alignItems: "center", gap: "10px",
          marginTop: "20px", height: "auto",
          position: "relative", borderRadius: "5px",
          '&:before': {
            position: 'absolute',
            content: '" "',
            width: '1px',
            height: 'calc(100% - 82px)',
            left: '3.7%',
            top: '47px',
            background: '#ccc',
          }
        }}>
          {/*  */}
          <Box sx={{
            width: "100%", height: "80%", backgroundColor: "#f8fafccc",
            margin: "50px 50px 50px 100px", paddingLeft: "50px", padding: "10px 50px",
            position: "relative", borderRadius: "10px"
          }}>
            {/*Before After  */}
            <Box sx={{
              borderLeft: formLogic == 0 ? "1px solid #2196f3" : "1px solid #697586", padding: "20px",
              '&:before': {
                position: 'absolute',
                content: '" "',
                width: '20px',
                height: "1px",
                background: formLogic == 0 ? " #2196f3" : "#697586",
                left: "50px",
                top: "10px"
              },
              '&:after': {
                position: 'absolute',
                content: '" "',
                width: '60px',
                height: "1px",
                background: formLogic == 0 ? "#2196f3" : "#697586",
                left: "50px",
                bottom: "10px"
              }
            }}>
              <Button sx={{
                position: "absolute", top: ruleCount !== 1 ? "47%" : "38%",
                left: "15px", borderRadius: "10px", padding: "5px 5px",
                backgroundColor: formLogic == 0 ? "#2196f3" : "#697586",
                '& span': {
                  marginLeft: '0',
                },
                "&:hover": {
                  backgroundColor: formLogic == 0 ? "#2196f3" : "#697586",
                }
              }}
                endIcon={<UnfoldMoreOutlinedIcon />}
                variant="contained" onClick={() => setFormLogic(!formLogic)}>
                {formLogic == 0 ? (<Typography>OR</Typography>) :
                  (<Typography>And</Typography>)}
              </Button>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {Array.from({ length: ruleCount }, (_, index) =>
                  <Box sx={{
                    display: "flex", gap: "20px",
                    alignItems: "center", width: "100%",
                    marginLeft: "40px"
                  }} onMouseEnter={() => setIsHover(index)}
                    onMouseLeave={() => setIsHover(-1)} key={index}>
                    <ParamSelectList label="Rule" value={selectedOption} options={inputOptions}
                      name="ruleType" onChange={handleChange} rootStyle={{ width: "30%" }} />
                    <ParamSelectList label="Is" value={comp} options={validationRule}
                      name="comp" onChange={handleChange} rootStyle={{ width: "30%" }} />
                    {selectedOption && <DynamicInputForm type={selectedOption} />}
                    <Box sx={{
                      visibility: isHover === index ? "show" : "hidden",
                      display: "flex", flexDirection: "row", gap: "10px"
                    }}
                    >
                      <AddCircleOutlinedIcon sx={{ color: "#24A68A" }} onClick={() => setRuleCount(ruleCount + 1)} />
                      {ruleCount > 1 && <RemoveCircleOutlinedIcon sx={{ color: "#e83232" }}
                        onClick={() => setRuleCount(ruleCount - 1)}
                      />}
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
          {/*If then*/}
          <Box sx={{ position: "absolute", top: "10px" }}>
            <Button variant="outlined" >
              If
            </Button>
          </Box>
          <Box sx={{ position: "absolute", bottom: "0px", display: "flex" }}>
            <Button variant="outlined">
              Then
            </Button>
            <Typography sx={{ marginTop: "10px", marginLeft: "20px" }}>Perform the following actions</Typography>
          </Box>
        </Box>
        {/*Form Rule Define Option*/}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", padding: "20px" }}>
          {Array.from({ length: thenCount }, (_, index) =>
            <Box sx={{ display: "flex", gap: "20px", marginLeft: "88px" }}
              onMouseEnter={() => setIsHoverThen(index)}
              onMouseLeave={() => setIsHoverThen(-1)}
              key={index}
            >
              <ParamSelectList label="Rule" value="tarun"
                rootStyle={{ width: "30%", borderRadius: "4px" }}
                customStyle={{ borderRadius: "16px" }}
                options={inputOptions} onChange={handleChange}
              />
              <TextField id="outlined-basic" label="Outlined" variant="outlined"
                fullWidth
                sx={{ borderRadius: "8px" }}
              />
              <Box sx={{ visibility: isHoverThen === index ? "show" : "hidden", display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }} >
                <AddCircleOutlinedIcon sx={{ color: "#24A68A" }} onClick={() => setThenCount(thenCount + 1)} />
                <RemoveCircleOutlinedIcon sx={{ visibility: thenCount > 1 ? "show" : "hide", color: "#e83232" }}
                  onClick={() => {
                    if (thenCount > 1)
                      setThenCount(thenCount - 1)
                  }}
                />
              </Box>
            </Box>
          )}
        </Box>
      </Box>
      {/*Bottom Navbar*/}
      <Box sx={{
        position: "fixed", bottom: "0",
        borderTop: '1px solid #eee', width: "100%",
        display: "flex", flexDirection: "row", gap: "20px",
        padding: "10px", paddingLeft: "20px"
      }}>
        <Button variant="contained">Save</Button>
        <Button variant="contained">Cancel</Button>
      </Box>
    </>
  );
}

export default RuleFormDrawer;
