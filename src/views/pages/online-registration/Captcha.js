import React, { useRef, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

function Captcha() {
  // Reference to the ReCAPTCHA component
  const recaptchaRef = useRef(null);

  // Function to reset the reCAPTCHA widget
  const resetRecaptcha = () => {
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
  };

  // Function to reset the reCAPTCHA widget after 30 seconds
  const handleTimeout = () => {
    setTimeout(resetRecaptcha, 30000); // 30 seconds = 30,000 milliseconds
  };

  const onChange = () => {
    // Reset the reCAPTCHA widget after a successful verification
    handleTimeout();
  };

  // Reset the reCAPTCHA widget when the component mounts (page refresh)
  useEffect(() => {
    resetRecaptcha();
  }, []);

  return (
    <>
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey="6Le4ndUpAAAAAPK7ivIYiADnAhyERxnj4I_WmAKu"
        onChange={onChange}
      />
    </>
  );
}

export default Captcha;

//   sitekey="6Le4ndUpAAAAAPK7ivIYiADnAhyERxnj4I_WmAKu"