//@Page Owner-Tarun Pandey
import React, { useState } from 'react';

const Dropdown = ({ dropDownData }) => {
    const [selectedValue, setSelectedValue] = useState('Only Me');
    
    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <>
            <select id="cars" name="cars" value={selectedValue} onChange={handleSelectChange}  style={{
                    width:'auto',
                    border: 'none', 
                    outline: 'none', 
                    backgroundColor: '#f0f0f0', 
                }}>
                {dropDownData&&dropDownData.map((item) => (
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>
        </>
    );
};

export default Dropdown;
