'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SellerSignup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const router = useRouter();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Reset error when user types
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
      valid = false;
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
      valid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (!validateForm()) {
      return;
    }

    // Simpan data ke localStorage untuk digunakan di halaman shop
    localStorage.setItem('sellerData', JSON.stringify({
      email: formData.email,
      password: formData.password,
    }));

    // Redirect ke halaman shop signup
    router.push('/signup/seller/shop');
  };

  return (
    <>
      <section className="overflow-hidden py-20 mt-30 bg-gray-2">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="max-w-[570px] w-full mx-auto rounded-xl bg-white shadow-1 p-4 sm:p-7.5 xl:p-11">
            <div className="text-center mb-11">
              <div className="text-center text-sm mb-5">
                <Link href="/signup" className="text-blue-light hover:underline">
                  ← Back to role selection
                </Link>
              </div>
              <h2 className="font-semibold text-xl sm:text-2xl xl:text-heading-5 text-dark mb-1.5">Create Your Shop Account</h2>
              <p>Enter your detail below</p>
            </div>

            <div className="mt-5.5">
              <form onSubmit={handleSubmit} noValidate>
                <h3 className="text-lg font-medium text-dark mb-4">Seller&apos;s Personal Information</h3>
                
                <div className="mb-5">
                  <label htmlFor="email" className="block mb-2.5">
                    Email Address <span className="text-red">*</span>
                  </label>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your shop email"
                    className={`rounded-lg border ${errors.email ? "border-red" : "border-gray-3"} bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20`}
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="text-red text-sm mt-1">{errors.email}</p>}
                </div>

                <div className="mb-5">
                  <label htmlFor="password" className="block mb-2.5">
                    Password <span className="text-red">*</span>
                  </label>

                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    autoComplete="new-password"
                    className={`rounded-lg border ${errors.password ? "border-red" : "border-gray-3"} bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20`}
                    required
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && <p className="text-red text-sm mt-1">{errors.password}</p>}
                </div>

                <div className="mb-5.5">
                  <label htmlFor="confirmPassword" className="block mb-2.5">
                    Re-type Password <span className="text-red">*</span>
                  </label>

                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Re-type your password"
                    autoComplete="new-password"
                    className={`rounded-lg border ${errors.confirmPassword ? "border-red" : "border-gray-3"} bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20`}
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  {errors.confirmPassword && <p className="text-red text-sm mt-1">{errors.confirmPassword}</p>}
                </div>

                {submitError && (
                  <div className="mb-4 p-3 bg-red/10 text-red rounded-md text-sm">
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full flex justify-center font-medium text-white bg-dark py-3 px-6 rounded-lg ease-out duration-200 hover:bg-blue mt-7.5 disabled:pointer-events-none disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Next"}
                </button>

                <p className="text-center mt-6">
                  Already have an account?
                  <Link href="/signin" className="text-dark ease-out duration-200 hover:text-blue pl-2">
                    Sign in Now
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SellerSignup;