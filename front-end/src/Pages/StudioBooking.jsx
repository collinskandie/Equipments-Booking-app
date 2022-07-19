import React from "react";
import "./studio.css";
import Select from 'react-select'



function StudioBooking() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
  return (
    <div style={{justifyContent: "center" }}>
    <div>
        Select editing suit based
        <Select options={options}/>
    </div>      
    </div>
  );
}

export default StudioBooking;
