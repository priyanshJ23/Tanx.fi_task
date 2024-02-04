import React from 'react';

const Alert = ({ message, type }) => {
  const alertClasses = `border-l-4 p-4 mb-4 ${type === 'success' ? 'border-green-1000' : 'border-red-1000'}`;

  return (
    <div className={alertClasses}>
      <p className="text-sm">{message}</p>
    </div>
  );
};

export default Alert;
