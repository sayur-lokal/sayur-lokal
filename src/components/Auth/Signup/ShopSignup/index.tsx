'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const ShopSignup = () => {
    const currentSearchParams = useSearchParams();
    const router = useRouter()

    const [uid, setUid] = useState<string>("")
    useEffect(() => {
        const uid = currentSearchParams.get('uid');
        if (!uid) {
            router.push('/signup/seller?error=ERR_NO_UID');
        } else {
            setUid(uid)
        }
    }, [currentSearchParams])

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    phone: '',
    address: '',
    isEcoFriendly: '',
    termsAndConditions: false,
    privacyPolicy: false,
  });
  const [shopLogo, setShopLogo] = useState<File | null>(null);
  const [errors, setErrors] = useState({
    name: '',
    description: '',
    phone: '',
    address: '',
    isEcoFriendly: '',
    shopLogo: '',
    termsAndConditions: '',
    privacyPolicy: '',
  });
  const [submitError, setSubmitError] = useState('');


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    // Reset error when user types
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setShopLogo(e.target.files[0]);
      setErrors({
        ...errors,
        shopLogo: '',
      });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.name.trim()) {
      newErrors.name = 'Shop Name is required';
      valid = false;
    } else if (formData.name.trim().length < 5) {
      newErrors.name = 'Shop Name must be at least 5 characters long';
      valid = false;
    } else if (!/^[a-zA-Z0-9\s_]+$/.test(formData.name)) {
      newErrors.name = 'Shop Name can only contain letters, numbers, spaces and underscores';
      valid = false;
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Shop Description is required';
      valid = false;
    } else if (formData.description.trim().length < 10) {
      newErrors.description = 'Shop Description must be at least 10 characters long';
      valid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
      valid = false;
    } else if (!/^\d+$/.test(formData.phone.replace(/[\s]/g, ''))) {
      newErrors.phone = 'Phone Number must contain only numbers';
      valid = false;
    } else if (formData.phone.replace(/[\s]/g, '').length < 9) {
      newErrors.phone = 'Phone Number must be at least 9 digits long';
      valid = false;
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Shop Address is required';
      valid = false;
    } else if (formData.address.trim().length < 10) {
      newErrors.address = 'Shop Address must be at least 10 characters long';
      valid = false;
    }

    if (!formData.isEcoFriendly) {
      newErrors.isEcoFriendly = 'Please select an option';
      valid = false;
    }

    if (!formData.termsAndConditions) {
      newErrors.termsAndConditions = 'You must agree to the Terms and Conditions';
      valid = false;
    }

    if (!formData.privacyPolicy) {
      newErrors.privacyPolicy = 'You must agree to the Privacy Policy';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    setSubmitError('');
    if (!validateForm()) {
        e.preventDefault();
      return;
    }
  };

  return (
    <>
      <section className="overflow-hidden py-20 mt-30 bg-gray-2">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="max-w-[670px] w-full mx-auto rounded-xl bg-white shadow-1 p-4 sm:p-7.5 xl:p-11">
            <div className="text-center mb-11">
              <div className="text-center text-sm mb-5">
                <Link href="/signup/seller" className="text-[#D75A4A] hover:underline">
                  ← Back to personal information form
                </Link>
              </div>
              <h2 className="font-semibold text-xl sm:text-2xl xl:text-heading-5 text-dark mb-1.5">Create Your Shop Account</h2>
              <p>Enter your shop&apos;s detail below</p>
            </div>

            {submitError && <div className="mb-5 p-3 text-sm text-red bg-red/10 rounded-lg">{submitError}</div>}

            <div className="mt-5.5">
              <form onSubmit={handleSubmit} method="POST" action="/api/shop">
                <h3 className="text-lg font-medium text-dark mb-4">Shop&apos;s Information</h3>

                <div className="mb-5">
                  <label htmlFor="name" className="block mb-2.5">
                    Shop Name <span className="text-red">*</span>
                  </label>

                  <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    placeholder="Enter your shop name"
                    className={`rounded-lg border ${
                      errors.name ? 'border-red' : 'border-gray-3'
                    } bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20`}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red">{errors.name}</p>}
                </div>

                <div className="mb-5">
                  <label htmlFor="description" className="block mb-2.5">
                    Shop Description <span className="text-red">*</span>
                  </label>

                  <input
                    type="text"
                    name="description"
                    id="description"
                    onChange={handleChange}
                    placeholder="The shop is the best shop around the city..."
                    className={`rounded-lg border ${
                      errors.description ? 'border-red' : 'border-gray-3'
                    } bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20`}
                  />
                  {errors.description && <p className="mt-1 text-sm text-red">{errors.description}</p>}
                </div>

                <div className="mb-5">
                  <label htmlFor="phone" className="block mb-2.5">
                    Phone Number <span className="text-red">*</span>
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className={`rounded-lg border ${
                      errors.phone ? 'border-red' : 'border-gray-3'
                    } bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20`}
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red">{errors.phone}</p>}
                </div>

                <div className="mb-5">
                  <label htmlFor="address" className="block mb-2.5">
                    Shop Address <span className="text-red">*</span>
                  </label>

                  <input
                    type="text"
                    name="address"
                    id="address"
                    onChange={handleChange}
                    placeholder="Enter your shop address"
                    className={`rounded-lg border ${
                      errors.address ? 'border-red' : 'border-gray-3'
                    } bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20`}
                  />
                  {errors.address && <p className="mt-1 text-sm text-red">{errors.address}</p>}
                </div>

                <div className="mb-5">
                  <label htmlFor="shopLogo" className="block mb-2.5">
                    Shop Logo
                  </label>

                  <input
                    type="file"
                    name="shopLogo"
                    id="shopLogo"
                    onChange={handleFileChange}
                    className={`rounded-lg border ${
                      errors.shopLogo ? 'border-red' : 'border-gray-3'
                    } bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20`}
                  />
                  {errors.shopLogo && <p className="mt-1 text-sm text-red">{errors.shopLogo}</p>}
                </div>

                <div className="mb-5">
                  <label className="block mb-2.5">
                    Is your shop eco-friendly? <span className="text-red">*</span>
                  </label>
                  <p className="text-sm mb-2 text-gray-5">If yes, you will have eco-friendly badge on your shop profile. You can change it later.</p>

                  <div className="flex gap-6">
                    <div className="flex items-center">
                      <input type="radio" name="isEcoFriendly" id="eco-friendly-yes" value="yes" checked={formData.isEcoFriendly === 'yes'} onChange={handleChange} className="mr-2" />
                      <label htmlFor="eco-friendly-yes" className="text-dark">
                        Yes
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input type="radio" name="isEcoFriendly" id="eco-friendly-no" value="no" checked={formData.isEcoFriendly === 'no'} onChange={handleChange} className="mr-2" />
                      <label htmlFor="eco-friendly-no" className="text-dark">
                        No
                      </label>
                    </div>
                  </div>
                  {errors.isEcoFriendly && <p className="mt-1 text-sm text-red">{errors.isEcoFriendly}</p>}
                </div>

                <div className="flex justify-between items-center mt-10">
                  <div className="flex items-center">
                    <input type="checkbox" id="termsAndConditions" name="termsAndConditions" checked={formData.termsAndConditions} onChange={handleChange} className="mr-2" />
                    <label htmlFor="termsAndConditions" className="text-sm text-gray-5">
                      I agree to the{' '}
                      <Link href="/terms-and-conditions" className="text-[#D75A4A] hover:underline">
                        Terms and Conditions
                      </Link>
                    </label>
                  </div>
                </div>
                {errors.termsAndConditions && <p className="mt-1 text-sm text-red">{errors.termsAndConditions}</p>}

                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <input type="checkbox" id="privacyPolicy" name="privacyPolicy" checked={formData.privacyPolicy} onChange={handleChange} className="mr-2" />
                    <label htmlFor="privacyPolicy" className="text-sm text-gray-5">
                      I agree to the{' '}
                      <Link href="/privacy-policy" className="text-[#D75A4A] hover:underline">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                </div>
                {errors.privacyPolicy && <p className="mt-1 text-sm text-red">{errors.privacyPolicy}</p>}

                <input type='hidden' name="uid" value={uid}></input>

                <button
                  type="submit"
                  className="w-full flex justify-center font-medium text-white bg-green-dark py-3 px-6 rounded-lg ease-out duration-200 hover:bg-[#1A693A] mt-7.5 disabled:pointer-events-none disabled:opacity-50"
                >
                  Buat toko
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopSignup;
