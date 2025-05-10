'use client';
import React, { useState } from 'react';
import { Product, defaultProduct } from '@/types/product';
import Image from 'next/image';
import Breadcrumb from '@/components/Common/Breadcrumb';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Extended product interface with visibility flag for seller admin
interface SellerProduct extends Product {
    isVisible: boolean;
}

// Dummy products data based on sellerProductData.ts
const dummyProducts: SellerProduct[] = [
    {
        title: 'Telur Ayam Fresh 1 Krat isi 30 pcs',
        reviews: [],
        price: 59000.0,
        discountedPrice: 57000.0,
        category: ['Bahan Pokok'],
        shopId: 1,
        id: '101',
        createdAt: '2025-04-01T08:00:00Z',
        description: 'Telur ayam kampung segar, 1 krat isi 30 butir.',
        imgs: {
            thumbnails: ['/images/products/telur_1kg_thumb_1.png', '/images/products/telur_1kg_thumb_2.png'],
            previews: ['/images/products/telur_1kg_preview_1.png', '/images/products/telur_1kg_preview_2.png'],
        },
        productAttrb: {
            productType: 'premium',
            isOrganic: true,
            isEcoFriendly: true,
        },
        ingredients: [],
        isVisible: true,
    },
    {
        title: 'Topi Koki Beras Setra Ramos 5 kg',
        reviews: [],
        price: 76000.0,
        discountedPrice: 74000.0,
        category: ['Bahan Pokok'],
        shopId: 2,
        id: '102',
        createdAt: '2025-04-01T08:00:00Z',
        description: 'Beras premium kualitas terbaik, pulen dan tidak mudah basi.',
        imgs: {
            thumbnails: ['/images/products/beras_5kg_thumb_1.png', '/images/products/beras_5kg_thumb_2.png'],
            previews: ['/images/products/beras_5kg_preview_1.png', '/images/products/beras_5kg_preview_2.png'],
        },
        productAttrb: {
            productType: 'standard',
            isOrganic: false,
            isEcoFriendly: false,
        },
        ingredients: [],
        isVisible: true,
    },
    {
        title: 'Ubi Ungu 1 kg',
        reviews: [],
        price: 28000.0,
        discountedPrice: 26000.0,
        category: ['Bahan Pokok'],
        shopId: 3,
        id: '103',
        createdAt: '2025-04-01T08:00:00Z',
        description: 'Ubi ungu organik segar langsung dari petani lokal.',
        imgs: {
            thumbnails: ['/images/products/ubi_ungu_1kg_thumb_1.png', '/images/products/ubi_ungu_1kg_thumb_2.png'],
            previews: ['/images/products/ubi_ungu_1kg_preview_1.png', '/images/products/ubi_ungu_1kg_preview_2.png'],
        },
        productAttrb: {
            productType: 'premium',
            isOrganic: true,
            isEcoFriendly: false,
        },
        ingredients: [],
        isVisible: false,
    },
    {
        title: 'Bayam Organik 250g',
        reviews: [],
        price: 15000.0,
        discountedPrice: 13500.0,
        category: ['Sayuran'],
        shopId: 1,
        id: '104',
        createdAt: '2025-04-02T09:30:00Z',
        description: 'Bayam organik segar tanpa pestisida, kaya akan nutrisi.',
        imgs: {
            thumbnails: ['/images/products/bayam_250g_thumb_1.png', '/images/products/bayam_250g_thumb_2.png'],
            previews: ['/images/products/bayam_250g_preview_1.png', '/images/products/bayam_250g_preview_2.png'],
        },
        productAttrb: {
            productType: 'premium',
            isOrganic: true,
            isEcoFriendly: true,
        },
        ingredients: [],
        isVisible: true,
    },
    {
        title: 'Gula Aren Organik 500g',
        reviews: [],
        price: 35000.0,
        discountedPrice: 32000.0,
        category: ['Bumbu Dapur'],
        shopId: 2,
        id: '105',
        createdAt: '2025-04-03T10:15:00Z',
        description: 'Gula aren organik asli, tanpa bahan pengawet dan pewarna.',
        imgs: {
            thumbnails: ['/images/products/gula_aren_500g_thumb_1.png', '/images/products/gula_aren_500g_thumb_2.png'],
            previews: ['/images/products/gula_aren_500g_preview_1.png', '/images/products/gula_aren_500g_preview_2.png'],
        },
        productAttrb: {
            productType: 'premium',
            isOrganic: true,
            isEcoFriendly: true,
        },
        ingredients: [],
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

export default function ProductsPage() {
    const param = useParams();
    const shopId = param.shopId?.toString() || "";
    const [products, setProducts] = useState<SellerProduct[]>(dummyProducts);
    const [selectedProduct, setSelectedProduct] = useState<SellerProduct | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filter, setFilter] = useState<'all' | 'visible' | 'hidden'>('all');

    // Filter products based on visibility
    const filteredProducts = filter === 'all' ? products : filter === 'visible' ? products.filter((product) => product.isVisible) : products.filter((product) => !product.isVisible);

    // Toggle product visibility
    const toggleVisibility = (productId: string) => {
        setProducts(products.map((product) => (product.id === productId ? { ...product, isVisible: !product.isVisible } : product)));
    };

    // Open edit product modal
    const openEditModal = (product: SellerProduct) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    // Update product
    const updateProduct = (updatedProduct: SellerProduct) => {
        setProducts(products.map((product) => (product.id === updatedProduct.id ? updatedProduct : product)));
        setIsModalOpen(false);
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

    // Get category name from category array
    const getCategoryName = (categories: string[]) => {
        return categories && categories.length > 0 ? categories[0] : 'Unknown Category';
    };

    return (
        <main>
            <Breadcrumb
                title={"Manage Products"}
                pages={["shop", "/", "admin", "/", "products"]}
            />
            <section className="overflow-hidden relative pb-20 pt-5 bg-[#f3f4f6]">
                <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-center">
                            <Link href={`/shop/${shopId}`} className="text-[#D75A4A] hover:underline">
                                ← Back to dashboard
                            </Link>
                            <div className="flex gap-2">
                                <select className="border border-gray-3 rounded-md p-2" value={filter} onChange={(e) => setFilter(e.target.value as 'all' | 'visible' | 'hidden')}>
                                    <option value="all">All Products</option>
                                    <option value="visible">Visible Products</option>
                                    <option value="hidden">Hidden Products</option>
                                </select>
                                <Link href={`/shop/${shopId}/products/create`} className="bg-[#1A8245] text-white px-4 py-2 rounded-md hover:bg-[#5a9a7d] inline-block">
                                    Add New Product
                                </Link>
                            </div>
                        </div>

                        {/* Products Table */}
                        <div className="bg-white rounded-md border border-gray-3 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-3">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Product
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Category
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Price
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Discounted
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Status
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-3">
                                        {filteredProducts.map((product) => (
                                            <tr key={product.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0 h-10 w-10 bg-gray-100 rounded-md overflow-hidden">
                                                            {/* Placeholder image since we don't have actual images */}
                                                            <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-500">
                                                                <span>IMG</span>
                                                            </div>
                                                        </div>
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900">{product.title}</div>
                                                            <div className="text-sm text-gray-500 truncate max-w-xs">{product.description}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{getCategoryName(product.category)}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatCurrency(product.price)}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatCurrency(product.discountedPrice || product.price)}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${product.isVisible ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{product.isVisible ? 'Visible' : 'Hidden'}</span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                    <button onClick={() => openEditModal(product)} className="text-blue-600 hover:text-blue-900 mr-3">
                                                        Edit
                                                    </button>
                                                    <button onClick={() => toggleVisibility(product.id)} className={`${product.isVisible ? 'text-red-600 hover:text-red-900' : 'text-green-600 hover:text-green-900'}`}>
                                                        {product.isVisible ? 'Hide' : 'Show'}
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Edit Product Modal */}
                        {isModalOpen && selectedProduct && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                                <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                                    <div className="flex justify-between items-center mb-4">
                                        <h2 className="text-xl font-semibold">Edit Product</h2>
                                        <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-1 gap-4 mb-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Product Title</label>
                                            <input type="text" className="w-full border border-gray-3 rounded-md p-2" value={selectedProduct.title} onChange={(e) => setSelectedProduct({ ...selectedProduct, title: e.target.value })} />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                            <textarea className="w-full border border-gray-3 rounded-md p-2" rows={3} value={selectedProduct.description} onChange={(e) => setSelectedProduct({ ...selectedProduct, description: e.target.value })} />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Regular Price (IDR)</label>
                                                <input type="number" className="w-full border border-gray-3 rounded-md p-2" value={selectedProduct.price} onChange={(e) => setSelectedProduct({ ...selectedProduct, price: Number(e.target.value) })} />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Discounted Price (IDR)</label>
                                                <input
                                                    type="number"
                                                    className="w-full border border-gray-3 rounded-md p-2"
                                                    value={selectedProduct.discountedPrice}
                                                    onChange={(e) => setSelectedProduct({ ...selectedProduct, discountedPrice: Number(e.target.value) || 0 })}
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                            <select className="w-full border border-gray-3 rounded-md p-2" value={selectedProduct.category[0]} onChange={(e) => setSelectedProduct({ ...selectedProduct, category: [e.target.value] })}>
                                                {productCategories.map((category) => (
                                                    <option key={category.id} value={category.name}>
                                                        {category.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="grid grid-cols-3 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Product Type</label>
                                                <select
                                                    className="w-full border border-gray-3 rounded-md p-2"
                                                    value={selectedProduct.productAttrb?.productType || 'standard'}
                                                    onChange={(e) =>
                                                        setSelectedProduct({
                                                            ...selectedProduct,
                                                            productAttrb: {
                                                                ...(selectedProduct.productAttrb || {}),
                                                                productType: e.target.value as 'standard' | 'premium',
                                                            },
                                                        })
                                                    }
                                                >
                                                    <option value="standard">Standard</option>
                                                    <option value="premium">Premium</option>
                                                </select>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="isOrganic"
                                                    className="mr-2"
                                                    checked={selectedProduct.productAttrb?.isOrganic || false}
                                                    onChange={(e) =>
                                                        setSelectedProduct({
                                                            ...selectedProduct,
                                                            productAttrb: {
                                                                ...(selectedProduct.productAttrb || {}),
                                                                isOrganic: e.target.checked,
                                                            },
                                                        })
                                                    }
                                                />
                                                <label htmlFor="isOrganic" className="text-sm font-medium text-gray-700">
                                                    Organic
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="isEcoFriendly"
                                                    className="mr-2"
                                                    checked={selectedProduct.productAttrb?.isEcoFriendly || false}
                                                    onChange={(e) =>
                                                        setSelectedProduct({
                                                            ...selectedProduct,
                                                            productAttrb: {
                                                                ...(selectedProduct.productAttrb || {}),
                                                                isEcoFriendly: e.target.checked,
                                                            },
                                                        })
                                                    }
                                                />
                                                <label htmlFor="isEcoFriendly" className="text-sm font-medium text-gray-700">
                                                    Eco-Friendly
                                                </label>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <input type="checkbox" id="isVisible" className="mr-2" checked={selectedProduct.isVisible} onChange={(e) => setSelectedProduct({ ...selectedProduct, isVisible: e.target.checked })} />
                                            <label htmlFor="isVisible" className="text-sm font-medium text-gray-700">
                                                Visible to Customers
                                            </label>
                                        </div>
                                    </div>

                                    <div className="flex justify-end gap-2">
                                        <button onClick={() => setIsModalOpen(false)} className="border border-gray-3 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50">
                                            Cancel
                                        </button>
                                        <button onClick={() => updateProduct(selectedProduct)} className="bg-[#1A8245] text-white px-4 py-2 rounded-md hover:bg-[#5a9a7d]">
                                            Save Changes
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
