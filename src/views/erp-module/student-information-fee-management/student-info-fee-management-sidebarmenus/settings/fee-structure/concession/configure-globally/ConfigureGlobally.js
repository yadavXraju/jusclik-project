import { useDispatch, useSelector  } from 'react-redux';
import ParamFeeStructureConfig from 'views/common-section/ParamFeeStructureConfig';
import { configGlobally } from 'store/student-info-and-fee/settings/FeeStructureConfigure';
import ConfigGloballyForm from './ConfigGloballyForm';

const ConfigureGlobally = () => {

  const dispatch = useDispatch();
  const configGloballyData = useSelector((state) => state.configGloballyFormSlice.configGlobally); 


  const handleSaveRow = (updatedRow) => {
    // Map through the current data and update the row with the matching ID
    const updatedData = configGloballyData.map((row) => (row.id === updatedRow.id ? updatedRow : row));
    // Dispatch the updated data to the Redux store
    dispatch(configGlobally(updatedData));
  };

  // Handler function to delete a row
  const handleDeleteRow = (rowToDelete) => {
    // Filter out the row to be deleted based on its ID
    const updatedData = configGloballyData.filter((row) => row.id !== rowToDelete.id);
    // Dispatch the updated data to the Redux store
    dispatch(configGlobally(updatedData));
  };


  const tableHeadings = [
    { id: 'srNo', tabHeading: 'Sr No.' },
    { id: 'feeHead', tabHeading: 'Fee Head' },
    { id: 'classes', tabHeading: 'Class' },
    { id: 'concessionType', tabHeading: 'Concession Type' },
    { id: 'amount', tabHeading: 'Amount' },
  ];

  // Prepare data for the ParamFeeStructureConfig component
  const data = configGloballyData.map((item, index) => ({
    id: item.id,
    srNo: index + 1, // Add 1 to index for Sr No.
    feeHead: item.feeHead,
    classes: Array.isArray(item.classes) ? item.classes.join(', ') : item.classes, // Convert array of classes to string
    concessionType: item.concessionType,
    amount: item.amount,
  }));

  // Render the ParamFeeStructureConfig component with appropriate props
  return (
    <>
     
    <ParamFeeStructureConfig
      data={data}
      tableHeadings={tableHeadings}
      onSaveRow={handleSaveRow}
      onDeleteRow={handleDeleteRow}
    >
      <ConfigGloballyForm /> 
    </ParamFeeStructureConfig>

    </>
  );
};

export default ConfigureGlobally;
