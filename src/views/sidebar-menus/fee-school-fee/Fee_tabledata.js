function createData(id, name, date, ldate, netpay, amtpay, bal, receiptno, receiptdate, paymode, status) {
    return {
      id,
      name,
      date,
      ldate,
      netpay,
      amtpay,
      bal,
      receiptno,
      receiptdate,
      paymode,
      status,
    };
  }
const rows = [
    createData(1, 'Regular', '01/May/2024', '28/Feb/2024', 305, 4000, 40000, '1', '28/Jan/2024', 'Adj Entry', 'Overdue'),
    createData(2, 'Tution', '01/Mar/2024', '22/Dec/2024', 30, 45000, 45000, '2', '28/Feb/2024', 'Demand Draft', 'paid'),
    createData(3, 'Practical', '01/Jul/2024', '23/Jan/2024', 3067, 9000, 43000, '3', '28/Mar/2024', 'Adj Entry', 'Overdue'),
    createData(4, 'Tution', '01/Jun/2024', '22/Sep/2024', 3088, 5000, 35000, '4', '28/Apr/2024', 'Credit/Debit Card', 'paid'),
    createData(5, 'Regular', '01/Aug/2024', '21/Nov/2024', 3043, 8000, 54000, '5', '28/May/2024', 'Unpaid', 'paid'),
  ];

  export default rows