"use client";
import React from 'react'

const Feeuptodate = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl lg:text-4xl font-bold text-center mb-8 text-secondary">
          Updated Fee Schedule 2026
        </h1>

        {/* Probate & Estate Administration Section */}
        <section className="mb-12">
          <div className="bg-primary text-white px-6 py-4 rounded-t-lg">
            <h2 className="text-2xl lg:text-3xl font-bold">1. Probate & Estate Administration</h2>
          </div>
          <div className="overflow-x-auto shadow-lg border-2 border-primary rounded-b-lg">
            <table className="w-full bg-white">
              <thead className="bg-gray-100 border-b-2 border-gray-300">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-bold text-gray-700">Service Type</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-gray-700">Details / Thresholds</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-gray-700">Fixed Fee (Excl. VAT)</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-gray-700">Total Cost (Incl. VAT)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold">Simple Probate</td>
                  <td className="px-4 py-3 text-sm">Estate &lt; £100,000; Valid Will; Adult beneficiaries; No property complications</td>
                  <td className="px-4 py-3 font-bold text-primary">£1,800 – £2,500</td>
                  <td className="px-4 py-3 font-bold">£2,160 – £3,000</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold">Standard Probate (Option A)</td>
                  <td className="px-4 py-3 text-sm">Estate £100,000 – £500,000; Includes property; Up to 4 beneficiaries</td>
                  <td className="px-4 py-3 font-bold text-primary">£2,800 – £4,200</td>
                  <td className="px-4 py-3 font-bold">£3,360 – £5,040</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold">Standard Probate (Option B)</td>
                  <td className="px-4 py-3 text-sm">Percentage based on estate value and beneficiary count</td>
                  <td className="px-4 py-3 font-bold text-primary">2.0% – 3.5% (Min. £2,000 + VAT)</td>
                  <td className="px-4 py-3 font-bold italic">Varies by value</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold">Complex Probate</td>
                  <td className="px-4 py-3 text-sm">Estate &gt; £500,000; Overseas assets; Trusts; IHT planning; Disputes</td>
                  <td className="px-4 py-3 font-bold text-primary">£4,500 – £7,500 (or 3.0% – 4.5%)</td>
                  <td className="px-4 py-3 font-bold italic">Bespoke Quote</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Additional Probate Disbursements */}
          <div className="mt-6 bg-gray-50 p-6 rounded-lg border border-gray-300">
            <h3 className="text-lg font-bold mb-3 text-secondary">Additional Probate Disbursements:</h3>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li><strong>Probate Court Fee:</strong> £273 (if estate &gt; £5,000)</li>
              <li><strong>Property Valuations:</strong> £150 – £300</li>
              <li><strong>Statutory Advertisements:</strong> £80 – £150</li>
              <li><strong>Certified Copies:</strong> £10 – £20 each</li>
            </ul>
          </div>
        </section>

        {/* Immigration Law Section */}
        <section className="mb-12">
          <div className="bg-primary text-white px-6 py-4 rounded-t-lg">
            <h2 className="text-2xl lg:text-3xl font-bold">2. Immigration Law</h2>
          </div>
          <div className="overflow-x-auto shadow-lg border-2 border-primary rounded-b-lg">
            <table className="w-full bg-white">
              <thead className="bg-gray-100 border-b-2 border-gray-300">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-bold text-gray-700">Service Category</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-gray-700">Specific Visa / Service</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-gray-700">Fixed Fee (Excl. VAT)</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-gray-700">Total Cost (Incl. VAT)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold">Visitor Visas</td>
                  <td className="px-4 py-3 text-sm">Standard / Family / Business Visit</td>
                  <td className="px-4 py-3 font-bold text-primary">£650</td>
                  <td className="px-4 py-3 font-bold">£780</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold">Family Visas</td>
                  <td className="px-4 py-3 text-sm">Spouse / Partner (Entry or Extension)</td>
                  <td className="px-4 py-3 font-bold text-primary">£950</td>
                  <td className="px-4 py-3 font-bold">£1,140</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold">Settlement</td>
                  <td className="px-4 py-3 text-sm">Indefinite Leave to Remain (ILR)</td>
                  <td className="px-4 py-3 font-bold text-primary">£1,100</td>
                  <td className="px-4 py-3 font-bold">£1,320</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold">Nationality</td>
                  <td className="px-4 py-3 text-sm">British Citizenship / Naturalisation</td>
                  <td className="px-4 py-3 font-bold text-primary">£1,250</td>
                  <td className="px-4 py-3 font-bold">£1,500</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold">Student Visas</td>
                  <td className="px-4 py-3 text-sm">New Application / Extension</td>
                  <td className="px-4 py-3 font-bold text-primary">£750</td>
                  <td className="px-4 py-3 font-bold">£900</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold">Business Visas</td>
                  <td className="px-4 py-3 text-sm">Sponsor Licence Application</td>
                  <td className="px-4 py-3 font-bold text-primary">£1,400</td>
                  <td className="px-4 py-3 font-bold">£1,680</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold">Work Visas</td>
                  <td className="px-4 py-3 text-sm">Skilled Worker Visa</td>
                  <td className="px-4 py-3 font-bold text-primary">£1,200</td>
                  <td className="px-4 py-3 font-bold">£1,440</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold">Work Visas</td>
                  <td className="px-4 py-3 text-sm">Health &amp; Care Worker Visa</td>
                  <td className="px-4 py-3 font-bold text-primary">£850</td>
                  <td className="px-4 py-3 font-bold">£1,020</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold">Appeals</td>
                  <td className="px-4 py-3 text-sm">Administrative Review</td>
                  <td className="px-4 py-3 font-bold text-primary">£800</td>
                  <td className="px-4 py-3 font-bold">£960</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold">Appeals</td>
                  <td className="px-4 py-3 text-sm">First-tier Tribunal Appeal</td>
                  <td className="px-4 py-3 font-bold text-primary">£1,800 – £2,500</td>
                  <td className="px-4 py-3 font-bold italic">Varies</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Employment Law Section */}
        <section className="mb-12">
          <div className="bg-primary text-white px-6 py-4 rounded-t-lg">
            <h2 className="text-2xl lg:text-3xl font-bold">3. Employment Law</h2>
          </div>
          <div className="overflow-x-auto shadow-lg border-2 border-primary rounded-b-lg">
            <table className="w-full bg-white">
              <thead className="bg-gray-100 border-b-2 border-gray-300">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-bold text-gray-700">Category</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-gray-700">Service Type</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-gray-700">Fixed Fee (Excl. VAT)</th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-gray-700">Total Cost (Incl. VAT)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold">Contracts</td>
                  <td className="px-4 py-3 text-sm">Standard Employment Contract</td>
                  <td className="px-4 py-3 font-bold text-primary">£350</td>
                  <td className="px-4 py-3 font-bold">£420</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold">Contracts</td>
                  <td className="px-4 py-3 text-sm">Executive / Senior Role Contract</td>
                  <td className="px-4 py-3 font-bold text-primary">£650</td>
                  <td className="px-4 py-3 font-bold">£780</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold">Contracts</td>
                  <td className="px-4 py-3 text-sm">Contract Review (for Employees)</td>
                  <td className="px-4 py-3 font-bold text-primary">£280</td>
                  <td className="px-4 py-3 font-bold">£336</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold">Documentation</td>
                  <td className="px-4 py-3 text-sm">Staff Handbook / Policies</td>
                  <td className="px-4 py-3 font-bold text-primary">£500</td>
                  <td className="px-4 py-3 font-bold">£600</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold">Settlement</td>
                  <td className="px-4 py-3 text-sm">Employee Representation</td>
                  <td className="px-4 py-3 font-bold text-primary">£750 – £1,200</td>
                  <td className="px-4 py-3 font-bold">£900 – £1,440</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold">Settlement</td>
                  <td className="px-4 py-3 text-sm">Employer Drafting &amp; Negotiation</td>
                  <td className="px-4 py-3 font-bold text-primary">£850</td>
                  <td className="px-4 py-3 font-bold">£1,020</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold">Disputes</td>
                  <td className="px-4 py-3 text-sm">Initial Advice &amp; Assessment</td>
                  <td className="px-4 py-3 font-bold text-primary">£250</td>
                  <td className="px-4 py-3 font-bold">£300</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold">Disputes</td>
                  <td className="px-4 py-3 text-sm">Representation at Hearing (per day)</td>
                  <td className="px-4 py-3 font-bold text-primary">£600</td>
                  <td className="px-4 py-3 font-bold">£720</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold">Disputes</td>
                  <td className="px-4 py-3 text-sm">Tribunal Claim Preparation</td>
                  <td className="px-4 py-3 font-bold text-primary">£1,200 – £1,800</td>
                  <td className="px-4 py-3 font-bold italic">Varies</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold">Negotiation</td>
                  <td className="px-4 py-3 text-sm">Settlement Negotiation (Fixed Fee)</td>
                  <td className="px-4 py-3 font-bold text-primary">£950</td>
                  <td className="px-4 py-3 font-bold">£1,140</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Footer Note */}
        <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>Note:</strong> All fees are subject to change. Please contact us for a personalized quote and to discuss your specific requirements. VAT is charged at the standard rate of 20%.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Feeuptodate
