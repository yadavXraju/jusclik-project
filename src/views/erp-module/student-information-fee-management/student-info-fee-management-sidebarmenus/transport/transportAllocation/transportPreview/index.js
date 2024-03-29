import React from 'react';
import { useParams } from 'react-router';

const TransportPreview = () => {
  let { id } = useParams();
  return (
    <>
         <div style={{ fontSize: "50px" }}>
            Now showing post {id}
        </div>
    </>
  )
}

export default TransportPreview
