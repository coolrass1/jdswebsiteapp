import React from 'react';

const RegulatoryTopBar = () => {
  return (
    <div className="bg-slate-800 text-white py-1.5 px-4 text-center">
      <div className="container max-w-screen-xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[10px] sm:text-xs">
          <span className="opacity-90">Authorised & Regulated by SRA</span>
          <span className="text-primary font-semibold">SRA: 653449</span>
          <span className="hidden sm:inline opacity-50">|</span>
          <span className="text-primary font-semibold">VAT: 11295557</span>
          <span className="hidden sm:inline opacity-50">|</span>
          <span className="text-primary font-semibold">Company: 11295557</span>
          <span className="hidden sm:inline opacity-50">|</span>
          <span className="opacity-90 hidden md:inline">Compliant with SRA Standards & Regulations 2019</span>
        </div>
      </div>
    </div>
  );
};

export default RegulatoryTopBar;
