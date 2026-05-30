"use client";
import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="bg-white min-h-screen text-secondary">
      {/* Hero Section */}
      <section className="bg-secondary py-12 md:py-20 text-white">
        <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold border-l-4 border-primary pl-6"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-gray-300 max-w-2xl text-lg pl-6"
          >
            How JDS Solicitors Ltd collects, uses, and protects your personal data.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-20">
        <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-10">

            <div className="bg-blue-50 border-l-4 border-primary p-4 rounded-lg text-sm">
              <p><strong>Data Controller:</strong> JDS Solicitors Ltd, St Luke&apos;s Business Centre, Units 3–4, 85 Tarling Road, London E16 1HN.</p>
              <p className="mt-1"><strong>SRA Number:</strong> 653449 &nbsp;|&nbsp; <strong>Last updated:</strong> May 2026</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">1. Who We Are</h2>
              <p className="leading-relaxed">
                JDS Solicitors Ltd (&ldquo;the firm&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a law firm authorised and regulated by the Solicitors Regulation Authority (SRA No. 653449). We take the privacy of your personal data very seriously and comply with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">2. What Personal Data We Collect</h2>
              <p className="leading-relaxed">We may collect and process the following categories of personal data:</p>
              <ul className="list-disc pl-6 space-y-2 text-sm leading-relaxed">
                <li><strong>Identity data:</strong> Full name, date of birth, nationality.</li>
                <li><strong>Contact data:</strong> Address, email address, telephone number.</li>
                <li><strong>Financial data:</strong> Bank details, payment information (processed securely).</li>
                <li><strong>Matter data:</strong> Information you provide in connection with your legal matter.</li>
                <li><strong>Special category data:</strong> Where required by the nature of your legal matter (e.g., health, criminal records). We only process this with your explicit consent or where legally required.</li>
                <li><strong>Website data:</strong> IP address, browser type, pages visited (via anonymous cookies).</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">3. How We Use Your Data</h2>
              <p className="leading-relaxed">We use your personal data for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 text-sm leading-relaxed">
                <li>To provide legal services and advice under our contract with you.</li>
                <li>To comply with our legal and regulatory obligations (including SRA, HMRC, and anti-money laundering requirements).</li>
                <li>To contact you about your matter and respond to enquiries.</li>
                <li>To process payments for our services.</li>
                <li>For our legitimate interests in running and improving our business.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">4. Legal Basis for Processing</h2>
              <p className="leading-relaxed">Under UK GDPR, we rely on the following lawful bases:</p>
              <ul className="list-disc pl-6 space-y-2 text-sm leading-relaxed">
                <li><strong>Contract:</strong> Processing necessary to carry out our legal services for you.</li>
                <li><strong>Legal obligation:</strong> Where we must comply with law (e.g., AML/KYC checks).</li>
                <li><strong>Legitimate interests:</strong> For internal administrative purposes and improving our services.</li>
                <li><strong>Consent:</strong> Where you have given us specific consent (e.g., marketing communications).</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">5. Sharing Your Data</h2>
              <p className="leading-relaxed">We do not sell your personal data. We may share it with:</p>
              <ul className="list-disc pl-6 space-y-2 text-sm leading-relaxed">
                <li>Courts, tribunals, and other parties as required by your legal matter.</li>
                <li>Barristers, expert witnesses, or other legal professionals involved in your case.</li>
                <li>HMRC, the SRA, or other regulators as legally required.</li>
                <li>Our IT and software service providers who process data on our behalf under strict data processing agreements.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">6. Data Retention</h2>
              <p className="leading-relaxed">
                We retain client files for a minimum of 6 years after a matter closes, in line with SRA guidance and the Limitation Act 1980. Some data (e.g., financial or property records) may be retained longer where required by law. After the retention period, data is securely destroyed.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">7. Cookies</h2>
              <p className="leading-relaxed">
                Our website uses essential cookies (required for the site to function) and, with your consent, analytical cookies to understand how visitors use the site. You can manage your cookie preferences via the consent banner shown on your first visit. For more detail, see our cookie notice.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">8. Your Rights</h2>
              <p className="leading-relaxed">Under UK GDPR, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-sm leading-relaxed">
                <li><strong>Access</strong> — request a copy of the personal data we hold about you.</li>
                <li><strong>Rectification</strong> — ask us to correct inaccurate data.</li>
                <li><strong>Erasure</strong> — ask us to delete your data (subject to legal obligations).</li>
                <li><strong>Restriction</strong> — ask us to limit how we use your data.</li>
                <li><strong>Portability</strong> — receive your data in a structured, machine-readable format.</li>
                <li><strong>Object</strong> — object to processing based on legitimate interests.</li>
              </ul>
              <p className="leading-relaxed mt-2">
                To exercise any of these rights, please contact us at <a href="mailto:admin@jdssolicitors.com" className="text-primary hover:underline">admin@jdssolicitors.com</a> or write to us at our registered office address.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">9. Complaints</h2>
              <p className="leading-relaxed">
                If you believe we have not handled your personal data correctly, you have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO):
              </p>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-sm space-y-1">
                <p><strong>Website:</strong> <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.ico.org.uk</a></p>
                <p><strong>Telephone:</strong> 0303 123 1113</p>
                <p><strong>Address:</strong> Information Commissioner&apos;s Office, Wycliffe House, Water Lane, Wilmslow, SK9 5AF</p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">10. Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about this Privacy Policy or how we handle your data, please contact our responsible officer:
              </p>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-sm space-y-1">
                <p><strong>JDS Solicitors Ltd</strong></p>
                <p>St Luke&apos;s Business Centre, Units 3–4, 85 Tarling Road, London E16 1HN</p>
                <p>Email: <a href="mailto:admin@jdssolicitors.com" className="text-primary hover:underline">admin@jdssolicitors.com</a></p>
                <p>Tel: 0207 366 6409</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
