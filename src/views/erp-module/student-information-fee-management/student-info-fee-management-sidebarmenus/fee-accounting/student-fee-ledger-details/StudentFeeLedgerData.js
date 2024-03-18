// ================ sampal data ============
function createData(id, name, date, ldate, netpay, amtpay, bal, mop , entryNo , entryDate, ) {
    return {
      id,
      name,
      date,
      ldate,
      netpay,
      amtpay,
      bal,
      mop,
      entryNo,
      entryDate,
  
    };
  }
//   inv type and inv date
const rows = [
    createData(1, 'Regular', '25-Mar-22', '25-Mar-22', 46925, 10496	, 36429, 'Cheque', '83','12-Mar-24', ),
    createData(2, 'New Admission', '01-Mar-24', '22-Dec-24', 30, 45000, 45000, 'Cheque','86','25-May-24', ),
    createData(3, 'Regular', '01-Jul-24', '24-Dec-23', 3067, 9000, 23000, 'Cash','286','25-May-24', ),
    createData(4, 'New Admission', '24-Jun-24', '22-Sep-24', 3088, 5000, 35000, 'Adj Entry', '206','12-Mar-24', ),
    createData(5, 'Regular', '01-Aug-24', '21-Nov-24', 3043, 8000, 4000, 'Adj Entry', '120','25-May-24',),
    createData(6, 'Regular', '06-Aug-24', '23-Nov-24', 3043, 8000, 54000, 'Cash', '170','25-May-22', ),
    createData(7, 'Regular', '06-Aug-24', '20-Nov-24', 3043, 8000, 45000, 'Cash','100',),
  ];

  export default rows
  
