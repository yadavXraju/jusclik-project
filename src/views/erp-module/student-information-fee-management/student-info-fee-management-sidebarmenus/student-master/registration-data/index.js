import React from 'react';
import StudentDataTab from '../registration/StudentDataTab';
// import StudentMasterTable from 'views/common-section/StudentMasterTable';
// import { columns, data } from '../registration/StudentData'; // Make sure columns and data are exported correctly

const RegistrationData = () => {
  return (
    <div>
      {/* <StudentMasterTable columns={columns} data={data} /> */}
      <StudentDataTab/>
    </div>
  );
}

export default RegistrationData;