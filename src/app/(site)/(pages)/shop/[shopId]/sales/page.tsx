'use client';
import React, { useState } from 'react';
import Breadcrumb from '@/components/Common/Breadcrumb';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

// Define sales data interface
interface SalesData {
    id: string;
    date: string;
    revenue: number;
    orders: number;
    averageOrderValue: number;
}

// Define sales summary interface
interface SalesSummary {
    totalRevenue: number;
    totalOrders: number;
    averageOrderValue: number;
    comparisonToPrevious: {
        revenue: number;
        orders: number;
        averageOrderValue: number;
    };
}

// Dummy daily sales data
const dummySalesData: SalesData[] = [
    { id: '1', date: '2025-04-01', revenue: 320000, orders: 8, averageOrderValue: 40000 },
    { id: '2', date: '2025-04-02', revenue: 450000, orders: 10, averageOrderValue: 45000 },
    { id: '3', date: '2025-04-03', revenue: 300000, orders: 6, averageOrderValue: 50000 },
    { id: '4', date: '2025-04-04', revenue: 500000, orders: 12, averageOrderValue: 41667 },
    { id: '5', date: '2025-04-05', revenue: 400000, orders: 9, averageOrderValue: 44444 },
    { id: '6', date: '2025-04-06', revenue: 600000, orders: 15, averageOrderValue: 40000 },
    { id: '7', date: '2025-04-07', revenue: 380000, orders: 8, averageOrderValue: 47500 },
    { id: '8', date: '2025-04-08', revenue: 420000, orders: 10, averageOrderValue: 42000 },
    { id: '9', date: '2025-04-09', revenue: 350000, orders: 7, averageOrderValue: 50000 },
    { id: '10', date: '2025-04-10', revenue: 480000, orders: 11, averageOrderValue: 43636 },
    { id: '11', date: '2025-04-11', revenue: 520000, orders: 13, averageOrderValue: 40000 },
    { id: '12', date: '2025-04-12', revenue: 390000, orders: 9, averageOrderValue: 43333 },
    { id: '13', date: '2025-04-13', revenue: 430000, orders: 10, averageOrderValue: 43000 },
    { id: '14', date: '2025-04-14', revenue: 510000, orders: 12, averageOrderValue: 42500 },
];

// Dummy monthly sales data for comparison
const dummyMonthlySalesData = [
    { name: 'Jan', revenue: 8500000 },
    { name: 'Feb', revenue: 9200000 },
    { name: 'Mar', revenue: 10500000 },
    { name: 'Apr', revenue: 12000000 },
    { name: 'May', revenue: 11500000 },
    { name: 'Jun', revenue: 13000000 },
];

// Dummy sales by category data
const dummySalesByCategoryData = [
    { name: 'Bahan Pokok', revenue: 5200000 },
    { name: 'Sayuran', revenue: 3800000 },
    { name: 'Bumbu Dapur', revenue: 2100000 },
    { name: 'Buah-buahan', revenue: 3500000 },
    { name: 'Produk Olahan', revenue: 1800000 },
];

// Dummy sales summary
const dummySalesSummary: SalesSummary = {
    totalRevenue: 15200000,
    totalOrders: 320,
    averageOrderValue: 47500,
    comparisonToPrevious: {
        revenue: 12,
        orders: 8,
        averageOrderValue: 4,
    },
};

