'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const RegisterRoleSelection = () => {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
  };

  const handleContinue = () => {
    if (selectedRole) {
      router.push(`/signup/${selectedRole}`);
    }
  };

  return (
    <>
    <section className="overflow-hidden py-20 mt-30 bg-gray-2">
    <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="max-w-[570px] w-full mx-auto rounded-xl bg-white shadow-1 p-4 sm:p-7.5 xl:p-11">
            <div className="text-center mb-11">
              <h2 className="font-semibold text-xl sm:text-2xl xl:text-heading-5 text-dark mb-1.5">
                Choose Your Account Type
          </h2>
          <p className="mt-2 text-gray-600">
            Select the type of account you want to create
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <div className="space-y-4">
            <div 
              className={`border rounded-lg p-4 cursor-pointer ${
                selectedRole === 'buyer' ? 'border-green-dark bg-green-light-6' : 'border-gray-4'
              }`}
              onClick={() => handleRoleSelect('buyer')}
            >
              <div className="flex items-center">
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-dark">Buyer</h3>
                  <p className="text-sm text-gray-6">
                    I want to shop and purchase products
                  </p>
                </div>
              </div>
            </div>

            <div 
              className={`border rounded-lg p-4 cursor-pointer ${
                selectedRole === 'seller' ? 'border-green-dark bg-green-light-6' : 'border-gray-4'
              }`}
              onClick={() => handleRoleSelect('seller')}
            >
              <div className="flex items-center">
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-dark">Seller</h3>
                  <p className="text-sm text-gray-6">
                    I want to create a shop and sell products
                  </p>
                </div>
              </div>
            </div>
          </div>

          
            <button
              className="w-full flex justify-center font-medium text-white bg-green-dark py-3 px-6 rounded-lg ease-out duration-200 hover:bg-[#1A693A] mt-7.5 disabled:pointer-events-none disabled:opacity-50"
              onClick={handleContinue}
              disabled={!selectedRole}
            >
              Continue
            </button>

          
            <p className="text-center mt-6">
              Already have an account?
              <Link
                href="/signin"
                className="text-dark ease-out duration-200 hover:text-[#D75A4A] pl-2"
              >
                Sign in Now
              </Link>
            </p>
          
        </div>
      </div>
    </div>
    </section>
    </>
  );
}

export default RegisterRoleSelection;