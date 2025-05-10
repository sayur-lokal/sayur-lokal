'use client';
import React, { useState } from 'react';
import Breadcrumb from '@/components/Common/Breadcrumb';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Define promotion status types
type PromotionStatus = 'Active' | 'Scheduled' | 'Expired' | 'Draft';

// Define promotion types
type PromotionType = 'Discount' | 'BOGO' | 'Bundle' | 'Free Shipping';

// Define promotion interface
interface Promotion {
    id: string;
    name: string;
    description: string;
    type: PromotionType;
    value: number;
    code: string;
    startDate: string;
    endDate: string;
    status: PromotionStatus;
    minPurchase: number;
    maxDiscount?: number;
    applicableProducts: string[];
    usageLimit: number;
    usageCount: number;
    isVisible: boolean;
}

// Dummy promotions data
const dummyPromotions: Promotion[] = [
    {
        id: 'PROMO-001',
        name: 'Ramadan Special',
        description: '15% off on all products during Ramadan',
        type: 'Discount',
        value: 15,
        code: 'RAMADAN15',
        startDate: '2025-04-01',
        endDate: '2025-04-30',
        status: 'Active',
        minPurchase: 100000,
        maxDiscount: 50000,
        applicableProducts: ['all'],
        usageLimit: 0,
        usageCount: 45,
        isVisible: true,
    },
    {
        id: 'PROMO-002',
        name: 'Buy 1 Get 1 Vegetables',
        description: 'Buy one get one free on selected vegetables',
        type: 'BOGO',
        value: 100,
        code: 'VEGBOGO',
        startDate: '2025-04-15',
        endDate: '2025-05-15',
        status: 'Active',
        minPurchase: 50000,
        applicableProducts: ['Sayuran'],
        usageLimit: 100,
        usageCount: 23,
        isVisible: true,
    },
    {
        id: 'PROMO-003',
        name: 'Free Shipping Weekend',
        description: 'Free shipping on all orders above Rp 200,000',
        type: 'Free Shipping',
        value: 0,
        code: 'FREESHIP',
        startDate: '2025-05-01',
        endDate: '2025-05-02',
        status: 'Scheduled',
        minPurchase: 200000,
        applicableProducts: ['all'],
        usageLimit: 0,
        usageCount: 0,
        isVisible: true,
    },
    {
        id: 'PROMO-004',
        name: 'Rice & Spices Bundle',
        description: 'Get 10% off when buying rice and spices together',
        type: 'Bundle',
        value: 10,
        code: 'BUNDLE10',
        startDate: '2025-03-01',
        endDate: '2025-03-31',
        status: 'Expired',
        minPurchase: 0,
        applicableProducts: ['Bahan Pokok', 'Bumbu Dapur'],
        usageLimit: 50,
        usageCount: 32,
        isVisible: false,
    },
    {
        id: 'PROMO-005',
        name: 'New Customer Discount',
        description: '20% off on first purchase',
        type: 'Discount',
        value: 20,
        code: 'WELCOME20',
        startDate: '2025-01-01',
        endDate: '2025-12-31',
        status: 'Active',
        minPurchase: 0,
        maxDiscount: 100000,
        applicableProducts: ['all'],
        usageLimit: 1,
        usageCount: 128,
        isVisible: true,
    },
];

// Product categories for dropdown
const productCategories = [
    { id: 1, name: 'Bahan Pokok' },
    { id: 2, name: 'Sayuran' },
    { id: 3, name: 'Bumbu Dapur' },
    { id: 4, name: 'Buah-buahan' },
    { id: 5, name: 'Produk Olahan' },
];

