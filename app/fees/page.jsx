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
            We publish information about our pricing for certain services that we provide to the public and to businesses as a law firm regulated by the SRA. The pricing information relates to advice we provide on immigration law (excluding asylum), employment law, probate & estate administration, and debt recovery & commercial collections.
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

            {/* Lawyer-Specific Hourly Rates by Practice Area */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-secondary mb-2">Hourly Rates by Practice Area & Lawyer</h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-3">
                When a fixed fee is not agreed, hourly rates apply based on the lawyer handling your matter. Below are the specific hourly rates for each practice area:
              </p>
              
              <div className="space-y-2">
                <div className="bg-white p-3 rounded border-l-4 border-primary">
                  <p className="text-xs sm:text-sm"><strong className="text-secondary">Criminal Law:</strong> A.J. Offiah - <strong className="text-primary">£300 per hour</strong></p>
                </div>
                
                <div className="bg-white p-3 rounded border-l-4 border-primary">
                  <p className="text-xs sm:text-sm"><strong className="text-secondary">Immigration Law:</strong> Nneka Keazor - <strong className="text-primary">£300 per hour</strong> | Ighodaro Edokpolor - <strong className="text-primary">£300 per hour</strong></p>
                </div>
                
                <div className="bg-white p-3 rounded border-l-4 border-primary">
                  <p className="text-xs sm:text-sm"><strong className="text-secondary">Employment Law:</strong> Wilberforce Ehimika - <strong className="text-primary">£300 per hour</strong></p>
                </div>
                
                <div className="bg-white p-3 rounded border-l-4 border-primary">
                  <p className="text-xs sm:text-sm"><strong className="text-secondary">Civil Litigation Law:</strong> Wilberforce Ehimika - <strong className="text-primary">£300 per hour</strong></p>
                </div>
              </div>
              
              <div className="mt-3 bg-amber-50 border-l-4 border-amber-500 p-3 rounded">
                <p className="text-xs sm:text-sm text-amber-900">
                  <strong>Note:</strong> All hourly rates exclude VAT (20%). The actual fee charged will depend on the time spent on your matter. We will provide you with a clear estimate before commencing work and keep you informed of costs as the matter progresses.
                </p>
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

          {/* Probate Overview */}
          <div className="mt-6 rounded-xl overflow-hidden shadow-md border border-gray-200">
            {/* Header */}
            <div className="bg-secondary px-5 sm:px-8 py-4 sm:py-5">
              <p className="text-white text-xs sm:text-sm font-medium uppercase tracking-widest mb-1 opacity-70">Our Expertise</p>
              <h3 className="text-white text-lg sm:text-2xl font-bold leading-snug">Probate, Wills &amp; Estate Administration</h3>
            </div>

            {/* Intro */}
            <div className="bg-amber-50 border-b border-amber-100 px-5 sm:px-8 py-4 text-xs sm:text-sm text-gray-700 leading-relaxed space-y-2">
              <p>
                JDS Solicitors has an experienced team of lawyers in delivering high-quality legal services in matters relating to Probate, Wills and Estate Administration.
              </p>
              <p>
                A team member is earmarked for each case ensuring consistency and clear communication. Other members of the team would assist as necessary.
              </p>
            </div>

            {/* How We Can Assist */}
            <div className="bg-white px-5 sm:px-8 py-5 border-b border-gray-100">
              <p className="text-xs sm:text-sm font-semibold text-secondary mb-3 uppercase tracking-wide">How We Can Assist</p>
              <p className="text-xs sm:text-sm text-gray-700 mb-3 leading-relaxed">
                JDS Solicitors understand that dealing with the administration of an estate can be a difficult and emotional process. We can support you by:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  "Obtaining the Grant of Probate on your behalf.",
                  "Collecting and distributing the assets of the estate.",
                  "Advising on the most efficient and appropriate way to administer the estate.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 bg-secondary/5 border border-secondary/15 rounded-lg p-3 text-xs sm:text-sm text-gray-700">
                    <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 10 8" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M1 4l2.5 2.5L9 1"/>
                      </svg>
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Where you are the executor or administrator of an estate, you may wish to seek legal representation. Below is an overview of the services we offer and the likely fees.
              </p>
            </div>

            {/* Grant of Representation */}
            <div className="bg-white px-5 sm:px-8 py-5 border-b border-gray-100">
              <h4 className="text-sm sm:text-base font-bold text-secondary mb-3">Obtaining the Grant of Representation <span className="font-normal text-gray-500 text-xs">(England &amp; Wales Only)</span></h4>
              <p className="text-xs sm:text-sm text-gray-700 mb-3 leading-relaxed">
                This service is for clients who provide us with all necessary financial information, including:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-gray-700 mb-3">
                <li>Date-of-death balances for accounts and investments</li>
                <li>Property valuations</li>
                <li>Details of liabilities</li>
              </ul>
              <p className="text-xs sm:text-sm text-gray-700 mb-2 font-semibold">We will:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-gray-700 mb-3">
                <li>Draft and submit Inheritance Tax forms (as required)</li>
                <li>Submit the probate application</li>
              </ul>
              <p className="text-xs sm:text-sm text-gray-600 italic">
                VAT is a government tax that we are required to charge, and will usually be added at 20% to our fees and disbursements, except where we indicate the disbursements are outside the scope of VAT.
              </p>
            </div>

            {/* Estate Administration */}
            <div className="bg-white px-5 sm:px-8 py-5 border-b border-gray-100">
              <h4 className="text-sm sm:text-base font-bold text-secondary mb-3">Estate Administration</h4>
              <p className="text-xs sm:text-sm text-gray-700 mb-3">Our full estate administration service includes:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
                {[
                  "Reviewing the Will and advising on distribution",
                  "Obtaining valuations of all estate assets and liabilities",
                  "Completing Inheritance Tax forms and assisting with any tax payments",
                  "Drafting the required legal statements",
                  "Liaising with HMRC and the Probate Registry",
                  "Closing or transferring estate assets",
                  "Settling any liabilities",
                  "Preparing detailed estate accounts",
                  "Distributing funds to beneficiaries",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 py-1 border-b border-gray-100 last:border-0">
                    <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 10 8" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M1 4l2.5 2.5L9 1"/>
                      </svg>
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fees & Timeframes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 bg-white border-b border-gray-100">
              {/* Fees */}
              <div className="px-5 sm:px-6 py-5">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <h4 className="text-sm font-bold text-secondary uppercase tracking-wide">Fees</h4>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 mb-2 leading-relaxed">
                  Our fees for full estate administration are typically based on a percentage of the gross value of the estate:
                </p>
                <div className="space-y-1.5 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded px-3 py-2">
                    <span className="font-bold text-secondary">1% – 4%</span>
                    <span className="text-gray-600">of the gross estate value</span>
                    <span className="ml-auto text-gray-500 italic text-xs">Min: £2,500</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded px-3 py-2">
                    <span className="font-bold text-secondary">£200 – £400</span>
                    <span className="text-gray-600">hourly rate (+VAT) where applicable</span>
                  </div>
                </div>
                <p className="mt-3 text-xs text-gray-500 leading-relaxed">
                  Rates reflect complexity: type and number of assets, inheritance tax matters, number of beneficiaries, and any cross-border or trust issues. A detailed cost estimate is provided before work begins.
                </p>
              </div>

              {/* Timeframes */}
              <div className="px-5 sm:px-6 py-5">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-4 h-4 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><path strokeLinecap="round" d="M12 6v6l4 2"/>
                  </svg>
                  <h4 className="text-sm font-bold text-secondary uppercase tracking-wide">Timeframes</h4>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-gray-700">
                  <div className="bg-secondary/5 border border-secondary/15 rounded-lg p-3">
                    <p className="font-semibold text-secondary mb-1">Standard Cases</p>
                    <p>Grant of Probate: typically <strong>3–6 months</strong></p>
                    <p>Full administration: additional <strong>6–12 months</strong></p>
                  </div>
                  <div className="bg-secondary/5 border border-secondary/15 rounded-lg p-3">
                    <p className="font-semibold text-secondary mb-1">Complex Cases</p>
                    <p>May take <strong>18–24 months</strong> to conclude</p>
                  </div>
                  <p className="text-xs text-gray-500 italic">JDS Solicitors will provide an estimated timeline for your circumstances at the outset.</p>
                </div>
              </div>
            </div>

            {/* Disbursements */}
            <div className="bg-amber-50 border-t border-amber-100 px-5 sm:px-8 py-5">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                </svg>
                <h4 className="text-sm font-bold text-secondary uppercase tracking-wide">Disbursements</h4>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 mb-3 leading-relaxed">
                You will also need to pay for disbursements — costs paid to third parties such as the Probate Registry. The likely disbursements are:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="bg-white border border-amber-200 rounded-lg px-4 py-2.5 flex justify-between items-center">
                  <span className="text-gray-700">Probate Registry application fee</span>
                  <span className="font-bold text-secondary ml-3">£300.00</span>
                </div>
                <div className="bg-white border border-amber-200 rounded-lg px-4 py-2.5 flex justify-between items-center">
                  <span className="text-gray-700">Additional copies of Grant of Representation</span>
                  <span className="font-bold text-secondary ml-3">£1.50 / copy</span>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-gray-700 font-semibold">To protect executors from claims, the following may also apply:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2 text-xs sm:text-sm">
                <div className="bg-white border border-amber-200 rounded-lg px-4 py-2.5 flex justify-between items-center">
                  <span className="text-gray-700">Bankruptcy searches (per beneficiary)</span>
                  <span className="font-bold text-secondary ml-3">£6.00</span>
                </div>
                <div className="bg-white border border-amber-200 rounded-lg px-4 py-2.5 flex justify-between items-center">
                  <span className="text-gray-700">Public Notices (London Gazette &amp; Local Newspaper)</span>
                  <span className="font-bold text-secondary ml-3">~£300.00</span>
                </div>
              </div>
            </div>
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

          {/* Immigration Overview */}
          <div className="mt-6 rounded-xl overflow-hidden shadow-md border border-gray-200">
            {/* Header */}
            <div className="bg-secondary px-5 sm:px-8 py-4 sm:py-5">
              <p className="text-white text-xs sm:text-sm font-medium uppercase tracking-widest mb-1 opacity-70">Our Expertise</p>
              <h3 className="text-white text-lg sm:text-2xl font-bold leading-snug">Immigration Legal Services</h3>
            </div>

            {/* Intro */}
            <div className="bg-amber-50 border-b border-amber-100 px-5 sm:px-8 py-4 text-xs sm:text-sm text-gray-700 leading-relaxed space-y-2">
              <p>
                We offer a wide range of Immigration advice and our team of immigration lawyers are able to assist with various immigration matters.
              </p>
              <p>
                Immigration and Asylum Law is vast and ever-changing; much change has been seen within the last few years especially.
              </p>
            </div>

            {/* Services Grid */}
            <div className="bg-white px-5 sm:px-8 py-5 sm:py-6">
              <p className="text-xs sm:text-sm font-semibold text-secondary mb-4 uppercase tracking-wide">Our experienced team advises on:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {[
                  "All Entry clearance applications: Visit, Points Based Applications, Settlement, etc.",
                  "All Point Base applications in-country [Tier 1, Tier 2, Tier 4, and Tier 5]",
                  "Private and Family Life applications [FLR(FP), FLR(M)]",
                  "Discretionary applications [FLR(HRO)]",
                  "EU visa applications for family members and extended family members",
                  "Indefinite Leave to Remain (ILR) and Permanent Residence",
                  "Naturalisation and British Passport applications",
                  "No Time Limit & Transfer of Conditions of Stay",
                  "Appeals and Representation to First-Tier and Upper Tribunal",
                  "Attending Immigration Tribunals for Bails",
                  "Asylum applications and appeals",
                  "Reconsideration and Administrative Review",
                  "Removal or deportation",
                  "Judicial Review Claim at the AIT, High Court",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 py-1 border-b border-gray-100 last:border-0">
                    <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 10 8" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M1 4l2.5 2.5L9 1" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timescales Card */}
            <div className="mx-4 sm:mx-8 mb-4 rounded-lg border border-secondary/20 bg-secondary/5 overflow-hidden">
              <div className="flex items-center gap-2 bg-secondary/10 px-4 py-2 border-b border-secondary/20">
                <svg className="w-4 h-4 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><path strokeLinecap="round" d="M12 6v6l4 2"/>
                </svg>
                <h4 className="text-xs sm:text-sm font-bold text-secondary uppercase tracking-wide">Timescales for Immigration Matters</h4>
              </div>
              <div className="px-4 py-3 space-y-2 text-xs sm:text-sm text-gray-700 leading-relaxed">
                <p>
                  At JDS Solicitors, immigration applications are usually concluded within a <strong>14-day period</strong> from the date we receive all supporting documents and payment in full. Timescales may be longer for complex cases — clients are kept updated at every stage.
                </p>
                <p>
                  We are unable to advise on how long the Home Office will take to decide a matter, as they have their own internal processes. Please check current processing times on their website:
                </p>
                <a
                  href="https://www.gov.uk/guidance/visa-decision-waiting-times-applications-inside-the-uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-primary font-medium hover:underline break-all"
                >
                  gov.uk — Visa Decision Waiting Times ↗
                </a>
                <p>
                  We may be able to make further representations to the Home Office on your behalf if they fail to decide your case within 6 months of biometric enrolment.
                </p>
              </div>
            </div>

            {/* UK Visa Fees Card */}
            <div className="mx-4 sm:mx-8 mb-6 rounded-lg border border-primary/30 bg-amber-50 overflow-hidden">
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 border-b border-primary/20">
                <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <h4 className="text-xs sm:text-sm font-bold text-secondary uppercase tracking-wide">UK Visa Fees</h4>
              </div>
              <div className="px-4 py-3 text-xs sm:text-sm text-gray-700 leading-relaxed space-y-2">
                <p>
                  Information about the cost of any likely disbursements and Immigration and Nationality fees for all applications made from outside and within the UK can be found on the Home Office website:
                </p>
                <a
                  href="https://www.gov.uk/government/publications/visa-regulations-revised-table/home-office-immigration-and-nationality-fees-6-april-2022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-primary font-medium hover:underline break-all"
                >
                  gov.uk — Immigration &amp; Nationality Fees Table ↗
                </a>
              </div>
            </div>
          </div>

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

        {/* Civil Litigation Section */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-primary text-white px-3 sm:px-6 py-3 sm:py-4 rounded-t-lg">
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold">4. Civil Litigation</h2>
          </div>

          <div className="bg-white border-2 border-primary rounded-b-lg p-4 sm:p-6">
            {/* Civil Litigation intro */}
            <div className="mb-6 bg-amber-50 border-l-4 border-primary rounded-lg px-4 py-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
              <p>
                For matters relating to civil litigation our general pricing fees apply, except Debt Recovery where the below fees apply.
              </p>
            </div>

            {/* Debt Recovery Subsection */}
            <div className="border-2 border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-secondary/10 border-b border-gray-200 px-4 sm:px-6 py-3">
                <h3 className="text-base sm:text-lg font-bold text-secondary">Debt Recovery &amp; Commercial Collections</h3>
              </div>

            <div className="p-4 sm:p-6">
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
            </div>{/* end Debt Recovery inner p-4 */}
            </div>{/* end Debt Recovery subsection border box */}
          </div>{/* end Civil Litigation bg-white */}
        </section>

        {/* Criminal Law Section */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-secondary text-white px-3 sm:px-6 py-3 sm:py-4 rounded-t-lg">
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold">5. Criminal Law</h2>
          </div>

          <div className="rounded-b-xl overflow-hidden border-2 border-secondary/20 shadow-sm">

            {/* Funding intro */}
            <div className="bg-amber-50 border-b border-amber-100 px-5 sm:px-8 py-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
              <p>
                Funding for criminal matters is either <strong>private</strong> or <strong>legally aided</strong>, depending on individual circumstances. Where privately funded, our general fees apply. Where legally aided, the rules of legal aid will apply.
              </p>
            </div>

            {/* Legal Aid Card */}
            <div className="bg-white px-5 sm:px-8 py-6 space-y-5">
              <div className="rounded-xl overflow-hidden border border-secondary/20 shadow-sm">
                {/* Card Header */}
                <div className="flex items-center gap-3 bg-secondary px-5 py-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>
                  </svg>
                  <h3 className="text-white text-sm sm:text-base font-bold uppercase tracking-wide">Legal Aid</h3>
                </div>

                {/* Card Body */}
                <div className="px-5 py-4 space-y-3 text-xs sm:text-sm text-gray-700 leading-relaxed bg-white">
                  <p>
                    Where you are on a very low income, legal aid may be available for your case. This means you do not have to pay for your legal costs — <strong>the government pays</strong>. JDS Solicitors holds a contract awarded by the government to provide legal aid in criminal law.
                  </p>
                  <p>
                    While legal aid is available, it is subject to both a <strong>merits test</strong> and a <strong>means test</strong> before you qualify.
                  </p>

                  {/* Two-column test cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    <div className="rounded-lg border border-secondary/20 bg-secondary/5 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 10 8" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M1 4l2.5 2.5L9 1"/>
                          </svg>
                        </span>
                        <h4 className="font-bold text-secondary text-xs uppercase tracking-wide">Merits Test</h4>
                      </div>
                      <p className="text-xs text-gray-600">
                        We will need to know about your case and whether it has a reasonable prospect of succeeding.
                      </p>
                    </div>
                    <div className="rounded-lg border border-primary/30 bg-amber-50 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 10 8" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M1 4l2.5 2.5L9 1"/>
                          </svg>
                        </span>
                        <h4 className="font-bold text-secondary text-xs uppercase tracking-wide">Means Test</h4>
                      </div>
                      <p className="text-xs text-gray-600">
                        We will need to know about your income, savings, and any other source of financial support. Evidence will be required.
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-blue-50 border border-blue-200 rounded-lg p-4 mt-2">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <div className="text-xs sm:text-sm text-gray-700">
                      <p className="font-semibold text-blue-800 mb-0.5">Check if you qualify for Legal Aid</p>
                      <p>To find out if your matter qualifies and whether you meet the tests, visit:</p>
                      <a
                        href="https://www.gov.uk/check-legal-aid"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-1 text-primary font-semibold hover:underline"
                      >
                        gov.uk — Check if you can get legal aid ↗
                      </a>
                    </div>
                  </div>
                </div>
              </div>
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
