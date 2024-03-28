import { useState } from 'react';

const useTabValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event, newValue) => {
    setValue(newValue); 
  };

  return { value, handleChange };
};

export default useTabValue;
