// Page owner - Kulwinder Singh

import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha'; // Google Recaptcha Library Used 

const CommonGoogleCaptcha = () => {
  
  const onChange=()=>{
    CompassOutlined.log('pass')
  }

  return (
    <>
      <ReCAPTCHA
       
        sitekey="6Le4ndUpAAAAAPK7ivIYiADnAhyERxnj4I_WmAKu"
        theme="light"
        onChange={onChange}
      />
    </>
  );
}

export default CommonGoogleCaptcha;

//   sitekey="6Le4ndUpAAAAAPK7ivIYiADnAhyERxnj4I_WmAKu"