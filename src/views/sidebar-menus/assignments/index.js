import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret, faCoffee, faMessage, faUser } from '@fortawesome/free-solid-svg-icons';

const Assignments = () => {
  return (
    <>
      <FontAwesomeIcon icon={faUserSecret} />
      <FontAwesomeIcon icon={faCoffee} />
      <FontAwesomeIcon icon={faMessage} />
      <FontAwesomeIcon icon={faUser} />
    </>
  );
}

export default Assignments;
