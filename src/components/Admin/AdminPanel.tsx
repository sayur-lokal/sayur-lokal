"use client";

import React from "react";

const AdminPanel = () => {
  return (
    <div className="bg-white rounded-xl shadow-1 p-8">
      <h2 className="text-2xl font-semibold text-dark mb-4">Admin Dashboard</h2>
      <p className="text-gray-600">
        Welcome to the admin panel. Here you can manage users, products, and orders.
      </p>

      {/* Future: You can add admin features here like: */}
      {/* - User management table */}
      {/* - Product moderation */}
      {/* - Analytics */}
    </div>
  );
};

export default AdminPanel;
