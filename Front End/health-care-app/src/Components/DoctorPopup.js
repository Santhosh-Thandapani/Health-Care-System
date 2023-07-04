import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './DoctorPopup.css';

function DoctorPopup() {
  const navigate = useNavigate();

  const closePopup = () => {
    navigate("/");
  };

  return (
    <div className="popup-content">
      <h4>
        Thank you for joining us. Your profile has been submitted.
      </h4>
      <button className="close-button" onClick={closePopup}>
        <FontAwesomeIcon icon={faTimes} className="icon" />
      </button>
    </div>
  );
}

export default DoctorPopup;
