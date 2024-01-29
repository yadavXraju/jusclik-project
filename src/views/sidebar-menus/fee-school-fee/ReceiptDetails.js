// import React from 'react';

// const ReceiptDetails = () => {
//   return (
//     <div>
      
//       <div>Print Date: {new Date().toLocaleDateString()}</div>
      
//     </div>
//   );
// };

// export default ReceiptDetails;







import React, { useRef } from 'react';
import { Button } from 'antd';
import ReactToPrint from 'react-to-print';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';

const Policies = () => {
    const ref = useRef();

    return (
        <div>
            <div ref={ref}>
                <h1>Your Text Goes Here</h1>
                <p>This is an example text that will be printed.</p>
            </div>
            
            <ReactToPrint
                bodyClass="print-agreement"
                content={() => ref.current}
                trigger={() => (
                    <Button type="primary" icon={<LocalPrintshopOutlinedIcon fontSize='1rem' />}>
                        Print
                    </Button>
                )}
            />
        </div>
    );
};

export default Policies;