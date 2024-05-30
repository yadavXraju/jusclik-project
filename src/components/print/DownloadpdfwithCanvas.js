
   //Page Owner - Kulwinder Singh 
   //Description  - This component can be use to download PDF File by using html2canvas Method

import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const DownloadPdfWithCanvas = (WrappedComponent) => {
  const handleDownload = (ref ,width) => {     //Receiving Props Ref for Image capturing for print and Width for % ratio for print 
    const input = ref.current;

    // Scroll the page to the top before capturing
    window.scrollTo(0, 0);

    // Add a delay to allow time for the page to scroll and render properly
    html2canvas(input, { scrollY: -window.scrollY }).then((canvas) => {
      const imgData = canvas.toDataURL('image/jpeg');
      const pdf = new jsPDF();
     
      const imgWidth=width  //  Assigned width to imgWidth to  which comes from handleDownlaod Function to set the % of download pdf
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      // Calculate position to center the image horizontally
      const xPos = (pdf.internal.pageSize.getWidth() - imgWidth) / 2;
      const yPos = 10; // Set vertical position as needed

      pdf.addImage(imgData, 'JPEG', xPos, yPos, imgWidth, imgHeight);
      pdf.save('VisitorPass.pdf');
    });
  };

  return (props) => <WrappedComponent {...props} handleDownload={handleDownload} />;
};

export default DownloadPdfWithCanvas;