import React from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import OptionalFeeHeadForm from './OptionalFeeHeadForm';
import { OptionalFeeHeadConfigGlobally } from 'store/student-info-and-fee/settings/fee-structure/fee-structure-slice';
import ParamFeeStructureConfig from 'views/common-section/ParamFeeStructureConfig';

const OptionalFeeHeadGlobally = () => {

    const dispatch = useDispatch();
    const configGloballyData = useSelector((state) => state.configGloballyFormSlice.OptionalFeeHeadConfigGlobally); 
  
  
    const handleSaveRow = (updatedRow) => {
      // Map through the current data and update the row with the matching ID
      const updatedData = configGloballyData.map((row) => (row.id === updatedRow.id ? updatedRow : row));
      // Dispatch the updated data to the Redux store
      dispatch(OptionalFeeHeadConfigGlobally(updatedData));
    };
  
    // Handler function to delete a row
    const handleDeleteRow = (rowToDelete) => {
      // Filter out the row to be deleted based on its ID
      const updatedData = configGloballyData.filter((row) => row.id !== rowToDelete.id);
      // Dispatch the updated data to the Redux store
      dispatch(OptionalFeeHeadConfigGlobally(updatedData));
    };
  
  
    const tableHeadings = [
      { id: 'srNo', tabHeading: 'Sr No.' },
      { id: 'feeHead', tabHeading: 'Fee Head' },
      { id: 'classes', tabHeading: 'Class' },
      { id: 'amount', tabHeading: 'Amount' },
    ];
  
    // Prepare data for the ParamFeeStructureConfig component
    const data = configGloballyData.map((item, index) => ({
      id: item.id,
      srNo: index + 1, // Add 1 to index for Sr No.
      feeHead: item.feeHead,
      classes: Array.isArray(item.classes) ? item.classes.join(', ') : item.classes, // Convert array of classes to string
      amount: item.amount,
    }));

  return (
    <>
      <ParamFeeStructureConfig
      data={data}
      tableHeadings={tableHeadings}
      onSaveRow={handleSaveRow}
      onDeleteRow={handleDeleteRow}
      tablColumnWidth={{flex:'0 0 20%'}}
    >
       <OptionalFeeHeadForm />
      </ParamFeeStructureConfig>
    </>
  )
}

export default OptionalFeeHeadGlobally