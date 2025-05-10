'use client';
import React, { useState } from 'react';
import { Product } from '@/types/product';
import Breadcrumb from '@/components/Common/Breadcrumb';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

// Extended product interface with visibility flag for seller admin
interface SellerProduct extends Product {
    isVisible: boolean;
}

// Product categories for dropdown
const productCategories = [
    { id: 1, name: 'Bahan Pokok' },
    { id: 2, name: 'Sayuran' },
    { id: 3, name: 'Bumbu Dapur' },
    { id: 4, name: 'Buah-buahan' },
    { id: 5, name: 'Produk Olahan' },
];

export default function CreateProductPage() {
    const param = useParams();
    const router = useRouter();
    const shopId = param.shopId?.toString() || "";
    
    const [newProduct, setNewProduct] = useState<Partial<SellerProduct>>({
        title: '',
        price: 0,
        discountedPrice: 0,
        description: '',
        category: ['Bahan Pokok'],
        productAttrb: {
            productType: 'standard',
            isOrganic: false,
            isEcoFriendly: false,
        },
        isVisible: true,
    });
    
    const [imageFiles, setImageFiles] = useState<File[]>([]);
    const [nutritionInfo, setNutritionInfo] = useState({
        calories: '',
        protein: '',
        carbs: '',
        fat: '',
        fiber: '',
    });
    const [ingredients, setIngredients] = useState<string[]>(['']);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Add new product
    const addNewProduct = () => {
        setIsSubmitting(true);
        
        // In a real application, this would send data to an API
        // For now, we'll simulate a successful creation
        setTimeout(() => {
            setIsSubmitting(false);
            // Navigate back to products page
            router.push(`/shop/${shopId}/products`);
        }, 1000);
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

    // Add ingredient field
    const addIngredientField = () => {
        setIngredients([...ingredients, '']);
    };

    // Update ingredient
    const updateIngredient = (index: number, value: string) => {
        const updatedIngredients = [...ingredients];
        updatedIngredients[index] = value;
        setIngredients(updatedIngredients);
    };

    // Remove ingredient field
    const removeIngredientField = (index: number) => {
        if (ingredients.length > 1) {
            const updatedIngredients = [...ingredients];
            updatedIngredients.splice(index, 1);
            setIngredients(updatedIngredients);
        }
    };

    return (
        <main>
            <Breadcrumb
                title={"Add New Product"}
                pages={["shop", "/", "admin", "/", "products", "/", "create"]}
            />
            <section className="overflow-hidden relative pb-20 pt-5 bg-[#f3f4f6]">
                <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-center">
                            <Link href={`/shop/${shopId}/products`} className="text-[#D75A4A] hover:underline">
                                ← Back to products
                            </Link>
                        </div>

                        {/* Product Form */}
                        <div className="bg-white rounded-md border border-gray-3 p-6">
                            <h2 className="text-xl font-semibold mb-6">Product Information</h2>
                            
                            <div className="grid grid-cols-1 gap-6">
                                {/* Basic Information */}
                                <div className="grid grid-cols-1 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Product Title*</label>
                                        <input 
                                            type="text" 
                                            className="w-full border border-gray-3 rounded-md p-2" 
                                            value={newProduct.title} 
                                            onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })} 
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Description*</label>
                                        <textarea 
                                            className="w-full border border-gray-3 rounded-md p-2" 
                                            rows={4} 
                                            value={newProduct.description} 
                                            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                                            required
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Regular Price (IDR)*</label>
                                            <input 
                                                type="number" 
                                                className="w-full border border-gray-3 rounded-md p-2" 
                                                value={newProduct.price} 
                                                onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Discounted Price (IDR)</label>
                                            <input 
                                                type="number" 
                                                className="w-full border border-gray-3 rounded-md p-2" 
                                                value={newProduct.discountedPrice || 0} 
                                                onChange={(e) => setNewProduct({ ...newProduct, discountedPrice: Number(e.target.value) || 0 })}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Category*</label>
                                        <select 
                                            className="w-full border border-gray-3 rounded-md p-2" 
                                            value={newProduct.category ? newProduct.category[0] : 'Bahan Pokok'} 
                                            onChange={(e) => setNewProduct({ ...newProduct, category: [e.target.value] })}
                                            required
                                        >
                                            {productCategories.map((category) => (
                                                <option key={category.id} value={category.name}>
                                                    {category.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Product Attributes */}
                                <div>
                                    <h3 className="text-lg font-medium mb-3">Product Attributes</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-md">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Product Type</label>
                                            <select
                                                className="w-full border border-gray-3 rounded-md p-2"
                                                value={newProduct.productAttrb?.productType}
                                                onChange={(e) =>
                                                    setNewProduct({
                                                        ...newProduct,
                                                        productAttrb: {
                                                            ...(newProduct.productAttrb || {}),
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
                                                checked={newProduct.productAttrb?.isOrganic}
                                                onChange={(e) =>
                                                    setNewProduct({
                                                        ...newProduct,
                                                        productAttrb: {
                                                            ...(newProduct.productAttrb || {}),
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
                                                checked={newProduct.productAttrb?.isEcoFriendly}
                                                onChange={(e) =>
                                                    setNewProduct({
                                                        ...newProduct,
                                                        productAttrb: {
                                                            ...(newProduct.productAttrb || {}),
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
                                </div>

                                {/* Product Images */}
                                <div>
                                    <h3 className="text-lg font-medium mb-3">Product Images</h3>
                                    <div className="bg-gray-50 p-4 rounded-md">
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Upload Images (Max 5)</label>
                                            <input 
                                                type="file" 
                                                className="w-full border border-gray-3 rounded-md p-2" 
                                                accept="image/*" 
                                                multiple 
                                                onChange={(e) => {
                                                    if (e.target.files) {
                                                        const filesArray = Array.from(e.target.files).slice(0, 5);
                                                        setImageFiles(filesArray);
                                                    }
                                                }}
                                            />
                                            <p className="text-xs text-gray-500 mt-1">Recommended size: 800x800px, Max size: 2MB per image</p>
                                        </div>
                                        
                                        {imageFiles.length > 0 && (
                                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                                                {imageFiles.map((file, index) => (
                                                    <div key={index} className="relative">
                                                        <div className="h-24 w-full bg-gray-200 rounded-md flex items-center justify-center overflow-hidden">
                                                            <img 
                                                                src={URL.createObjectURL(file)} 
                                                                alt={`Preview ${index}`} 
                                                                className="h-full w-full object-cover"
                                                            />
                                                        </div>
                                                        <button 
                                                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                                                            onClick={() => {
                                                                const newFiles = [...imageFiles];
                                                                newFiles.splice(index, 1);
                                                                setImageFiles(newFiles);
                                                            }}
                                                        >
                                                            ×
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Nutrition Information */}
                                <div>
                                    <h3 className="text-lg font-medium mb-3">Nutrition Information (Optional)</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 bg-gray-50 p-4 rounded-md">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Calories (kcal)</label>
                                            <input 
                                                type="text" 
                                                className="w-full border border-gray-3 rounded-md p-2" 
                                                value={nutritionInfo.calories} 
                                                onChange={(e) => setNutritionInfo({ ...nutritionInfo, calories: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Protein (g)</label>
                                            <input 
                                                type="text" 
                                                className="w-full border border-gray-3 rounded-md p-2" 
                                                value={nutritionInfo.protein} 
                                                onChange={(e) => setNutritionInfo({ ...nutritionInfo, protein: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Carbs (g)</label>
                                            <input 
                                                type="text" 
                                                className="w-full border border-gray-3 rounded-md p-2" 
                                                value={nutritionInfo.carbs} 
                                                onChange={(e) => setNutritionInfo({ ...nutritionInfo, carbs: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Fat (g)</label>
                                            <input 
                                                type="text" 
                                                className="w-full border border-gray-3 rounded-md p-2" 
                                                value={nutritionInfo.fat} 
                                                onChange={(e) => setNutritionInfo({ ...nutritionInfo, fat: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Fiber (g)</label>
                                            <input 
                                                type="text" 
                                                className="w-full border border-gray-3 rounded-md p-2" 
                                                value={nutritionInfo.fiber} 
                                                onChange={(e) => setNutritionInfo({ ...nutritionInfo, fiber: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Ingredients */}
                                <div>
                                    <h3 className="text-lg font-medium mb-3">Ingredients (Optional)</h3>
                                    <div className="bg-gray-50 p-4 rounded-md">
                                        {ingredients.map((ingredient, index) => (
                                            <div key={index} className="flex items-center gap-2 mb-2">
                                                <input 
                                                    type="text" 
                                                    className="flex-grow border border-gray-3 rounded-md p-2" 
                                                    value={ingredient} 
                                                    placeholder={`Ingredient ${index + 1}`}
                                                    onChange={(e) => updateIngredient(index, e.target.value)}
                                                />
                                                <button 
                                                    type="button"
                                                    className="bg-red-500 text-white rounded-md px-2 py-1 text-sm"
                                                    onClick={() => removeIngredientField(index)}
                                                    disabled={ingredients.length <= 1}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        ))}
                                        <button 
                                            type="button"
                                            className="mt-2 bg-blue-500 text-white rounded-md px-3 py-1 text-sm"
                                            onClick={addIngredientField}
                                        >
                                            Add Ingredient
                                        </button>
                                    </div>
                                </div>

                                {/* Inventory & Visibility */}
                                <div>
                                    <h3 className="text-lg font-medium mb-3">Inventory & Visibility</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-md">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Stock Quantity*</label>
                                            <input 
                                                type="number" 
                                                className="w-full border border-gray-3 rounded-md p-2" 
                                                placeholder="Enter stock quantity"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">SKU (Stock Keeping Unit)</label>
                                            <input 
                                                type="text" 
                                                className="w-full border border-gray-3 rounded-md p-2" 
                                                placeholder="e.g. RICE-ORG-5KG"
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="isVisible"
                                                    className="mr-2"
                                                    checked={newProduct.isVisible}
                                                    onChange={(e) => setNewProduct({ ...newProduct, isVisible: e.target.checked })}
                                                />
                                                <label htmlFor="isVisible" className="text-sm font-medium text-gray-700">
                                                    Visible to Customers
                                                </label>
                                            </div>
                                            <p className="text-xs text-gray-500 mt-1">If unchecked, the product will be saved as a draft and won&apos;t be visible in the store.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-end gap-2 pt-4 border-t border-gray-3">
                                    <Link 
                                        href={`/shop/${shopId}/products`}
                                        className="border border-gray-3 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50"
                                    >
                                        Cancel
                                    </Link>
                                    <button 
                                        onClick={addNewProduct} 
                                        className="bg-[#1A8245] text-white px-6 py-2 rounded-md hover:bg-[#5a9a7d] disabled:bg-gray-400"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Saving...' : 'Save Product'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}