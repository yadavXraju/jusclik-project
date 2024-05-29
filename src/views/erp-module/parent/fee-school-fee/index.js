// ======= Page Owner Vikash =========
// ======= School Fee Entry Page =========
import React,{useState} from 'react';
import ParamStepper from 'components/tabs/Stepper';
import PoliciesCounter from './policiesCounter';
import { Box } from '@mui/material';
import MainCard from 'components/ui/cards/MainCard';
import FeeDataTable from './Fee_table';
import Summary from './Summary';

const FeeStructure = () => {
  const [value, setValue] = useState(0);

  const Transport = () => {
    return <>Transport</>;
  };
  const Donation = () => {
    return <>Donation</>;
  };
  const Activity = () => {
    return <>Activity</>;
  };

  // drawer btn
  const tabPage = [
    {
      id: 1,
      name: 'Summary',
      value: '1',
      component: Summary
    },
    {
      id: 2,
      name: 'School Fee',
      value: '2',
      component: FeeDataTable
    },
    {
      id: 3,
      name: 'Transport',
      value: '3',
      component: Transport
    },
    {
      id: 4,
      name: 'Donation',
      value: '4',
      component: Donation
    },
    {
      id: 5,
      name: 'Activity',
      value: '5',
      component: Activity
    }
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <MainCard title="Fee Ledger">
        <Box>
          <Box pb={3}>
            <PoliciesCounter />
          </Box>
        </Box>
        {/* stepper tabs  */}
        <ParamStepper variant='scrollable' tabPage={tabPage}
          numberShow={false} iconShow={false}
          value={value} handleChange={handleChange}
        />
      </MainCard>
    </>
  );
};

export default FeeStructure;
