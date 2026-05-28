import React from 'react';
import { FaShieldAlt, FaFileInvoice } from 'react-icons/fa';

const RegulatoryBanner = () => {
  return (
    <div className="bg-gradient-to-r from-slate-100 to-slate-200 border-y-2 border-primary/20 py-3 md:py-6">
      <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 lg:gap-12">
          {/* SRA Information */}
          <div className="flex items-center gap-2 md:gap-3 bg-white rounded-lg shadow-md px-3 py-2 md:px-6 md:py-4 w-full md:min-w-[280px] md:w-auto hover:shadow-lg transition-shadow">
            <div className="bg-primary text-white p-2 md:p-3 rounded-full flex-shrink-0">
              <FaShieldAlt className="text-lg md:text-2xl" />
            </div>
            <div className="flex-1">
              <p className="text-[10px] md:text-sm text-gray-600 font-medium">Authorised & Regulated</p>
              <p className="text-xs md:text-base font-bold text-primary">SRA Number: 653449</p>
            </div>
          </div>

          {/* VAT Information */}
          <div className="flex items-center gap-2 md:gap-3 bg-white rounded-lg shadow-md px-3 py-2 md:px-6 md:py-4 w-full md:min-w-[280px] md:w-auto hover:shadow-lg transition-shadow">
            <div className="bg-primary text-white p-2 md:p-3 rounded-full flex-shrink-0">
              <FaFileInvoice className="text-lg md:text-2xl" />
            </div>
            <div className="flex-1">
              <p className="text-[10px] md:text-sm text-gray-600 font-medium">VAT Registered</p>
              <p className="text-xs md:text-base font-bold text-primary">VAT Number: 11295557</p>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="hidden lg:flex items-center gap-2 text-center">
            <div className="text-sm text-gray-700">
              <p className="font-semibold">Compliant with</p>
              <p className="text-xs text-primary font-bold">SRA Standards & Regulations 2019</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegulatoryBanner;
