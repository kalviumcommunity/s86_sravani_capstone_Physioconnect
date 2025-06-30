// src/components/AppointmentCard.jsx
import React from 'react';
import './AppointmentCard.css';

const AppointmentCard = ({ appointment }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 mb-4 bg-white">
      <h2 className="text-lg font-semibold text-blue-700">
        {appointment.therapistName}
      </h2>
      <p><strong>Specialization:</strong> {appointment.specialization}</p>
      <p><strong>Date:</strong> {appointment.date}</p>
      <p><strong>Time:</strong> {appointment.time}</p>
      <p><strong>Location:</strong> {appointment.location}</p>
    </div>
  );
};

export default AppointmentCard;
