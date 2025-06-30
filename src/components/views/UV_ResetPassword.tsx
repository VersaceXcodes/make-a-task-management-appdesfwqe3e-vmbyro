import React, { useState } from 'react';

const UV_ResetPassword: React.FC = () => {
  const [newPasswordInputValue, setNewPasswordInputValue] = useState('');
  const [clientSidePasswordError, setClientSidePasswordError] = useState(false);

  return (
    <div>
      <input
        type="password"
        value={newPasswordInputValue}
        onChange={(e) => setNewPasswordInputValue(e.target.value)}
        className={`mt-1 block w-full px-3 py-2 border ${
          clientSidePasswordError ? 'border-red-500' : 'border-gray-300'
        } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
      />
    </div>
  );
};

export default UV_ResetPassword;