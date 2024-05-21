import { useDispatch, useSelector } from 'react-redux';
import ParamFeeStructureConfig from 'views/common-section/ParamFeeStructureConfig';
import { configStudentWise } from 'store/student-info-and-fee/settings/fee-structure/fee-structure-slice';
import ConfigStudentWiseForm from './ConfigStudentWiseForm';

const ConfigureStudentWise = () => {
  const dispatch = useDispatch();
  const configStudentWiseData = useSelector((state) => state.configGloballyFormSlice.configStudentWise);


  const handleSaveRow = (updatedRow) => {
    const updatedData = configStudentWiseData.map((row) => (row.id === updatedRow.id ? updatedRow : row));
    dispatch(configStudentWise(updatedData));
  };

  // Handler function to delete a row
  const handleDeleteRow = (rowToDelete) => {
    const updatedData = configStudentWiseData.filter((row) => row.id !== rowToDelete.id);
    dispatch(configStudentWise(updatedData));
  };


  // Define table headings
  const TableHeadings = [
    {
      id: 'srNo',
      tabHeading: 'Sr No.',
    },
    {
      id: 'feeHead',
      tabHeading: 'Fee Head',
    },
    {
      id: 'classSection',
      tabHeading: 'Class',
    },
    {
      id: 'concessionType',
      tabHeading: 'Concession Type',
    },
    {
      id: 'amount',
      tabHeading: 'Amount',
    },
  ];

  // Map data to render table rows make sure table head id  and these key are same
  const data = configStudentWiseData.map((item, index) => ({
    id: item.id,
    srNo: index + 1,
    feeHead: item.feeHead,
    classSection: item.classSection,
    concessionType: item.concessionType,
    amount: item.amount,
  }));

  return (
    <>
        <ParamFeeStructureConfig
          data={data}
          tableHeadings={TableHeadings}
          onSaveRow={handleSaveRow}
          onDeleteRow={handleDeleteRow}
        >
          <ConfigStudentWiseForm /> 
        </ParamFeeStructureConfig>
    </>
  );
};

export default ConfigureStudentWise;
