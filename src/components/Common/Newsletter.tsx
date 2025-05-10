import React from 'react';
import Image from 'next/image';

const Newsletter = () => {
  return (
    <section className="overflow-hidden">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="relative z-1 overflow-hidden rounded-xl">
          {/* <!-- bg shapes --> */}
          <div className="absolute -z-1 w-full h-full left-0 top-0 rounded-xl bg-[#f4ede5]"></div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 px-4 sm:px-7.5 xl:pl-12.5 xl:pr-14 py-11">
            <div className="max-w-[491px] w-full">
              <h2 className="max-w-[399px] text-dark font-bold text-lg sm:text-xl xl:text-heading-4 mb-3">Bergabung sebagai Penjual</h2>
              <p className="text-dark">Daftarkan diri Anda sebagai penjual dan mulai jual hasil panen segar Anda sekarang!</p>
            </div>

            <div className="flex flex-col lg:items-end gap-3">
              <a 
                href="/signup/seller" 
                className="inline-flex items-center justify-center gap-2 py-3 px-6 text-white rounded-md bg-green-dark ease-out duration-200 hover:bg-[#1A693A]"
              >
                <svg 
                  className="fill-current" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" />
                </svg>

                <span className="font-medium">Daftar sebagai Penjual</span>
              </a>

              <p className="lg:text-right text-xs text-dark mt-2">
                *Syarat dan ketentuan berlaku
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
