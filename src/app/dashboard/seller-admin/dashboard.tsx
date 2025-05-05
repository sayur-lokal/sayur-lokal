"use client"
import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
  BarChart, Bar,
} from "recharts";

const salesData = [
  { name: "Mon", sales: 320000 },
  { name: "Tue", sales: 450000 },
  { name: "Wed", sales: 300000 },
  { name: "Thu", sales: 500000 },
  { name: "Fri", sales: 400000 },
  { name: "Sat", sales: 600000 },
  { name: "Sun", sales: 380000 },
];

const orderStatusData = [
  { name: "New", value: 12 },
  { name: "Packed", value: 8 },
  { name: "Out for Delivery", value: 5 },
  { name: "Completed", value: 30 },
];

const topProducts = [
  { name: "Organic Spinach", units: 120 },
  { name: "Eco Rice Pack", units: 100 },
  { name: "Fresh Chili", units: 95 },
  { name: "Local Tomatoes", units: 90 },
  { name: "Cassava Chips", units: 85 },
];

const recentActivity = [
  { time: "2 hrs ago", activity: "New order placed for Eco Rice Pack." },
  { time: "4 hrs ago", activity: "Promotion campaign 'Green Week' started." },
  { time: "Yesterday", activity: "Stock updated for Local Tomatoes." },
  { time: "2 days ago", activity: "Review received for Organic Spinach." },
];

const COLORS = ["#6BAF92", "#A8C686", "#F39C4F", "#DDF4C7"];

export default function SellerDashboard() {
  return (
    <div className="flex flex-col gap-2">

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-md border border-gray-3">
          <p className="text-sm text-gray-500">Total Sales (This Month)</p>
          <p className="text-xl font-semibold text-[#6BAF92]">Rp 15.200.000</p>
        </div>
        <div className="bg-white p-4 rounded-md border border-gray-3">
          <p className="text-sm text-gray-500">Pending Orders</p>
          <p className="text-xl font-semibold">12</p>
        </div>
        <div className="bg-white p-4 rounded-md border border-gray-3">
          <p className="text-sm text-gray-500">Active Products</p>
          <p className="text-xl font-semibold">48</p>
        </div>
        <div className="bg-white p-4 rounded-md border border-gray-3">
          <p className="text-sm text-gray-500">Active Promotions</p>
          <p className="text-xl font-semibold">3</p>
        </div>
      </div>

      {/* Sales Chart */}
      <div className="bg-white p-6 rounded-md border border-gray-3">
        <h2 className="text-lg font-semibold mb-4">Sales Over Time</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#6BAF92" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Order Status Chart & Top Products */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-md border border-gray-3">
          <h2 className="text-lg font-semibold mb-4">Order Status Breakdown</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={orderStatusData}
                dataKey="value"
                nameKey="name"
                outerRadius={80}
                label
              >
                {orderStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-md border border-gray-3">
          <h2 className="text-lg font-semibold mb-4">Top Selling Products</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={topProducts} layout="vertical">
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" width={100} />
              <Tooltip />
              <Bar dataKey="units" fill="#F39C4F" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity Feed */}
      <div className="bg-white p-6 rounded-md border border-gray-3">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <ul className="space-y-2">
          {recentActivity.map((item, index) => (
            <li key={index} className="text-sm text-gray-700">
              <span className="font-semibold text-[#6BAF92]">{item.time}:</span> {item.activity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
