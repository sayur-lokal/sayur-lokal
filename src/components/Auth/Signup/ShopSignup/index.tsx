import Link from 'next/link';
import React from 'react';

const SellerSignup = () => {
  return (
    <>
      <section className="overflow-hidden py-20 mt-30 bg-gray-2">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="max-w-[670px] w-full mx-auto rounded-xl bg-white shadow-1 p-4 sm:p-7.5 xl:p-11">
            <div className="text-center mb-11">
              <div className="text-center text-sm mb-5">
                <Link href="/signup/seller" className="text-blue-light hover:underline">
                  ← Back to personal information form
                </Link>
              </div>
              <h2 className="font-semibold text-xl sm:text-2xl xl:text-heading-5 text-dark mb-1.5">Create Your Shop Account</h2>
              <p>Enter your shop&apos;s detail below</p>
            </div>

            <div className="mt-5.5">
              <form>
                <h3 className="text-lg font-medium text-dark mb-4">Shop&apos;s Information</h3>

                <div className="mb-5">
                  <label htmlFor="shopName" className="block mb-2.5">
                    Shop Name <span className="text-red">*</span>
                  </label>

                  <input
                    type="text"
                    name="shopName"
                    id="shopName"
                    placeholder="Enter your shop name"
                    className="rounded-lg border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                    required
                  />
                </div>

                <div className="mb-5">
                  <label htmlFor="shopDescription" className="block mb-2.5">
                    Shop Description <span className="text-red">*</span>
                  </label>

                  <input
                    type="text"
                    name="shopDescription"
                    id="shopDescription"
                    placeholder="The shop is the best shop around the city..."
                    className="rounded-lg border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                    required
                  />
                </div>

                <div className="mb-5">
                  <label htmlFor="phone" className="block mb-2.5">
                    Phone Number <span className="text-red">*</span>
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone number"
                    className="rounded-lg border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                    required
                  />
                </div>

                <div className="mb-5">
                  <label htmlFor="shopAddress" className="block mb-2.5">
                    Shop Address <span className="text-red">*</span>
                  </label>

                  <input
                    type="text"
                    name="shopAddress"
                    id="shopAddress"
                    placeholder="Enter your shop address"
                    className="rounded-lg border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                    required
                  />
                </div>

                <div className="mb-5">
                  <label htmlFor="shopLogo" className="block mb-2.5">
                    Shop Logo
                  </label>

                  <input
                    type="file"
                    name="shopLogo"
                    id="shopLogo"
                    placeholder="Enter your shop logo"
                    className="rounded-lg border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                  />
                </div>

                <div className="mb-5">
                  <label className="block mb-2.5">
                    Is your shop eco-friendly? <span className="text-red">*</span>
                  </label>
                  <p className="text-sm mb-2 text-gray-5">If yes, you will have eco-friendly badge on your shop profile. You can change it later.</p>

                  <div className="flex gap-6">
                    <div className="flex items-center">
                      <input 
                        type="radio" 
                        name="isEcoFriendly" 
                        id="eco-friendly-yes" 
                        value="yes" 
                        className="mr-2"
                        required 
                      />
                      <label htmlFor="eco-friendly-yes" className="text-dark">
                        Yes
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input 
                        type="radio" 
                        name="isEcoFriendly" 
                        id="eco-friendly-no" 
                        value="no" 
                        className="mr-2"
                        required
                      />
                      <label htmlFor="eco-friendly-no" className="text-dark">
                        No
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-10">
                  <div className="flex items-center">
                    <input type="checkbox" id="termsAndConditions" name="termsAndConditions" className="mr-2" required/>
                    <label htmlFor="termsAndConditions" className="text-sm text-gray-5">
                      I agree to the{' '}
                      <Link href="/terms-and-conditions" className="text-blue-light hover:underline">
                        Terms and Conditions
                      </Link>
                    </label>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <input type="checkbox" id="privacyPolicy" name="privacyPolicy" className="mr-2" required/>
                    <label htmlFor="privacyPolicy" className="text-sm text-gray-5">
                      I agree to the{' '}
                      <Link href="/privacy-policy" className="text-blue-light hover:underline">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                </div>

                <button type="submit" className="w-full flex justify-center font-medium text-white bg-dark py-3 px-6 rounded-lg ease-out duration-200 hover:bg-blue mt-7.5 disabled:pointer-events-none disabled:opacity-50">
                  Create Shop
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SellerSignup;
