// ================ sampal data ============
function createData(id, name, date, ldate, netpay, amtpay, bal, mop , entryNo , entryDate, chqNo , chqDate , bank , branch , status , refNo , refDate , paymentCat  ) {
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
      chqNo ,
      chqDate ,
      bank ,
      branch , 
      status,
      refNo ,
      refDate ,
      paymentCat
    };
  }
//   inv type and inv date ....
const rows = [
    createData(1, 'Regular', '25-Mar-22', '25-Mar-22', 46925, 10496	, 36429, 'Cheque', '83','12-Mar-24','12345' , '28-Apr-23' , 'Hdfc' , 'Dwarka', 'Paid' , '1234' , '25-Mar-22' , 'HDFC Bank',),

    createData(2, 'New Admission', '01-Mar-24', '22-Dec-24', 30, 45000, 45000, 'Cheque','86','25-May-24','23212' , '28-Jun-23' , 'Sbi' , 'Gurgaon','Paid' , '2323' , '25-Mar-24' , 'SBI Bank', ),

    createData(3, 'Regular', '01-Jul-24', '24-Dec-23', 3067, 9000, 23000, 'Cash','286','25-May-24', '24343' , '21-Apr-24' , 'Hdfc','Dwarka' , 'Paid' , '2345' , '25-Mar-24', 'HDFC Bank', ),

    createData(4, 'New Admission', '24-Jun-24', '22-Sep-24', 3088, 5000, 35000, 'Adj Entry', '206','12-Mar-24','34564' , '28-Apr-23' , 'Hdfc' , 'Dwarka','Pending' , '5657' , '25-May-24' , 'HDFC Bank', ),

    createData(5, 'Regular', '01-Aug-24', '21-Nov-24', 3043, 8000, 4000, 'Adj Entry', '120','25-May-24','45445' , '28-May.23' , 'Hdfc' , 'Gurgaon','Pending' , '3456' , '25-June-25' , 'HDFC Bank',),

    createData(6, 'Regular', '06-Aug-24', '23-Nov-24', 3043, 8000, 54000, 'Cash', '170','25-May-24','45454' , '28-May-23' , 'Sbi' , 'Dwarka','Paid' , '8976' , '25-Aug-24' , 'Sbi Bank', ),

    createData(7, 'Regular', '06-Aug-24', '20-Nov-23', 3043, 8000, 45000, 'Cash','100','25-May-24','56565' , '28-Apr-2023' , 'Axis' , 'Gurgaon','Pending' , '7865' , '25-Nov-24' , 'Axis Bank',),
  ];

  export default rows
  
