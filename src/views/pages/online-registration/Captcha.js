import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

function Captcha() {
  
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

export default Captcha;

//   sitekey="6Le4ndUpAAAAAPK7ivIYiADnAhyERxnj4I_WmAKu"