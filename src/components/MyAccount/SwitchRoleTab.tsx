'use client';

import React from 'react';

type Role = 'buyer' | 'seller' | 'admin';

interface SwitchRoleTabProps {
  currentRole: Role;
  onSwitch: (role: Role) => void;
}

const SwitchRoleTab: React.FC<SwitchRoleTabProps> = ({ currentRole, onSwitch }) => {
  return (
    <div className="flex justify-center space-x-4 bg-white p-4 rounded-xl shadow-1 mb-6">
      {['buyer', 'seller', 'admin'].map((role) => (
        <button key={role} onClick={() => onSwitch(role as Role)} className={`py-2 px-5 rounded-md font-semibold ${currentRole === role ? 'bg-[#1A8245] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
          {role.charAt(0).toUpperCase() + role.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default SwitchRoleTab;
