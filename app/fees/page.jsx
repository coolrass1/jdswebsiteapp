"use client";
import React from 'react'
import Link from 'next/link'

const Feeuptodate = () => {
  return (
    <div className="w-full px-2 sm:px-4 lg:px-8 py-4 sm:py-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 text-secondary px-2">
          Updated Fee Schedule 2026
        </h1>

        <div className="mb-8 bg-blue-50 border-l-4 border-primary p-4 sm:p-6 rounded-lg shadow-sm">
          <h2 className="text-lg sm:text-xl font-bold text-secondary mb-2">Fees Information</h2>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            We publish information about our pricing for certain services that we provide to the public and to businesses as a law firm regulated by the SRA. The pricing information relates to advice we provide on immigration law (excluding asylum), employment law, housing law, and probate.
          </p>
          <div className="mt-3 text-xs sm:text-sm text-gray-700 space-y-2">
            <p>
              Fees and costs stated in our pricing information are in relation to our experience of the likely cost of dealing with similar matters/our best estimate of the likely amount of professional time incurred. There may be need to revise our fees in some circumstances where for example your instructions change, or unforeseen or exceptional circumstances arise.
            </p>
            <p>
              Other practice areas advertised on our site are quoted case by case, and we will confirm the likely cost basis in writing once we understand the details of the matter.
            </p>
            <p>
              For complaints and regulatory information, see the <Link href="/policy" className="font-semibold text-primary hover:underline">Complaints Policy</Link> and our <Link href="/solicitors" className="font-semibold text-primary hover:underline">Solicitors &amp; Staff</Link> page.
            </p>
          </div>
        </div>

        {/* Initial Consultation */}
        <div className="mb-8 bg-gray-50 border-l-4 border-secondary p-4 sm:p-6 rounded-lg shadow-sm">
          <h2 className="text-lg sm:text-xl font-bold text-secondary mb-3">Initial Consultation</h2>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            We offer an initial no obligation consultation which can either be in person or remotely via telephone, Zoom or any other agreed online platform. The cost of this service is between <strong>£150-£250 per hour excluding VAT</strong> depending on the year of experience of the solicitor or caseworker handling the matter.
          </p>
        </div>

        {/* General Fee Information */}
        <div className="mb-8 bg-white border-2 border-gray-300 rounded-lg shadow-sm">
          <div className="bg-secondary text-white px-3 sm:px-6 py-3 sm:py-4 rounded-t-lg">
            <h2 className="text-lg sm:text-xl font-bold">General Fee Information</h2>
          </div>
          <div className="p-4 sm:p-6 space-y-6">
            
            {/* VAT Section */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-secondary mb-2">VAT</h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                All the prices quoted exclude VAT. This is charged at the prevailing rate and is payable on our fees and on most expenses which we are likely to incur on your behalf. VAT is payable subject to your immigration status in the United Kingdom.
              </p>
            </div>

            {/* Disbursements Section */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-secondary mb-2">Disbursements</h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Disbursements are costs related to a client's matter that are payable to third parties, such as court fees, Home Office fees, or Barrister's fees and they are borne by clients. We will notify you of any disbursements and request that the fund is paid into the firm's account. Once we have received funds from you to cover the cost of any disbursement, we will handle the payment of the disbursements on your behalf to ensure a smoother process except the client instructs otherwise.
              </p>
            </div>

            {/* Hourly Rate Section */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-secondary mb-2">Hourly Rate</h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-3">
                Prices quoted exclude VAT and may increase due to the complexity of the matter. Disbursements payable to third parties may change without our notice. Our hourly rates where a fixed fee is not agreed or where costs need to be assessed are as follows:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-gray-700">
                <li><strong>Trainee Solicitors, paralegals and other fee earners:</strong> £120 per hour</li>
                <li><strong>Solicitors, legal executives and fee earners of equivalent experience:</strong> £165 per hour</li>
                <li><strong>Solicitors and legal executives with over 4 years' experience:</strong> £250 - £300 per hour</li>
                <li><strong>Solicitors and legal executives with over 8 years' experience:</strong> £250 - £300 per hour</li>
              </ul>
              <div className="mt-3 bg-blue-50 border-l-4 border-blue-500 p-3 rounded">
                <p className="text-xs sm:text-sm font-semibold text-blue-800 mb-2">The fees will cover:</p>
                <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-blue-900">
                  <li>Taking your detailed instructions and providing advice</li>
                  <li>Considering documents</li>
                  <li>Completing and submitting the Application</li>
                  <li>Attending to you</li>
                  <li>Advising you on timeliness and the outcome of your application</li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* Probate & Estate Administration Section */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-primary text-white px-3 sm:px-6 py-3 sm:py-4 rounded-t-lg">
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold">1. Probate & Estate Administration</h2>
          </div>
          <div className="overflow-x-auto shadow-lg border-2 border-primary rounded-b-lg">
            <table className="w-full bg-white min-w-[640px]">
              <thead className="bg-gray-100 border-b-2 border-gray-300">
                <tr>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-bold text-gray-700">Service Type</th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-bold text-gray-700">Details / Thresholds</th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-bold text-gray-700">Fixed Fee (Excl. VAT)</th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-bold text-gray-700">Total Cost (Incl. VAT)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-semibold text-xs sm:text-base">Simple Probate</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">Estate &lt; £100,000; Valid Will; Adult beneficiaries; No property complications</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-primary text-xs sm:text-base">£1,800 – £2,500</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-xs sm:text-base">£2,160 – £3,000</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-semibold text-xs sm:text-base">Standard Probate (Option A)</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">Estate £100,000 – £500,000; Includes property; Up to 4 beneficiaries</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-primary text-xs sm:text-base">£2,800 – £4,200</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-xs sm:text-base">£3,360 – £5,040</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-semibold text-xs sm:text-base">Standard Probate (Option B)</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">Percentage based on estate value and beneficiary count</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-primary text-xs sm:text-base">2.0% – 3.5% (Min. £2,000 + VAT)</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold italic text-xs sm:text-base">Varies by value</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-semibold text-xs sm:text-base">Complex Probate</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">Estate &gt; £500,000; Overseas assets; Trusts; IHT planning; Disputes</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-primary text-xs sm:text-base">£4,500 – £7,500 (or 3.0% – 4.5%)</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold italic text-xs sm:text-base">Bespoke Quote</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Additional Probate Disbursements */}
          <div className="mt-4 sm:mt-6 bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-300">
            <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-secondary">Additional Probate Disbursements:</h3>
            <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li><strong>Probate Court Fee:</strong> £273 (if estate &gt; £5,000)</li>
              <li><strong>Property Valuations:</strong> £150 – £300</li>
              <li><strong>Statutory Advertisements:</strong> £80 – £150</li>
              <li><strong>Certified Copies:</strong> £10 – £20 each</li>
            </ul>
          </div>
        </section>

        {/* Immigration Law Section */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-primary text-white px-3 sm:px-6 py-3 sm:py-4 rounded-t-lg">
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold">2. Immigration Law</h2>
          </div>
          <div className="overflow-x-auto shadow-lg border-2 border-primary rounded-b-lg">
            <table className="w-full bg-white min-w-[640px]">
              <thead className="bg-gray-100 border-b-2 border-gray-300">
                <tr>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-bold text-gray-700">Service Category</th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-bold text-gray-700">Specific Visa / Service</th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-bold text-gray-700">Fixed Fee (Excl. VAT)</th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-bold text-gray-700">Total Cost (Incl. VAT)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-semibold text-xs sm:text-base">Visitor Visas</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">Standard / Family / Business Visit</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-primary text-xs sm:text-base">£650</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-xs sm:text-base">£780</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-semibold text-xs sm:text-base">Family Visas</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">Spouse / Partner (Entry or Extension)</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-primary text-xs sm:text-base">£950</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-xs sm:text-base">£1,140</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-semibold text-xs sm:text-base">Settlement</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">Indefinite Leave to Remain (ILR)</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-primary text-xs sm:text-base">£1,100</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-xs sm:text-base">£1,320</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-semibold text-xs sm:text-base">Nationality</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">British Citizenship / Naturalisation</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-primary text-xs sm:text-base">£1,250</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-xs sm:text-base">£1,500</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-semibold text-xs sm:text-base">Student Visas</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">New Application / Extension</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-primary text-xs sm:text-base">£750</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-xs sm:text-base">£900</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-semibold text-xs sm:text-base">Business Visas</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">Sponsor Licence Application</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-primary text-xs sm:text-base">£1,400</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-xs sm:text-base">£1,680</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-semibold text-xs sm:text-base">Work Visas</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">Skilled Worker Visa</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-primary text-xs sm:text-base">£1,200</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-xs sm:text-base">£1,440</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-semibold text-xs sm:text-base">Work Visas</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">Health &amp; Care Worker Visa</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-primary text-xs sm:text-base">£850</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-xs sm:text-base">£1,020</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-semibold text-xs sm:text-base">Appeals</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">Administrative Review</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-primary text-xs sm:text-base">£800</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-xs sm:text-base">£960</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-semibold text-xs sm:text-base">Appeals</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">First-tier Tribunal Appeal</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-primary text-xs sm:text-base">£1,800 – £2,500</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold italic text-xs sm:text-base">Varies</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

          {/* Immigration Disbursements */}
          <div className="mt-4 sm:mt-6 bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-300">
            <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-secondary">Likely Disbursements — Immigration:</h3>
            <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li><strong>Home Office Application Fee:</strong> Varies by visa type (e.g., Skilled Worker ~£719–£1,500+, ILR ~£2,885) — paid directly to the Home Office, not to JDS.</li>
              <li><strong>Immigration Health Surcharge (IHS):</strong> Approx. £776/year (paid to UKVI).</li>
              <li><strong>Translation/Interpretation Costs:</strong> £100–£350 depending on language and document volume.</li>
              <li><strong>Certified Document Copies:</strong> £10–£30 each.</li>
            </ul>
            <p className="text-xs mt-2 text-gray-500">Note: Government fees are set by the Home Office and change periodically. Please verify current rates at <a href="https://www.gov.uk/government/publications/visa-regulations-revised-table" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">gov.uk</a>.</p>
          </div>
          <div className="mt-3 bg-red-50 border-l-4 border-red-400 p-4 rounded-lg text-xs sm:text-sm">
            <p className="font-bold text-red-700 mb-1">Not Included in the above fees:</p>
            <ul className="list-disc pl-4 space-y-1 text-red-800">
              <li>Home Office application fees and IHS charges (paid separately to UKVI)</li>
              <li>Asylum claims (not covered by these fee schedules)</li>
              <li>Appeal hearings beyond initial representation (quoted separately)</li>
            </ul>
          </div>
          
          {/* Immigration VAT Nuance - SRA Requirement */}
          <div className="mt-3 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg text-xs sm:text-sm">
            <p className="font-bold text-blue-800 mb-2">VAT on Immigration Services:</p>
            <p className="text-blue-900">
              VAT is charged at the standard rate of 20% where applicable. However, VAT treatment depends on your location and immigration status. We will confirm whether VAT is properly chargeable once we have been instructed and can assess your specific circumstances.
            </p>
          </div>

        {/* Employment Law Section */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-primary text-white px-3 sm:px-6 py-3 sm:py-4 rounded-t-lg">
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold">3. Employment Law</h2>
          </div>
          <div className="overflow-x-auto shadow-lg border-2 border-primary rounded-b-lg">
            <table className="w-full bg-white min-w-[640px]">
              <thead className="bg-gray-100 border-b-2 border-gray-300">
                <tr>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-bold text-gray-700">Category</th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-bold text-gray-700">Service Type</th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-bold text-gray-700">Fixed Fee (Excl. VAT)</th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-bold text-gray-700">Total Cost (Incl. VAT)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-semibold text-xs sm:text-base">Contracts</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">Standard Employment Contract</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-primary text-xs sm:text-base">£350</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-xs sm:text-base">£420</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-semibold text-xs sm:text-base">Contracts</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">Executive / Senior Role Contract</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-primary text-xs sm:text-base">£650</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-xs sm:text-base">£780</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-semibold text-xs sm:text-base">Contracts</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">Contract Review (for Employees)</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-primary text-xs sm:text-base">£280</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-xs sm:text-base">£336</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-semibold text-xs sm:text-base">Documentation</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">Staff Handbook / Policies</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-primary text-xs sm:text-base">£500</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-xs sm:text-base">£600</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-semibold text-xs sm:text-base">Settlement</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">Employee Representation</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-primary text-xs sm:text-base">£750 – £1,200</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-xs sm:text-base">£900 – £1,440</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-semibold text-xs sm:text-base">Settlement</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">Employer Drafting &amp; Negotiation</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-primary text-xs sm:text-base">£850</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-xs sm:text-base">£1,020</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-semibold text-xs sm:text-base">Disputes</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">Initial Advice &amp; Assessment</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-primary text-xs sm:text-base">£250</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-xs sm:text-base">£300</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-semibold text-xs sm:text-base">Disputes</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">Representation at Hearing (per day)</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-primary text-xs sm:text-base">£600</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-xs sm:text-base">£720</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-semibold text-xs sm:text-base">Disputes</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">Tribunal Claim Preparation</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-primary text-xs sm:text-base">£1,200 – £1,800</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold italic text-xs sm:text-base">Varies</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-semibold text-xs sm:text-base">Negotiation</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">Settlement Negotiation (Fixed Fee)</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-primary text-xs sm:text-base">£950</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-xs sm:text-base">£1,140</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Employment Disbursements */}
          <div className="mt-4 sm:mt-6 bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-300">
            <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-secondary">Likely Disbursements — Employment:</h3>
            <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li><strong>Employment Tribunal (ET1/ET3) Filing Fees:</strong> Currently £0 (fees were abolished — check <a href="https://www.gov.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">gov.uk</a> for updates).</li>
              <li><strong>Barrister/Counsel Fees (if instructed):</strong> From £500/day — quoted separately.</li>
              <li><strong>Expert Witness Reports:</strong> £500–£2,000+ depending on expertise required.</li>
              <li><strong>Transcript/Hearing Bundle Costs:</strong> £50–£200.</li>
            </ul>
          </div>
          <div className="mt-3 bg-red-50 border-l-4 border-red-400 p-4 rounded-lg text-xs sm:text-sm">
            <p className="font-bold text-red-700 mb-1">Not Included in the above fees:</p>
            <ul className="list-disc pl-4 space-y-1 text-red-800">
              <li>Barrister or counsel fees (instructed separately and quoted in advance)</li>
              <li>Expert witness or medical report costs</li>
              <li>Cases involving discrimination as the primary claim (complexity surcharge may apply)</li>
              <li>Multi-day hearings beyond the first day (quoted at the daily hearing rate)</li>
            </ul>
          </div>
        </section>

        {/* Debt Recovery Section */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-primary text-white px-3 sm:px-6 py-3 sm:py-4 rounded-t-lg">
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold">4. Debt Recovery & Commercial Collections</h2>
          </div>
          
          <div className="bg-white border-2 border-primary rounded-b-lg p-4 sm:p-6">
            <div className="mb-6 text-xs sm:text-sm text-gray-700">
              <p className="mb-3 leading-relaxed">
                All fees are exclusive of VAT (20%) unless stated otherwise. Disbursements (third-party costs) are additional and explained clearly. <strong>No hidden charges</strong> – all costs agreed in writing before work begins.
              </p>
              <p className="font-semibold">
                We offer three pricing options so you can choose what suits your case:
              </p>
            </div>

            {/* Option 1 - Fixed Fee Services */}
            <div className="mb-8">
              <h3 className="text-base sm:text-lg font-bold mb-3 text-secondary flex items-center">
                <span className="mr-2">🟢</span> Option 1 – Fixed Fee Services
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-4 italic">
                Best for standard, undisputed debts under £10,000
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-300 min-w-[640px]">
                  <thead className="bg-gray-100 border-b-2 border-gray-300">
                    <tr>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-bold text-gray-700">Service</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-bold text-gray-700">Fixed Fee + VAT</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-bold text-gray-700">Total Cost (incl. VAT)</th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-bold text-gray-700">What is included</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-2 sm:px-4 py-2 sm:py-3 font-semibold text-xs sm:text-base">Letter Before Action (LBA)</td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-primary text-xs sm:text-base">£250 + VAT</td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-xs sm:text-base">£300</td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">Review documents, draft & send formal legal notice, handle initial response</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-2 sm:px-4 py-2 sm:py-3 font-semibold text-xs sm:text-base">Issue County Court Claim</td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-primary text-xs sm:text-base">£550 + VAT</td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-xs sm:text-base">£660</td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">Prepare & file claim form, serve on debtor, handle court correspondence</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-2 sm:px-4 py-2 sm:py-3 font-semibold text-xs sm:text-base">Draft Defence / Response</td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-primary text-xs sm:text-base">£400 + VAT</td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-xs sm:text-base">£480</td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">For debtors: prepare formal response to claim</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-2 sm:px-4 py-2 sm:py-3 font-semibold text-xs sm:text-base">Negotiate Payment Plan</td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-primary text-xs sm:text-base">£350 + VAT</td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 font-bold text-xs sm:text-base">£420</td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">Agree & document binding repayment terms</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Option 2 - Percentage Based Fees */}
            <div className="mb-8">
              <h3 className="text-base sm:text-lg font-bold mb-3 text-secondary flex items-center">
                <span className="mr-2">🟡</span> Option 2 – Percentage Based Fees
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-4 italic">
                For debts over £10,000 or where ongoing collection/action is required
              </p>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Fee calculated on the amount successfully recovered for you:
              </p>
              
              <div className="bg-gray-50 border border-gray-300 p-4 rounded-lg space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between items-center py-2 border-b border-gray-300">
                  <span className="font-semibold">Debt value £10,000 – £50,000:</span>
                  <span className="font-bold text-primary">12.5% – 15% of amount recovered</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300">
                  <span className="font-semibold">Debt value £50,001 – £150,000:</span>
                  <span className="font-bold text-primary">10% – 12.5% of amount recovered</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-semibold">Debt value over £150,000:</span>
                  <span className="font-bold text-primary">7.5% – 10% of amount recovered</span>
                </div>
              </div>

              <div className="mt-4 bg-green-50 border-l-4 border-green-500 p-4 rounded text-xs sm:text-sm space-y-1">
                <p className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span><strong>No recovery = No fee</strong> (only disbursements/court costs you agreed to pay)</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Fee agreed in writing before starting work</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Minimum fee applies: £300 + VAT</span>
                </p>
              </div>
            </div>

            {/* Option 3 - Hourly Rate */}
            <div className="mb-8">
              <h3 className="text-base sm:text-lg font-bold mb-3 text-secondary flex items-center">
                <span className="mr-2">🔵</span> Option 3 – Hourly Rate
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-4 italic">
                For complex, disputed, or high-value cases; multi-party claims; or insolvency work
              </p>
              
              <div className="bg-gray-50 border border-gray-300 p-4 rounded-lg space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Solicitor rate:</span>
                  <span className="font-bold text-primary">£220 – £280 + VAT per hour</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Legal Executive / Paralegal rate:</span>
                  <span className="font-bold text-primary">£150 – £190 + VAT per hour</span>
                </div>
              </div>

              <div className="mt-4 space-y-2 text-xs sm:text-sm text-gray-700">
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>We provide a clear estimate of hours and costs before starting</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Monthly invoices with detailed breakdown of work done</span>
                </p>
              </div>
            </div>

            {/* Disbursements Section */}
            <div className="bg-amber-50 border-2 border-amber-400 p-4 sm:p-6 rounded-lg">
              <h3 className="text-base sm:text-lg font-bold mb-3 text-secondary flex items-center">
                <span className="mr-2">⚠️</span> DISBURSEMENTS – ADDITIONAL COSTS YOU PAY
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 mb-4">
                These are fees paid directly to courts, officials, or third parties – we do not mark these up:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-gray-700">
                <li><strong>County Court Issue Fee:</strong> £35 – £455 (depends on claim value)</li>
                <li><strong>Service of Documents Fee:</strong> £50 – £100</li>
                <li><strong>Enforcement / Bailiff Fees:</strong> £100 – £1,000+ (depends on action taken)</li>
                <li><strong>Witness fees, expert reports, or travel costs</strong> (if applicable)</li>
                <li><strong>High Court / Insolvency fees</strong> (for large or complex cases)</li>
              </ul>

              <p className="mt-4 text-xs sm:text-sm text-gray-700 font-semibold">
                We will always confirm likely disbursements with you before they are incurred.
              </p>
            </div>
          </div>
        </section>

        <div className="mb-8 bg-slate-50 border border-slate-200 p-4 sm:p-6 rounded-lg">
          <h3 className="text-base sm:text-lg font-bold mb-2 text-secondary">Other advertised practice areas</h3>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            We also advertise criminal, family, housing, property, litigation, welfare benefits and police station representation services on the website. Pricing for those matters depends on the facts, urgency and complexity of the case, so we provide a tailored written quote before work starts.
          </p>
        </div>

        {/* Footer Note */}
        <div className="space-y-6 mt-12 mb-8">
          <div className="bg-blue-50 border-l-4 border-primary p-4 sm:p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-2 text-secondary">Service Information & Timescales</h3>
            <div className="space-y-4 text-xs sm:text-sm text-gray-700">
              <div>
                <h4 className="font-bold text-primary">Probate & Estate Administration</h4>
                <p><strong>Key Stages:</strong> Identifying executors/administrators, identifying assets and liabilities, preparing inheritance tax forms, applying for Grant of Representation, collecting assets, paying liabilities, preparing estate accounts, and distributing the estate.</p>
                <p><strong>Timescales:</strong> On average, estates that fall within the simple range are concluded within 4-8 months. Standard estates usually take 6-12 months.</p>
              </div>
              <div>
                <h4 className="font-bold text-primary">Immigration Law</h4>
                <p><strong>Key Stages:</strong> Initial consultation and assessment of eligibility, comprehensive document review, preparation and submission of the application, and ongoing communication with the Home Office until a decision is reached.</p>
                <p><strong>Timescales:</strong> Standard visa applications typically take 8-12 weeks from submission. Complex cases or appeals can take 6-12 months.</p>
              </div>
              <div>
                <h4 className="font-bold text-primary">Employment Law (Tribunals)</h4>
                <p><strong>Key Stages:</strong> Initial assessment and advice, ACAS early conciliation, drafting and filing the claim (ET1) or response (ET3), document disclosure, witness statements, and representation at the hearing.</p>
                <p><strong>Timescales:</strong> Simple claims may take 4-6 months. More complex claims involving longer hearings can take 12 months or more.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border-l-4 border-secondary p-4 sm:p-6 rounded-lg">
             <h3 className="text-lg font-bold mb-2 sm:mb-4 text-secondary">Team Qualifications & Experience</h3>
             <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4">
               All work is supervised by our Principal, <strong>Mr. A. J. Offiah</strong> (MA), who has over 27 years of post-qualification experience as a Solicitor.
             </p>
             
             <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-700">
               <div className="bg-white p-3 rounded border-l-2 border-primary">
                 <p><strong className="text-primary">Probate & Estate Administration:</strong> Handled by <strong>Wilberforce Ehimika</strong> (Solicitor, 18 years PQE) and team, supervised by A. J. Offiah.</p>
               </div>
               
               <div className="bg-white p-3 rounded border-l-2 border-primary">
                 <p><strong className="text-primary">Immigration Law:</strong> Handled by <strong>Nneka Keazor</strong> (Civil Law Specialist) and <strong>Ighodaro Edokolor</strong> (Solicitor/Legal Consultant), supervised by A. J. Offiah.</p>
               </div>
               
               <div className="bg-white p-3 rounded border-l-2 border-primary">
                 <p><strong className="text-primary">Employment Law:</strong> Handled by <strong>Wilberforce Ehimika</strong> (Solicitor, 18 years PQE) and team, supervised by A. J. Offiah.</p>
               </div>
               
               <div className="bg-white p-3 rounded border-l-2 border-primary">
                 <p><strong className="text-primary">Debt Recovery & Commercial Collections:</strong> Handled by <strong>Wilberforce Ehimika</strong> (Solicitor, 18 years PQE), supervised by A. J. Offiah.</p>
               </div>
             </div>
             
             <p className="text-xs sm:text-sm text-gray-700 mt-3 sm:mt-4">
               You can view detailed profiles of our team members, including their full qualifications and experience, on our <a href="/solicitors" className="text-primary hover:underline font-bold">Solicitors & Staff page</a>.
             </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-primary p-4 sm:p-6 rounded-lg">
            <p className="text-xs sm:text-sm text-gray-700">
              <strong>Note:</strong> All fees are subject to change. Please contact us for a personalized quote and to discuss your specific requirements. VAT is charged at the standard rate of 20%.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feeuptodate