export default function SalesPage() {
    const param = useParams();
    const shopId = param.shopId?.toString() || "";
    const [dateRange, setDateRange] = useState<'daily' | 'weekly' | 'monthly'>('daily');
    const [salesSummary, setSalesSummary] = useState<SalesSummary>(dummySalesSummary);
    const [salesData, setSalesData] = useState<SalesData[]>(dummySalesData);

    // Format currency
    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount);
    };

    // Format date
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    // Get chart data based on date range
    const getChartData = () => {
        // In a real application, this would filter or aggregate data based on the selected date range
        return salesData.map(item => ({
            name: formatDate(item.date),
            revenue: item.revenue,
            orders: item.orders,
        }));
    };

    return (
        <main>
            <Breadcrumb
                title={"Sales Management"}
                pages={["shop", "/", "admin", "/", "sales"]}
            />
            <section className="overflow-hidden relative pb-20 pt-5 bg-[#f3f4f6]">
                <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-center">
                            <Link href={`/shop/${shopId}`} className="text-[#D75A4A] hover:underline">
                                ← Back to dashboard
                            </Link>
                            <div className="flex gap-2">
                                <select
                                    className="border border-gray-3 rounded-md p-2"
                                    value={dateRange}
                                    onChange={(e) => setDateRange(e.target.value as 'daily' | 'weekly' | 'monthly')}
                                >
                                    <option value="daily">Daily</option>
                                    <option value="weekly">Weekly</option>
                                    <option value="monthly">Monthly</option>
                                </select>
                                <button className="bg-[#1A8245] text-white px-4 py-2 rounded-md hover:bg-[#5a9a7d]">
                                    Export Report
                                </button>
                            </div>
                        </div>

                        {/* Sales Summary Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="bg-white p-4 rounded-md border border-gray-3">
                                <p className="text-sm text-gray-6">Total Revenue</p>
                                <p className="text-xl font-semibold">{formatCurrency(salesSummary.totalRevenue)}</p>
                                <p className={`text-xs ${salesSummary.comparisonToPrevious.revenue >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                    {salesSummary.comparisonToPrevious.revenue >= 0 ? '↑' : '↓'} {Math.abs(salesSummary.comparisonToPrevious.revenue)}% from previous period
                                </p>
                            </div>
                            <div className="bg-white p-4 rounded-md border border-gray-3">
                                <p className="text-sm text-gray-6">Total Orders</p>
                                <p className="text-xl font-semibold">{salesSummary.totalOrders}</p>
                                <p className={`text-xs ${salesSummary.comparisonToPrevious.orders >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                    {salesSummary.comparisonToPrevious.orders >= 0 ? '↑' : '↓'} {Math.abs(salesSummary.comparisonToPrevious.orders)}% from previous period
                                </p>
                            </div>
                            <div className="bg-white p-4 rounded-md border border-gray-3">
                                <p className="text-sm text-gray-6">Average Order Value</p>
                                <p className="text-xl font-semibold">{formatCurrency(salesSummary.averageOrderValue)}</p>
                                <p className={`text-xs ${salesSummary.comparisonToPrevious.averageOrderValue >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                    {salesSummary.comparisonToPrevious.averageOrderValue >= 0 ? '↑' : '↓'} {Math.abs(salesSummary.comparisonToPrevious.averageOrderValue)}% from previous period
                                </p>
                            </div>
                        </div>

                        {/* Revenue Chart */}
                        <div className="bg-white p-6 rounded-md border border-gray-3">
                            <h2 className="text-lg font-semibold mb-4">Revenue Over Time</h2>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={getChartData()}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip formatter={(value) => formatCurrency(value as number)} />
                                    <Line type="monotone" dataKey="revenue" stroke="#6BAF92" strokeWidth={2} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Monthly Comparison & Category Breakdown */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-md border border-gray-3">
                                <h2 className="text-lg font-semibold mb-4">Monthly Revenue Comparison</h2>
                                <ResponsiveContainer width="100%" height={250}>
                                    <BarChart data={dummyMonthlySalesData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip formatter={(value) => formatCurrency(value as number)} />
                                        <Bar dataKey="revenue" fill="#6BAF92" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>

                            <div className="bg-white p-6 rounded-md border border-gray-3">
                                <h2 className="text-lg font-semibold mb-4">Sales by Category</h2>
                                <ResponsiveContainer width="100%" height={250}>
                                    <BarChart data={dummySalesByCategoryData} layout="vertical">
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis type="number" />
                                        <YAxis type="category" dataKey="name" width={100} />
                                        <Tooltip formatter={(value) => formatCurrency(value as number)} />
                                        <Bar dataKey="revenue" fill="#F39C4F" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Sales Data Table */}
                        <div className="bg-white rounded-md border border-gray-3 overflow-hidden">
                            <div className="p-4 border-b border-gray-3">
                                <h2 className="text-lg font-semibold">Sales Transactions</h2>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-3">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Date
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Revenue
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Orders
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Average Order Value
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-3">
                                        {salesData.map((item) => (
                                            <tr key={item.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {formatDate(item.date)}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {formatCurrency(item.revenue)}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {item.orders}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {formatCurrency(item.averageOrderValue)}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}