import React, { useState, useEffect } from 'react';
import {
  Grid,
  TextField,
  Button,
  Paper,
  Box,
  styled ,
  Typography,
  Checkbox,
} from '@mui/material';
import SelectList from 'views/common-section/ParamSelectList';
import ParamDateComponent from 'views/common-section/ParamDateComponent';
import ParamMultipleSelect from 'views/common-section/ParamMultipleSelect';
import ParamTable from './ParamTable';
import { useSelector } from 'react-redux';

// style for bottom nav bar start
export const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export const style = {
  BottomNavbar: {
    width: '100%',
    display: 'flex',
    paddingRight: "40px",
    paddingLeft: "40px",
    alignItems: 'center',
    gap: "20px",
    position: "fixed",
    bottom: "0px",
    backgroundColor: "#fafafa",
    height: "60px",
    borderBottom: '1px solid #eee',
    borderTop: '1px solid #eee',
    zIndex: '999',
  }
};
// style for bottom nav bar end

const ConfigureGlobally = ({ customStyle }) => {

  const [concessionData, setConcessionData] = useState([{
    applicableFromDate: '',
    uptoDate: '',
    remarks: '',
    concessionType: '',
    amount: '',
    classes: '',
    id: 0,
    srNo: '',
    feeHead: '',
  }]);

  // multiple select dropdown states
  const [feeHead, setFeeHead] = useState([]);
  const [classes, setClasses] = useState([]);
  const [TableData, setTableData] = useState([]);
  const [selectConcessionType , setSelectConcessionType ] = useState('');
  const [enterAmount, setEnterAmount ] = useState('');
  const [previewSubmit, setPreviewSubmit] = useState(false); 


    const handlePreviewSubmit = () => {
      setPreviewSubmit(true); 
    };


  const selectConcessionTypeHandle = (e) =>{
   setSelectConcessionType(e.target.value)
   setPreviewSubmit(false)
  }

  const enterAmountHandle = (e) =>{
    setEnterAmount(e.target.value)
   }

  // const {concessionType} = useSelector((state) => state?.feeStructureConfigSlice);
  

  // console.log(`check ${concessionType}`)

  const { concessionType } = useSelector((state) => state.feeStructureConfigSlice); 

  // let isCheckedConcessionType = concessionType.concessionType;

  // let isCheckedAmount = concessionType.amount;

  
  // const firstConcessionTypeValue = Object.values(concessionType)[0];


  let isCheckedConcessionType ;
  if(Object.keys(concessionType).length==0)
    isCheckedConcessionType =false;
  else 
  isCheckedConcessionType=concessionType.concessionType;


  let  isCheckedAmount ;
  if(Object.keys(concessionType).length==0)
    isCheckedAmount =false;
  else 
  isCheckedAmount=concessionType.amount;
  // console.log(isCheckedConcessionType ,isCheckedAmount )

  // =========== new ================
  
  const [isChecked, setIsChecked] = useState(isCheckedAmount);

const [isCheckedClicked, setIsCheckedClicked] = useState(false);


// const handleCheckboxClick = () => {
//   setIsCheckedClicked(true);
//   setIsChecked(!isChecked);
// };

// Update handleCheckboxClick to accept the id of the row whose checkbox was clicked
const handleCheckboxClick = (id) => {
  setIsCheckedClicked(id);
  setIsChecked(!isChecked);
  console.log(`id : ${id}`)
};

// Calculate the checked value for the Checkbox component based on isChecked state and isCheckedAmount
const checkboxCheckedValue = isCheckedClicked ? isChecked : isCheckedAmount;

 
// ============== end ============

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setConcessionData((prevData) =>
      prevData.map((row) => {
        if (row.id === id) {
          return { ...row, [name]: value };
        }
        return row;
      })
    );
  };

  // Update feeHead state when a new value is selected
  const handleFeeHeadChange = (selectedFeeHead) => {
    setFeeHead(selectedFeeHead);
  };

  // concession type
  const concessionTypeOptions = [
    { value: 'Percentage wise concession', label: 'Percentage wise concession' },
    { value: 'Rate wise concession', label: 'Rate wise concession' },
    { value: 'Exception charges', label: 'Exception charges' },
    { value: 'Non chargeable fee', label: 'Non chargeable fee' }
  ];

  // fee  head options
  const feeHeadOptions = [
    { id: 1, name: 'Late Fee' },
    { id: 2, name: 'SRD Charges' },
    { id: 3, name: 'Admission Fee ' },
    { id: 4, name: 'Caution Money' },
    { id: 5, name: 'Security Charges' },
    { id: 6, name: 'Composite Fee' },
    { id: 7, name: 'Science Fee' },
    { id: 8, name: 'Chemistry Lab Charges' },
    { id: 9, name: 'Tuition Fee' }
  ];
  // class options
  const classesOptions = [
    { id: 0, name: 'All' },
    { id: 1, name: 'kg' },
    { id: 2, name: 'Nursery' },
    { id: 3, name: 'I ' },
    { id: 6, name: 'II ' },
    { id: 9, name: 'III A' },
    { id: 10, name: 'III B' },
    { id: 12, name: 'IV A' },
    { id: 13, name: 'IV B' },
    { id: 15, name: 'V A' },
    { id: 16, name: 'V B' },
    { id: 17, name: 'V C' },
    { id: 18, name: 'VI A' },
    { id: 19, name: 'VI B' },
    { id: 20, name: 'VI C' },
    { id: 21, name: 'VII A' },
    { id: 22, name: 'VII B' },
    { id: 23, name: 'VII C' },
    { id: 24, name: 'VIII A' },
    { id:25, name: 'VIII B' },
    { id: 26, name: 'VIII C' },
    { id: 27, name: 'IX A' },
    { id: 28, name: 'IX B' },
    { id: 29, name: 'IX C' },
    { id: 30, name: 'X' },
    { id: 31, name: 'X A' },
    { id: 32, name: 'X B' },
    { id: 33, name: 'X C' },
  ];


  const handleClassChange = (selectedClass) => {
    setClasses(selectedClass)
  }

  // data grid row creating from here
  useEffect(() => {
    // If no fee head is selected, create an empty row
    if (feeHead.length === 0) {
      setConcessionData([
        {
          id: 0,
          srNo: '',
          feeHead: '',
          concessionType: '',
          amount: '',
        },
      ]);
    } else {
      const newRows = feeHead.map((fh, index) => {
        const existingRow = concessionData.find((row) => row.feeHead === fh.name);
        if (existingRow) {
          return existingRow; // Preserve existing row if fee head already exists
        }
        else {
          return {
            id: index + 1,
            srNo:`${index + 1}`,
            feeHead: fh.name,
            concessionType: '',
            amount: '',
          };
        }
      });
      setConcessionData(newRows);
    }
  }, [feeHead]); // Include concessionData in the dependencies

    // first table heading
    const FirstTableHeading = [
      {
        id:'srNo',
        tabHeading: 'Sr No.',
        showCheckbox: false, 
      },
  
      {
        id:'feeHead',
        tabHeading: 'Fee Head',
        showCheckbox: false, 
      },
  
      {
        id: 'concessionType',
        tabHeading: 'Concession Type',
        showCheckbox: true, 
      },
  
      {
        id: 'amount',
        tabHeading: 'Amount',
        showCheckbox: true, 
      },
    ];
    
    // first table row 
    const TableRowData = concessionData.map((row) => ({
      id: row.id,
      srNo: row.srNo,
      feeHead: row.feeHead,
      concessionType: row.feeHead !== '' ? (
        <Box sx={{ display: 'flex' }}>
          <Checkbox  checked={isCheckedConcessionType} />
          <SelectList
            hiddenLabel
            name="concessionType"
            id={`concessionType-${row.id}`}
            options={concessionTypeOptions}
            value={previewSubmit && isCheckedConcessionType ? (row.concessionType = selectConcessionType) : row.concessionType}       
            onChange={(e) => handleChange(e, row.id)}
            customStyle={{
              borderRadius: '0 !important',
              '& fieldset': {
                borderRadius: '0 !important',
                border: 'none !important',
              },
              '& .MuiSelect-select': {
                background: '#fff',
                border: '1px solid #ccc',
                padding: '12px',
                borderRadius: '0',
              }
            }}
          />
        </Box>
      ) : null,
      amount: row.id > 0 ? (
        <Box sx={{display:'flex'}}>
          <Checkbox checked={checkboxCheckedValue} onClick={()=>handleCheckboxClick(row.id)} />
          <TextField
            hiddenLabel
            name="amount"
            id={`amount-${row.id}`}
            value={previewSubmit && isCheckedAmount ? (row.amount = enterAmount) : row.amount}
            onChange={(e) => handleChange(e, row.id)}
            fullWidth
            type='number'
            sx={{ 
              borderRadius:'0 !important',
              '& input' :{
                padding:'12px',
                background:'#fff',
              },
              '& fieldset' :{
                borderRadius:'0',
                border:'1px solid #ccc',
              },
              "input::-webkit-outer-spin-button, input::-webkit-inner-spin-button": {
                WebkitAppearance: "none",
                margin: 0,
              },
              "input[type=number]": {
                MozAppearance: "textfield",
              },
            }}
          />
        </Box>
      ) : null
    }));
    
    // Log TableRowData with id
    // console.log(TableRowData);
    


  // table
  const TableHeading = [
    {
      id: 1,
      tabHeading: 'Sr No.',
    },

    {
      id: 2,
      tabHeading: 'Fee Head',
    },

    {
      id: 3,
      tabHeading: 'Class',
    },

    {
      id: 4,
      tabHeading: 'Concession Type',
    },

    {
      id: 5,
      tabHeading: 'Amount',
    },
  ];

  const updateTableData = () => {
    const newData = concessionData.map((row) => ({
      id: row.id,
      srNO: row.srNo,
      feeHead: row.feeHead,
      class: classes.map(cls => cls.name).join(', '), 
      concessionType: row.concessionType,
      amount: row.amount,
    }));
    setTableData(newData); 
  };

  // print data onclick on submit
  const handleSubmit = () => {
    updateTableData();
    // setFeeHead([]);
    // setClasses([]);
  };

  console.log(TableRowData)
  return (
    <>
    
      <Grid container spacing={4} sx={{ marginTop: '1rem' }}>
        <Grid item xs={12} lg={4}>
          <Grid container spacing={2} sx={{ borderRadius: '12px', margin: '0', width: '100%', border: '1px solid rgba(224, 224, 224, 1)', padding: '1rem 1rem 1rem 0px' }}>

            {/* ===========================  applicable from date*/}
            <Grid item xs={12} md={6} sx={{ marginBottom: '5px' }}>
              <ParamDateComponent label="Applicable From Date" name="applicableFromDate" value={concessionData.applicableFromDate} customStyle={{ width: '100%' }} />
            </Grid>

            {/* ===========================  up to date*/}
            <Grid item xs={12} md={6} sx={{ marginBottom: '5px' }}>
              <ParamDateComponent label="Upto Date" name="uptoDate" value={concessionData.uptoDate} customStyle={{ width: '100%' }} />
            </Grid>

            {/* ===========================  fee head */}
            <Grid item xs={12} md={12} sx={{ marginBottom: '5px', flexWrap: 'nowrap' }}>
              <ParamMultipleSelect
                options={feeHeadOptions}
                label="Fee Head"
                value={feeHead}
                setValue={handleFeeHeadChange}
              />
            </Grid>

            {/* ===========================  Class */}
            <Grid item xs={12} md={12} sx={{ marginBottom: '5px' }}>
              <ParamMultipleSelect options={classesOptions} label="Class" value={classes} setValue={handleClassChange} />
            </Grid>

            {/* ===========================  remarks*/}
            <Grid item xs={12} md={12} sx={{ marginBottom: '5px' }}>
              <TextField
                id="remarks"
                name="remarks"
                value={concessionData.remark}
                label="Remarks"
                variant="outlined"
                onChange={handleChange}
                fullWidth
              />
            </Grid>

          </Grid>
        </Grid>

        {/* data table*/}
        <Grid item xs={12} lg={8} sx={{ position: 'relative' }}>
          
          <ParamTable
            columns={FirstTableHeading}
            data={TableRowData}
            action={false}
            tablePaper={{ border: '1px solid rgba(224, 224, 224, 1)' }}
            tableStyle={{ paddingBottom: '5rem' , '& td':{
              width:'25%',
              padding:'6px px'
            },
            '&  tr td:nth-child(1)':{
              width:'8%',
            }
           
           }}

           >
              <Box sx={{paddingLeft:'18px' ,alignItems:'center', gap:'30px', mb:'12px', display:'flex' , paddingTop:'20px' ,borderTop:'1px solid rgba(224, 224, 224, 1)'}}>
                {/* concession type */}
                <Box sx={{display:'flex', width:'30%', alignItems:'center',gap:'10px' }}>
                  <Typography sx={{flex:'0 0 35%'}}>Concession Type</Typography>
                  <SelectList
                    hiddenLabel
                    name="selectConcessionType"
                    id='selectConcessionType'
                    options={concessionTypeOptions}
                    value={selectConcessionType}
                    onChange={selectConcessionTypeHandle}
                    customStyle={{
                      borderRadius:'0 !important',     
                      '& fieldset' :{
                        borderRadius:'0 !important',
                        border:'none !important',
                      },
                      '& .MuiSelect-select' :{
                        background:'#fff',
                        border:'1px solid #ccc',
                        padding:'12px',
                        borderRadius:'0',
                      }
                    }}
                  />
                </Box>
                {/* amount */}
                <Box sx={{display:'flex', width:'25%', alignItems:'center',gap:'10px'}}>
                   <Typography>Amount</Typography>
                   <TextField
                      hiddenLabel
                      name="amount"
                      id='amount'
                      value={enterAmount}
                      onChange={enterAmountHandle}
                      fullWidth
                      type='number'
                      sx={{ 
                        borderRadius:'0 !important',
                        '& input' :{
                          padding:'12px',
                          background:'#fff',
                        },
                        '& fieldset' :{
                          borderRadius:'0',
                          border:'1px solid #ccc',
                        },
                        "input::-webkit-outer-spin-button, input::-webkit-inner-spin-button": {
                          WebkitAppearance: "none",
                          margin: 0,
                        },
                        "input[type=number]": {
                          MozAppearance: "textfield",
                        },
                      }}
                   />
                </Box>

                <Box sx={{marginLeft:'auto' , paddingRight:'30px'}}>
                  <Button variant="contained" onClick={handlePreviewSubmit}>Submit</Button>
                </Box>
              </Box>

     
              <Box sx={{padding:'10px 10px 10px 30px' , borderTop:'1px solid rgba(224, 224, 224, 1)'}}>
                  <Typography variant='h5' sx={{lineHeight:'34px'}}>
                  Class:
                    {classes.length > 0 ? ` ${classes.map(cls => cls.name).join(', ')}` : null}
                  </Typography>
              </Box>
          </ParamTable>
      
        </Grid>

        {/*=============== bottom table  start ================ */}

        <Grid item xs={12} lg={12}>
          <ParamTable
            columns={TableHeading}
            data={TableData}
            action={false}
            tablePaper={{ border: '1px solid rgba(224, 224, 224, 1)' }}
            tableStyle={{ paddingBottom: '5rem' }}
          />
        </Grid>

        {/* bottom nav */}
        <Paper sx={{ ...style.BottomNavbar, ...customStyle }}>
            <Box sx={{ display: "flex", gap: "20px" }}>
                  <Button variant="contained" sx={{ height: "38px", marginTop: "auto", marginBottom: "auto", width: "144px" }} onClick={handleSubmit}>
                    Save 
                  </Button>

                  <Button variant="outlined" sx={{ height: "38px", marginTop: "auto", marginBottom: "auto", width: "144px" }}>
                    Cancel
                </Button>
            </Box>
        </Paper>

      </Grid>
    </>
  )
}

export default ConfigureGlobally;