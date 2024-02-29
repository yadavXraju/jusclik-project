import React from 'react';

const ComponentToPrint = React.forwardRef((props, ref) => {
    return (
      <div ref={ref}>
        component
        {/* <div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h2>{props.school.name}</h2>
            <p>{props.school.address}</p>
            <p>{props.school.phone}</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h4 style={{ textDecoration: 'underline' }}>Visitor Slip</h4>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <ul style={{ listStyle: 'none' }}>
                <li style={{ padding: '10px' }}>{`Visitor No: ${props.user.id}`}</li>
                <li style={{ padding: '10px' }}>{`Visitor Name: ${props.user.label}`}</li>
                <li style={{ padding: '10px' }}>{`Purpose: ${props.user.id}`}</li>
                <li style={{ padding: '10px' }}>{`To meet: ${props.user.id}`}</li>
                <li style={{ padding: '10px' }}>{`Address:  ${props.user.id}`}</li>
              </ul>
              <ul style={{ listStyle: 'none' }}>
                <li style={{ padding: '10px' }}>{`Category: ${props.user.id}`}</li>
                <li style={{ padding: '10px' }}>{`Remarks: ${props.user.id}`}</li>
                <li style={{ padding: '10px' }}>{`Entry date: ${props.user.id}`}</li>
                <li style={{ padding: '10px' }}>{`Phone: ${props.user.id}`}</li>
                <li style={{ padding: '10px' }}>{`Time in: ${props.user.id}`}</li>
              </ul>
            </div>
            <div>
              <img src={AvatarImage} alt="avatar" style={{ height: '90px', width: 'auto' }} />
            </div>
          </div> 
         </div> */}
      </div>
    );
  });


export default ComponentToPrint;