"use client";
import React from 'react'

const Feeuptodate = () => {
  return (
    <div className="w-full px-2 sm:px-4 lg:px-8 py-4 sm:py-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 text-secondary px-2">
          Updated Fee Schedule 2026
        </h1>

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
        </section>

        {/* Footer Note */}
        <div className="bg-blue-50 border-l-4 border-primary p-4 sm:p-6 rounded-lg">
          <p className="text-xs sm:text-sm text-gray-700">
            <strong>Note:</strong> All fees are subject to change. Please contact us for a personalized quote and to discuss your specific requirements. VAT is charged at the standard rate of 20%.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Feeuptodate
