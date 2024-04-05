import React,{useState} from 'react'
import SelectList from 'views/common-section/ParamSelectList';



const Tab1 = () => {
  // ========= state for Attach Slab ============
  const [academicYear, setAcademicYear] = useState('');
  const AcademicYearOptions = [
    { value: 'Slab1', label: '2009-2010' },
    { value: 'Slab2', label: '2010-2011' },
    { value: 'Slab1', label: '2011-2012' },
    { value: 'Slab2', label: '2012-2013' },
    { value: 'Slab1', label: '2014-2015' },
    { value: 'Slab2', label: '2015-2016' },
    { value: 'Slab1', label: '2016-2017' },
    { value: 'Slab2', label: '2017-2018' },
  ];

  const AcademicYearChange = (event) => {
    setAcademicYear(event.target.value);
  };
  return (
    <>
        <SelectList 
            label="Academic Year Upto"
            options={AcademicYearOptions}
            value={academicYear}
            onChange={AcademicYearChange}
            />
    </>
  )
}

export default Tab1