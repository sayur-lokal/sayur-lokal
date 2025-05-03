'use client'

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
    } else if (formData.password.length < 3) {
      newErrors.password = "Password at least 8 characters";
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

    setIsSubmitting(true);

    try {
      const formDataObj = new FormData();
      formDataObj.append("email", formData.email);
      formDataObj.append("password", formData.password);

      const response = await fetch("/api/auth/signin", {
        method: "POST",
        body: formDataObj,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }

    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="overflow-hidden py-20 mt-30 bg-gray-2">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="max-w-[570px] w-full mx-auto rounded-xl bg-white shadow-1 p-4 sm:p-7.5 xl:p-11">
            <div className="text-center mb-11">
              <h2 className="font-semibold text-xl sm:text-2xl xl:text-heading-5 text-dark mb-1.5">
                Sign In to Your Account
              </h2>
              <p>Enter your detail below</p>
            </div>

            <div>
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-5">
                  <label htmlFor="email" className="block mb-2.5">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className={`rounded-lg border ${errors.email ? "border-red" : "border-gray-3"} bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20`}
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="text-red text-sm mt-1">{errors.email}</p>}
                </div>

                <div className="mb-5">
                  <label htmlFor="password" className="block mb-2.5">
                    Password
                  </label>

                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="Enter your password"
                      autoComplete="on"
                      className={`rounded-lg border ${errors.password ? "border-red" : "border-gray-3"} bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20`}
                      required
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
                    </button>
                  </div>
                  {errors.password && <p className="text-red text-sm mt-1">{errors.password}</p>}
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
                  {isSubmitting ? "Processing..." : "Sign in to account"}
                </button>

                <a
                  href="#"
                  className="block text-center text-dark-4 mt-4.5 ease-out duration-200 hover:text-dark"
                >
                  Forget your password?
                </a>

                <p className="text-center mt-6">
                  Don&apos;t have an account?
                  <Link
                    href="/signup"
                    className="text-dark ease-out duration-200 hover:text-blue pl-2"
                  >
                    Sign Up Now!
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

export default Signin;