export default function PromotionsPage() {
    const param = useParams();
    const shopId = param.shopId?.toString() || "";
    const [promotions, setPromotions] = useState<Promotion[]>(dummyPromotions);
    const [selectedPromotion, setSelectedPromotion] = useState<Promotion | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [newPromotion, setNewPromotion] = useState<Partial<Promotion>>({
        name: '',
        description: '',
        type: 'Discount',
        value: 10,
        code: '',
        startDate: new Date().toISOString().split('T')[0],
        endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        status: 'Draft',
        minPurchase: 0,
        applicableProducts: ['all'],
        usageLimit: 0,
        isVisible: true,
    });
    const [statusFilter, setStatusFilter] = useState<PromotionStatus | 'All'>('All');

    // Filter promotions based on status
    const filteredPromotions = statusFilter === 'All'
        ? promotions
        : promotions.filter(promo => promo.status === statusFilter);

    // Toggle promotion visibility
    const toggleVisibility = (promotionId: string) => {
        setPromotions(promotions.map((promo) => (
            promo.id === promotionId ? { ...promo, isVisible: !promo.isVisible } : promo
        )));
    };

    // Open edit promotion modal
    const openEditModal = (promotion: Promotion) => {
        setSelectedPromotion(promotion);
        setIsModalOpen(true);
    };

    // Update promotion
    const updatePromotion = (updatedPromotion: Promotion) => {
        setPromotions(promotions.map((promo) => (
            promo.id === updatedPromotion.id ? updatedPromotion : promo
        )));
        setIsModalOpen(false);
    };

    // Add new promotion
    const addNewPromotion = () => {
        // Generate a unique ID
        const newId = `PROMO-${String(promotions.length + 1).padStart(3, '0')}`;

        const promotionToAdd: Promotion = {
            ...(newPromotion as Promotion),
            id: newId,
            usageCount: 0,
        };

        setPromotions([...promotions, promotionToAdd]);
        setIsAddModalOpen(false);
        setNewPromotion({
            name: '',
            description: '',
            type: 'Discount',
            value: 10,
            code: '',
            startDate: new Date().toISOString().split('T')[0],
            endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            status: 'Draft',
            minPurchase: 0,
            applicableProducts: ['all'],
            usageLimit: 0,
            isVisible: true,
        });
    };

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

    // Get status badge color
    const getStatusBadgeClass = (status: PromotionStatus) => {
        switch (status) {
            case 'Active': return 'bg-green-100 text-green-800';
            case 'Scheduled': return 'bg-blue-100 text-blue-800';
            case 'Expired': return 'bg-gray-100 text-gray-800';
            case 'Draft': return 'bg-yellow-100 text-yellow-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    // Get promotion type display
    const getPromotionTypeDisplay = (type: PromotionType, value: number) => {
        switch (type) {
            case 'Discount': return `${value}% off`;
            case 'BOGO': return 'Buy 1 Get 1';
            case 'Bundle': return `${value}% bundle discount`;
            case 'Free Shipping': return 'Free Shipping';
            default: return type;
        }
    };

    return (
        <main>
            <Breadcrumb
                title={"Manage Promotions"}
                pages={["shop", "/", "admin", "/", "promotions"]}
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
                                    value={statusFilter}
                                    onChange={(e) => setStatusFilter(e.target.value as PromotionStatus | 'All')}
                                >
                                    <option value="All">All Promotions</option>
                                    <option value="Active">Active</option>
                                    <option value="Scheduled">Scheduled</option>
                                    <option value="Expired">Expired</option>
                                    <option value="Draft">Draft</option>
                                </select>
                                <button
                                    onClick={() => setIsAddModalOpen(true)}
                                    className="bg-[#1A8245] text-white px-4 py-2 rounded-md hover:bg-[#5a9a7d]"
                                >
                                    Add New Promotion
                                </button>
                            </div>
                        </div>

                        {/* Promotions Table */}
                        <div className="bg-white rounded-md border border-gray-3 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-3">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Promotion
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Code
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Type
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Period
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Status
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Usage
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-3">
                                        {filteredPromotions.map((promotion) => (
                                            <tr key={promotion.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900">{promotion.name}</div>
                                                            <div className="text-sm text-gray-500 truncate max-w-xs">{promotion.description}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    <span className="px-2 py-1 bg-gray-100 rounded-md">{promotion.code}</span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {getPromotionTypeDisplay(promotion.type, promotion.value)}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {formatDate(promotion.startDate)} - {formatDate(promotion.endDate)}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(promotion.status)}`}>
                                                        {promotion.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {promotion.usageCount} {promotion.usageLimit > 0 ? `/ ${promotion.usageLimit}` : ''}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                    <button
                                                        onClick={() => openEditModal(promotion)}
                                                        className="text-blue-600 hover:text-blue-900 mr-3"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => toggleVisibility(promotion.id)}
                                                        className={`${promotion.isVisible ? 'text-red-600 hover:text-red-900' : 'text-green-600 hover:text-green-900'}`}
                                                    >
                                                        {promotion.isVisible ? 'Hide' : 'Show'}
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Edit Promotion Modal */}
                        {isModalOpen && selectedPromotion && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                                <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                                    <div className="flex justify-between items-center mb-4">
                                        <h2 className="text-xl font-semibold">Edit Promotion</h2>
                                        <button
                                            onClick={() => setIsModalOpen(false)}
                                            className="text-gray-500 hover:text-gray-700"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-1 gap-4 mb-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Promotion Name</label>
                                            <input
                                                type="text"
                                                className="w-full border border-gray-3 rounded-md p-2"
                                                value={selectedPromotion.name}
                                                onChange={(e) => setSelectedPromotion({ ...selectedPromotion, name: e.target.value })}
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                            <textarea
                                                className="w-full border border-gray-3 rounded-md p-2"
                                                rows={3}
                                                value={selectedPromotion.description}
                                                onChange={(e) => setSelectedPromotion({ ...selectedPromotion, description: e.target.value })}
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Promotion Type</label>
                                                <select
                                                    className="w-full border border-gray-3 rounded-md p-2"
                                                    value={selectedPromotion.type}
                                                    onChange={(e) => setSelectedPromotion({ ...selectedPromotion, type: e.target.value as PromotionType })}
                                                >
                                                    <option value="Discount">Percentage Discount</option>
                                                    <option value="BOGO">Buy One Get One</option>
                                                    <option value="Bundle">Bundle Discount</option>
                                                    <option value="Free Shipping">Free Shipping</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    {selectedPromotion.type === 'Discount' || selectedPromotion.type === 'Bundle' ? 'Discount Percentage (%)' : 'Value'}
                                                </label>
                                                <input
                                                    type="number"
                                                    className="w-full border border-gray-3 rounded-md p-2"
                                                    value={selectedPromotion.value}
                                                    onChange={(e) => setSelectedPromotion({ ...selectedPromotion, value: Number(e.target.value) })}
                                                    disabled={selectedPromotion.type === 'BOGO' || selectedPromotion.type === 'Free Shipping'}
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Promotion Code</label>
                                            <input
                                                type="text"
                                                className="w-full border border-gray-3 rounded-md p-2"
                                                value={selectedPromotion.code}
                                                onChange={(e) => setSelectedPromotion({ ...selectedPromotion, code: e.target.value.toUpperCase() })}
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                                                <input
                                                    type="date"
                                                    className="w-full border border-gray-3 rounded-md p-2"
                                                    value={selectedPromotion.startDate}
                                                    onChange={(e) => setSelectedPromotion({ ...selectedPromotion, startDate: e.target.value })}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                                                <input
                                                    type="date"
                                                    className="w-full border border-gray-3 rounded-md p-2"
                                                    value={selectedPromotion.endDate}
                                                    onChange={(e) => setSelectedPromotion({ ...selectedPromotion, endDate: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                                            <select
                                                className="w-full border border-gray-3 rounded-md p-2"
                                                value={selectedPromotion.status}
                                                onChange={(e) => setSelectedPromotion({ ...selectedPromotion, status: e.target.value as PromotionStatus })}
                                            >
                                                <option value="Active">Active</option>
                                                <option value="Scheduled">Scheduled</option>
                                                <option value="Expired">Expired</option>
                                                <option value="Draft">Draft</option>
                                            </select>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Minimum Purchase (IDR)</label>
                                                <input
                                                    type="number"
                                                    className="w-full border border-gray-3 rounded-md p-2"
                                                    value={selectedPromotion.minPurchase}
                                                    onChange={(e) => setSelectedPromotion({ ...selectedPromotion, minPurchase: Number(e.target.value) })}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Maximum Discount (IDR)</label>
                                                <input
                                                    type="number"
                                                    className="w-full border border-gray-3 rounded-md p-2"
                                                    value={selectedPromotion.maxDiscount || 0}
                                                    onChange={(e) => setSelectedPromotion({ ...selectedPromotion, maxDiscount: Number(e.target.value) || undefined })}
                                                    disabled={selectedPromotion.type !== 'Discount'}
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Applicable Products</label>
                                            <select
                                                className="w-full border border-gray-3 rounded-md p-2"
                                                value={selectedPromotion.applicableProducts[0]}
                                                onChange={(e) => {
                                                    const value = e.target.value;
                                                    setSelectedPromotion({
                                                        ...selectedPromotion,
                                                        applicableProducts: value === 'all' ? ['all'] : [value]
                                                    });
                                                }}
                                            >
                                                <option value="all">All Products</option>
                                                {productCategories.map((category) => (
                                                    <option key={category.id} value={category.name}>
                                                        {category.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Usage Limit (0 for unlimited)</label>
                                            <input
                                                type="number"
                                                className="w-full border border-gray-3 rounded-md p-2"
                                                value={selectedPromotion.usageLimit}
                                                onChange={(e) => setSelectedPromotion({ ...selectedPromotion, usageLimit: Number(e.target.value) })}
                                            />
                                        </div>

                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                id="isVisible"
                                                className="mr-2"
                                                checked={selectedPromotion.isVisible}
                                                onChange={(e) => setSelectedPromotion({ ...selectedPromotion, isVisible: e.target.checked })}
                                            />
                                            <label htmlFor="isVisible" className="text-sm font-medium text-gray-700">
                                                Visible to Customers
                                            </label>
                                        </div>
                                    </div>

                                    <div className="flex justify-end gap-2">
                                        <button
                                            onClick={() => setIsModalOpen(false)}
                                            className="border border-gray-3 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={() => updatePromotion(selectedPromotion)}
                                            className="bg-[#1A8245] text-white px-4 py-2 rounded-md hover:bg-[#5a9a7d]"
                                        >
                                            Save Changes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Add New Promotion Modal */}
                        {isAddModalOpen && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                                <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                                    <div className="flex justify-between items-center mb-4">
                                        <h2 className="text-xl font-semibold">Add New Promotion</h2>
                                        <button
                                            onClick={() => setIsAddModalOpen(false)}
                                            className="text-gray-500 hover:text-gray-700"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-1 gap-4 mb-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Promotion Name</label>
                                            <input
                                                type="text"
                                                className="w-full border border-gray-3 rounded-md p-2"
                                                value={newPromotion.name}
                                                onChange={(e) => setNewPromotion({ ...newPromotion, name: e.target.value })}
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                            <textarea
                                                className="w-full border border-gray-3 rounded-md p-2"
                                                rows={3}
                                                value={newPromotion.description}
                                                onChange={(e) => setNewPromotion({ ...newPromotion, description: e.target.value })}
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Promotion Type</label>
                                                <select
                                                    className="w-full border border-gray-3 rounded-md p-2"
                                                    value={newPromotion.type}
                                                    onChange={(e) => setNewPromotion({ ...newPromotion, type: e.target.value as PromotionType })}
                                                >
                                                    <option value="Discount">Percentage Discount</option>
                                                    <option value="BOGO">Buy One Get One</option>
                                                    <option value="Bundle">Bundle Discount</option>
                                                    <option value="Free Shipping">Free Shipping</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    {newPromotion.type === 'Discount' || newPromotion.type === 'Bundle' ? 'Discount Percentage (%)' : 'Value'}
                                                </label>
                                                <input
                                                    type="number"
                                                    className="w-full border border-gray-3 rounded-md p-2"
                                                    value={newPromotion.value}
                                                    onChange={(e) => setNewPromotion({ ...newPromotion, value: Number(e.target.value) })}
                                                    disabled={newPromotion.type === 'BOGO' || newPromotion.type === 'Free Shipping'}
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Promotion Code</label>
                                            <input
                                                type="text"
                                                className="w-full border border-gray-3 rounded-md p-2"
                                                value={newPromotion.code}
                                                onChange={(e) => setNewPromotion({ ...newPromotion, code: e.target.value.toUpperCase() })}
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                                                <input
                                                    type="date"
                                                    className="w-full border border-gray-3 rounded-md p-2"
                                                    value={newPromotion.startDate}
                                                    onChange={(e) => setNewPromotion({ ...newPromotion, startDate: e.target.value })}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                                                <input
                                                    type="date"
                                                    className="w-full border border-gray-3 rounded-md p-2"
                                                    value={newPromotion.endDate}
                                                    onChange={(e) => setNewPromotion({ ...newPromotion, endDate: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                                            <select
                                                className="w-full border border-gray-3 rounded-md p-2"
                                                value={newPromotion.status}
                                                onChange={(e) => setNewPromotion({ ...newPromotion, status: e.target.value as PromotionStatus })}
                                            >
                                                <option value="Active">Active</option>
                                                <option value="Scheduled">Scheduled</option>
                                                <option value="Expired">Expired</option>
                                                <option value="Draft">Draft</option>
                                            </select>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Minimum Purchase (IDR)</label>
                                                <input
                                                    type="number"
                                                    className="w-full border border-gray-3 rounded-md p-2"
                                                    value={newPromotion.minPurchase}
                                                    onChange={(e) => setNewPromotion({ ...newPromotion, minPurchase: Number(e.target.value) })}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Maximum Discount (IDR)</label>
                                                <input
                                                    type="number"
                                                    className="w-full border border-gray-3 rounded-md p-2"
                                                    value={newPromotion.maxDiscount || 0}
                                                    onChange={(e) => setNewPromotion({ ...newPromotion, maxDiscount: Number(e.target.value) || undefined })}
                                                    disabled={newPromotion.type !== 'Discount'}
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Applicable Products</label>
                                            <select
                                                className="w-full border border-gray-3 rounded-md p-2"
                                                value={newPromotion.applicableProducts ? newPromotion.applicableProducts[0] : 'all'}
                                                onChange={(e) => {
                                                    const value = e.target.value;
                                                    setNewPromotion({
                                                        ...newPromotion,
                                                        applicableProducts: value === 'all' ? ['all'] : [value]
                                                    });
                                                }}
                                            >
                                                <option value="all">All Products</option>
                                                {productCategories.map((category) => (
                                                    <option key={category.id} value={category.name}>
                                                        {category.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Usage Limit (0 for unlimited)</label>
                                            <input
                                                type="number"
                                                className="w-full border border-gray-3 rounded-md p-2"
                                                value={newPromotion.usageLimit}
                                                onChange={(e) => setNewPromotion({ ...newPromotion, usageLimit: Number(e.target.value) })}
                                            />
                                        </div>

                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                id="newIsVisible"
                                                className="mr-2"
                                                checked={newPromotion.isVisible}
                                                onChange={(e) => setNewPromotion({ ...newPromotion, isVisible: e.target.checked })}
                                            />
                                            <label htmlFor="newIsVisible" className="text-sm font-medium text-gray-700">
                                                Visible to Customers
                                            </label>
                                        </div>
                                    </div>

                                    <div className="flex justify-end gap-2">
                                        <button
                                            onClick={() => setIsAddModalOpen(false)}
                                            className="border border-gray-3 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={addNewPromotion}
                                            className="bg-[#1A8245] text-white px-4 py-2 rounded-md hover:bg-[#5a9a7d]"
                                        >
                                            Add Promotion
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}